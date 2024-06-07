#!/bin/bash

IMAGE_NAME="$1"
buildn="$2"
PORT="$3"

IMAGE="$IMAGE_NAME"

docker login http://192.168.150.8:9081/nexus/repository/emigrate-docker-hosted-repo/ -u admin -p Emigrate#007

docker pull ${IMAGE_NAME}

docker tag ${IMAGE_NAME} 192.168.150.8:9081/nexus/${service}:latest


remove_special_characters() {
    # Use sed to remove specific special characters
    echo "$IMAGE" | sed 's/[^/0-9._-]//g'
}

COPYIMAGE="$IMAGE"



cat <<EOF | kubectl apply -f -
apiVersion: apps/v1
kind: Deployment
metadata:
  name: ${COPYIMAGE}
  labels:
    app: ${COPYIMAGE}
spec:
  replicas: 1
  selector:
    matchLabels:
      app: ${COPYIMAGE}
  template:
    metadata:
      labels:
        app: ${COPYIMAGE}
    spec:
      containers:
      - name: ${COPYIMAGE}
        image: ${IMAGE_NAME}
        imagePullPolicy: IfNotPresent
        ports:
        - containerPort: ${PORT}
EOF
