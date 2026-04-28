'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const vehicles = [
  { name: 'Chevrolet Tahoe Z71', categoryKey: 'fleet.luxury', seats: 7, img: '/images/fleet/Tahoe Z71.svg' },
  { name: 'Chevrolet Tahoe LT', categoryKey: 'fleet.luxury', seats: 7, img: '/images/fleet/Tahoe LT.svg' },
  { name: 'Cadillac Escalade', categoryKey: 'fleet.luxury', seats: 7, img: '/images/fleet/Cadillac Escalade.svg' },
  { name: 'Mercedes Benz E250', categoryKey: 'fleet.executive', seats: 5, img: '/images/fleet/Mercedes Benz E250.svg' },
  { name: 'Mercedes Sprinter Blindada', categoryKey: 'fleet.van', seats: 15, img: '/images/fleet/Sprinter Blindada.svg' },
  { name: 'Toyota Blindada', categoryKey: 'fleet.premium', seats: 7, img: '/images/fleet/Toyota Blindada.svg' },
];

export default function FleetSection() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-[#f9f9fe]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <p className="text-primary text-xs font-light tracking-[0.4em] uppercase mb-4">
            ›&nbsp;&nbsp;{t('fleet.title')}
          </p>
          <h2 className="text-3xl sm:text-4xl font-light text-foreground tracking-tight max-w-lg">
            {t('fleet.subtitle')}
          </h2>
        </div>

        {/* Vehicle scroll row */}
        <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 scrollbar-hide">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.name}
              className="group border border-border hover:border-primary transition-colors shrink-0 w-64"
            >
              {/* Vehicle image */}
              <div className="aspect-[4/3] relative overflow-hidden bg-[#ffffff]">
                <Image
                  src={vehicle.img}
                  alt={vehicle.name}
                  fill
                  className="object-contain p-4"
                />
              </div>

              {/* Info */}
              <div className="p-5 border-t border-border">
                <span className="text-[10px] font-light tracking-[0.3em] uppercase text-primary mb-2 block">
                  {t(vehicle.categoryKey)}
                </span>
                <h3 className="text-sm font-light text-foreground leading-snug">
                  {vehicle.name}
                </h3>
                <p className="text-xs text-foreground/40 font-light mt-1">
                  {vehicle.seats} pasajeros
                </p>
              </div>
            </div>
          ))}

          {/* Ver más */}
          <Link
            href="/transporte-luxury"
            className="shrink-0 w-48 border border-border hover:border-primary transition-colors flex flex-col items-center justify-center gap-3 text-center p-8 group"
          >
            <span className="text-xs font-light tracking-[0.3em] uppercase text-primary group-hover:text-primary/70 transition-colors">
              {t('common.learnMore')}
            </span>
            <svg className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
