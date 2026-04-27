'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { ArrowDownIcon } from '@heroicons/react/24/outline';

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#070d0f]">
      {/* Background image */}
      <Image
        src="/images/hero/Homepage_image.svg"
        alt=""
        fill
        priority
        className="object-cover object-center"
        aria-hidden
      />
      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-[#070d0f]/70" />
      {/* Warm gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 65% 55%, #5b201f33 0%, transparent 65%)',
        }}
      />
      {/* Decorative oversized chevron */}
      <div
        className="absolute right-[-2vw] top-1/2 -translate-y-1/2 select-none pointer-events-none leading-none font-bold text-white"
        style={{ fontSize: 'clamp(12rem, 28vw, 30rem)', opacity: 0.03 }}
        aria-hidden
      >
        ›
      </div>
      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-primary/60 via-primary/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p className="text-primary text-xs font-light tracking-[0.4em] uppercase mb-8">
            ›&nbsp;&nbsp;RZ Group — Exclusive Transportation S.A.S.
          </p>

          {/* H1 */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.5rem] font-light text-white leading-[1.1] tracking-tight mb-8">
            {t('home.hero.title')}
          </h1>

          {/* Divider */}
          <div className="w-16 h-px bg-primary mb-8" />

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-white/60 font-light leading-relaxed max-w-xl mb-12">
            {t('home.hero.subtitle')}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contactanos"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground text-xs font-light tracking-[0.3em] uppercase hover:bg-secondary transition-colors"
            >
              {t('home.hero.cta')}
            </Link>
            <Link
              href="#servicios"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white text-xs font-light tracking-[0.3em] uppercase hover:border-primary hover:text-primary transition-colors"
            >
              {t('home.hero.ctaSecondary')}
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <ArrowDownIcon className="w-4 h-4 text-white/40" />
      </div>
    </section>
  );
}
