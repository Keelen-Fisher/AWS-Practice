'use strict';

const AWS = require('aws-sdk');

// Some Configuration necessary
// Credentials could be added - CAUTION dev could find your credentials do not push env with credentials to github.
// AWS.config.update({})
AWS.config.update({region: 'us-west-1'});

const sns = new AWS.SNS();

const topic = 'arn:aws:sns:us-west-1:324528892959:class19Demo';
const message = process.argv[2];

// opinionated AWS requires case sensitive keys
const payload = {
  Message: message,
  TopicArn: topic,
}

// sns.publish(payload, (err, data) => {
//   if(err){
//     console.error(err);
//   }
//   console.log(data);
// })

sns.publish().promise()
  .then(data => console.log(data))
  .catch(err => console.log(err));
