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
    <section className="py-24 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <p className="text-primary text-xs font-light tracking-[0.4em] uppercase mb-4">
            ›&nbsp;&nbsp;{t('home.fleet.title')}
          </p>
          <h2 className="text-3xl sm:text-4xl font-light text-foreground tracking-tight max-w-lg">
            {t('home.fleet.subtitle')}
          </h2>
        </div>

        {/* Vehicle grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.name}
              className="group border border-border hover:border-primary transition-colors"
            >
              {/* Placeholder image area */}
              <div className="aspect-[4/3] bg-background flex items-center justify-center relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-5"
                  style={{
                    background:
                      'repeating-linear-gradient(45deg, oklch(0.42 0.14 12), oklch(0.42 0.14 12) 1px, transparent 1px, transparent 12px)',
                  }}
                />
                <span
                  className="text-[5rem] text-muted-foreground/20 font-bold select-none leading-none"
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
                <h3 className="text-sm font-light text-foreground leading-snug">
                  {vehicle.name}
                </h3>
                <p className="text-xs text-muted-foreground font-light mt-1">
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
