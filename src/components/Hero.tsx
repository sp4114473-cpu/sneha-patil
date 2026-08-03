import React from 'react';
import { Language } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Compass, FileText, Award, MapPin, Sparkles, ArrowRight } from 'lucide-react';
import coverImg from '../assets/images/sneha_cover_render_1785772808819.jpg';

interface Props {
  lang: Language;
  onExploreProjects: () => void;
  onOpenPdfReader: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<Props> = ({
  lang,
  onExploreProjects,
  onOpenPdfReader,
  onOpenContact
}) => {
  return (
    <section className="relative bg-white text-zinc-900 overflow-hidden border-b border-gray-100">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f3f4f6_1px,transparent_1px),linear-gradient(to_bottom,#f3f4f6_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400 block">
              FEATURED ARCHITECTURE PORTFOLIO • 2025
            </span>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif italic tracking-tight text-zinc-900 leading-none">
              Sneha Patil
            </h1>

            <p className="text-xl sm:text-2xl text-zinc-600 font-serif italic max-w-2xl leading-snug">
              {lang === 'de' ? PERSONAL_INFO.taglineDE : PERSONAL_INFO.taglineEN}
            </p>

            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed max-w-2xl font-sans">
              {lang === 'de' ? PERSONAL_INFO.statementDE : PERSONAL_INFO.statementEN}
            </p>

            {/* Quick Badges & Location */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 pt-4 border-t border-gray-100 font-mono">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-zinc-900" />
                <span>Heidelberg, Deutschland</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-gray-300" />
              <div>SRH University Heidelberg (M.Sc)</div>
              <div className="w-1 h-1 rounded-full bg-gray-300" />
              <div>JNEC Aurangabad (B.Arch)</div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <button
                onClick={onExploreProjects}
                className="bg-zinc-900 hover:bg-black text-white font-bold px-7 py-4 text-xs uppercase tracking-widest flex items-center gap-2 transition-all shadow-sm"
              >
                <Compass className="w-4 h-4" />
                {lang === 'de' ? 'Projekte Erkunden' : 'Explore Projects'}
              </button>

              <button
                onClick={onOpenPdfReader}
                className="text-xs font-bold uppercase tracking-widest text-zinc-900 hover:text-gray-600 border-b-2 border-zinc-900 pb-1 flex items-center gap-2 transition-all"
              >
                <FileText className="w-4 h-4 text-zinc-900" />
                {lang === 'de' ? 'Original 20-S. PDF Reader' : 'Open 20-Page PDF Document'}
              </button>
            </div>
          </div>

          {/* Right Hero Image Card (Page 1 Cover Rendering) */}
          <div className="lg:col-span-5">
            <div className="relative group bg-[#F5F5F3] p-3 border border-gray-200">
              <div className="relative aspect-[4/3] overflow-hidden bg-white">
                <img
                  src={coverImg}
                  alt="Sneha Patil Portfolio Cover"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/95 backdrop-blur-md border border-gray-200 text-zinc-900 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[9px] text-gray-400 font-mono uppercase tracking-[0.2em] block">
                        PAGE 1 COVER
                      </span>
                      <h3 className="font-serif italic font-medium text-base text-zinc-900">
                        Portfolio / Sneha Patil
                      </h3>
                    </div>
                    <button
                      onClick={onOpenPdfReader}
                      className="p-2 bg-zinc-900 text-white hover:bg-black transition-colors"
                      title="Inspect Cover Page"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Portfolio Key Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-t border-b border-gray-100">
          <div className="space-y-1">
            <span className="text-3xl sm:text-4xl font-serif italic text-zinc-900">4 Major</span>
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">
              {lang === 'de' ? 'Entwurfsprojekte' : 'Architectural Projects'}
            </p>
          </div>
          <div className="space-y-1">
            <span className="text-3xl sm:text-4xl font-serif italic text-zinc-900">3 Competitions</span>
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">
              {lang === 'de' ? 'Wettbewerbe (2018)' : 'Design Competitions'}
            </p>
          </div>
          <div className="space-y-1">
            <span className="text-3xl sm:text-4xl font-serif italic text-zinc-900">3+ Years</span>
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">
              {lang === 'de' ? 'Praxiserfahrung' : 'Professional Practice'}
            </p>
          </div>
          <div className="space-y-1">
            <span className="text-3xl sm:text-4xl font-serif italic text-zinc-900">B1 & Fluent</span>
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">
              {lang === 'de' ? 'Deutsch & Englisch' : 'German & English'}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
