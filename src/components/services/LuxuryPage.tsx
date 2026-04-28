'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import RelatedServices from './RelatedServices';
import FleetGallery from './FleetGallery';

const FEATURES = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 01.75 12c0 6.627 5.373 12 12 12s12-5.373 12-12c0-2.814-.97-5.404-2.598-7.5" />
      </svg>
    ),
    titleKey: 'luxuryTransport.feature1Title',
    descKey: 'luxuryTransport.feature1Desc',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    titleKey: 'luxuryTransport.feature2Title',
    descKey: 'luxuryTransport.feature2Desc',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185z" />
      </svg>
    ),
    titleKey: 'luxuryTransport.feature3Title',
    descKey: 'luxuryTransport.feature3Desc',
  },
];


export default function LuxuryPage() {
  const { t } = useTranslation();

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen bg-[#070d0f] flex items-end pb-24 px-4">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(/images/hero/transporte_luxury.svg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative max-w-4xl mx-auto w-full">
          <h1 className="text-4xl sm:text-6xl font-light text-white tracking-tight max-w-2xl leading-tight mb-6">
            {t('luxuryTransport.heroTitle')}
          </h1>
          <p className="text-sm font-light text-white/50 max-w-lg leading-relaxed mb-10">
            {t('luxuryTransport.heroSubtitle')}
          </p>
          <Link
            href="/reservas"
            className="inline-flex items-center px-10 py-4 bg-primary text-white text-xs font-light tracking-widest hover:bg-primary/80 transition-colors rounded-2xl"
          >
            {t('luxuryTransport.heroCta')}
          </Link>
        </div>
      </section>

      {/* About + Features */}
      <section className="py-24 bg-[#f9f9fe] px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-primary text-xs font-light tracking-[0.4em] uppercase mb-4">
                ›&nbsp;&nbsp;{t('luxuryTransport.aboutEyebrow')}
              </p>
              <h2 className="text-3xl sm:text-4xl font-light text-foreground tracking-tight mb-6">
                {t('luxuryTransport.aboutTitle')}
              </h2>
              <p className="text-sm font-light text-foreground/50 leading-relaxed">
                {t('luxuryTransport.aboutDesc')}
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
      <section className="py-15 bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <FleetGallery />
          <div className="mt-8 flex justify-center">
            <Link
              href="/reservas"
              className="inline-flex items-center px-10 py-4 bg-primary text-white text-xs font-light tracking-widest hover:bg-primary/80 transition-colors rounded-2xl"
            >
              {t('luxuryTransport.heroCta')}
            </Link>
          </div>
        </div>
      </section>

      {/* Related services */}
      <RelatedServices exclude="luxury" />

      {/* CTA */}
      <section className="py-24 bg-primary px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight mb-4">
            {t('luxuryTransport.ctaTitle')}
          </h2>
          <p className="text-sm font-light text-white/60 mb-10 max-w-md mx-auto leading-relaxed">
            {t('luxuryTransport.ctaSubtitle')}
          </p>
          <Link
            href="/reservas"
            className="inline-flex items-center px-10 py-4 bg-white text-primary text-xs font-light tracking-widest hover:bg-white/90 transition-colors rounded-2xl"
          >
            {t('luxuryTransport.ctaButton')}
          </Link>
        </div>
      </section>
    </main>
  );
}
