'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import i18n from '@/lib/i18n';

const OPAQUE_ROUTES = ['/reservas', '/contactanos'];

const serviceLinks = [
  { key: 'nav.transportLuxury', href: '/transporte-luxury' },
  { key: 'nav.transportComfort', href: '/transporte-confort' },
  { key: 'nav.transportAir', href: '/transporte-aereo' },
  { key: 'nav.security', href: '/seguridad-privada' },
  { key: 'nav.suvRental', href: '/renting-suv' },
];

export default function NavbarClient() {
  const { t } = useTranslation();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

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

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">

            {/* Nuestros servicios dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-light tracking-widest text-white/80 hover:text-primary transition-colors">
                {t('nav.services')}
                <ChevronDownIcon
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {dropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white border border-border shadow-lg py-1">
                  {serviceLinks.map(({ key, href }) => (
                    <Link
                      key={href}
                      href={href}
                      className="block px-4 py-2.5 text-xs font-light tracking-widest text-foreground/70 hover:text-primary hover:bg-muted transition-colors"
                    >
                      {t(key)}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/contactanos"
              className="text-sm font-light tracking-widest text-white/80 hover:text-primary transition-colors"
            >
              {t('nav.contact')}
            </Link>
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-4">
            {/* CTA */}
            <Link
              href="/reservas"
              className="hidden lg:inline-flex items-center px-5 py-2.5 bg-primary text-primary-foreground text-xs font-light tracking-widest hover:bg-secondary transition-colors"
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

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white/80 hover:text-primary transition-colors"
            >
              {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-black border-t border-white/10 shadow-lg">
          <div className="px-4 py-6 space-y-1">

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

            <Link
              href="/contactanos"
              onClick={() => setIsOpen(false)}
              className="block py-3 text-sm font-light tracking-widest text-white/70 hover:text-primary border-b border-white/10"
            >
              {t('nav.contact')}
            </Link>

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
      )}
    </header>
  );
}
