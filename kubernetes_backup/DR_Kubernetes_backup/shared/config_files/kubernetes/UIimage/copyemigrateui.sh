# /bin/bash

fileName=e-migrate-withoutCaptcha-UATK8SPROD.zip
mv $fileName backup/
rm -rf e-migrate
curl http://192.168.150.8:8080/job/Emigrate-UI-specific-branch/50/artifact/$fileName --output $fileName
unzip $fileName

cp -R assets/pdfs/* e-migrate/assets/pdfs/

zip -r $fileName e-migrate

