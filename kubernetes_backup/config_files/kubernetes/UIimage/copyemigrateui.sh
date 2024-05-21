# /bin/bash
buildn="$1"
fileName=e-migrate-withoutCaptcha-DOCKER-KUBE.zip
mv $fileName backup/
rm -rf e-migrate
curl http://192.168.150.8:8080/job/Emigrate-UI-specific-branch/${buildn}/artifact/$fileName --output $fileName
unzip $fileName

cp -R assets/pdfs/ e-migrate/assets/

zip -r $fileName e-migrate

