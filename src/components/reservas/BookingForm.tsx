'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const CITIES_BY_COUNTRY: Record<string, string[]> = {
  'Estados Unidos': ['Miami', 'New York'],
  'Puerto Rico': ['San Juan'],
  'Colombia': ['Bogotá', 'Medellín', 'Cartagena', 'Barranquilla', 'Santa Marta', 'Cali', 'Pereira', 'Manizales', 'Bucaramanga', 'Cúcuta'],
  'México': ['Ciudad de México', 'Cancún'],
  'Brasil': ['São Paulo', 'Río de Janeiro'],
  'Argentina': ['Buenos Aires', 'Bariloche'],
};

const SERVICE_CATEGORIES = [
  { value: 'luxury', label: 'Transporte Luxury' },
  { value: 'comfort', label: 'Transporte Confort' },
  { value: 'air', label: 'Transporte Aéreo' },
  { value: 'security', label: 'Seguridad Privada' },
  { value: 'rent-a-car', label: 'Rent a Car' },
];

const LUXURY_VEHICLES = [
  { value: 'tahoe-z71', label: 'Chevrolet Tahoe Z71', capacity: '7 pasajeros' },
  { value: 'tahoe-lt', label: 'Chevrolet Tahoe LT', capacity: '7 pasajeros' },
  { value: 'escalade', label: 'Cadillac Escalade', capacity: '7 pasajeros' },
  { value: 'mercedes-e250', label: 'Mercedes Benz E250', capacity: '5 pasajeros' },
  { value: 'sprinter-blindada', label: 'Sprinter Blindada', capacity: '15 pasajeros' },
  { value: 'toyota-blindada', label: 'Toyota Blindada', capacity: '7 pasajeros' },
];

const COMFORT_VEHICLES = [
  { value: 'duster', label: 'Renault Duster', capacity: '5 pasajeros' },
  { value: 'h1', label: 'Hyundai H1', capacity: '8 pasajeros' },
  { value: 'vito', label: 'Mercedes Vito', capacity: '8 pasajeros' },
  { value: 'sprinter', label: 'Mercedes Sprinter', capacity: '19 pasajeros' },
  { value: 'bus-40', label: 'Bus 40 Pasajeros', capacity: '40 pasajeros' },
];

const VEHICLES_BY_SERVICE: Record<string, typeof LUXURY_VEHICLES> = {
  luxury: LUXURY_VEHICLES,
  comfort: COMFORT_VEHICLES,
};

const MODALITY_TYPES = [
  { value: 'airport-transfer', label: 'Transfer Aeropuerto' },
  { value: '4h', label: 'Disponibilidad 4 horas' },
  { value: '6h', label: 'Disponibilidad 6 horas' },
  { value: '8h', label: 'Disponibilidad 8 horas' },
  { value: '12h', label: 'Disponibilidad 12 horas' },
];

const SERVICES_WITH_MODALITY = ['luxury', 'comfort', 'air'];

interface FormData {
  date: string;
  country: string;
  city: string;
  serviceCategory: string;
  vehicle: string;
  passengers: string;
  modality: string;
  pickupAddress: string;
  flightNumber: string;
  name: string;
  email: string;
  phone: string;
  notes: string;
}

const EMPTY_FORM: FormData = {
  date: '', country: '', city: '',
  serviceCategory: '', vehicle: '',
  passengers: '', modality: '', pickupAddress: '', flightNumber: '',
  name: '', email: '', phone: '', notes: '',
};

const inputClass = `
  w-full bg-transparent border-b border-foreground/20 py-3 text-foreground text-sm font-light
  placeholder:text-foreground/30 focus:outline-none focus:border-primary transition-colors
`.trim();

const selectClass = `
  w-full bg-[#f9f9fe] border-b border-foreground/20 py-3 text-sm font-light
  focus:outline-none focus:border-primary transition-colors cursor-pointer appearance-none
`.trim();

const labelClass = 'block text-[10px] font-light tracking-[0.3em] uppercase text-foreground/40 mb-2';


