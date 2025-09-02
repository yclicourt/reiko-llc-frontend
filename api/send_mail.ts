import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
): Promise<void> {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Only POST method is allowed' });
    return;
  }

  try {
    const { name, lastname, phone, email, message } = req.body as {
      name: string;
      lastname: string;
      phone: number;
      email: string;
      message: string;
    };

    if (!name || !email || !message || !phone || !lastname) {
      res.status(400).json({ error: 'Missing required fields' });
      return;
    }

    await resend.emails.send({
      from: `${email}`,
      to: 'yclicourt@gmail.com',
      subject: 'Nuevo mensaje de contacto',
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Apellido:</strong> ${lastname}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong> ${message}</p>
      `,
    });

    res.status(200).json({ status: 'ok' });
  } catch (error: any) {
    res.status(500).json({ error: error.message || 'Error sending email' });
  }
}
