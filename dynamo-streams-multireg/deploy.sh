#!/usr/bin/env bash
rm ./playbook-pkg.yaml

aws cloudformation package \
   --template-file ./playbook.yaml \
   --output-template-file playbook-pkg.yaml \
   --s3-bucket articles-cf

aws cloudformation deploy \
  --template-file ./playbook-pkg.yaml \
  --stack-name articles-dynamo-streams-multireg \
  --capabilities CAPABILITY_NAMED_IAM \
  --parameter-overrides EnvType=secondary \
  --region=us-west-2