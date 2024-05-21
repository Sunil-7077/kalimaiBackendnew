// const nodemailer = require("nodemailer");
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
 
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "ksunil7077@gmail.com",
    pass: "zktxxmdjmkcuzdii",
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function sendMail(to,sub,text,html) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '<ksunil7077@gmail.com>', // sender address
    to,
    sub,
    text,
    html
  });
}
export default sendMail;