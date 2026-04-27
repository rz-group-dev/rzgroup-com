'use client';

import { useTranslation } from 'react-i18next';

const vehicles = [
  { name: 'Chevrolet Tahoe Z71', categoryKey: 'fleet.luxury', seats: 7 },
  { name: 'Mercedes Sprinter', categoryKey: 'fleet.van', seats: 15 },
  { name: 'Ford Explorer', categoryKey: 'fleet.executive', seats: 6 },
  { name: 'Toyota Land Cruiser TXL', categoryKey: 'fleet.luxury', seats: 7 },
  { name: 'Ford Expedition', categoryKey: 'fleet.premium', seats: 8 },
];

export default function FleetSection() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-[#3c473e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <p className="text-white/50 text-xs font-light tracking-[0.4em] uppercase mb-4">
            ›&nbsp;&nbsp;{t('home.fleet.title')}
          </p>
          <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight max-w-lg">
            {t('home.fleet.subtitle')}
          </h2>
        </div>

        {/* Vehicle grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.name}
              className="group border border-white/10 hover:border-primary transition-colors bg-black/20"
            >
              {/* Placeholder image */}
              <div className="aspect-[4/3] bg-black/30 flex items-center justify-center relative overflow-hidden">
                <span
                  className="text-[4.5rem] text-white/10 font-bold select-none leading-none"
                  aria-hidden
                >
                  ›
                </span>
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
      </div>
    </section>
  );
}
