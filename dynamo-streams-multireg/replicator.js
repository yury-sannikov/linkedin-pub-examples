//AWS.config.update({endpoint: "https://dynamodb.aws-region.amazonaws.com"});
exports.handler = function(event, context, callback) {  
  var envString = JSON.stringify(process.env);       
  callback(null, envString);     
}
