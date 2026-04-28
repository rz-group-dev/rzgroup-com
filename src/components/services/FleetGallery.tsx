'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

interface GalleryVehicle {
  name: string;
  year: string;
  category: string;
  seats: number;
  images: string[];
}

const VEHICLES: GalleryVehicle[] = [
  { name: 'Cadillac Escalade',          year: '2023', category: 'fleet.luxury',    seats: 7,  images: ['/images/fleet/Luxury_page/Cadillac Escalade.svg'] },
  { name: 'Mercedes Benz E250',         year: '2023', category: 'fleet.executive', seats: 5,  images: ['/images/fleet/Luxury_page/Mercedes Benz E250.svg'] },
  { name: 'Mercedes Sprinter Blindada', year: '2023', category: 'fleet.premium',   seats: 15, images: ['/images/fleet/Luxury_page/Merdes Sprinter Blindada.svg'] },
  { name: 'Mercedes Sprinter',          year: '2023', category: 'fleet.van',       seats: 15, images: ['/images/fleet/Luxury_page/Merdes Sprinter.svg'] },
  { name: 'Toyota Prado Blindada',      year: '2023', category: 'fleet.premium',   seats: 7,  images: ['/images/fleet/Luxury_page/Toyota Prado Blindada.svg'] },
  { name: 'Ford Expedition',            year: '2023', category: 'fleet.luxury',    seats: 7,  images: ['/images/fleet/Luxury_page/Ford Expedition.svg'] },
];

export default function FleetGallery() {
  const { t } = useTranslation();
  const [selected, setSelected] = useState(0);
  const stripRef = useRef<HTMLDivElement>(null);

  const vehicle = VEHICLES[selected];
  const hasMultiple = vehicle.images.length > 1;

  const scrollStrip = () => {
    stripRef.current?.scrollBy({ left: 320, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-2">
        <div className="flex items-center gap-2 mb-2">
          <p className="text-primary text-xs font-light tracking-[0.4em] uppercase">
            ›&nbsp;&nbsp;{t('luxuryTransport.vehiclesLabel')}
          </p>
        </div>
        <p className="text-xl sm:text-2xl font-light text-foreground">
          {vehicle.name}
        </p>
      </div>

      {/* Main display */}
      <div className={`gap-2 mb-0 ${hasMultiple ? 'grid grid-cols-[3fr_2fr]' : 'block'}`}>
        {/* Primary image */}
        <div className="relative aspect-[16/9] bg-[#fffff] overflow-hidden">
          <Image
            src={vehicle.images[0]}
            alt={vehicle.name}
            fill
            className="object-contain scale-120"
          />
        </div>

        {/* Secondary images — only rendered when a vehicle has multiple images */}
        {hasMultiple && (
          <div className="grid grid-rows-3 gap-2">
            {vehicle.images.slice(1, 4).map((img, i) => (
              <div key={i} className="relative bg-[#f9f9fe] overflow-hidden">
                <Image
                  src={img}
                  alt={`${vehicle.name} — detalle ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Thumbnail strip */}
      <div className="relative">
        <div
          ref={stripRef}
          className="flex gap-3 overflow-x-auto pr-12"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {VEHICLES.map((v, i) => (
            <button
              key={v.name}
              onClick={() => setSelected(i)}
              className={`shrink-0 w-36 text-left transition-all duration-200 ${
                i === selected ? 'opacity-100' : 'opacity-40 hover:opacity-65'
              }`}
            >
              <span className="text-[9px] font-light tracking-[0.2em] uppercase text-primary block mb-1 truncate">
                {t(v.category)}
              </span>
              <div
                className={`relative aspect-[4/3] bg-[#f9f9fe] border transition-colors ${
                  i === selected ? 'border-primary' : 'border-foreground/10'
                }`}
              >
                <Image
                  src={v.images[0]}
                  alt={v.name}
                  fill
                  className="object-contain p-2"
                />
              </div>
              <p className="text-[10px] font-light text-foreground/50 mt-1 truncate">{v.name}</p>
            </button>
          ))}
        </div>

        {/* Scroll arrow */}
        <button
          onClick={scrollStrip}
          className="absolute right-0 top-[40%] -translate-y-1/2 w-8 h-8 bg-white border border-foreground/10 flex items-center justify-center text-foreground/50 hover:text-foreground transition-colors shadow-sm"
          aria-label="Ver más vehículos"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

    </div>
  );
}
