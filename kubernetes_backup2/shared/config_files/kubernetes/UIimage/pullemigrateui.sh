#!/bin/bash

source data.properties
secret=emigrate
service=emigrateui
port=80
IMAGE_NAME=${DC_NEXUS_PULL_URL}/${service}:latest
limits=1024m
requests=1024m

docker build -t ${service} .
docker tag ${service}:latest ${IMAGE_NAME}
docker push ${IMAGE_NAME}
kubectl delete deploy ${service}
kubectl delete svc ${service}-service

cat <<EOF | kubectl apply -f -

apiVersion: apps/v1
kind: Deployment
metadata:
  name:  ${service}
  labels:
    app: emigrateui
spec:
  replicas: 2  # Set the number of desired replicas
  selector:
    matchLabels:
      app: emigrateui
  template:
    metadata:
      labels:
        app: emigrateui
    spec:
      containers:
      - name:  ${service}
        image: ${IMAGE_NAME}
        ports:
        - containerPort: ${port}  # Set the container port
        resources:
          limits:
            cpu: ${limits}
          requests:
            cpu: ${requests}
      imagePullSecrets:
      - name: ${secret}
---

apiVersion: v1
kind: Service
metadata:
  name: ${service}-service
  labels:
    app: emigrateui
spec:
  type: LoadBalancer
  externalIPs:
  - 192.168.150.16
  selector:
    app: emigrateui
  ports:
    - protocol: TCP
      port: ${port}      # Port on the service
      targetPort: ${port}  # Port on the pod
      nodePort: 30002  # NodePort value, choose a value within the range (30000-32767)
EOF
docker rmi -f emigrateui

#kubectl delete hpa emigrateui
#kubectl  autoscale deployment emigrateui --cpu-percent=20 --min=2 --max=7
 
