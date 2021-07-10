const aws = require('aws-sdk');
const ses = new aws.ses();

exports.handler = async (event) => {
  for (const streamedItem of event.Records) {
    if(streamedItem.eventName === 'INSERT') {
      const candidateName = streamedItem.dynamodb.NewImage.name.S
      const candidateEmail = streamedItem.dynamodb.NewImage.email.S
      const candidateSubject = streamedItem.dynamodb.NewImage.subject.S
      const candidatePhone = streamedItem.dynamodb.NewImage.phone.S
      const candidateMessage = streamedItem.dynamodb.NewImage.message.S
    
      await ses
          .sendEmail({
            destination: {
              ToAddresses: [process.env.SES_EMAIL],
            },
            Source: process.env.SES_EMAIL,
            Message: {
              Subject: { Data: candidateSubject },
              Body: {
                Text: { Data: `My name is ${candidateName}.\n
                My message is ${candidateMessage}. \n
                You can reach me at ${candidatePhone} and my email is ${candidateEmail}.`}
              },
            },
          })
          .promise()
    }
  }
  return { status: 'done' }
};
