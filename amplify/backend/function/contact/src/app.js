/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/



const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;
var express = require('express')
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

// declare a new express app
var app = express()
app.use(express.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});




/****************************
* Example post method *
****************************/

app.post('/contact', function(req, res) {
  const { name, email, subject, phone, message, token } = req.body
  const secret_key = process.env.SECRET_KEY
  fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${token}`, {
      method: 'post'
  })
  .then(response => response.json())
  .then(g_response => {
      if (g_response.success) {
          const oauth2Client = new OAuth2(
              process.env.CLIENT_ID,
              process.env.CLIENT_SECRET,
              process.env.REDIRECT_URL
          );

          oauth2Client.setCredentials({
              refresh_token: process.env.REFRESH_TOKEN
          });

          const accessToken = oauth2Client.getAccessToken()

          const smtptransport = nodemailer.createTransport({
              service: 'gmail',
              auth: {
                  type: 'OAuth2',
                  user: process.env.USER_EMAIL1,
                  clientId: process.env.CLIENT_ID,
                  clientSecret: process.env.CLIENT_SECRET,
                  refreshToken: process.env.REFRESH_TOKEN,
                  accessToken: accessToken
              }
          });

          // tls: {
          //     rejectUnauthorized: false
          // }

          
          const  mailOptions = {
              from: `${name} <${email}>`,
              to: process.env.USER_EMAIL1,
              subject: subject,
              text: `Phone: ${phone}, \nMessage Body: ${message}, \nEmail: ${email} `
          };

          smtptransport.sendMail(mailOptions, (error, response) => {
              error ? console.log(error) : res.status(200).json(response) && console.log(response);
              smtptransport.close();
          })
          
      } else {
          res.status(400).json('You are not human');
      }
  })
  .catch(err => res.json({err}))
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});


app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
