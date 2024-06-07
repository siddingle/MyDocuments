#!/bin/bash

service=administrationservice
port=8081
buildn="$1"

if [ $buildn -gt 0 ]
then
   echo "Copy $Module $FileName $buildn"
   ./pullrunimage.sh $service $port $buildn
  #  ./pullrunimagemountpath.sh $service $port $buildn
fi
