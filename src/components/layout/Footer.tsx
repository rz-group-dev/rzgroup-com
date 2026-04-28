'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

const socialLinks = [
  {
    label: 'reservas@rzgroupsas.com',
    href: 'mailto:reservas@rzgroupsas.com',
    icon: EnvelopeIcon,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/rzgroup_/',
    icon: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/rz-group-co',
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.22 0z"/>
      </svg>
    ),
  },
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
            <Link href="/" className="flex items-center mb-6">
              <Image
                src="/Logo.svg"
                alt="RZ Group"
                width={150}
                height={52}
                className="brightness-0 invert"
              />
            </Link>
            <p className="text-white/50 text-sm font-light leading-relaxed">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Redes sociales */}
          <div>
            <h3 className="text-xs font-light tracking-[0.3em] uppercase text-white/40 mb-6">
              {t('footer.social')}
            </h3>
            <ul className="space-y-4">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <li key={href} className="flex items-center gap-3">
                  <span className="text-primary"><Icon /></span>
                  <a
                    href={href}
                    target={href.startsWith('mailto') ? undefined : '_blank'}
                    rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                    className="text-sm font-light text-white/60 hover:text-white transition-colors"
                  >
                    {label}
                  </a>
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
