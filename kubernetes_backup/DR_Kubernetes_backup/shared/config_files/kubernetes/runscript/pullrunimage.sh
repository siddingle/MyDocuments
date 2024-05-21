#!/bin/bash

source data.properties

service="$1"
port="$2"
buildn="$3"


IMAGE_NAME=${DC_NEXUS_PULL_URL}/${service}:${buildn}
kubectl delete deploy ${service}
#docker login ${DC_NEXUS_URL} -u ${USER} -p ${PASSWORD} 

cat <<EOF | kubectl apply -f -

apiVersion: apps/v1
kind: Deployment
metadata:
  name:  ${service}
  labels:
    app: ${service}
spec:
  replicas: 1 # Set the number of desired replicas
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
        - name: data-volume
          mountPath: "${mountpath}"
        - name: data-volumeb
          mountPath: "${mountpath1}"
        resources:
          limits:
            cpu: 1000m
            memory: 1G
          requests:
            cpu: 500m
            memory: 500Mi
      volumes:
      - name: data-volume
        hostPath:
          path: "${hostpath}"
      - name: data-volumeb
        hostPath:
          path: "${hostpath1}"
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
  type: ClusterIP
  externalIPs:
  - 172.30.50.15
  selector:
    app: ${service}
  ports:
    - protocol: TCP
      port: ${port}      # Port on the service
      targetPort: ${port}  # Port on the pod

EOF
#kubectl delete hpa ${service}
#kubectl  autoscale deployment ${service}  --cpu-percent=40 --min=1 --max=2

#fi
