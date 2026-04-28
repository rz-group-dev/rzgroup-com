import type { Metadata } from 'next';
import LuxuryPage from '@/components/services/LuxuryPage';

export const metadata: Metadata = {
  title: 'Transporte Luxury — RZ Group SAS',
  description: 'Conductores profesionales y vehículos de última generación para traslados de alto perfil. Transfer aeropuerto y disponibilidad por horas.',
};

export default function TransporteLuxuryPage() {
  return <LuxuryPage />;
}
