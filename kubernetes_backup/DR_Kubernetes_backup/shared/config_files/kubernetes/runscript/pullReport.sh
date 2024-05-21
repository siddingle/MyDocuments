#!/bin/bash

service=reportservice
port=8085
buildn="$1"

if [ $buildn -gt 0 ]
then
   echo "Copy $Module $FileName $buildn"
   ./pullrunimage.sh $service $port $buildn

fi

