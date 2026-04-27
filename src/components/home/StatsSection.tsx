'use client';

import { useTranslation } from 'react-i18next';

const stats = [
  { value: '10', unit: '+', key: 'home.stats.years' },
  { value: '10', unit: '', key: 'home.stats.cities' },
  { value: '1.000', unit: '+', key: 'home.stats.clients' },
  { value: '24/7', unit: '', key: 'home.stats.availability' },
];

export default function StatsSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-[#070d0f] border-t border-white/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.key}
              className={`flex flex-col items-center justify-center py-12 px-6 text-center ${
                i < stats.length - 1 ? 'lg:border-r border-white/8' : ''
              } ${i % 2 === 0 ? 'border-r lg:border-r-0 border-white/8' : ''} ${
                i < 2 ? 'border-b lg:border-b-0 border-white/8' : ''
              }`}
            >
              <span className="text-4xl sm:text-5xl font-light text-primary tabular-nums">
                {stat.value}
                <span className="text-2xl">{stat.unit}</span>
              </span>
              <span className="mt-2 text-xs font-light tracking-[0.25em] uppercase text-white/50">
                {t(stat.key)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
