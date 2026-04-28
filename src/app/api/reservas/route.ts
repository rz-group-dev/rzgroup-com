import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const SERVICE_LABELS: Record<string, string> = {
  luxury: 'Transporte Luxury',
  comfort: 'Transporte Confort',
  air: 'Transporte Aéreo',
  security: 'Seguridad Privada',
  'rent-a-car': 'Rent a Car',
};

const MODALITY_LABELS: Record<string, string> = {
  'airport-transfer': 'Transfer Aeropuerto',
  '4h': 'Disponibilidad 4 horas',
  '6h': 'Disponibilidad 6 horas',
  '8h': 'Disponibilidad 8 horas',
  '12h': 'Disponibilidad 12 horas',
};

export async function POST(req: NextRequest) {
  const body = await req.json();
  const {
    date, country, city, serviceCategory, vehicle,
    passengers, modality, pickupAddress, flightNumber,
    name, email, phone, notes,
  } = body;

  const serviceName = SERVICE_LABELS[serviceCategory] ?? serviceCategory;

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; color: #070d0f;">
      <div style="background: #5b201f; padding: 24px 32px; margin-bottom: 32px;">
        <h1 style="color: white; font-weight: 300; font-size: 22px; margin: 0;">
          Nueva solicitud de reserva
        </h1>
      </div>

      <div style="padding: 0 32px;">
        <h2 style="font-weight: 400; font-size: 14px; text-transform: uppercase; letter-spacing: 3px; color: #5b201f; border-bottom: 1px solid #eee; padding-bottom: 8px;">
          Servicio solicitado
        </h2>
        <table style="width: 100%; font-size: 14px; line-height: 2;">
          <tr><td style="color: #888; width: 180px;">Tipo de servicio</td><td><strong>${serviceName}</strong></td></tr>
          ${vehicle ? `<tr><td style="color: #888;">Vehículo</td><td>${vehicle}</td></tr>` : ''}
          ${modality ? `<tr><td style="color: #888;">Modalidad</td><td>${MODALITY_LABELS[modality] ?? modality}</td></tr>` : ''}
          <tr><td style="color: #888;">Fecha</td><td>${date}</td></tr>
          <tr><td style="color: #888;">País</td><td>${country}</td></tr>
          <tr><td style="color: #888;">Ciudad</td><td>${city}</td></tr>
          <tr><td style="color: #888;">Nº de personas</td><td>${passengers}</td></tr>
          <tr><td style="color: #888;">Hotel / Dirección</td><td>${pickupAddress}</td></tr>
          ${flightNumber ? `<tr><td style="color: #888;">Nº de vuelo</td><td>${flightNumber}</td></tr>` : ''}
        </table>

        <h2 style="font-weight: 400; font-size: 14px; text-transform: uppercase; letter-spacing: 3px; color: #5b201f; border-bottom: 1px solid #eee; padding-bottom: 8px; margin-top: 32px;">
          Datos de contacto
        </h2>
        <table style="width: 100%; font-size: 14px; line-height: 2;">
          <tr><td style="color: #888; width: 180px;">Nombre</td><td>${name}</td></tr>
          <tr><td style="color: #888;">Email</td><td><a href="mailto:${email}" style="color: #5b201f;">${email}</a></td></tr>
          ${phone ? `<tr><td style="color: #888;">Teléfono</td><td>${phone}</td></tr>` : ''}
          ${notes ? `<tr><td style="color: #888; vertical-align: top;">Notas</td><td>${notes}</td></tr>` : ''}
        </table>

        <div style="margin-top: 40px; padding-top: 24px; border-top: 1px solid #eee; font-size: 12px; color: #aaa;">
          Enviado desde el formulario de reservas de rzgroupsas.com
        </div>
      </div>
    </div>
  `;

  try {
    await resend.emails.send({
      from: 'RZ Group Reservas <onboarding@resend.dev>',
      to: 'diego.martinez@rzgroupsas.com',
      replyTo: email,
      subject: `Reserva — ${serviceName} — ${name}`,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Resend error:', error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
