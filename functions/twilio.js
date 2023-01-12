const functions = require('firebase-functions');
const twilio = require('twilio');

module.exports = new twilio.Twilio(functions.config().twilio.sid,functions.config().twilio.token);
