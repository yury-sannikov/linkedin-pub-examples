#!/usr/bin/env bash
rm ./playbook-pkg.yaml

aws cloudformation package \
   --template-file ./playbook.yaml \
   --output-template-file playbook-pkg.yaml \
   --s3-bucket s3://articles-cf