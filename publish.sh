#!/bin/bash

PUBLISH="npm pub parsegraph-checkglerror-dev.tgz --tag=dev"
$PUBLISH && exit
for try in `seq 1 3`; do
    sleep $try
    git checkout package.json
    $PUBLISH && exit
done
exit 1
