#!/bin/bash

source data.properties

service="$1"
port="$2"
buildn="$3"


IMAGE_NAME=${DC_NEXUS_PULL_URL}/${service}:${buildn}
kubectl delete deploy ${service}
docker login ${DC_NEXUS_URL} -u ${USER} -p ${PASSWORD} 

cat <<EOF | kubectl apply -f -

apiVersion: apps/v1
kind: Deployment
metadata:
  name:  ${service}
  labels:
    app: ${service}
spec:
  replicas: 6  # Set the number of desired replicas
  selector:
    matchLabels:
      app: ${service}
  template:
    metadata:
      labels:
        app: ${service}
    spec:
      containers:
      - name:  ${service}
        image: ${IMAGE_NAME}
        ports:
        - containerPort: ${port}  # Set the container port
        volumeMounts:
            - name: static-nfs-volume
              mountPath: "/logs"
      volumes:
        - name: static-nfs-volume
          persistentVolumeClaim:
            claimName: task-pv-claim
        resources:
          limits:
            cpu: ${limits}
          requests:
            cpu: ${requests}
      imagePullSecrets:
      - name: ${secret}
EOF


#if [ ${service} = gatewayservice ]; then
kubectl delete svc ${service}-service
cat <<EOF | kubectl apply -f -

apiVersion: v1
kind: Service
metadata:
  name: ${service}-service
  labels:
    app: ${service}
spec:
  type: LoadBalancer
  externalIPs:
  - 192.168.150.16
  selector:
    app: ${service}
  ports:
    - protocol: TCP
      port: ${port}      # Port on the service
      targetPort: ${port}  # Port on the pod

EOF
kubectl delete hpa ${service}
kubectl  autoscale deployment ${service}  --cpu-percent=20 --min=6 --max=10

#fi
