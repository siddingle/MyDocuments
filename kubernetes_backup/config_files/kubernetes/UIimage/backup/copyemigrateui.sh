# /bin/bash

fileName=e-migrate-withoutCaptcha-DOCKER-KUBE.zip

cp $fileName backup/
rm -rf e-migrate
curl http://192.168.150.8:8080/job/Emigrate-UI-specific-branch/lastSuccessfulBuild/artifact/$fileName --output $fileName
unzip $fileName

cp assets/pdfs/* e-migrate/assets/pdfs/

zip -r $fileName e-migrate

