import asyncHandler from "express-async-handler";
import nodemailer from "nodemailer";

// @desc   Send an email to Ryan
// @route  POST /api/email
// @access Public

const sendEmail = asyncHandler(async (req, res) => {
  const {
    email,
    subject,
    text,
  } = req.body;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USERNAME,
    subject: subject,
    text: text,
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      res.status(400).send(error);
    } else {
      res.status(201).send("Email sent: " + info.response);
    }
  });
});

export {
  sendEmail,
};
