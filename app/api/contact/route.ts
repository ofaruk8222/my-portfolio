import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT),
  secure: false,
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  },
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body as {
      name: string;
      email: string;
      subject: string;
      message: string;
    };

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const subjectLabel = subject
      ? `[Portfolio] ${subject.charAt(0).toUpperCase() + subject.slice(1)} — from ${name}`
      : `[Portfolio] New message from ${name}`;

    await transporter.sendMail({
      from: `"${process.env.MAIL_FROM_NAME}" <${process.env.MAIL_FROM_ADDRESS}>`,
      to: process.env.MAIL_TO_ADDRESS,
      replyTo: email,
      subject: subjectLabel,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #18181b;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #71717a; font-size: 13px; width: 80px;">Name</td>
              <td style="padding: 8px 0; color: #18181b; font-size: 14px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #71717a; font-size: 13px;">Email</td>
              <td style="padding: 8px 0; color: #18181b; font-size: 14px;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #71717a; font-size: 13px;">Subject</td>
              <td style="padding: 8px 0; color: #18181b; font-size: 14px;">${subject || "—"}</td>
            </tr>
          </table>
          <hr style="border: none; border-top: 1px solid #e4e4e7; margin: 16px 0;" />
          <p style="color: #71717a; font-size: 13px; margin: 0 0 8px;">Message</p>
          <p style="color: #18181b; font-size: 14px; line-height: 1.6; white-space: pre-line;">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("[contact/route] Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email. Please try again." }, { status: 500 });
  }
}
