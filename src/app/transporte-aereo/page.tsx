import type { Metadata } from 'next';
import AirTransportPage from '@/components/services/AirTransportPage';

export const metadata: Metadata = {
  title: 'Transporte Aéreo — RZ Group SAS',
  description: 'Jets privados y helicópteros para traslados rápidos y exclusivos. Coordinación integral de vuelos chárter en Colombia, Estados Unidos y más destinos.',
  keywords: [
    'jet privado Colombia', 'helicóptero privado Bogotá', 'vuelo charter Colombia',
    'transporte aéreo ejecutivo', 'avión privado reserva', 'charter flight Colombia',
  ],
  alternates: { canonical: '/transporte-aereo' },
};

export default function TransporteAereoPage() {
  return <AirTransportPage />;
}
