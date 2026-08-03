import React from 'react';
import { Language } from '../types';
import { FileText, Compass, User, Mail, Download, Globe, Layers } from 'lucide-react';

interface Props {
  lang: Language;
  onLanguageToggle: () => void;
  viewMode: 'web' | 'pdf';
  onViewModeChange: (mode: 'web' | 'pdf') => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<Props> = ({
  lang,
  onLanguageToggle,
  viewMode,
  onViewModeChange,
  onOpenContact
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md text-zinc-900 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Header */}
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => onViewModeChange('web')}>
          <div className="w-9 h-9 bg-zinc-900 text-white flex items-center justify-center font-mono font-bold text-xs tracking-widest uppercase">
            SP
          </div>
          <div>
            <span className="text-base sm:text-lg tracking-[0.2em] font-light uppercase block leading-none text-zinc-900">
              SNEHA <span className="font-bold">PATIL</span>
            </span>
            <span className="text-[10px] text-gray-400 tracking-[0.25em] uppercase block mt-1 font-medium">
              {lang === 'de' ? 'ARCHITEKTUR PORTFOLIO' : 'ARCHITECTURE PORTFOLIO'}
            </span>
          </div>
        </div>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-widest text-gray-500 font-medium">
          <button 
            onClick={() => { onViewModeChange('web'); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="hover:text-black transition-colors flex items-center gap-1.5"
          >
            <Compass className="w-3.5 h-3.5 text-zinc-900" />
            {lang === 'de' ? 'Projekte' : 'Projects'}
          </button>

          <button 
            onClick={() => { onViewModeChange('web'); document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="hover:text-black transition-colors flex items-center gap-1.5"
          >
            <User className="w-3.5 h-3.5 text-zinc-900" />
            {lang === 'de' ? 'Lebenslauf' : 'Resume'}
          </button>

          <button 
            onClick={() => onViewModeChange(viewMode === 'pdf' ? 'web' : 'pdf')}
            className={`px-3 py-1.5 transition-all flex items-center gap-1.5 border text-[11px] uppercase tracking-widest ${
              viewMode === 'pdf' 
                ? 'bg-zinc-900 border-zinc-900 text-white font-bold' 
                : 'border-gray-200 hover:border-black text-zinc-700'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            {lang === 'de' ? 'PDF Reader (20 S.)' : '20-Page PDF Reader'}
          </button>
        </nav>

        {/* Right Tools: Language Toggle & Contact Button */}
        <div className="flex items-center gap-3">
          {/* DE / EN Switcher */}
          <button
            onClick={onLanguageToggle}
            className="flex items-center gap-1.5 text-[10px] font-bold tracking-wider uppercase bg-[#F5F5F3] hover:bg-gray-200 text-zinc-800 px-3 py-1.5 rounded-full border border-gray-200 transition-all"
            title="Switch Language / Sprache wechseln"
          >
            <Globe className="w-3.5 h-3.5 text-zinc-700" />
            <span className={lang === 'de' ? 'text-black font-extrabold' : 'text-gray-400'}>DE</span>
            <span className="text-gray-300">/</span>
            <span className={lang === 'en' ? 'text-black font-extrabold' : 'text-gray-400'}>EN</span>
          </button>

          {/* Contact Button */}
          <button
            onClick={onOpenContact}
            className="hidden sm:flex items-center gap-1.5 bg-zinc-900 hover:bg-black text-white font-bold text-[11px] uppercase tracking-widest px-4 py-2 transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            {lang === 'de' ? 'Kontakt' : 'Contact'}
          </button>
        </div>
      </div>
    </header>
  );
};
