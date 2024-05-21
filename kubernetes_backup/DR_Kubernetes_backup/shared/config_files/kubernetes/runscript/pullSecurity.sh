#!/bin/bash

service=securityservice
port=8087
buildn="$1"

if [ $buildn -gt 0 ]
then
   echo "Copy $Module $FileName $buildn"
   ./pullrunimage.sh $service $port $buildn

fi

