import type { Metadata } from 'next';
import ComfortPage from '@/components/services/ComfortPage';

export const metadata: Metadata = {
  title: 'Transporte Confort — RZ Group SAS',
  description: 'Servicio de conductor con estándares de calidad y seguridad para grupos y empresas. Transfer aeropuerto y disponibilidad por horas.',
  keywords: [
    'transporte confort Colombia', 'van empresarial con conductor', 'transfer grupal Bogotá',
    'Sprinter con chofer', 'bus ejecutivo Colombia', 'transporte corporativo',
  ],
  alternates: { canonical: '/transporte-confort' },
};

export default function TransporteConfortPage() {
  return <ComfortPage />;
}
