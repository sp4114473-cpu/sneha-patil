import React, { useState } from 'react';
import { Language, LegendItem, TechnicalSpec } from '../types';
import { Info, Layers, ZoomIn, Eye } from 'lucide-react';

interface Props {
  type: string;
  lang: Language;
  onSelectSpec?: (spec: TechnicalSpec) => void;
  onSelectLegend?: (item: LegendItem) => void;
}

export const ArchitecturalSvgDiagram: React.FC<Props> = ({ type, lang, onSelectSpec, onSelectLegend }) => {
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);
  const [hoveredLayer, setHoveredLayer] = useState<number | null>(null);

  if (type === 'site_plan_furnace') {
    const hotspots: LegendItem[] = [
      { number: 1, labelDE: "EINGANG", labelEN: "ENTRANCE", x: 18, y: 44, descriptionDE: "Hauptzugang vom städtischen Vorplatz.", descriptionEN: "Main pedestrian entry from civic plaza." },
      { number: 2, labelDE: "GEMISCHT GENUTZTES GEBÄUDE", labelEN: "MIXED-USE BUILDING", x: 24, y: 38, descriptionDE: "Arbeitsbereiche, Coworking & Foyer.", descriptionEN: "Coworking spaces, studios & main foyer." },
      { number: 3, labelDE: "MUSEUM", labelEN: "MUSEUM", x: 62, y: 55, descriptionDE: "Ausstellungsfläche zur Industriegeschichte.", descriptionEN: "Industrial heritage museum exhibition gallery." },
      { number: 4, labelDE: "BIBLIOTHEK", labelEN: "LIBRARY", x: 45, y: 52, descriptionDE: "Mediathek & ruhige Lernbereiche.", descriptionEN: "Media library & quiet study reading rooms." },
      { number: 5, labelDE: "AUSSENBEREICH", labelEN: "OUTDOOR PLAZA", x: 55, y: 32, descriptionDE: "Zentraler begrüner Innenhof.", descriptionEN: "Central landscaped open courtyard." },
      { number: 6, labelDE: "FREIZEITBEREICH", labelEN: "RECREATION AREA", x: 82, y: 48, descriptionDE: "Shops & Gastronomie im Pavillon.", descriptionEN: "Shops & outdoor cafe pavilion." }
    ];

    return (
      <div className="relative w-full aspect-[16/9] bg-[#F8FAFC] border border-slate-200 rounded-xl overflow-hidden p-4 select-none">
        <svg viewBox="0 0 1000 562" className="w-full h-full text-slate-800">
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E2E8F0" strokeWidth="0.5" />
            </pattern>
            <pattern id="hatch" width="8" height="8" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="0" y2="8" stroke="#94A3B8" strokeWidth="1" />
            </pattern>
          </defs>

          {/* Background Grid */}
          <rect width="1000" height="562" fill="url(#grid)" />

          {/* Site Boundaries & Context Lines */}
          <path d="M 50,80 L 950,80 L 950,480 L 50,480 Z" fill="none" stroke="#64748B" strokeWidth="1.5" strokeDasharray="4 4" />
          
          {/* Historic Railway Tracks / Blast Furnace Line */}
          <rect x="420" y="100" width="500" height="50" fill="url(#hatch)" stroke="#475569" strokeWidth="1.5" />
          <text x="670" y="130" fill="#334155" fontSize="11" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold" letterSpacing="1">
            HISTORISCHE HOCHOFENANLAGE / BLAST FURNACE STRUCTURE
          </text>

          {/* Organic Building Volumes (Furnace & Flow) */}
          <path d="M 120,200 Q 180,180 250,230 T 320,380 Q 250,420 180,380 T 120,200 Z" fill="#F1F5F9" stroke="#0F172A" strokeWidth="2" />
          <path d="M 340,320 L 730,320 L 730,420 L 340,420 Z" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
          
          {/* Pavilion & Shops */}
          <path d="M 780,280 Q 850,260 880,330 T 820,410 Q 770,360 780,280 Z" fill="#F8FAFC" stroke="#0F172A" strokeWidth="2" />

          {/* Internal Room Labels */}
          <text x="210" y="300" fontSize="10" fill="#334155" fontWeight="600">Art Gallery & Event Space</text>
          <text x="230" y="370" fontSize="10" fill="#334155" fontWeight="600">Cafeteria</text>
          <text x="440" y="370" fontSize="10" fill="#334155" fontWeight="600">Library</text>
          <text x="630" y="370" fontSize="10" fill="#334155" fontWeight="600">Museum</text>
          <text x="810" y="340" fontSize="10" fill="#334155" fontWeight="600">Shops & Cafe</text>

          {/* Courtyard Landscaping & Trees */}
          <circle cx="370" cy="220" r="12" fill="#CBD5E1" opacity="0.6" />
          <circle cx="410" cy="240" r="16" fill="#CBD5E1" opacity="0.6" />
          <circle cx="460" cy="220" r="10" fill="#CBD5E1" opacity="0.6" />
          <circle cx="560" cy="240" r="14" fill="#CBD5E1" opacity="0.6" />
          <circle cx="620" cy="210" r="18" fill="#CBD5E1" opacity="0.6" />

          {/* Scale & North Arrow */}
          <g transform="translate(900, 490)">
            <circle cx="20" cy="20" r="18" fill="none" stroke="#0F172A" strokeWidth="1.5" />
            <polygon points="20,6 25,22 20,18 15,22" fill="#0F172A" />
            <text x="20" y="34" fontSize="10" fontWeight="bold" textAnchor="middle" fill="#0F172A">N</text>
          </g>
          <text x="80" y="520" fontSize="12" fontWeight="bold" fill="#0F172A">SITE PLAN (1:500)</text>

          {/* Hotspot Markers */}
          {hotspots.map((h) => {
            const isActive = activeHotspot === h.number;
            const cx = (h.x / 100) * 1000;
            const cy = (h.y / 100) * 562;
            return (
              <g 
                key={h.number} 
                className="cursor-pointer transition-transform duration-200 hover:scale-125"
                onClick={() => {
                  setActiveHotspot(h.number);
                  if (onSelectLegend) onSelectLegend(h);
                }}
              >
                <circle cx={cx} cy={cy} r={isActive ? "18" : "14"} fill={isActive ? "#C85A32" : "#0F172A"} opacity="0.9" />
                <text x={cx} y={cy + 4} fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">
                  {h.number}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Floating Active Info Box */}
        {activeHotspot !== null && (
          <div className="absolute bottom-4 left-4 bg-slate-900 text-white p-3 rounded-lg shadow-xl text-xs max-w-sm border border-slate-700 animate-fadeIn">
            <div className="flex items-center gap-2 font-bold text-amber-400 mb-1">
              <span className="w-5 h-5 rounded-full bg-amber-500 text-slate-900 flex items-center justify-center font-extrabold text-[10px]">
                {activeHotspot}
              </span>
              <span>
                {lang === 'de' 
                  ? hotspots.find(h => h.number === activeHotspot)?.labelDE 
                  : hotspots.find(h => h.number === activeHotspot)?.labelEN}
              </span>
            </div>
            <p className="text-slate-300">
              {lang === 'de' 
                ? hotspots.find(h => h.number === activeHotspot)?.descriptionDE 
                : hotspots.find(h => h.number === activeHotspot)?.descriptionEN}
            </p>
          </div>
        )}
      </div>
    );
  }

  if (type === 'facade_detail_furnace' || type === 'rw_facade_detail') {
    const isRW = type === 'rw_facade_detail';
    const totalLayers = isRW ? 18 : 16;
    
    return (
      <div className="relative w-full bg-[#FAFAFA] border border-slate-200 rounded-xl overflow-hidden p-6">
        <div className="flex items-center justify-between mb-4 border-b border-slate-200 pb-3">
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-amber-700" />
            <h4 className="font-bold text-slate-900 text-sm tracking-wide">
              {isRW ? 'FASSADENDETAIL (1:20) - HOLZVERKLEIDUNG' : 'FASSADENDETAIL (1:20 / 1:5) - RODECA POLYCARBONAT'}
            </h4>
          </div>
          <span className="text-xs bg-slate-200 text-slate-800 font-semibold px-2.5 py-1 rounded">
            Scale 1:20
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Architectural Drawing Section Graphic */}
          <div className="lg:col-span-7 bg-white p-4 border border-slate-200 rounded-lg shadow-inner">
            <svg viewBox="0 0 500 600" className="w-full h-auto text-slate-800">
              {/* Roof Parapet */}
              <rect x="100" y="40" width="300" height="25" fill="#CBD5E1" stroke="#0F172A" strokeWidth="1.5" />
              <text x="250" y="57" fontSize="10" textAnchor="middle" fontWeight="bold" fill="#0F172A">
                1. ATTIKAABDECKUNG
              </text>

              {/* Concrete Structure Wall */}
              <rect x="100" y="65" width="60" height="480" fill="#E2E8F0" stroke="#0F172A" strokeWidth="1.5" />
              <text x="130" y="300" fontSize="10" textAnchor="middle" fontWeight="bold" fill="#475569" transform="rotate(-90 130 300)">
                CONCRETE CORE (2. BETONWAND)
              </text>

              {/* Insulation & Air Gap */}
              <rect x="160" y="65" width="25" height="480" fill="#FEF08A" opacity="0.6" stroke="#CA8A04" strokeWidth="1" strokeDasharray="2 2" />
              <rect x="185" y="65" width="15" height="480" fill="#F1F5F9" stroke="#94A3B8" strokeWidth="1" />

              {/* Facade Outer Layer (Polycarbonate or Timber Slats) */}
              {isRW ? (
                <g>
                  {/* Timber Slats */}
                  {[...Array(20)].map((_, i) => (
                    <rect key={i} x="200" y={70 + i * 24} width="16" height="18" fill="#B45309" rx="2" stroke="#78350F" strokeWidth="1" />
                  ))}
                </g>
              ) : (
                <g>
                  {/* Translucent Rodeca Panels */}
                  <rect x="200" y="65" width="30" height="480" fill="#E0F2FE" opacity="0.8" stroke="#0284C7" strokeWidth="1.5" />
                  <line x1="215" y1="65" x2="215" y2="545" stroke="#0284C7" strokeWidth="1" strokeDasharray="4 4" />
                </g>
              )}

              {/* Floor Slab / Slab Edge */}
              <rect x="100" y="280" width="300" height="30" fill="#CBD5E1" stroke="#0F172A" strokeWidth="1.5" />
              <text x="250" y="298" fontSize="10" textAnchor="middle" fontWeight="bold" fill="#0F172A">
                STAHLBETONDECKE / FLOOR SLAB
              </text>

              {/* Detail Callout Circles A, B, C */}
              <g className="cursor-pointer" onClick={() => setActiveHotspot(1)}>
                <circle cx="250" cy="52" r="18" fill="#C85A32" opacity="0.8" />
                <text x="250" y="56" fill="#FFF" fontSize="11" fontWeight="bold" textAnchor="middle">DETAIL A</text>
              </g>
              <g className="cursor-pointer" onClick={() => setActiveHotspot(2)}>
                <circle cx="250" cy="295" r="18" fill="#C85A32" opacity="0.8" />
                <text x="250" y="299" fill="#FFF" fontSize="11" fontWeight="bold" textAnchor="middle">DETAIL B</text>
              </g>
              <g className="cursor-pointer" onClick={() => setActiveHotspot(3)}>
                <circle cx="250" cy="500" r="18" fill="#C85A32" opacity="0.8" />
                <text x="250" y="504" fill="#FFF" fontSize="11" fontWeight="bold" textAnchor="middle">DETAIL C</text>
              </g>
            </svg>
          </div>

          {/* Layer Specification Inspector */}
          <div className="lg:col-span-5 bg-white p-4 border border-slate-200 rounded-lg max-h-[520px] overflow-y-auto space-y-2">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                {lang === 'de' ? 'Materialschichten Index' : 'Material Layers Index'}
              </span>
              <span className="text-[11px] font-medium text-slate-500">{totalLayers} Layers</span>
            </div>

            <div className="divide-y divide-slate-100">
              {[...Array(totalLayers)].map((_, index) => {
                const layerNum = index + 1;
                const isHovered = hoveredLayer === layerNum;
                return (
                  <div
                    key={layerNum}
                    onMouseEnter={() => setHoveredLayer(layerNum)}
                    onMouseLeave={() => setHoveredLayer(null)}
                    onClick={() => {
                      if (onSelectSpec) {
                        onSelectSpec({
                          itemNumber: layerNum,
                          nameDE: `Layer ${layerNum}`,
                          nameEN: `Layer ${layerNum}`
                        });
                      }
                    }}
                    className={`p-2 rounded text-xs flex items-center justify-between cursor-pointer transition-colors ${
                      isHovered ? 'bg-amber-50 text-amber-900 font-semibold' : 'hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] ${
                        isHovered ? 'bg-amber-700 text-white' : 'bg-slate-200 text-slate-800'
                      }`}>
                        {layerNum}
                      </span>
                      <span className="line-clamp-1">
                        {isRW
                          ? `Layer ${layerNum}: ${[
                              'Attikaabdeckung', 'Betonwand', 'Metallschutz', 'Substratschicht', 'Filtervlies', 
                              'Wärmedämmung', 'Dränageschicht', 'Außenverkleidung aus Holz (5cm)', 'Feuerbeständige Stahlrahmenkonstruktion',
                              'Geschweißte Laufstegkonstruktion', 'Weiß lackierter Rahmen', 'Doppelverglasung', 'Zwischenprofil mit Gleitverbindung',
                              'Bodenbelag 15mm', 'Dämmung 70mm', 'Stahlbetondecke 200mm', 'Bitumendickbeschichtung', 'Dämmung 100mm'
                            ][index]}`
                          : `Layer ${layerNum}: ${[
                              'Attikaabdeckung', 'Betonwand', 'Metallschutz', 'Substratschicht', 'Filtervlies',
                              'Wärmedämmung', 'Dränageschicht', 'Feuerbeständige Stahlrahmenkonstruktion', 'Geschweißte Laufstegkonstruktion',
                              'Verankerung Tragkonstruktion', 'Polycarbonatplatte (RODECA)', 'Zwischenprofil mit Gleitverbindung',
                              'Bodenbelag 20mm', 'Dämmung 70mm', 'Bitumendickbeschichtung', 'Dämmung 100mm'
                            ][index]}`}
                      </span>
                    </div>
                    <Eye className="w-3.5 h-3.5 text-slate-400 opacity-60" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Fallback / Generic Blueprint SVG view
  return (
    <div className="w-full aspect-[16/9] bg-slate-900 text-slate-100 rounded-xl p-6 flex flex-col items-center justify-center border border-slate-800">
      <div className="p-4 rounded-full bg-slate-800 mb-3 text-amber-400">
        <ZoomIn className="w-8 h-8" />
      </div>
      <h5 className="font-bold text-sm tracking-wide text-center">
        {lang === 'de' ? 'ARCHITEKTONISCHE PLANZEICHNUNG' : 'ARCHITECTURAL DRAWING'}
      </h5>
      <p className="text-xs text-slate-400 mt-1 text-center max-w-md">
        {lang === 'de' 
          ? 'Klicken Sie auf das Bild, um den hochauflösenden Zeichnungs-Inspector zu öffnen.' 
          : 'Click the drawing to launch the high-resolution architectural inspection viewer.'}
      </p>
    </div>
  );
};
