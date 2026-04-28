import type { Metadata } from 'next';
import RentACarPage from '@/components/services/RentACarPage';

export const metadata: Metadata = {
  title: 'Rent a Car — RZ Group SAS',
  description: 'Alquiler de SUV de alta gama con o sin conductor para uso corporativo, turístico o personal en Colombia, Estados Unidos y más.',
};

export default function RentACarRoutePage() {
  return <RentACarPage />;
}
