'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import {
  TruckIcon,
  GlobeAltIcon,
  PaperAirplaneIcon,
  ShieldCheckIcon,
  BriefcaseIcon,
  KeyIcon,
} from '@heroicons/react/24/outline';

const services = [
  {
    icon: TruckIcon,
    titleKey: 'services.luxury.title',
    descKey: 'services.luxury.description',
    href: '/transporte-luxury',
  },
  {
    icon: GlobeAltIcon,
    titleKey: 'services.comfort.title',
    descKey: 'services.comfort.description',
    href: '/transporte-confort',
  },
  {
    icon: PaperAirplaneIcon,
    titleKey: 'services.air.title',
    descKey: 'services.air.description',
    href: '/transporte-aereo',
  },
  {
    icon: ShieldCheckIcon,
    titleKey: 'services.security.title',
    descKey: 'services.security.description',
    href: '/seguridad-privada',
  },
  {
    icon: BriefcaseIcon,
    titleKey: 'services.travel.title',
    descKey: 'services.travel.description',
    href: '/contactanos',
  },
  {
    icon: KeyIcon,
    titleKey: 'services.suv.title',
    descKey: 'services.suv.description',
    href: '/renting-suv',
  },
];

export default function ServicesSection() {
  const { t } = useTranslation();

  return (
    <section id="servicios" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <p className="text-primary text-xs font-light tracking-[0.4em] uppercase mb-4">
            ›&nbsp;&nbsp;{t('home.services.title')}
          </p>
          <h2 className="text-3xl sm:text-4xl font-light text-foreground tracking-tight max-w-lg">
            {t('home.services.subtitle')}
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map(({ icon: Icon, titleKey, descKey, href }) => (
            <Link
              key={href}
              href={href}
              className="group bg-background p-10 flex flex-col gap-6 hover:bg-card transition-colors"
            >
              <div className="w-9 h-9 text-primary">
                <Icon className="w-full h-full" strokeWidth={1.25} />
              </div>

              <div className="flex-1">
                <h3 className="text-base font-light tracking-wide text-foreground mb-3">
                  {t(titleKey)}
                </h3>
                <p className="text-sm font-light text-muted-foreground leading-relaxed">
                  {t(descKey)}
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-light tracking-[0.25em] uppercase text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                <span>{t('home.services.learnMore')}</span>
                <span>›</span>
              </div>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}
