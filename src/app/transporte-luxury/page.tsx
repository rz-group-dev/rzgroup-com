import type { Metadata } from 'next';
import LuxuryPage from '@/components/services/LuxuryPage';

export const metadata: Metadata = {
  title: 'Transporte Luxury — RZ Group SAS',
  description: 'Conductores profesionales y vehículos de última generación para traslados de alto perfil. Transfer aeropuerto y disponibilidad por horas.',
  keywords: [
    'transporte luxury Colombia', 'conductor privado Bogotá', 'SUV de lujo con chofer',
    'transfer aeropuerto VIP', 'Cadillac Escalade Colombia', 'Mercedes Benz chofer',
    'Tahoe blindada conductor',
  ],
  alternates: { canonical: '/transporte-luxury' },
};

export default function TransporteLuxuryPage() {
  return <LuxuryPage />;
}
