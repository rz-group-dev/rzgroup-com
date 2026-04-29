import type { Metadata } from 'next';
import SecurityPage from '@/components/services/SecurityPage';

export const metadata: Metadata = {
  title: 'Seguridad Privada — RZ Group SAS',
  description: 'Guardaespaldas y especialistas con entrenamiento militar para su protección personal, corporativa y familiar.',
  keywords: [
    'guardaespaldas Colombia', 'escolta privada Bogotá', 'seguridad personal VIP',
    'protección ejecutiva', 'seguridad corporativa Colombia', 'escolta eventos',
  ],
  alternates: { canonical: '/seguridad-privada' },
};

export default function SeguridadPrivadaPage() {
  return <SecurityPage />;
}
