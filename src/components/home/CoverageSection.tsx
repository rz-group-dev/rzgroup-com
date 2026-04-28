'use client';

import { useState } from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup, Marker } from 'react-simple-maps';
import { useTranslation } from 'react-i18next';

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

type CountryKey = 'usa' | 'puertorico' | 'colombia' | 'mexico' | 'brasil' | 'argentina';

interface City {
  name: string;
  coords: [number, number];
}

interface CountryData {
  id: string;
  name: string;
  center: [number, number];
  zoom: number;
  cities: City[];
}

const COVERAGE: Record<CountryKey, CountryData> = {
  usa: {
    id: '840',
    name: 'Estados Unidos',
    center: [-90, 39],
    zoom: 2,
    cities: [
      { name: 'New York', coords: [-74.006, 40.7128] },
      { name: 'Miami', coords: [-80.1918, 25.7617] },
    ],
  },
  puertorico: {
    id: '630',
    name: 'Puerto Rico',
    center: [-66.5, 18.2],
    zoom: 15,
    cities: [
      { name: 'San Juan', coords: [-66.1057, 18.4655] },
    ],
  },
  colombia: {
    id: '170',
    name: 'Colombia',
    center: [-73, 8],
    zoom: 9,
    cities: [
      { name: 'Bogotá', coords: [-74.0721, 4.7110] },
      { name: 'Medellín', coords: [-75.5636, 6.2518] },
      { name: 'Cartagena', coords: [-75.5144, 10.3910] },
      { name: 'Barranquilla', coords: [-74.7964, 10.9685] },
      { name: 'Santa Marta', coords: [-74.2073, 11.2408] },
      { name: 'Cali', coords: [-76.5320, 3.4516] },
      { name: 'Pereira', coords: [-75.6961, 4.8133] },
      { name: 'Manizales', coords: [-75.5136, 5.0703] },
      { name: 'Bucaramanga', coords: [-73.1198, 7.1254] },
      { name: 'Cúcuta', coords: [-72.5078, 7.8939] },
    ],
  },
  mexico: {
    id: '484',
    name: 'México',
    center: [-95, 24],
    zoom: 4,
    cities: [
      { name: 'Ciudad de México', coords: [-99.1332, 19.4326] },
      { name: 'Cancún', coords: [-86.8515, 21.1619] },
    ],
  },
  brasil: {
    id: '076',
    name: 'Brasil',
    center: [-52, -10],
    zoom: 3,
    cities: [
      { name: 'São Paulo', coords: [-46.6333, -23.5505] },
      { name: 'Río de Janeiro', coords: [-43.1729, -22.9068] },
    ],
  },
  argentina: {
    id: '032',
    name: 'Argentina',
    center: [-64, -34],
    zoom: 3,
    cities: [
      { name: 'Buenos Aires', coords: [-58.3816, -34.6037] },
      { name: 'Bariloche', coords: [-71.3103, -41.1335] },
    ],
  },
};

const ID_TO_KEY: Record<string, CountryKey> = Object.entries(COVERAGE).reduce(
  (acc, [key, val]) => ({ ...acc, [val.id]: key as CountryKey }),
  {} as Record<string, CountryKey>
);

const DEFAULT_POSITION = { center: [-88, 15] as [number, number], zoom: 1 };

