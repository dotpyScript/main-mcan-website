import { NextResponse } from 'next/server';

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

  // TODO: wire this up to email delivery or a database once the backend is ready.
  console.log('New contact submission:', { name, email, reason, message });

  return NextResponse.json({ success: true });
}
