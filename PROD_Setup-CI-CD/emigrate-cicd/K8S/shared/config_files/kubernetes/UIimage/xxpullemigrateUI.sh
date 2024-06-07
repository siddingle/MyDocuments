#!/bin/bash

source data.properties


commands="
cd /workspace/config_files/kubernetes/UIimage/
  docker rmi -f localhost:5000/emigrate-ui:latest
#docker login ${DC_NEXUS_URL} -u ${USER} -p ${PASSWORD}

docker build -t emigrate-ui .
#sleep 10
docker tag  emigrate-ui:latest  localhost:5000/emigrate-ui:latest
docker push localhost:5000/emigrate-ui:latest
docker rmi -f  emigrate-ui:latest

"
echo "Running Script on NODE1"
#ssh -t ${WORKERNODE1} "$commands"

echo "Running Script on NODE2"
#ssh -t ${WORKERNODE2}  "$commands"

kubectl delete deploy emigrate-ui
while read -r command; do
  eval "$command"
done <<< "$commands"




cat <<EOF | kubectl apply -f -
apiVersion: apps/v1
kind: Deployment
metadata:
  name: emigrate-ui
  labels:
    app: emigrate-ui
spec:
  replicas: 1
  selector:
    matchLabels:
      app: emigrate-ui
  template:
    metadata:
      labels:
        app: emigrate-ui
    spec:
      containers:
      - name: emigrate-ui
        image: localhost:5000/emigrate-ui:latest
        imagePullPolicy: IfNotPresent
        ports:
        - containerPort: 18080
 

EOF
