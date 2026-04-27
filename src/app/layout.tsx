import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import I18nProvider from '@/components/I18nProvider';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'RZ Group SAS — Transporte VIP y Seguridad Privada',
    template: '%s | RZ Group SAS',
  },
  description:
    'Servicios de transporte VIP y seguridad privada de alto perfil en Colombia y EE.UU. Conductores profesionales, flota de lujo y guardaespaldas con experiencia militar.',
  keywords: ['transporte VIP', 'seguridad privada', 'conductor privado', 'transporte de lujo', 'Colombia', 'Bogotá'],
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    alternateLocale: 'en_US',
    siteName: 'RZ Group SAS',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} h-full`}>
      <body className="min-h-full flex flex-col">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
