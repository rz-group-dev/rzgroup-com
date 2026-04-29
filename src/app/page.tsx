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
  keywords: [
    'transporte VIP Colombia', 'seguridad privada Bogotá', 'conductor privado',
    'transporte de lujo', 'guardaespaldas Colombia', 'escolta privada', 'RZ Group',
  ],
  alternates: { canonical: '/' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'RZ Group SAS',
  url: 'https://rzgroupsas.com',
  email: 'reservas@rzgroupsas.com',
  description:
    'Empresa de transporte VIP y seguridad privada de alto perfil con más de 10 años de experiencia en Colombia y Estados Unidos.',
  foundingDate: '2014',
  areaServed: ['Colombia', 'Estados Unidos', 'Puerto Rico', 'México', 'Brasil', 'Argentina'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Transporte Luxury' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Transporte Confort' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Seguridad Privada' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Rent a Car' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Transporte Aéreo' } },
    ],
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bogotá',
    addressCountry: 'CO',
  },
  sameAs: [
    'https://www.instagram.com/rzgroup_/',
    'https://www.linkedin.com/company/rz-group-co',
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
