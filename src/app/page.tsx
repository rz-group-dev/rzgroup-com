import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import ServicesSection from '@/components/home/ServicesSection';
import FleetSection from '@/components/home/FleetSection';
import FleetComfortSection from '@/components/home/FleetComfortSection';
import CoverageSection from '@/components/home/CoverageSection';

export const metadata: Metadata = {
  title: 'RZ Group SAS — Transporte VIP y Seguridad Privada',
  description:
    'Agencia de transporte VIP y seguridad privada de alto perfil. 10 años de experiencia, presencia en Colombia y EE.UU. Conductores profesionales, flota de lujo y guardaespaldas con entrenamiento militar.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <FleetSection />
      <div className="h-px bg-primary mx-4 sm:mx-6 lg:mx-8" />
      <FleetComfortSection />
      <div className="h-px bg-primary mx-4 sm:mx-6 lg:mx-8" />
      <CoverageSection />
    </>
  );
}
