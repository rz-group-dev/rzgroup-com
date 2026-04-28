import type { Metadata } from 'next';
import AirTransportPage from '@/components/services/AirTransportPage';

export const metadata: Metadata = {
  title: 'Transporte Aéreo — RZ Group SAS',
  description: 'Jets privados y helicópteros para traslados rápidos y exclusivos. Coordinación integral de vuelos chárter en Colombia, Estados Unidos y más destinos.',
};

export default function TransporteAereoPage() {
  return <AirTransportPage />;
}
