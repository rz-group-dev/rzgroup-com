import type { Metadata } from 'next';
import SecurityPage from '@/components/services/SecurityPage';

export const metadata: Metadata = {
  title: 'Seguridad Privada — RZ Group SAS',
  description: 'Guardaespaldas y especialistas con entrenamiento militar para su protección personal, corporativa y familiar.',
};

export default function SeguridadPrivadaPage() {
  return <SecurityPage />;
}
