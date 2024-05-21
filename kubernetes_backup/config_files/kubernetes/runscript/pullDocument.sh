#!/bin/bash

service=documentserverservice
port=8093
buildn="$1"

if [ $buildn -gt 0 ]
then
   echo "Copy $Module $FileName $buildn"
   ./pullrunimage.sh $service $port $buildn

fi
