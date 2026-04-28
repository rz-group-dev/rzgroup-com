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

        {/* Vehicle grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.name}
              className="group border border-border hover:border-primary transition-colors"
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
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/contactanos"
            className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground text-xs font-light tracking-widest hover:bg-primary/80 transition-colors"
          >
            {t('common.bookNow')}
          </Link>
        </div>
      </div>
    </section>
  );
}
