import AWS from 'aws-sdk';


const dynamodb = 
  new AWS.DynamoDB(
    {
      apiVersion: '2012-08-10',
      endpoint: `https://dynamodb.${process.env.REPLICATE_REGION}.amazonaws.com`,
      region: process.env.REPLICATE_REGION
    });

import λ from 'apex.js'

export default λ(async (event, ctx) => {

  return await Promise.all(event.Records.map(rec => {

    if (rec.eventName === 'INSERT' || rec.eventName === 'MODIFY') {
      return dynamodb.putItem({
        'TableName': process.env.REPLICATE_TABLE,
        'Item' : rec.dynamodb.NewImage
      }).promise();
    }

    if (rec.eventName === 'REMOVE') {
      return dynamodb.deleteItem({
        'TableName': process.env.REPLICATE_TABLE,
        'Key' : rec.dynamodb.Keys
      }).promise();
    }
  }));
})