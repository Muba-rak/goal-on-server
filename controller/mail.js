const nodemailer = require("nodemailer");
const testAccount = await nodemailer.createTestAccount();
const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "randy.hermann@ethereal.email",
    pass: "ySVCBzFBNRhMykne6F",
  },
});

const sendMailg = async (req, res) => {
  try {
    const info = await transporter.sendMail({
      from: '"Star Boy Mubby" <oladapomubarak@gmail.com>', // sender address
      to: "test@google.com", // list of receivers
      subject: "Hello ✔", // Subject line
      html: "<b>Hello world?</b>", // html body
    });

    res.json(info);
  } catch (error) {
    console.log(error);
  }
};

module.exports = sendMailg;
