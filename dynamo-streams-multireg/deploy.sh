#!/usr/bin/env bash
rm ./masterStack-pkg.yaml
#rm ./reserveStack-pkg.yaml

aws cloudformation package \
   --template-file ./masterStack.yaml \
   --output-template-file masterStack-pkg.yaml \
   --s3-bucket articles-cf

# aws cloudformation package \
#    --template-file ./reserveStack.yaml \
#    --output-template-file reserveStack-pkg.yaml \
#    --s3-bucket articles-cf

aws cloudformation deploy \
  --template-file ./masterStack-pkg.yaml \
  --stack-name articles-dynamo-streams-multireg \
  --capabilities CAPABILITY_NAMED_IAM \
  --region=us-east-1
