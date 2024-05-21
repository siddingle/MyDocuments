# /bin/bash


docker build -t kubernetes_docs .
docker tag kubernetes_docs:latest nexus.mea-emigrate.com:9890/nexus/kubernetes_docs:latest
docker push nexus.mea-emigrate.com:9890/nexus/kubernetes_docs:latest
docker rmi -f kubernetes_docs:latest
