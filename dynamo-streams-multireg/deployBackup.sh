#!/usr/bin/env bash
rm ./backupStack-pkg.yaml

aws cloudformation package \
   --template-file ./backupStack.yaml \
   --output-template-file backupStack-pkg.yaml \
   --s3-bucket articles-cf

aws cloudformation deploy \
  --template-file ./backupStack-pkg.yaml \
  --stack-name articles-dynamo-streams-multireg \
  --capabilities CAPABILITY_NAMED_IAM \
  --region=us-west-2
