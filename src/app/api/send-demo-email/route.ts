import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { fullName, company, email, phoneCode, phone, goal } = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Rian Contact" <${process.env.SMTP_USER}>`,
      to: ['pratik.desai@neuralarc.ai'],
      // cc: ['anand@rian.io', 'aniket.tapre@rian.io'],
      subject: 'New Quote/Demo Request',
      html: `
        <div style="min-height: fit-content; padding: 40px 0; font-family: 'Onest', 'Segoe UI', Arial, sans-serif;">
          <div style="max-width: 480px; margin: 0 auto; background: #232323; border-radius: 18px; box-shadow: 0 8px 32px rgba(0,0,0,0.18); padding: 32px 28px; color: #fff;">
            <div style="text-align: center; margin-bottom: 24px;">
              <h2 style="font-size: 2rem; font-weight: 400; margin: 0 0 8px 0; letter-spacing: -1px;">New Quote/Demo Request</h2>
              <div style="height: 3px; width: 48px; background: linear-gradient(90deg, #67F5C8, #ADFF15); border-radius: 2px; margin: 0 auto 12px auto;"></div>
            </div>
            <div style="font-size: 1.1rem; line-height: 1.7;">
              <div style="margin-bottom: 16px;"><span style="color: #67F5C8; font-weight: 500;">Name:</span> <span style="color: #fff;">${fullName}</span></div>
              <div style="margin-bottom: 16px;"><span style="color: #67F5C8; font-weight: 500;">Company:</span> <span style="color: #fff;">${company}</span></div>
              <div style="margin-bottom: 16px;"><span style="color: #67F5C8; font-weight: 500;">Email:</span> <span style="color: #fff;">${email}</span></div>
              <div style="margin-bottom: 16px;"><span style="color: #67F5C8; font-weight: 500;">Phone:</span> <span style="color: #fff;">${phoneCode} ${phone}</span></div>
              <div style="margin-bottom: 0;"><span style="color: #67F5C8; font-weight: 500;">Goal:</span> <span style="color: #fff;">${goal}</span></div>
            </div>
            
          </div>
        </div>
      `,
    });
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to send email', details: String(err) }, { status: 500 });
  }
} 