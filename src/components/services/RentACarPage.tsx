'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const VEHICLES = [
  { name: 'Chevrolet Tahoe Z71', category: 'fleet.luxury', seats: 7, img: '/images/fleet/Tahoe Z71.svg' },
  { name: 'Chevrolet Tahoe LT', category: 'fleet.luxury', seats: 7, img: '/images/fleet/Tahoe LT.svg' },
  { name: 'Cadillac Escalade', category: 'fleet.luxury', seats: 7, img: '/images/fleet/Cadillac Escalade.svg' },
  { name: 'Mercedes Benz E250', category: 'fleet.executive', seats: 5, img: '/images/fleet/Mercedes Benz E250.svg' },
];

const FEATURES = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
      </svg>
    ),
    titleKey: 'rentACar.feature1Title',
    descKey: 'rentACar.feature1Desc',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 01.75 12c0 6.627 5.373 12 12 12s12-5.373 12-12c0-2.814-.97-5.404-2.598-7.5" />
      </svg>
    ),
    titleKey: 'rentACar.feature2Title',
    descKey: 'rentACar.feature2Desc',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    titleKey: 'rentACar.feature3Title',
    descKey: 'rentACar.feature3Desc',
  },
];

const OPTIONS = [
  {
    titleKey: 'rentACar.option1Title',
    descKey: 'rentACar.option1Desc',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    titleKey: 'rentACar.option2Title',
    descKey: 'rentACar.option2Desc',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
];

export default function RentACarPage() {
  const { t } = useTranslation();

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen bg-[#070d0f] flex items-end pb-24 px-4">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(/images/hero/Homepage_image.svg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative max-w-4xl mx-auto w-full">
          <h1 className="text-4xl sm:text-6xl font-light text-white tracking-tight max-w-2xl leading-tight mb-6">
            {t('rentACar.heroTitle')}
          </h1>
          <p className="text-sm font-light text-white/50 max-w-lg leading-relaxed mb-10">
            {t('rentACar.heroSubtitle')}
          </p>
          <Link
            href="/reservas"
            className="inline-flex items-center px-10 py-4 bg-primary text-white text-xs font-light tracking-widest hover:bg-primary/80 transition-colors rounded-2xl"
          >
            {t('rentACar.heroCta')}
          </Link>
        </div>
      </section>

      {/* About + Features */}
      <section className="py-24 bg-[#f9f9fe] px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-primary text-xs font-light tracking-[0.4em] uppercase mb-4">
                ›&nbsp;&nbsp;{t('rentACar.aboutEyebrow')}
              </p>
              <h2 className="text-3xl sm:text-4xl font-light text-foreground tracking-tight mb-6">
                {t('rentACar.aboutTitle')}
              </h2>
              <p className="text-sm font-light text-foreground/50 leading-relaxed">
                {t('rentACar.aboutDesc')}
              </p>
            </div>
            <div className="flex flex-col gap-8">
              {FEATURES.map((f, i) => (
                <div key={i} className="flex gap-4">
                  <div className="text-primary mt-0.5 shrink-0">{f.icon}</div>
                  <div>
                    <h3 className="text-sm font-light text-foreground mb-1">{t(f.titleKey)}</h3>
                    <p className="text-xs font-light text-foreground/40 leading-relaxed">{t(f.descKey)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fleet */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="text-primary text-xs font-light tracking-[0.4em] uppercase mb-4">
              ›&nbsp;&nbsp;{t('rentACar.fleetEyebrow')}
            </p>
            <h2 className="text-3xl sm:text-4xl font-light text-foreground tracking-tight">
              {t('rentACar.fleetTitle')}
            </h2>
            <p className="mt-3 text-sm font-light text-foreground/40 max-w-lg">
              {t('rentACar.fleetSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {VEHICLES.map((v) => (
              <div key={v.name} className="group border border-foreground/10 hover:border-primary transition-colors">
                <div className="aspect-[4/3] relative overflow-hidden bg-[#f9f9fe]">
                  <Image
                    src={v.img}
                    alt={v.name}
                    fill
                    className="object-contain p-6"
                  />
                </div>
                <div className="p-5 border-t border-foreground/10">
                  <span className="text-[10px] font-light tracking-[0.3em] uppercase text-primary mb-2 block">
                    {t(v.category)}
                  </span>
                  <h3 className="text-sm font-light text-foreground">{v.name}</h3>
                  <p className="text-xs text-foreground/40 font-light mt-1">{v.seats} pasajeros</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Options: con o sin conductor */}
      <section className="py-24 bg-[#f9f9fe] px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-14">
            <p className="text-primary text-xs font-light tracking-[0.4em] uppercase mb-4">
              ›&nbsp;&nbsp;{t('rentACar.optionsEyebrow')}
            </p>
            <h2 className="text-3xl sm:text-4xl font-light text-foreground tracking-tight">
              {t('rentACar.optionsTitle')}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {OPTIONS.map((o, i) => (
              <div key={i} className="border border-foreground/10 p-8 hover:border-primary transition-colors">
                <div className="text-primary mb-5">{o.icon}</div>
                <h3 className="text-base font-light text-foreground mb-3">{t(o.titleKey)}</h3>
                <p className="text-sm font-light text-foreground/40 leading-relaxed">{t(o.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight mb-4">
            {t('rentACar.ctaTitle')}
          </h2>
          <p className="text-sm font-light text-white/60 mb-10 max-w-md mx-auto leading-relaxed">
            {t('rentACar.ctaSubtitle')}
          </p>
          <Link
            href="/reservas"
            className="inline-flex items-center px-10 py-4 bg-white text-primary text-xs font-light tracking-widest hover:bg-white/90 transition-colors rounded-2xl"
          >
            {t('rentACar.ctaButton')}
          </Link>
        </div>
      </section>
    </main>
  );
}
