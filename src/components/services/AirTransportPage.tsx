'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import RelatedServices from './RelatedServices';

const FEATURES = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
      </svg>
    ),
    titleKey: 'airTransport.feature1Title',
    descKey: 'airTransport.feature1Desc',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 01.75 12c0 6.627 5.373 12 12 12s12-5.373 12-12c0-2.814-.97-5.404-2.598-7.5" />
      </svg>
    ),
    titleKey: 'airTransport.feature2Title',
    descKey: 'airTransport.feature2Desc',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    titleKey: 'airTransport.feature3Title',
    descKey: 'airTransport.feature3Desc',
  },
];

const OPTIONS = [
  {
    titleKey: 'airTransport.option1Title',
    descKey: 'airTransport.option1Desc',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
      </svg>
    ),
  },
  {
    titleKey: 'airTransport.option2Title',
    descKey: 'airTransport.option2Desc',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
];

export default function AirTransportPage() {
  const { t } = useTranslation();

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen bg-[#070d0f] flex items-end pb-24 px-4">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(/images/hero/transporte_aereo.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative max-w-4xl mx-auto w-full">
          <h1 className="text-4xl sm:text-6xl font-light text-white tracking-tight max-w-2xl leading-tight mb-6">
            {t('airTransport.heroTitle')}
          </h1>
          <p className="text-sm font-light text-white/50 max-w-lg leading-relaxed mb-10">
            {t('airTransport.heroSubtitle')}
          </p>
          <Link
            href="/reservas"
            className="inline-flex items-center px-10 py-4 bg-primary text-white text-xs font-light tracking-widest hover:bg-primary/80 transition-colors rounded-2xl"
          >
            {t('airTransport.heroCta')}
          </Link>
        </div>
      </section>

      {/* About + Features */}
      <section className="py-24 bg-[#f9f9fe] px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-primary text-xs font-light tracking-[0.4em] uppercase mb-4">
                ›&nbsp;&nbsp;{t('airTransport.aboutEyebrow')}
              </p>
              <h2 className="text-3xl sm:text-4xl font-light text-foreground tracking-tight mb-6">
                {t('airTransport.aboutTitle')}
              </h2>
              <p className="text-sm font-light text-foreground/50 leading-relaxed">
                {t('airTransport.aboutDesc')}
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

      {/* Options */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-14">
            <p className="text-primary text-xs font-light tracking-[0.4em] uppercase mb-4">
              ›&nbsp;&nbsp;{t('airTransport.optionsEyebrow')}
            </p>
            <h2 className="text-3xl sm:text-4xl font-light text-foreground tracking-tight">
              {t('airTransport.optionsTitle')}
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

      {/* Related services */}
      <RelatedServices exclude="air" />

      {/* CTA */}
      <section className="relative py-24 bg-primary px-4">
        <div
          className="absolute inset-0 opacity-3"
          style={{
            backgroundImage: 'url(/images/textures/Textura.svg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight mb-4">
            {t('airTransport.ctaTitle')}
          </h2>
          <p className="text-sm font-light text-white/60 mb-10 max-w-md mx-auto leading-relaxed">
            {t('airTransport.ctaSubtitle')}
          </p>
          <Link
            href="/reservas"
            className="inline-flex items-center px-10 py-4 bg-white text-primary text-xs font-light tracking-widest hover:bg-white/90 transition-colors rounded-2xl"
          >
            {t('airTransport.ctaButton')}
          </Link>
        </div>
      </section>
    </main>
  );
}
