import React from 'react';
import { Language } from '../types';
import { 
  EDUCATION_HISTORY, WORK_EXPERIENCE, COMPETITIONS, PERSONAL_INFO 
} from '../data/portfolioData';
import { Briefcase, GraduationCap, Award, Code, Globe, Heart, Download } from 'lucide-react';

interface Props {
  lang: Language;
}

export const ResumeSection: React.FC<Props> = ({ lang }) => {
  return (
    <section id="resume" className="py-20 bg-white text-zinc-900 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400 block">
            PAGE 2 — CURRICULUM VITAE
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif italic text-zinc-900 tracking-tight">
            {lang === 'de' ? 'Ausbildung & Berufserfahrung' : 'Education & Experience'}
          </h2>
          <p className="text-sm text-zinc-500 font-sans">
            {lang === 'de' 
              ? 'Qualifikationen, Beruflicher Werdegang, Wettbewerbe und Softwarekenntnisse von Sneha Patil.' 
              : 'Qualifications, professional experience, competition entries, and technical software skills.'}
          </p>
        </div>

        {/* 2-Column Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Work Experience & Competitions */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Work Experience */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-gray-200 pb-3">
                <Briefcase className="w-4 h-4 text-zinc-900" />
                <h3 className="text-lg font-serif italic text-zinc-900">
                  {lang === 'de' ? 'BERUFE & PRAXIS' : 'WORK EXPERIENCE'}
                </h3>
              </div>

              <div className="space-y-6 relative before:absolute before:left-3.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-gray-200">
                {WORK_EXPERIENCE.map((exp, idx) => (
                  <div key={idx} className="relative pl-9 space-y-2 group">
                    <div className="absolute left-2 top-1.5 w-3 h-3 rounded-full bg-white border-2 border-zinc-900 group-hover:bg-zinc-900 transition-colors" />
                    
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="font-serif italic font-bold text-base text-zinc-900">
                        {exp.company}
                      </h4>
                      <span className="text-[10px] font-mono font-bold text-zinc-900 bg-[#F5F5F3] px-2.5 py-1 border border-gray-200 uppercase tracking-wider">
                        {exp.year} {exp.duration ? `(${exp.duration})` : ''}
                      </span>
                    </div>

                    <div className="text-xs text-zinc-700 font-medium">
                      {lang === 'de' ? exp.roleDE : exp.roleEN} — {exp.location}
                    </div>

                    <ul className="space-y-1 text-xs text-zinc-600 pt-1">
                      {(lang === 'de' ? exp.tasksDE : exp.tasksEN).map((task, tIdx) => (
                        <li key={tIdx} className="leading-relaxed list-disc list-inside text-zinc-500">
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Competitions */}
            <div className="space-y-6 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-3 border-b border-gray-200 pb-3">
                <Award className="w-4 h-4 text-zinc-900" />
                <h3 className="text-lg font-serif italic text-zinc-900">
                  {lang === 'de' ? 'WETTBEWERBE (2018)' : 'COMPETITIONS (2018)'}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {COMPETITIONS.map((comp, cIdx) => (
                  <div key={cIdx} className="bg-[#F5F5F3] p-4 border border-gray-200 space-y-2">
                    <span className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest block">
                      {comp.year}
                    </span>
                    <h5 className="font-serif italic font-bold text-sm text-zinc-900 line-clamp-2">
                      {lang === 'de' ? comp.titleDE : comp.titleEN}
                    </h5>
                    <p className="text-[11px] text-zinc-500">
                      {(lang === 'de' ? comp.tasksDE : comp.tasksEN).join(' | ')}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Education, Software Skills & Languages */}
          <div className="lg:col-span-5 space-y-10">
            
            {/* Education */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-gray-200 pb-3">
                <GraduationCap className="w-4 h-4 text-zinc-900" />
                <h3 className="text-lg font-serif italic text-zinc-900">
                  {lang === 'de' ? 'AUSBILDUNG' : 'EDUCATION'}
                </h3>
              </div>

              <div className="space-y-4">
                {EDUCATION_HISTORY.map((edu, eIdx) => (
                  <div key={eIdx} className="bg-[#F5F5F3] p-5 border border-gray-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold text-zinc-900 bg-white px-2.5 py-1 border border-gray-200 uppercase tracking-widest">
                        {edu.period}
                      </span>
                      {edu.isCurrent && (
                        <span className="text-[9px] bg-zinc-900 text-white font-bold px-2 py-0.5 uppercase tracking-widest">
                          {lang === 'de' ? 'Aktuell' : 'Current'}
                        </span>
                      )}
                    </div>
                    <h4 className="font-serif italic font-bold text-base text-zinc-900">
                      {lang === 'de' ? edu.degreeDE : edu.degreeEN}
                    </h4>
                    <p className="text-xs text-zinc-700">
                      {edu.institution}
                    </p>
                    <p className="text-[11px] text-zinc-400 font-mono">
                      {edu.location}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Software Skills */}
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-3 border-b border-gray-200 pb-3">
                <Code className="w-4 h-4 text-zinc-900" />
                <h3 className="text-lg font-serif italic text-zinc-900">
                  {lang === 'de' ? 'KENNTNISSE / SOFTWARE' : 'SOFTWARE & CAD TOOLS'}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {PERSONAL_INFO.software.map((sw, sIdx) => (
                  <span
                    key={sIdx}
                    className="bg-white hover:bg-zinc-900 hover:text-white text-zinc-800 border border-gray-200 text-xs font-mono font-medium px-3 py-1.5 transition-colors"
                  >
                    {sw}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages & Hobbies */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-[#F5F5F3] p-4 border border-gray-200 space-y-2">
                <div className="flex items-center gap-2 text-zinc-900 text-xs font-bold uppercase tracking-widest">
                  <Globe className="w-3.5 h-3.5" />
                  <span>Sprachen</span>
                </div>
                <div className="space-y-1 text-xs text-zinc-600">
                  {PERSONAL_INFO.languages.map((l, lIdx) => (
                    <div key={lIdx} className="flex justify-between">
                      <span className="font-semibold text-zinc-900">{l.name}</span>
                      <span className="text-zinc-500">{l.level}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#F5F5F3] p-4 border border-gray-200 space-y-2">
                <div className="flex items-center gap-2 text-zinc-900 text-xs font-bold uppercase tracking-widest">
                  <Heart className="w-3.5 h-3.5" />
                  <span>Hobbies</span>
                </div>
                <div className="text-xs text-zinc-600 leading-relaxed">
                  {(lang === 'de' ? PERSONAL_INFO.hobbiesDE : PERSONAL_INFO.hobbiesEN).join(' • ')}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
