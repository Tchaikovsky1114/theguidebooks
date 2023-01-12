const sgMail = require('@sendgrid/mail');
const admin = require('firebase-admin');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = function (req,res) {
  const email = req.body.email;
  const emailValid = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  emailValid.test(email)

  if(!emailValid) {
    return res.status(422).send({ error: '이메일 주소를 확인해주세요.'})
  }
  const code = Math.floor(Math.random() * 8999 + 1000);
  
  const msg = {
    to: email,
    from: 'forwarm5891@gmail.com',
    templateId: 'd-03cb835bf10d4cb7beb08ee60272a44c',
    dynamic_template_data: {
      subject: 'THE GUIDEBOOKS에서 본인 이메일 검증 코드를 보내드립니다.',
      code: code
    }
  }
  // html: /*html */`
  //   <div style="display:flex; flex-direction:column; justify-content:center; align-items:center; margin-top:50px; height:100px; border:1px solid #2d63e2;">
  //   <h3 style="text-decoration:underline">The GuideBooks에 엑세스하기 위해 다음 확인코드를 입력해주세요.</h3>
  //   <p style="font-weight:bold; font-size:22px">${code}</p>
  // </div>
  // `

  sgMail.send(msg)
  .then((data) => {
    console.log(data[0].statusCode);
    console.log(data[0].headers);
    res.status(200).send({ message: '이메일로 인증코드가 발송되었습니다. 이메일을 확인해주세요!' });
  })
  .catch((error) => {
    res.status(501).send({ error: error})
  })

}

