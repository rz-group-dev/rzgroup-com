'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import i18n from '@/lib/i18n';

const OPAQUE_ROUTES = ['/reservas', '/contactanos'];

const serviceLinks = [
  { key: 'nav.transportLuxury', href: '/transporte-luxury' },
  { key: 'nav.transportComfort', href: '/transporte-confort' },
  { key: 'nav.transportAir', href: '/transporte-aereo' },
  { key: 'nav.security', href: '/seguridad-privada' },
  { key: 'nav.suvRental', href: '/rent-a-car' },
];

export default function NavbarClient() {
  const { t } = useTranslation();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const alwaysOpaque = OPAQUE_ROUTES.includes(pathname);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleLang = () => {
    const next = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(next);
    localStorage.setItem('lang', next);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || alwaysOpaque ? 'bg-black shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/Logo.svg"
              alt="RZ Group"
              width={185}
              height={64}
              priority
              className="brightness-0 invert"
            />
          </Link>

          {/* Right actions */}
          <div className="flex items-center gap-4">
            {/* CTA */}
            <Link
              href="/reservas"
              className="inline-flex items-center px-5 py-2.5 bg-primary text-primary-foreground text-xs font-light tracking-widest hover:bg-secondary transition-colors"
            >
              {t('common.bookNow')}
            </Link>

            {/* Language toggle */}
            <button
              onClick={toggleLang}
              className="text-xs font-light tracking-widest text-white/80 hover:text-primary transition-colors border border-white/30 px-2 py-1"
            >
              {i18n.language === 'es' ? 'EN' : 'ES'}
            </button>

            {/* Hamburger menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white/80 hover:text-primary transition-colors"
            >
              {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Slide-in panel from right */}
      <div
        className={`fixed top-0 right-0 h-full w-110 bg-black z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close button */}
        <div className="flex justify-end px-4 pt-8 pb-6">
          <button
            onClick={() => setIsOpen(false)}
            className="text-white/80 hover:text-primary transition-colors"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>

        <div className="px-6 space-y-1">
          {/* Nuestros servicios */}
          <div className="py-3 border-b border-white/10">
            <p className="text-sm font-light tracking-widest text-white/70 mb-2">
              {t('nav.services')}
            </p>
            <div className="pl-4 space-y-1">
              {serviceLinks.map(({ key, href }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-xs font-light tracking-widest text-white/60 hover:text-primary"
                >
                  {t(key)}
                </Link>
              ))}
            </div>
          </div>

          <div className="pt-4">
            <Link
              href="/reservas"
              onClick={() => setIsOpen(false)}
              className="block text-center px-5 py-3 bg-primary text-primary-foreground text-xs font-light tracking-widest"
            >
              {t('common.bookNow')}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
