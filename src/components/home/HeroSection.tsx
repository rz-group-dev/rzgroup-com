'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { ArrowDownIcon } from '@heroicons/react/24/outline';

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-background" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 70% 50%, oklch(0.42 0.14 12 / 0.08) 0%, transparent 70%)',
        }}
      />
      {/* Decorative oversized chevron */}
      <div
        className="absolute right-[-2vw] top-1/2 -translate-y-1/2 select-none pointer-events-none leading-none font-bold text-primary"
        style={{ fontSize: 'clamp(12rem, 28vw, 28rem)', opacity: 0.04 }}
        aria-hidden
      >
        ›
      </div>
      {/* Horizontal rule accent */}
      <div className="absolute left-0 bottom-0 h-px w-full bg-gradient-to-r from-primary/40 via-primary/10 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p className="text-primary text-xs font-light tracking-[0.4em] uppercase mb-8">
            ›&nbsp;&nbsp;RZ Group SAS
          </p>

          {/* H1 */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-foreground leading-[1.1] tracking-tight mb-8">
            {t('home.hero.title')}
          </h1>

          {/* Divider */}
          <div className="w-16 h-px bg-primary mb-8" />

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed max-w-xl mb-12">
            {t('home.hero.subtitle')}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contactanos"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground text-xs font-light tracking-[0.3em] uppercase hover:bg-[oklch(0.52_0.14_12)] transition-colors"
            >
              {t('home.hero.cta')}
            </Link>
            <Link
              href="#servicios"
              className="inline-flex items-center justify-center px-8 py-4 border border-border text-foreground text-xs font-light tracking-[0.3em] uppercase hover:border-primary hover:text-primary transition-colors"
            >
              {t('home.hero.ctaSecondary')}
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <ArrowDownIcon className="w-4 h-4 text-muted-foreground" />
      </div>
    </section>
  );
}
