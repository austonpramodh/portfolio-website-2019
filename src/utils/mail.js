const nodemailer = require("nodemailer");
const config = require("./config");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    type: "OAuth2",
    user: "austonpramodh@gmail.com",
    clientId: "340346853036-6hnv0el8ni8opvpm3b735ipif5i6e4p1.apps.googleusercontent.com",
    clientSecret: "RbHqYhMZ_MT-EjuUC0r5sTXQ",
    refreshToken: "1/6PmloaE4XeNriBbsroesO1nppuv8iE-DFGF7BHB-5Q4",
  },
});

const sendMail = data => {
  transporter.sendMail(config.mailOptions(data), err => {
    if (err) {
      //   console.log(err);
      //   console.log("Error");
    } else {
      //   console.log("Email Sent");
    }
  });
};

module.exports = sendMail;
