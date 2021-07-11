const aws = require('aws-sdk')
const ses = new aws.SES()

exports.handler = async (event) => {
  for (const streamedItem of event.Records) {
    if (streamedItem.eventName === 'INSERT') {
      //pull off items from stream
      const candidateName = streamedItem.dynamodb.NewImage.name.S;
      const candidateEmail = streamedItem.dynamodb.NewImage.email.S;
      const candidatePhone = streamedItem.dynamodb.NewImage.phone.S;
      const candidateSubject = streamedItem.dynamodb.NewImage.subject.S;
      const candidateMessage = streamedItem.dynamodb.NewImage.message.S;

      await ses
          .sendEmail({
            Destination: {
              ToAddresses: [process.env.SES_EMAIL],
            },
            Source: process.env.SES_EMAIL,
            Message: {
              Subject: { Data: candidateSubject },
              Body: {
                Text: { Data: `My name is ${candidateName}. \n
                My phone number is ${candidatePhone} \n
                ${candidateMessage} \n
                You can reach me at ${candidateEmail}` },
              },
            },
          })
          .promise();
    }
  }
  return { status: 'done' }
}