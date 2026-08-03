import React from 'react';
import { Language } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Globe } from 'lucide-react';

interface Props {
  lang: Language;
  onLanguageToggle: () => void;
}

export const Footer: React.FC<Props> = ({ lang, onLanguageToggle }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-zinc-500 py-12 border-t border-gray-100 text-xs font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <span className="font-serif italic font-bold text-zinc-900 text-base block">
            SNEHA PATIL
          </span>
          <p className="text-[11px] text-gray-400 mt-0.5 font-mono">
            © {new Date().getFullYear()} Sneha Patil Architecture. All content reproduced faithfully from the original PDF document.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={onLanguageToggle}
            className="flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider bg-[#F5F5F3] hover:bg-gray-200 text-zinc-900 px-3 py-1.5 border border-gray-200 transition-colors"
          >
            <Globe className="w-3.5 h-3.5 text-zinc-900" />
            <span>{lang === 'de' ? 'Deutsch (Original)' : 'English (Translation)'}</span>
          </button>

          <button
            onClick={scrollToTop}
            className="p-2.5 bg-[#F5F5F3] hover:bg-zinc-900 hover:text-white text-zinc-900 border border-gray-200 transition-colors"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