export default function CoverageSection() {
  const { t } = useTranslation();
  const [selectedKey, setSelectedKey] = useState<CountryKey | null>(null);
  const [position, setPosition] = useState(DEFAULT_POSITION);
  const [activeCity, setActiveCity] = useState<string | null>(null);

  const handleSelect = (key: CountryKey) => {
    if (selectedKey === key) {
      setSelectedKey(null);
      setPosition(DEFAULT_POSITION);
      setActiveCity(null);
    } else {
      setSelectedKey(key);
      setPosition({ center: COVERAGE[key].center, zoom: COVERAGE[key].zoom });
      setActiveCity(null);
    }
  };

  const selected = selectedKey ? COVERAGE[selectedKey] : null;

  return (
    <section className="py-24 bg-[#f9f9fe]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12">
          <p className="text-primary text-xs font-light tracking-[0.4em] uppercase mb-4">
            ›&nbsp;&nbsp;{t('coverage.eyebrow')}
          </p>
          <h2 className="text-3xl sm:text-4xl font-light text-foreground tracking-tight">
            {t('coverage.title')}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Mapa */}
          <div className="overflow-hidden rounded-sm">
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{ scale: 350 }}
              viewBox="0 0 750 850"
              style={{ width: '100%', height: 'auto' }}
            >
              <ZoomableGroup
                center={position.center}
                zoom={position.zoom}
                onMoveEnd={({ coordinates, zoom }: { coordinates: [number, number]; zoom: number }) =>
                  setPosition({ center: coordinates, zoom })
                }
              >
                <Geographies geography={GEO_URL}>
                  {({ geographies }: { geographies: { rsmKey: string; id: string | number; properties: Record<string, unknown> }[] }) =>
                    geographies.map((geo) => {
                      const geoKey = ID_TO_KEY[String(geo.id)];
                      const isCovered = !!geoKey;
                      const isSelected = geoKey === selectedKey;
                      return (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          onClick={() => geoKey && handleSelect(geoKey)}
                          fill={isSelected ? '#3d1515' : isCovered ? '#5b201f' : '#d4d4d4'}
                          stroke="#fff"
                          strokeWidth={0.5}
                          style={{
                            default: { outline: 'none', cursor: isCovered ? 'pointer' : 'default' },
                            hover: { outline: 'none', fill: isCovered ? '#7a2b2a' : '#d4d4d4' },
                            pressed: { outline: 'none' },
                          }}
                        />
                      );
                    })
                  }
                </Geographies>

                {/* Pasada 1 — solo pines */}
                {selected?.cities.map((city) => {
                  const s = 1 / position.zoom;
                  const isActive = activeCity === city.name;
                  return (
                    <Marker key={`pin-${city.name}`} coordinates={city.coords}>
                      <g
                        transform={`scale(${s})`}
                        onMouseEnter={() => setActiveCity(city.name)}
                        onMouseLeave={() => setActiveCity(null)}
                        style={{ cursor: 'pointer' }}
                      >
                        <path
                          d="M0,0 C-6,-4 -12,-12 -12,-24 a12,12,0,1,1,24,0 C12,-12 6,-4 0,0Z"
                          fill={isActive ? '#5b201f' : '#fff'}
                          stroke="#5b201f"
                          strokeWidth={1.5}
                        />
                        <circle cx="0" cy="-24" r="6" fill={isActive ? '#fff' : '#5b201f'} />
                      </g>
                    </Marker>
                  );
                })}

                {/* Pasada 2 — labels encima de todos los pines */}
                {selected?.cities.map((city) => {
                  const s = 1 / position.zoom;
                  const isActive = activeCity === city.name;
                  if (!isActive) return null;
                  return (
                    <Marker key={`label-${city.name}`} coordinates={city.coords}>
                      <g transform={`scale(${s})`} style={{ pointerEvents: 'none' }}>
                        {/* Fondo semitransparente */}
                        <rect
                          x={-(city.name.length * 7 + 10)}
                          y={-72}
                          width={city.name.length * 14 + 20}
                          height={28}
                          rx={3}
                          fill="rgba(255,255,255,0.85)"
                        />
                        <text
                          textAnchor="middle"
                          y={-50}
                          style={{
                            fontSize: '24px',
                            fontFamily: 'inherit',
                            fill: '#070d0f',
                            fontWeight: 300,
                          }}
                        >
                          {city.name}
                        </text>
                      </g>
                    </Marker>
                  );
                })}
              </ZoomableGroup>
            </ComposableMap>
          </div>

          {/* Panel derecho */}
          <div className="lg:pt-4">
            {selected ? (
              <div>
                <button
                  onClick={() => handleSelect(selectedKey!)}
                  className="text-xs font-light tracking-widest text-primary mb-8 flex items-center gap-2 hover:opacity-70 transition-opacity"
                >
                  ← {t('coverage.back')}
                </button>
                <h3 className="text-2xl font-light text-foreground mb-8">
                  {selected.name}
                </h3>
                <div className="grid grid-cols-2 gap-x-8">
                  {selected.cities.map((city) => (
                    <button
                      key={city.name}
                      onMouseEnter={() => setActiveCity(city.name)}
                      onMouseLeave={() => setActiveCity(null)}
                      className="flex items-center gap-3 py-4 border-b border-border text-left w-full group"
                    >
                      <div className={`w-2 h-2 rounded-full flex-shrink-0 transition-colors ${activeCity === city.name ? 'bg-primary scale-125' : 'bg-primary/40'}`} />
                      <span className={`text-sm font-light transition-colors ${activeCity === city.name ? 'text-primary' : 'text-foreground group-hover:text-primary'}`}>
                        {city.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-8">
                {(Object.entries(COVERAGE) as [CountryKey, CountryData][]).map(([key, country]) => (
                  <button
                    key={key}
                    onClick={() => handleSelect(key)}
                    className="flex items-center gap-3 py-4 border-b border-border hover:text-primary transition-colors text-left w-full group"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-sm font-light text-foreground group-hover:text-primary transition-colors">
                      {country.name}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
