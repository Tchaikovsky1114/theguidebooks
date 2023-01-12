const twilio = require('./twilio');
const admin = require('firebase-admin');


module.exports = function (req,res) {
  if(!req.body.phone) {
    return res.status(422).send({ error: '핸드폰 번호를 입력해주세요.' });
  }

  const phone = String(req.body.phone).replace(/[^\d]/g,'');

  admin.auth().getUser(phone)
  .then((userRecord) => {
    const code = Math.floor(Math.random() * 8999 + 1000);

    twilio.messages.create({
      body: '코드는 ' + code + '입니다.',
      to: '+82' + phone.substr(1),
      from: '+19382008436'
    })
    .then((message) => {
        
        admin.database().ref('users/' + phone)
        .update({ code : code, codeValid: true}, () => {
          res.send({ success: true, message: message})
        })
      
    })
    .catch((err) => {
      res.status(422).send(err)
    })
  })
  .catch((err) => {
    res.status(400).send({ error: err});
  })
}