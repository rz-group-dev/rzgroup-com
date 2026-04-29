'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import RelatedServices from './RelatedServices';

const FEATURES = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 01.75 12c0 6.627 5.373 12 12 12s12-5.373 12-12c0-2.814-.97-5.404-2.598-7.5" />
      </svg>
    ),
    titleKey: 'security.feature1Title',
    descKey: 'security.feature1Desc',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    titleKey: 'security.feature2Title',
    descKey: 'security.feature2Desc',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    titleKey: 'security.feature3Title',
    descKey: 'security.feature3Desc',
  },
];

const MODALITIES = [
  {
    titleKey: 'security.modality1Title',
    descKey: 'security.modality1Desc',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    titleKey: 'security.modality2Title',
    descKey: 'security.modality2Desc',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    titleKey: 'security.modality3Title',
    descKey: 'security.modality3Desc',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
];

export default function SecurityPage() {
  const { t } = useTranslation();

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen bg-[#070d0f] flex items-end pb-24 px-4">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(/images/hero/Homepage_image.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative max-w-4xl mx-auto w-full">
          <p className="text-primary text-xs font-light tracking-[0.4em] uppercase mb-6">
            ›&nbsp;&nbsp;{t('security.eyebrow')}
          </p>
          <h1 className="text-4xl sm:text-6xl font-light text-white tracking-tight max-w-2xl leading-tight mb-6">
            {t('security.heroTitle')}
          </h1>
          <p className="text-sm font-light text-white/50 max-w-lg leading-relaxed mb-10">
            {t('security.heroSubtitle')}
          </p>
          <Link
            href="/reservas"
            className="inline-flex items-center px-10 py-4 bg-primary text-white text-xs font-light tracking-widest hover:bg-primary/80 transition-colors rounded-2xl"
          >
            {t('security.heroCta')}
          </Link>
        </div>
      </section>

      {/* About + Features */}
      <section className="py-24 bg-[#f9f9fe] px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-primary text-xs font-light tracking-[0.4em] uppercase mb-4">
                ›&nbsp;&nbsp;{t('security.aboutEyebrow')}
              </p>
              <h2 className="text-3xl sm:text-4xl font-light text-foreground tracking-tight mb-6">
                {t('security.aboutTitle')}
              </h2>
              <p className="text-sm font-light text-foreground/50 leading-relaxed">
                {t('security.aboutDesc')}
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

      {/* Modalities */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-14">
            <p className="text-primary text-xs font-light tracking-[0.4em] uppercase mb-4">
              ›&nbsp;&nbsp;{t('security.modalityEyebrow')}
            </p>
            <h2 className="text-3xl sm:text-4xl font-light text-foreground tracking-tight">
              {t('security.modalityTitle')}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {MODALITIES.map((m, i) => (
              <div key={i} className="border border-foreground/10 p-8 hover:border-primary transition-colors">
                <div className="text-primary mb-5">{m.icon}</div>
                <h3 className="text-base font-light text-foreground mb-3">{t(m.titleKey)}</h3>
                <p className="text-sm font-light text-foreground/40 leading-relaxed">{t(m.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discretion note */}
      <section className="py-20 bg-[#f9f9fe] px-4">
        <div className="max-w-4xl mx-auto border-l-2 border-primary pl-8">
          <p className="text-sm font-light text-foreground/60 leading-relaxed italic max-w-xl">
            {t('security.discretionNote')}
          </p>
        </div>
      </section>

      {/* Related services */}
      <RelatedServices exclude="security" />

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
            {t('security.ctaTitle')}
          </h2>
          <p className="text-sm font-light text-white/60 mb-10 max-w-md mx-auto leading-relaxed">
            {t('security.ctaSubtitle')}
          </p>
          <Link
            href="/reservas"
            className="inline-flex items-center px-10 py-4 bg-white text-primary text-xs font-light tracking-widest hover:bg-white/90 transition-colors rounded-2xl"
          >
            {t('security.ctaButton')}
          </Link>
        </div>
      </section>
    </main>
  );
}
