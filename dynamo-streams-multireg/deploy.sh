#!/usr/bin/env bash
rm ./masterStack-pkg.yaml

./node_modules/.bin/webpack --config ./webpack.config.babel.js --bail

aws cloudformation package \
   --template-file ./masterStack.yaml \
   --output-template-file masterStack-pkg.yaml \
   --s3-bucket articles-cf

aws cloudformation deploy \
  --template-file ./masterStack-pkg.yaml \
  --stack-name articles-dynamo-streams-multireg \
  --capabilities CAPABILITY_NAMED_IAM \
  --region=us-east-1
