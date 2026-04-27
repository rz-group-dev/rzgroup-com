'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { PhoneIcon } from '@heroicons/react/24/outline';

export default function CtaSection() {
  const { t } = useTranslation();

  return (
    <section className="py-32 relative overflow-hidden bg-primary">
      {/* Decorative chevron */}
      <div
        className="absolute right-[-2vw] top-1/2 -translate-y-1/2 select-none pointer-events-none leading-none font-bold text-primary-foreground"
        style={{ fontSize: 'clamp(12rem, 24vw, 24rem)', opacity: 0.04 }}
        aria-hidden
      >
        ›
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-primary-foreground/60 text-xs font-light tracking-[0.4em] uppercase mb-6">
          ›&nbsp;&nbsp;RZ Group SAS
        </p>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-primary-foreground tracking-tight mb-6 max-w-2xl mx-auto">
          {t('home.cta.title')}
        </h2>

        <div className="w-12 h-px bg-primary-foreground/40 mx-auto mb-8" />

        <p className="text-primary-foreground/70 font-light text-base max-w-md mx-auto mb-12">
          {t('home.cta.subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contactanos"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-foreground text-primary text-xs font-light tracking-[0.3em] uppercase hover:bg-primary-foreground/90 transition-colors"
          >
            {t('home.cta.button')}
          </Link>
          <a
            href="tel:+573115904808"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-primary-foreground/40 text-primary-foreground text-xs font-light tracking-[0.3em] uppercase hover:border-primary-foreground transition-colors"
          >
            <PhoneIcon className="w-4 h-4" />
            +57 311 590 4808
          </a>
        </div>
      </div>
    </section>
  );
}
