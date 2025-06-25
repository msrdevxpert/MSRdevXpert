// app/api/sendApplication/route.js

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  const username = process.env.BURNER_USERNAME;
  const password = process.env.BURNER_PASSWORD;
  const myEmail = process.env.PERSONAL_EMAIL;

  try {
    const data = await request.json();
    const { name, email, phone, position, resumeBase64, resumeFilename } = data;

   const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: username,
    pass: password,
  },
});

    const mail = await transporter.sendMail({
      from: username,
      to: myEmail,
      replyTo: email,
      subject: `Job Application - ${position}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Position:</strong> ${position}</p>
      `,
      attachments: [
        {
          filename: resumeFilename,
          content: resumeBase64.split("base64,")[1],
          encoding: "base64"
        }
      ]
    });

    return NextResponse.json({ message: "Success: email was sent" });
  } catch (error) {
    console.error("Email sending failed:", error);
    return NextResponse.json({ message: "COULD NOT SEND MESSAGE" }, { status: 500 });
  }
}
