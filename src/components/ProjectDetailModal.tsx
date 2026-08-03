import React, { useState } from 'react';
import { Project, Language, ArchitecturalDrawing, TechnicalSpec, LegendItem } from '../types';
import { 
  X, MapPin, Calendar, Layers, Compass, ZoomIn, 
  FileText, CheckCircle2, ChevronRight, ArrowUpRight 
} from 'lucide-react';
import { ArchitecturalSvgDiagram } from './ArchitecturalSvgDiagram';

interface Props {
  project: Project | null;
  lang: Language;
  onClose: () => void;
  onOpenDrawingInspector: (drawing: ArchitecturalDrawing) => void;
}

export const ProjectDetailModal: React.FC<Props> = ({
  project,
  lang,
  onClose,
  onOpenDrawingInspector
}) => {
  if (!project) return null;

  const [activeTab, setActiveTab] = useState<'overview' | 'site_plan' | 'facade' | 'drawings'>('overview');

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 animate-fadeIn overflow-y-auto">
      <div className="bg-white border border-gray-200 w-full max-w-6xl max-h-[92vh] flex flex-col overflow-hidden shadow-2xl my-auto text-zinc-900">
        
        {/* Modal Header Bar */}
        <div className="p-4 sm:p-6 bg-white border-b border-gray-100 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 bg-zinc-900 text-white font-mono font-bold text-xs flex items-center justify-center shrink-0">
              0{project.number}
            </span>
            <div>
              <span className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-[0.25em] block">
                {project.type}
              </span>
              <h2 className="text-lg sm:text-2xl font-serif italic text-zinc-900 line-clamp-1">
                {lang === 'de' ? project.titleDE : project.titleEN}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 bg-[#F5F5F3] hover:bg-zinc-900 hover:text-white text-zinc-900 border border-gray-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="bg-[#F5F5F3] border-b border-gray-200 px-4 sm:px-6 flex items-center gap-2 overflow-x-auto shrink-0">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3.5 px-4 font-bold text-[11px] tracking-widest uppercase border-b-2 transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'overview'
                ? 'border-zinc-900 text-zinc-900 font-extrabold'
                : 'border-transparent text-gray-500 hover:text-black'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>{lang === 'de' ? 'Übersicht & Konzept' : 'Overview & Concept'}</span>
          </button>

          <button
            onClick={() => setActiveTab('site_plan')}
            className={`py-3.5 px-4 font-bold text-[11px] tracking-widest uppercase border-b-2 transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'site_plan'
                ? 'border-zinc-900 text-zinc-900 font-extrabold'
                : 'border-transparent text-gray-500 hover:text-black'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>{lang === 'de' ? 'Lageplan & Räume' : 'Site Plan & Spaces'}</span>
          </button>

          <button
            onClick={() => setActiveTab('facade')}
            className={`py-3.5 px-4 font-bold text-[11px] tracking-widest uppercase border-b-2 transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'facade'
                ? 'border-zinc-900 text-zinc-900 font-extrabold'
                : 'border-transparent text-gray-500 hover:text-black'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>{lang === 'de' ? 'Konstruktion & Fassade' : 'Facade & Technical Layers'}</span>
          </button>

          <button
            onClick={() => setActiveTab('drawings')}
            className={`py-3.5 px-4 font-bold text-[11px] tracking-widest uppercase border-b-2 transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'drawings'
                ? 'border-zinc-900 text-zinc-900 font-extrabold'
                : 'border-transparent text-gray-500 hover:text-black'
            }`}
          >
            <ZoomIn className="w-3.5 h-3.5" />
            <span>{lang === 'de' ? 'Zeichnungs-Inspector' : 'Drawings Inspector'}</span>
          </button>
        </div>

        {/* Modal Tab Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-8 bg-white">
          
          {/* TAB 1: OVERVIEW & CONCEPT */}
          {activeTab === 'overview' && (
            <div className="space-y-8 animate-fadeIn">
              {/* Hero Banner */}
              <div className="relative aspect-[21/9] rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
                <img
                  src={project.heroImage}
                  alt={project.titleEN}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-xs text-amber-400 font-mono font-bold block">
                      {lang === 'de' ? project.categoryDE : project.categoryEN}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                      {lang === 'de' ? project.subtitleDE : project.subtitleEN}
                    </h3>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-300 font-medium">
                    <span className="flex items-center gap-1 bg-slate-900/90 px-3 py-1.5 rounded-md border border-slate-700">
                      <MapPin className="w-3.5 h-3.5 text-amber-500" />
                      {lang === 'de' ? project.locationDE : project.locationEN}
                    </span>
                    <span className="flex items-center gap-1 bg-slate-900/90 px-3 py-1.5 rounded-md border border-slate-700">
                      <Calendar className="w-3.5 h-3.5 text-amber-500" />
                      {project.year}
                    </span>
                  </div>
                </div>
              </div>

              {/* Text Description */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8 space-y-4">
                  <h4 className="text-lg font-serif font-bold text-white border-b border-slate-800 pb-2">
                    {lang === 'de' ? 'Projektbeschreibung' : 'Project Description'}
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed font-sans whitespace-pre-line">
                    {lang === 'de' ? project.descriptionDE : project.descriptionEN}
                  </p>
                </div>

                <div className="lg:col-span-4 bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-4">
                  <h4 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
                    {lang === 'de' ? 'Kerngedanken & Merkmale' : 'Key Highlights'}
                  </h4>
                  <div className="space-y-3">
                    {(lang === 'de' ? project.highlightsDE : project.highlightsEN).map((hl, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Concept Steps Sequence if present */}
              {project.conceptSteps && project.conceptSteps.length > 0 && (
                <div className="space-y-4 pt-6 border-t border-slate-800">
                  <h4 className="text-lg font-serif font-bold text-white">
                    {lang === 'de' ? 'Räumliche Entwurfsmethodik & Stufen' : 'Spatial Design Sequence & Massing'}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {project.conceptSteps.map((step) => (
                      <div key={step.step} className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                        <div className="w-7 h-7 rounded bg-amber-600/20 text-amber-400 font-bold text-xs flex items-center justify-center border border-amber-500/30">
                          0{step.step}
                        </div>
                        <h5 className="font-serif font-bold text-sm text-white">
                          {lang === 'de' ? step.titleDE : step.titleEN}
                        </h5>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {lang === 'de' ? step.descriptionDE : step.descriptionEN}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: SITE PLAN & SPACES */}
          {activeTab === 'site_plan' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div>
                  <h3 className="text-lg font-serif font-bold text-white">
                    {lang === 'de' ? 'Interaktiver Lageplan (Maßstab 1:500)' : 'Interactive Site Masterplan (Scale 1:500)'}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {lang === 'de' 
                      ? 'Klicken Sie auf die Zahlenmarkierungen im Plan, um Raumnutzung und Funktion aufzurufen.' 
                      : 'Click the numbered indicators on the site plan to inspect spatial programming.'}
                  </p>
                </div>
                <span className="text-xs bg-amber-600/20 text-amber-300 font-mono font-bold px-3 py-1 rounded border border-amber-500/30">
                  SCALE 1:500
                </span>
              </div>

              <ArchitecturalSvgDiagram
                type={
                  project.id === 'furnace-and-flow' ? 'site_plan_furnace' :
                  project.id === 'vertikaler-spaziergang' ? 'site_plan_furnace' :
                  'generic'
                }
                lang={lang}
              />

              {/* Legend Grid */}
              {project.sitePlanLegend && (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 pt-4">
                  {project.sitePlanLegend.map((item) => (
                    <div key={item.number} className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-center">
                      <span className="w-6 h-6 rounded-full bg-amber-500 text-slate-950 font-bold text-xs inline-flex items-center justify-center mb-1">
                        {item.number}
                      </span>
                      <span className="text-xs font-semibold text-slate-200 block truncate">
                        {lang === 'de' ? item.labelDE : item.labelEN}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 3: FACADE & TECHNICAL SPECIFICATIONS */}
          {activeTab === 'facade' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div>
                  <h3 className="text-lg font-serif font-bold text-white">
                    {lang === 'de' ? 'Konstruktion & Fassadendetail (1:20 / 1:5)' : 'Facade Engineering & Material Specifications'}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {lang === 'de' 
                      ? 'Technischer Vertikalschnitt mit nummeriertem Schichtenverzeichnis.' 
                      : 'Technical vertical wall section with indexed material specs.'}
                  </p>
                </div>
                <span className="text-xs bg-amber-600/20 text-amber-300 font-mono font-bold px-3 py-1 rounded border border-amber-500/30">
                  DETAIL SCALE 1:20
                </span>
              </div>

              <ArchitecturalSvgDiagram
                type={project.id === 'raum-fuer-wissen' ? 'rw_facade_detail' : 'facade_detail_furnace'}
                lang={lang}
              />
            </div>
          )}

          {/* TAB 4: DRAWINGS INSPECTOR GALLERY */}
          {activeTab === 'drawings' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="border-b border-slate-800 pb-3">
                <h3 className="text-lg font-serif font-bold text-white">
                  {lang === 'de' ? 'Architekturzeichnungen & Visualisierungen' : 'Architectural Drawings & High-Res Gallery'}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  {lang === 'de' 
                    ? 'Klicken Sie auf eine Zeichnung, um die hochauflösende Lupen-Ansicht zu öffnen.' 
                    : 'Select any drawing or render to launch the full-screen inspector.'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.drawings.map((dw) => (
                  <div
                    key={dw.id}
                    onClick={() => onOpenDrawingInspector(dw)}
                    className="group bg-slate-950 border border-slate-800 rounded-xl overflow-hidden hover:border-amber-500 transition-all cursor-pointer shadow-lg"
                  >
                    <div className="aspect-[4/3] relative bg-slate-900 overflow-hidden flex items-center justify-center p-2">
                      {dw.imageOrSvg.startsWith('http') || dw.imageOrSvg.startsWith('/src') ? (
                        <img
                          src={dw.imageOrSvg}
                          alt={dw.titleEN}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <ArchitecturalSvgDiagram type={dw.imageOrSvg} lang={lang} />
                      )}
                      <div className="absolute top-3 left-3 bg-slate-900/90 text-amber-400 text-[10px] font-mono font-bold px-2 py-1 rounded border border-slate-700">
                        SCALE {dw.scale}
                      </div>
                      <div className="absolute bottom-3 right-3 bg-amber-600 text-slate-950 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                        <ZoomIn className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="p-4 space-y-1">
                      <h5 className="font-serif font-bold text-sm text-white group-hover:text-amber-400 transition-colors">
                        {lang === 'de' ? dw.titleDE : dw.titleEN}
                      </h5>
                      <p className="text-xs text-slate-400 line-clamp-2">
                        {lang === 'de' ? dw.descriptionDE : dw.descriptionEN}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>Project {project.number} of 4 — {project.titleEN}</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold rounded transition-colors"
          >
            {lang === 'de' ? 'Schließen' : 'Close'}
          </button>
        </div>

      </div>
    </div>
  );
};
