import type { MetadataRoute } from 'next';

const BASE_URL = 'https://rzgroupsas.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { url: '/', priority: 1.0, changeFrequency: 'monthly' as const },
    { url: '/transporte-luxury', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/transporte-confort', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/seguridad-privada', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/rent-a-car', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/transporte-aereo', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/reservas', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/contactanos', priority: 0.7, changeFrequency: 'monthly' as const },
  ];

  return routes.map(({ url, priority, changeFrequency }) => ({
    url: `${BASE_URL}${url}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
