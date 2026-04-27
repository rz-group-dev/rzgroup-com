'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

const serviceLinks = [
  { key: 'nav.transportLuxury', href: '/transporte-luxury' },
  { key: 'nav.transportComfort', href: '/transporte-confort' },
  { key: 'nav.transportAir', href: '/transporte-aereo' },
  { key: 'nav.security', href: '/seguridad-privada' },
];

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#070d0f] border-t border-white/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Logo & tagline */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-1 mb-6">
              <span className="text-primary text-xl font-light">›</span>
              <span className="text-white font-bold text-2xl tracking-widest uppercase">RZ</span>
              <div className="flex flex-col leading-none ml-1">
                <span className="text-white font-light text-base tracking-[0.3em] uppercase">GROUP</span>
                <span className="text-white/40 font-light text-[7px] tracking-[0.15em] uppercase">
                  Exclusive Transportation S.A.S.
                </span>
              </div>
            </Link>
            <p className="text-white/50 text-sm font-light leading-relaxed">
              {t('home.hero.subtitle')}
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-light tracking-[0.3em] uppercase text-white/40 mb-6">
              {t('home.services.title')}
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map(({ key, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm font-light text-white/60 hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <span className="text-primary text-xs">›</span>
                    {t(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Bogotá */}
          <div>
            <h3 className="text-xs font-light tracking-[0.3em] uppercase text-white/40 mb-6">
              {t('contact.bogota')}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPinIcon className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-sm font-light text-white/60">Cra. 18 # 93a-04</span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon className="w-4 h-4 text-primary shrink-0" />
                <a
                  href="tel:+573115904808"
                  className="text-sm font-light text-white/60 hover:text-white transition-colors"
                >
                  +57 311 590 4808
                </a>
              </li>
              <li className="flex items-center gap-3">
                <EnvelopeIcon className="w-4 h-4 text-primary shrink-0" />
                <a
                  href="mailto:reservas@rzgroupsas.com"
                  className="text-sm font-light text-white/60 hover:text-white transition-colors"
                >
                  reservas@rzgroupsas.com
                </a>
              </li>
            </ul>
          </div>

          {/* New York */}
          <div>
            <h3 className="text-xs font-light tracking-[0.3em] uppercase text-white/40 mb-6">
              {t('contact.newYork')}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPinIcon className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-sm font-light text-white/60">
                  837 Jersey Ave, Oficina 20C
                </span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon className="w-4 h-4 text-primary shrink-0" />
                <a
                  href="tel:+13392313338"
                  className="text-sm font-light text-white/60 hover:text-white transition-colors"
                >
                  +1 339 231 3338
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-light text-white/30 tracking-wide">
            © {year} RZ Group SAS. {t('footer.rights')}
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/politica-privacidad"
              className="text-xs font-light text-white/30 hover:text-white/60 transition-colors"
            >
              {t('footer.privacy')}
            </Link>
            <Link
              href="/politica-cookies"
              className="text-xs font-light text-white/30 hover:text-white/60 transition-colors"
            >
              {t('footer.cookies')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
