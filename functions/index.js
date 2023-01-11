const admin = require('firebase-admin');
const functions = require("firebase-functions");
const createUser = require('./create_user');
const regionalFunctions = functions.region('asia-northeast3');
const serviceAccount = require('./theguidebooks-firebase-adminsdk-h4rr4-02a9d47749.json');
const requestOneTimePassword = require('./request_one_time_password');


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

exports.createUser = regionalFunctions.https.onRequest(createUser);
exports.requestOneTimePassword = regionalFunctions.https.onRequest(requestOneTimePassword);