'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import i18n from '@/lib/i18n';

const transportLinks = [
  { key: 'nav.transportLuxury', href: '/transporte-luxury' },
  { key: 'nav.transportComfort', href: '/transporte-confort' },
  { key: 'nav.transportAir', href: '/transporte-aereo' },
];

export default function NavbarClient() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
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
        isScrolled ? 'bg-background/95 backdrop-blur-sm border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 group">
            <span className="text-primary text-xl font-light">›</span>
            <span className="text-foreground font-bold text-2xl tracking-widest uppercase">RZ</span>
            <div className="flex flex-col leading-none ml-1">
              <span className="text-foreground font-light text-base tracking-[0.3em] uppercase">GROUP</span>
              <span className="text-muted-foreground font-light text-[7px] tracking-[0.15em] uppercase">
                Exclusive Transportation S.A.S.
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-light tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('nav.home')}
            </Link>

            {/* Transporte dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-light tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors">
                {t('nav.transport')}
                <ChevronDownIcon
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {dropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-52 bg-card border border-border rounded-sm shadow-xl py-1">
                  {transportLinks.map(({ key, href }) => (
                    <Link
                      key={href}
                      href={href}
                      className="block px-4 py-2.5 text-xs font-light tracking-widest uppercase text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                    >
                      {t(key)}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/seguridad-privada"
              className="text-sm font-light tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('nav.security')}
            </Link>

            <Link
              href="/contactanos"
              className="text-sm font-light tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('nav.contact')}
            </Link>
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-4">
            {/* Language toggle */}
            <button
              onClick={toggleLang}
              className="text-xs font-light tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors border border-border px-2 py-1 rounded-sm"
            >
              {i18n.language === 'es' ? 'EN' : 'ES'}
            </button>

            {/* CTA */}
            <Link
              href="/contactanos"
              className="hidden lg:inline-flex items-center px-5 py-2 bg-primary text-primary-foreground text-xs font-light tracking-widest uppercase hover:bg-brand-wine-light transition-colors rounded-sm"
            >
              {t('common.bookNow')}
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-muted-foreground hover:text-foreground transition-colors"
            >
              {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-card border-t border-border">
          <div className="px-4 py-6 space-y-1">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="block py-3 text-sm font-light tracking-widest uppercase text-muted-foreground hover:text-foreground border-b border-border"
            >
              {t('nav.home')}
            </Link>

            <div className="py-3 border-b border-border">
              <p className="text-sm font-light tracking-widest uppercase text-muted-foreground mb-2">
                {t('nav.transport')}
              </p>
              <div className="pl-4 space-y-1">
                {transportLinks.map(({ key, href }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-xs font-light tracking-widest uppercase text-muted-foreground hover:text-foreground"
                  >
                    {t(key)}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/seguridad-privada"
              onClick={() => setIsOpen(false)}
              className="block py-3 text-sm font-light tracking-widest uppercase text-muted-foreground hover:text-foreground border-b border-border"
            >
              {t('nav.security')}
            </Link>

            <Link
              href="/contactanos"
              onClick={() => setIsOpen(false)}
              className="block py-3 text-sm font-light tracking-widest uppercase text-muted-foreground hover:text-foreground border-b border-border"
            >
              {t('nav.contact')}
            </Link>

            <div className="pt-4">
              <Link
                href="/contactanos"
                onClick={() => setIsOpen(false)}
                className="block text-center px-5 py-3 bg-primary text-primary-foreground text-xs font-light tracking-widest uppercase rounded-sm"
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
