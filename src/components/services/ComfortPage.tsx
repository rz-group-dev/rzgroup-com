'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import RelatedServices from './RelatedServices';

const VEHICLES = [
  { name: 'Renault Duster', category: 'fleet.executive', seats: 5, img: '/images/fleet/Duster.png' },
  { name: 'Hyundai H1', category: 'fleet.van', seats: 8, img: '/images/fleet/Hyundai H1.svg' },
  { name: 'Mercedes Vito', category: 'fleet.van', seats: 8, img: '/images/fleet/Merccedes Vito.svg' },
  { name: 'Mercedes Sprinter', category: 'fleet.van', seats: 19, img: '/images/fleet/Mercedes Sprinter.svg' },
  { name: 'Bus 40 Pasajeros', category: 'fleet.van', seats: 40, img: '/images/fleet/Bus 40 Pax.svg' },
];

const FEATURES = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    titleKey: 'comfortTransport.feature1Title',
    descKey: 'comfortTransport.feature1Desc',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 01.75 12c0 6.627 5.373 12 12 12s12-5.373 12-12c0-2.814-.97-5.404-2.598-7.5" />
      </svg>
    ),
    titleKey: 'comfortTransport.feature2Title',
    descKey: 'comfortTransport.feature2Desc',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    titleKey: 'comfortTransport.feature3Title',
    descKey: 'comfortTransport.feature3Desc',
  },
];

const MODALITIES = [
  {
    titleKey: 'comfortTransport.modalityAirportTitle',
    descKey: 'comfortTransport.modalityAirportDesc',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
      </svg>
    ),
  },
  {
    titleKey: 'comfortTransport.modalityHoursTitle',
    descKey: 'comfortTransport.modalityHoursDesc',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function ComfortPage() {
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
          <p className="text-primary text-xs font-light tracking-[0.4em] uppercase mb-6">
            ›&nbsp;&nbsp;{t('comfortTransport.eyebrow')}
          </p>
          <h1 className="text-4xl sm:text-6xl font-light text-white tracking-tight max-w-2xl leading-tight mb-6">
            {t('comfortTransport.heroTitle')}
          </h1>
          <p className="text-sm font-light text-white/50 max-w-lg leading-relaxed mb-10">
            {t('comfortTransport.heroSubtitle')}
          </p>
          <Link
            href="/reservas"
            className="inline-flex items-center px-10 py-4 bg-primary text-white text-xs font-light tracking-widest hover:bg-primary/80 transition-colors rounded-2xl"
          >
            {t('comfortTransport.heroCta')}
          </Link>
        </div>
      </section>

      {/* About + Features */}
      <section className="py-24 bg-[#f9f9fe] px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-primary text-xs font-light tracking-[0.4em] uppercase mb-4">
                ›&nbsp;&nbsp;{t('comfortTransport.aboutEyebrow')}
              </p>
              <h2 className="text-3xl sm:text-4xl font-light text-foreground tracking-tight mb-6">
                {t('comfortTransport.aboutTitle')}
              </h2>
              <p className="text-sm font-light text-foreground/50 leading-relaxed">
                {t('comfortTransport.aboutDesc')}
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
              ›&nbsp;&nbsp;{t('comfortTransport.fleetEyebrow')}
            </p>
            <h2 className="text-3xl sm:text-4xl font-light text-foreground tracking-tight">
              {t('comfortTransport.fleetTitle')}
            </h2>
            <p className="mt-3 text-sm font-light text-foreground/40 max-w-lg">
              {t('comfortTransport.fleetSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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

      {/* Modalities */}
      <section className="py-24 bg-[#f9f9fe] px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-14">
            <p className="text-primary text-xs font-light tracking-[0.4em] uppercase mb-4">
              ›&nbsp;&nbsp;{t('comfortTransport.modalityEyebrow')}
            </p>
            <h2 className="text-3xl sm:text-4xl font-light text-foreground tracking-tight">
              {t('comfortTransport.modalityTitle')}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
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

      {/* Related services */}
      <RelatedServices exclude="comfort" />

      {/* CTA */}
      <section className="py-24 bg-primary px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight mb-4">
            {t('comfortTransport.ctaTitle')}
          </h2>
          <p className="text-sm font-light text-white/60 mb-10 max-w-md mx-auto leading-relaxed">
            {t('comfortTransport.ctaSubtitle')}
          </p>
          <Link
            href="/reservas"
            className="inline-flex items-center px-10 py-4 bg-white text-primary text-xs font-light tracking-widest hover:bg-white/90 transition-colors rounded-2xl"
          >
            {t('comfortTransport.ctaButton')}
          </Link>
        </div>
      </section>
    </main>
  );
}
