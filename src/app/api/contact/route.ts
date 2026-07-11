import { NextResponse } from 'next/server';
import { transporter } from '@/lib/mailer';
import { SITE } from '@/lib/constants';

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  reason?: unknown;
  message?: unknown;
};

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as ContactPayload | null;

  const name = typeof body?.name === 'string' ? body.name.trim() : '';
  const email = typeof body?.email === 'string' ? body.email.trim() : '';
  const reason = typeof body?.reason === 'string' ? body.reason.trim() : '';
  const message = typeof body?.message === 'string' ? body.message.trim() : '';

  if (!name || !email || !message) {
    return NextResponse.json(
      { success: false, error: 'Please fill in your name, email, and message.' },
      { status: 400 },
    );
  }

  try {
    await transporter.sendMail({
      from: `"MCAN Rivers State Website" <${SITE.contactEmail}>`,
      to: SITE.contactEmail,
      replyTo: email,
      subject: `New contact form message${reason ? `: ${reason}` : ''}`,
      text: `Name: ${name}\nEmail: ${email}\nReason: ${reason || 'Not specified'}\n\n${message}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Reason:</strong> ${reason || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br />')}</p>
      `,
    });
  } catch (err) {
    console.error('Failed to send contact email:', err);
    return NextResponse.json(
      {
        success: false,
        error: 'Something went wrong sending your message. Please try again.',
      },
      { status: 500 },
    );
  }

  return NextResponse.json({ success: true });
}
