module.exports = {
  mailOptions : (data) => ({
      from: 'auston.xyz <austonpramodh@gmail.com>',
      to: 'austonpramodh@gmail.com',
      subject: 'Contact Form(auston.xyz).',
      text: "Name : " + data.name + "\nEmail : " + data.email,
  }),

};
