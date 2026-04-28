'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const ALL_SERVICES = [
  {
    id: 'luxury',
    titleKey: 'services.luxury.title',
    descKey: 'services.luxury.description',
    href: '/transporte-luxury',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
  {
    id: 'comfort',
    titleKey: 'services.comfort.title',
    descKey: 'services.comfort.description',
    href: '/transporte-confort',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    id: 'air',
    titleKey: 'services.air.title',
    descKey: 'services.air.description',
    href: '/transporte-aereo',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
      </svg>
    ),
  },
  {
    id: 'security',
    titleKey: 'services.security.title',
    descKey: 'services.security.description',
    href: '/seguridad-privada',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 01.75 12c0 6.627 5.373 12 12 12s12-5.373 12-12c0-2.814-.97-5.404-2.598-7.5" />
      </svg>
    ),
  },
];

interface Props {
  exclude: string;
}

export default function RelatedServices({ exclude }: Props) {
  const { t } = useTranslation();
  const services = ALL_SERVICES.filter((s) => s.id !== exclude).slice(0, 3);

  return (
    <section className="py-24 bg-[#070d0f] px-4">
      <div className="max-w-4xl mx-auto">
        <p className="text-primary text-xs font-light tracking-[0.4em] uppercase mb-4">
          ›&nbsp;&nbsp;{t('common.relatedServices')}
        </p>
        <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight mb-14">
          {t('common.relatedServicesTitle')}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {services.map((s) => (
            <Link
              key={s.id}
              href={s.href}
              className="group border border-white/10 hover:border-primary p-8 transition-colors flex flex-col gap-5"
            >
              <div className="text-primary">{s.icon}</div>
              <div>
                <h3 className="text-sm font-light text-white mb-2">{t(s.titleKey)}</h3>
                <p className="text-xs font-light text-white/40 leading-relaxed">{t(s.descKey)}</p>
              </div>
              <div className="mt-auto flex items-center gap-2 text-primary text-xs font-light tracking-widest group-hover:gap-3 transition-all">
                {t('common.learnMore')}
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
