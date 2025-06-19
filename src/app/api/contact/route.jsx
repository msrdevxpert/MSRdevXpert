import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  const username = process.env.BURNER_USERNAME;
  const password = process.env.BURNER_PASSWORD;
  const myEmail = process.env.PERSONAL_EMAIL;

  try {
    const { name, email, phone, message } = await request.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: username,
        pass: password,
      },
    });

    await transporter.sendMail({
      from: username,
      to: myEmail,
      replyTo: email,
      subject: `New Contact Message from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({ message: "Success: email was sent" });
  } catch (error) {
    console.error("Email sending failed:", error);
    return NextResponse.json({ message: "COULD NOT SEND MESSAGE", error: error.message }, { status: 500 });
  }
}
