const admin = require('firebase-admin');


module.exports = function(req,res) {
  // Verify the user provided a phone
  if(!req.body.phone) {
    return res.status(422).send({ error: 'Bad Input' });
  }


  // Format the phone number to remove dashes and parens
  // /[^\d]/g 숫자를 제외한 모든 문자를 포함한다. 
  const phone = String(req.body.phone).replace(/[^\d]/g,'');

  // Create a new user account using that phone number
  admin.auth().createUser({ uid: phone })
  .then((user) => res.send(user))
  .catch(err => res.status(422).send({ error: err }));

  // Respond to the user request, saying the acconunt was made

}