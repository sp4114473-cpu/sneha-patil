import React from 'react';
import { Project, Language } from '../types';
import { MapPin, Calendar, ArrowRight, Layers, ExternalLink } from 'lucide-react';

interface Props {
  project: Project;
  lang: Language;
  onOpenDetails: (project: Project) => void;
}

export const ProjectCard: React.FC<Props> = ({ project, lang, onOpenDetails }) => {
  return (
    <div className="group bg-white border border-gray-200 hover:border-zinc-900 transition-all duration-300 flex flex-col justify-between shadow-sm">
      <div>
        {/* Card Header Media */}
        <div className="relative aspect-[16/10] overflow-hidden bg-[#F5F5F3] cursor-pointer" onClick={() => onOpenDetails(project)}>
          <img
            src={project.heroImage}
            alt={project.titleEN}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          
          {/* Top Badges */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
            <span className="w-8 h-8 bg-zinc-900 text-white font-mono font-bold text-xs flex items-center justify-center shadow-sm">
              0{project.number}
            </span>
            <span className="bg-white/95 text-zinc-900 text-[10px] font-bold uppercase tracking-widest px-3 py-1 border border-gray-200 backdrop-blur-md">
              {lang === 'de' ? project.categoryDE : project.categoryEN}
            </span>
          </div>

          {/* Location & Year Overlay */}
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] text-zinc-800 font-mono">
            <span className="flex items-center gap-1.5 bg-white/95 px-2.5 py-1 border border-gray-200 shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-zinc-900" />
              {lang === 'de' ? project.locationDE : project.locationEN}
            </span>
            <span className="flex items-center gap-1 bg-white/95 px-2.5 py-1 border border-gray-200 shadow-sm">
              <Calendar className="w-3.5 h-3.5 text-zinc-900" />
              {project.year}
            </span>
          </div>
        </div>

        {/* Card Body Info */}
        <div className="p-6 space-y-4">
          <div>
            <span className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-[0.25em] block mb-1">
              {project.type}
            </span>
            <h3 
              onClick={() => onOpenDetails(project)}
              className="text-2xl font-serif italic text-zinc-900 group-hover:text-black transition-colors cursor-pointer leading-snug"
            >
              {lang === 'de' ? project.titleDE : project.titleEN}
            </h3>
            <p className="text-xs text-zinc-500 mt-1 font-sans line-clamp-1">
              {lang === 'de' ? project.subtitleDE : project.subtitleEN}
            </p>
          </div>

          <p className="text-xs text-zinc-600 line-clamp-3 leading-relaxed">
            {lang === 'de' ? project.descriptionDE : project.descriptionEN}
          </p>

          {/* Highlights */}
          <div className="pt-3 border-t border-gray-100 space-y-1.5">
            {(lang === 'de' ? project.highlightsDE : project.highlightsEN).slice(0, 2).map((hl, i) => (
              <div key={i} className="text-[11px] text-zinc-500 flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-900 mt-1 shrink-0" />
                <span className="line-clamp-1">{hl}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer Button */}
      <div className="p-6 pt-0">
        <button
          onClick={() => onOpenDetails(project)}
          className="w-full bg-[#F5F5F3] hover:bg-zinc-900 hover:text-white text-zinc-900 font-bold text-[11px] uppercase tracking-widest py-3.5 transition-all flex items-center justify-center gap-2 group/btn border border-gray-200"
        >
          <span>{lang === 'de' ? 'Projekt Details & Pläne' : 'View Case Study & Drawings'}</span>
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};
