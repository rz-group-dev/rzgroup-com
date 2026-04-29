import type { Metadata } from 'next';
import RentACarPage from '@/components/services/RentACarPage';

export const metadata: Metadata = {
  title: 'Rent a Car — RZ Group SAS',
  description: 'Alquiler de SUV de alta gama con o sin conductor para uso corporativo, turístico o personal en Colombia, Estados Unidos y más.',
  keywords: [
    'rent a car SUV Colombia', 'alquiler SUV Bogotá', 'alquiler SUV sin conductor',
    'SUV premium Colombia', 'renta de carro de lujo', 'alquiler vehículo ejecutivo',
  ],
  alternates: { canonical: '/rent-a-car' },
};

export default function RentACarRoutePage() {
  return <RentACarPage />;
}
