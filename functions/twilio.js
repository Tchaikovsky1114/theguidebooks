const twilio = require('twilio');

const accountSid = 'AC97559e1861345ce5d66d62650a3fc5b9';
const authToken = '1800e98dd644bee296d7225c84ff51fc';

const testSid = 'SK70cf133d3493679b5b3b24f77786bee9';
const testsecret = 'XO3MGN9EkofTNTEbcsEqfo8XcHMe8rUs'
const testAuthToken = '0cd48ad3f41261157c7237fcbf81074c'

module.exports = new twilio.Twilio(accountSid,authToken); 