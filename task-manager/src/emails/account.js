const Mailjet = require('node-mailjet');

const mailjet = Mailjet.apiConnect(
  process.env.MJ_APIKEY_PUBLIC,
  process.env.MJ_APIKEY_PRIVATE
);

const sendWelcomeEmail = (email, name) => {
  console.log(email);
  console.log(name);
  const request = mailjet.post('send', { version: 'v3.1' }).request({
    Messages: [
      {
        From: {
          Email: "prabhudev.vatnal55@gmail.com",
          Name: "Prabhudev Vatnal"
        },
        To: [
          {
            Email: email,
            Name: name
          }
        ],
        Subject: `Welcome ${name}`,
        TextPart: `Dear ${name}, welcome to Prabhudev's profile!`,
        HTMLPart: `<h3>Dear ${name}, welcome to <a href=\"https://github.com/prabhudevv/\">Prabhudev's profile</a>!</h3>`
      }
    ]
  })

  request.then((result) => {
    console.log(result.body)
  }).catch((err) => {
    console.log(err.statusCode)
  })
}

const sendCancellationEmail = (email, name) => {
  console.log(email);
  console.log(name);
  const request = mailjet.post('send', { version: 'v3.1' }).request({
    Messages: [
      {
        From: {
          Email: "prabhudev.vatnal55@gmail.com",
          Name: "Prabhudev Vatnal"
        },
        To: [
          {
            Email: email,
            Name: name
          }
        ],
        Subject: `Unsubscribed ${name}`,
        TextPart: `Dear ${name}, Unsubscribe to Prabhudev's profile!`,
        HTMLPart: `<h3>Dear ${name}, unsubscribe to <a href=\"https://github.com/prabhudevv/\">Prabhudev's profile</a>!</h3>`
      }
    ]
  })

  request.then((result) => {
    console.log(result.body)
  }).catch((err) => {
    console.log(err.statusCode)
  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail
}