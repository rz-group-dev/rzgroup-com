import type { Metadata } from 'next';
import BookingForm from '@/components/reservas/BookingForm';

export const metadata: Metadata = {
  title: 'Reservas — RZ Group SAS',
  description: 'Reserva tu servicio de transporte VIP o seguridad privada. Transfer aeropuerto, disponibilidad por horas. Presencia en 6 países.',
  keywords: [
    'reservar transporte VIP Colombia', 'contratar conductor privado', 'reserva escolta privada',
    'cotizar transporte de lujo', 'reservar jet privado Colombia',
  ],
  alternates: { canonical: '/reservas' },
};

export default function ReservasPage() {
  return <BookingForm />;
}
