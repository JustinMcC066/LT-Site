export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, school, message, formType } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required.' });
  }

  const subject = formType === 'trial'
    ? `Free Trial Request from ${name}`
    : `Demo Request from ${name}`;

  const html = `
    <h2>${formType === 'trial' ? 'Free Trial Request' : 'Demo Request'}</h2>
    <table style="border-collapse:collapse;width:100%;max-width:600px;font-family:sans-serif;">
      <tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Name</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${name}</td></tr>
      <tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Email</td><td style="padding:8px 12px;border-bottom:1px solid #eee;"><a href="mailto:${email}">${email}</a></td></tr>
      ${phone ? `<tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Phone</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${phone}</td></tr>` : ''}
      ${school ? `<tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">School</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${school}</td></tr>` : ''}
      ${message ? `<tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Message</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${message}</td></tr>` : ''}
    </table>
  `;

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Let\'s Talk SPHE <noreply@letstalksphe.com>',
        to: ['hello@letstalksphe.com'],
        reply_to: email,
        subject,
        html,
      }),
    });

    if (!response.ok) {
      const err = await response.json();
      return res.status(500).json({ error: err.message || 'Failed to send email' });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: 'Server error. Please try again.' });
  }
}
