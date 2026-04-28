'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const vehicles = [
  { name: 'Renault Duster', categoryKey: 'fleet.executive', seats: 5, img: '/images/fleet/Duster.png' },
  { name: 'Hyundai H1', categoryKey: 'fleet.van', seats: 8, img: '/images/fleet/Hyundai H1.svg' },
  { name: 'Mercedes Vito', categoryKey: 'fleet.van', seats: 8, img: '/images/fleet/Merccedes Vito.svg' },
  { name: 'Mercedes Sprinter', categoryKey: 'fleet.van', seats: 19, img: '/images/fleet/Mercedes Sprinter.svg' },
  { name: 'Bus 40 Pasajeros', categoryKey: 'fleet.van', seats: 40, img: '/images/fleet/Bus 40 Pax.svg' },
];

export default function FleetComfortSection() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-[#2c2c2c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <p className="text-white/50 text-xs font-light tracking-[0.4em] uppercase mb-4">
            ›&nbsp;&nbsp;{t('home.fleet.titleComfort')}
          </p>
          <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight max-w-lg">
            {t('home.fleet.subtitleComfort')}
          </h2>
        </div>

        {/* Vehicle grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.name}
              className="group border border-white/10 hover:border-primary transition-colors bg-black/20"
            >
              {/* Vehicle image */}
              <div className="aspect-[4/3] relative overflow-hidden bg-black/30">
                <Image
                  src={vehicle.img}
                  alt={vehicle.name}
                  fill
                  className="object-contain p-4"
                />
              </div>

              {/* Info */}
              <div className="p-5">
                <span className="text-[10px] font-light tracking-[0.3em] uppercase text-primary mb-2 block">
                  {t(vehicle.categoryKey)}
                </span>
                <h3 className="text-sm font-light text-white leading-snug">
                  {vehicle.name}
                </h3>
                <p className="text-xs text-white/40 font-light mt-1">
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
            className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground text-xs font-light tracking-widest hover:bg-secondary transition-colors"
          >
            {t('common.bookNow')}
          </Link>
        </div>
      </div>
    </section>
  );
}