export default function BookingForm() {
  const { t } = useTranslation();
  const [form, setForm] = useState<FormData>(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const cities = form.country ? CITIES_BY_COUNTRY[form.country] ?? [] : [];
  const vehicles = form.serviceCategory ? VEHICLES_BY_SERVICE[form.serviceCategory] : null;
  const showModality = SERVICES_WITH_MODALITY.includes(form.serviceCategory);
  const isAirport = form.modality === 'airport-transfer';

  const set = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm(prev => ({ ...prev, [field]: e.target.value }));

  const setServiceCategory = (value: string) => {
    setForm(prev => ({ ...prev, serviceCategory: value, vehicle: '', modality: '', flightNumber: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const res = await fetch('/api/reservas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-[#f9f9fe] flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-12 h-12 rounded-full border border-primary flex items-center justify-center mx-auto mb-8">
            <span className="text-primary text-xl">✓</span>
          </div>
          <p className="text-primary text-xs tracking-[0.4em] uppercase mb-4">
            › {t('booking.successEyebrow')}
          </p>
          <h2 className="text-2xl font-light text-foreground mb-4">{t('booking.successTitle')}</h2>
          <p className="text-sm font-light text-foreground/50 leading-relaxed mb-10">
            {t('booking.successDesc')}
          </p>
          <Link
            href="/"
            className="inline-flex items-center px-8 py-4 bg-primary text-white text-xs font-light tracking-widest hover:bg-primary/80 transition-colors"
          >
            {t('booking.backHome')}
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f9f9fe]">
      {/* Header */}
      <div className="pt-40 pb-16 px-4 max-w-4xl mx-auto">
        <p className="text-primary text-xs font-light tracking-[0.4em] uppercase mb-4">
          ›&nbsp;&nbsp;{t('booking.eyebrow')}
        </p>
        <h1 className="text-4xl sm:text-5xl font-light text-foreground tracking-tight">
          {t('booking.title')}
        </h1>
        <p className="mt-4 text-sm font-light text-foreground/50 max-w-lg">
          {t('booking.subtitle')}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto px-4 pb-24">

        <div className="border-t border-foreground/10 mb-12" />

        {/* Sección 1: Fecha, País, Ciudad */}
        <div className="mb-12">
          <p className="text-[10px] font-light tracking-[0.4em] uppercase text-foreground/30 mb-8">
            01 — {t('booking.section1')}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-8">
            <div>
              <label className={labelClass}>{t('booking.date')}</label>
              <input
                type="date"
                required
                value={form.date}
                onChange={set('date')}
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>{t('booking.country')}</label>
              <div className="relative">
                <select
                  required
                  value={form.country}
                  onChange={(e) => setForm(prev => ({ ...prev, country: e.target.value, city: '' }))}
                  className={`${selectClass} ${form.country ? 'text-foreground' : 'text-foreground/30'}`}
                >
                  <option value="" disabled>{t('booking.selectCountry')}</option>
                  {Object.keys(CITIES_BY_COUNTRY).map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
                <span className="absolute right-0 top-3 text-foreground/30 pointer-events-none text-xs">›</span>
              </div>
            </div>
            <div>
              <label className={labelClass}>{t('booking.city')}</label>
              <div className="relative">
                <select
                  required
                  value={form.city}
                  onChange={set('city')}
                  disabled={!form.country}
                  className={`${selectClass} ${form.city ? 'text-foreground' : 'text-foreground/30'} disabled:opacity-30`}
                >
                  <option value="" disabled>{t('booking.selectCity')}</option>
                  {cities.map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
                <span className="absolute right-0 top-3 text-foreground/30 pointer-events-none text-xs">›</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-foreground/10 mb-12" />

        {/* Sección 2: Tipo de servicio */}
        <div className="mb-12">
          <p className="text-[10px] font-light tracking-[0.4em] uppercase text-foreground/30 mb-8">
            02 — {t('booking.section2')}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
            <div>
              <label className={labelClass}>{t('booking.serviceType')}</label>
              <div className="relative">
                <select
                  required
                  value={form.serviceCategory}
                  onChange={(e) => setServiceCategory(e.target.value)}
                  className={`${selectClass} ${form.serviceCategory ? 'text-foreground' : 'text-foreground/30'}`}
                >
                  <option value="" disabled>{t('booking.selectService')}</option>
                  {SERVICE_CATEGORIES.map(s => (
                    <option key={s.value} value={s.value}>{s.label}</option>
                  ))}
                </select>
                <span className="absolute right-0 top-3 text-foreground/30 pointer-events-none text-xs">›</span>
              </div>
            </div>

            {vehicles && (
              <div>
                <label className={labelClass}>{t('booking.selectVehicleLabel')}</label>
                <div className="relative">
                  <select
                    required
                    value={form.vehicle}
                    onChange={(e) => setForm(prev => ({ ...prev, vehicle: e.target.value }))}
                    className={`${selectClass} ${form.vehicle ? 'text-foreground' : 'text-foreground/30'}`}
                  >
                    <option value="" disabled>{t('booking.selectVehicle')}</option>
                    {vehicles.map(v => (
                      <option key={v.value} value={v.value}>{v.label} — {v.capacity}</option>
                    ))}
                  </select>
                  <span className="absolute right-0 top-3 text-foreground/30 pointer-events-none text-xs">›</span>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="border-t border-foreground/10 mb-12" />

        {/* Sección 3: Personas y modalidad */}
        <div className="mb-12">
          <p className="text-[10px] font-light tracking-[0.4em] uppercase text-foreground/30 mb-8">
            03 — {t('booking.section3')}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8 mb-8">
            <div>
              <label className={labelClass}>{t('booking.passengers')}</label>
              <input
                type="number"
                min="1"
                max="40"
                required
                value={form.passengers}
                onChange={set('passengers')}
                placeholder="Ej. 3"
                className={inputClass}
              />
            </div>

            {showModality && (
              <div>
                <label className={labelClass}>{t('booking.modality')}</label>
                <div className="relative">
                  <select
                    required={showModality}
                    value={form.modality}
                    onChange={set('modality')}
                    className={`${selectClass} ${form.modality ? 'text-foreground' : 'text-foreground/30'}`}
                  >
                    <option value="" disabled>{t('booking.selectService')}</option>
                    {MODALITY_TYPES.map(m => (
                      <option key={m.value} value={m.value}>{m.label}</option>
                    ))}
                  </select>
                  <span className="absolute right-0 top-3 text-foreground/30 pointer-events-none text-xs">›</span>
                </div>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
            <div>
              <label className={labelClass}>{t('booking.pickupAddress')}</label>
              <input
                type="text"
                required
                value={form.pickupAddress}
                onChange={set('pickupAddress')}
                placeholder={t('booking.pickupAddressPlaceholder')}
                className={inputClass}
              />
            </div>

            {isAirport && (
              <div>
                <label className={labelClass}>{t('booking.flightNumber')}</label>
                <input
                  type="text"
                  value={form.flightNumber}
                  onChange={set('flightNumber')}
                  placeholder="Ej. AA1234"
                  className={inputClass}
                />
              </div>
            )}
          </div>
        </div>

        <div className="border-t border-foreground/10 mb-12" />

        {/* Sección 4: Datos de contacto */}
        <div className="mb-12">
          <p className="text-[10px] font-light tracking-[0.4em] uppercase text-foreground/30 mb-8">
            04 — {t('booking.section4')}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-8 mb-8">
            <div>
              <label className={labelClass}>{t('contact.form.name')}</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={set('name')}
                placeholder="Tu nombre completo"
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>{t('contact.form.email')}</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={set('email')}
                placeholder="correo@ejemplo.com"
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>{t('contact.form.phone')}</label>
              <input
                type="tel"
                value={form.phone}
                onChange={set('phone')}
                placeholder="+57 300 000 0000"
                className={inputClass}
              />
            </div>
          </div>
          <div>
            <label className={labelClass}>{t('contact.form.message')}</label>
            <textarea
              rows={3}
              value={form.notes}
              onChange={set('notes')}
              placeholder={t('booking.notesPlaceholder')}
              className={`${inputClass} resize-none`}
            />
          </div>
        </div>

        {/* Submit */}
        <div className="flex items-center gap-6 flex-wrap">
          <button
            type="submit"
            disabled={loading || !form.serviceCategory}
            className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-white text-xs font-light tracking-widest hover:bg-primary/80 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {loading ? t('common.loading') : t('booking.submit')}
          </button>
          {error ? (
            <p className="text-[10px] font-light text-red-500">{t('common.error')}</p>
          ) : (
            <p className="text-[10px] font-light text-foreground/30">{t('booking.submitNote')}</p>
          )}
        </div>
      </form>
    </main>
  );
}
