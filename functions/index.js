const functions = require("firebase-functions");

const regionalFunctions = functions.region('asia-northeast3');
// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
exports.helloWorld = regionalFunctions.https.onRequest((request, response) => {
  regionalFunctions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});
