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
  replicas: 1  # Set the number of desired replicas
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
        volumeMounts:
        - name: data-volume
          mountPath: "/emc"  # Mount the local directory to /emc in the container
      volumes:
      - name: data-volume
        hostPath:
          path: "/emigrate"	  
        ports:
        - containerPort: ${port}  # Set the container port
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
kubectl  autoscale deployment ${service}  --cpu-percent=50 --min=2 --max=10

#fi
