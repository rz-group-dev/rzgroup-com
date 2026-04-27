'use client';

import { useTranslation } from 'react-i18next';

const stats = [
  { value: '10', unit: '+', key: 'home.stats.years' },
  { value: '6', unit: '', key: 'home.stats.countries' },
  { value: '24/7', unit: '', key: 'home.stats.availability' },
];

export default function StatsSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-[#f9f9fe] border-t border-black/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3">
          {stats.map((stat, i) => (
            <div
              key={stat.key}
              className={`flex flex-col items-center justify-center py-12 px-6 text-center ${
                i < stats.length - 1 ? 'border-r border-black/10' : ''
              }`}
            >
              <span className="text-4xl sm:text-5xl font-light tabular-nums" style={{ color: 'oklch(0.42 0.14 12)' }}>
                {stat.value}
                <span className="text-2xl">{stat.unit}</span>
              </span>
              <span className="mt-2 text-xs font-light tracking-[0.25em] uppercase text-black/50">
                {t(stat.key)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
