import { NextResponse } from 'next/server';
import { clientPromise } from '@/lib/mongodb';
import { transporter } from '@/lib/mailer';
import { SITE } from '@/lib/constants';

type Body = Record<string, unknown>;

const asString = (value: unknown) => (typeof value === 'string' ? value.trim() : '');

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as Body | null;

  if (!body) {
    return NextResponse.json(
      { success: false, error: 'Invalid request.' },
      { status: 400 },
    );
  }

  const membershipType = asString(body.membershipType);
  const fullName = asString(body.fullName);
  const email = asString(body.email);
  const phone = asString(body.phone);
  const gender = asString(body.gender);
  const lga = asString(body.lga);
  const stateCode = asString(body.stateCode);
  const callUpNumber = asString(body.callUpNumber);
  const batch = asString(body.batch);
  const ppa = asString(body.ppa);
  const yearOfPassingOut = asString(body.yearOfPassingOut);
  const interest = asString(body.interest);
  const message = asString(body.message);
  const consent = body.consent === true;

  if (membershipType !== 'new' && membershipType !== 'returning') {
    return NextResponse.json(
      { success: false, error: 'Please select a membership type.' },
      { status: 400 },
    );
  }

  if (!fullName || !email || !phone || !gender || !lga) {
    return NextResponse.json(
      { success: false, error: 'Please fill in all required fields.' },
      { status: 400 },
    );
  }

  if (membershipType === 'new' && (!batch || !ppa)) {
    return NextResponse.json(
      { success: false, error: 'Please fill in your batch and PPA.' },
      { status: 400 },
    );
  }

  if (membershipType === 'returning' && !yearOfPassingOut) {
    return NextResponse.json(
      { success: false, error: 'Please tell us your year of passing out.' },
      { status: 400 },
    );
  }

  if (!consent) {
    return NextResponse.json(
      {
        success: false,
        error: 'Please confirm you consent to us storing your details.',
      },
      { status: 400 },
    );
  }

  const registration = {
    membershipType,
    fullName,
    email,
    phone,
    gender,
    lga,
    stateCode: stateCode || null,
    callUpNumber: callUpNumber || null,
    ...(membershipType === 'new'
      ? { batch, ppa }
      : { yearOfPassingOut, interest: interest || null }),
    message: message || null,
    createdAt: new Date(),
  };

  try {
    const client = await clientPromise;
    const db = client.db();
    await db.collection('registrations').insertOne(registration);
  } catch (err) {
    console.error('Failed to save registration:', err);
    return NextResponse.json(
      {
        success: false,
        error: 'Something went wrong saving your registration. Please try again.',
      },
      { status: 500 },
    );
  }

  try {
    await transporter.sendMail({
      from: `"MCAN Rivers State" <${SITE.contactEmail}>`,
      to: email,
      subject: 'Welcome to MCAN Rivers State — Registration Received',
      text: `Assalamu Alaikum ${fullName},\n\nJazakumullahu khairan for registering with MCAN Rivers State. Someone from the chapter will reach out to you shortly.\n\n— MCAN Rivers State`,
      html: `<p>Assalamu Alaikum ${fullName},</p><p>Jazakumullahu khairan for registering with MCAN Rivers State. Someone from the chapter will reach out to you shortly.</p><p>— MCAN Rivers State</p>`,
    });

    const fields: [string, string][] = [
      [
        'Membership Type',
        membershipType === 'new' ? 'New Corps Member' : 'Returning / Alumni Member',
      ],
      ['Full Name', fullName],
      ['Email', email],
      ['Phone', phone],
      ['Gender', gender],
      ['LGA', lga],
      ...(membershipType === 'new'
        ? ([
            ['Batch', batch],
            ['PPA', ppa],
          ] as [string, string][])
        : ([
            ['Year of Passing Out', yearOfPassingOut],
            ['How They Want to Serve', interest || 'Not specified'],
          ] as [string, string][])),
      ['NYSC State Code', stateCode || 'Not provided'],
      ['Call-up Number', callUpNumber || 'Not provided'],
      ['Message', message || 'None'],
    ];

    await transporter.sendMail({
      from: `"MCAN Rivers State Website" <${SITE.contactEmail}>`,
      to: SITE.contactEmail,
      subject: `New ${membershipType === 'new' ? 'corps member' : 'returning member'} registration: ${fullName}`,
      text: fields.map(([label, value]) => `${label}: ${value}`).join('\n'),
      html: fields
        .map(
          ([label, value]) =>
            `<p><strong>${escapeHtml(label)}:</strong> ${escapeHtml(value)}</p>`,
        )
        .join(''),
    });
  } catch (err) {
    // Registration is already saved — don't fail the request over email delivery.
    console.error('Failed to send registration emails:', err);
  }

  return NextResponse.json({ success: true });
}
