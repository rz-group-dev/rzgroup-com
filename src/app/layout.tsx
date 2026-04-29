import type { Metadata } from 'next';
import { Jost } from 'next/font/google';
import I18nProvider from '@/components/I18nProvider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import './globals.css';

const jost = Jost({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rzgroupsas.com'),
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
    url: 'https://rzgroupsas.com',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'RZ Group SAS — Transporte VIP y Seguridad Privada' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${jost.variable} h-full`}>
      <body className="min-h-full flex flex-col">
        <I18nProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
