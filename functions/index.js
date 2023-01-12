const admin = require('firebase-admin');
const functions = require("firebase-functions");
const regionalFunctions = functions.region('asia-northeast3');
const createUser = require('./create_user');
const serviceAccount = require('./theguidebooks-firebase-adminsdk-h4rr4-02a9d47749.json');
const requestOneTimePassword = require('./request_one_time_password');
const sendgrid = require('./sendgrid');
const verifyOneTimePassword = require('./verify_one_time_password');


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
  // db url 기입 230112
});

exports.createUser = regionalFunctions.https.onRequest(createUser);
exports.requestOneTimePassword = regionalFunctions.https.onRequest(requestOneTimePassword);
exports.sendVerifyingCode = regionalFunctions.https.onRequest(sendgrid);
exports.verifyOneTimePassword = regionalFunctions.https.onRequest(verifyOneTimePassword);