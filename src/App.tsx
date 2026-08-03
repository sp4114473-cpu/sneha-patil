import React, { useState } from 'react';
import { Language, Project, ArchitecturalDrawing } from './types';
import { PROJECTS } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectCard } from './components/ProjectCard';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { PdfDocumentViewer } from './components/PdfDocumentViewer';
import { ResumeSection } from './components/ResumeSection';
import { DrawingInspector } from './components/DrawingInspector';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Compass, Filter, Layers, FileText } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<Language>('de');
  const [viewMode, setViewMode] = useState<'web' | 'pdf'>('web');
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [inspectingDrawing, setInspectingDrawing] = useState<ArchitecturalDrawing | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const handleLanguageToggle = () => {
    setLang(prev => (prev === 'de' ? 'en' : 'de'));
  };

  const filteredProjects = PROJECTS.filter(p => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'reuse') return p.type.toLowerCase().includes('reuse') || p.subtitleDE.includes('Umnutzung');
    if (selectedFilter === 'education') return p.id === 'raum-fuer-wissen';
    if (selectedFilter === 'gastronomy') return p.id === 'flowline-cafe';
    if (selectedFilter === 'monument') return p.id === 'vertikaler-spaziergang' || p.id === 'furnace-and-flow';
    return true;
  });

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white">
      
      {/* Top Navbar */}
      <Navbar
        lang={lang}
        onLanguageToggle={handleLanguageToggle}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        onOpenContact={() => {
          setViewMode('web');
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Main View Router: 20-Page PDF Document Mode vs Web Portfolio View */}
      {viewMode === 'pdf' ? (
        <PdfDocumentViewer
          lang={lang}
          onClose={() => setViewMode('web')}
        />
      ) : (
        <main className="space-y-0">
          
          {/* Hero Section */}
          <Hero
            lang={lang}
            onExploreProjects={() => {
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            onOpenPdfReader={() => setViewMode('pdf')}
            onOpenContact={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          />

          {/* Projects Gallery Section */}
          <section id="projects" className="py-20 bg-[#F5F5F3] text-zinc-900 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
              
              {/* Section Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-200 pb-8">
                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400 block">
                    PAGES 3 TO 19 — PROJECT PORTFOLIO
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-serif italic text-zinc-900 tracking-tight">
                    {lang === 'de' ? 'Architekturprojekte' : 'Featured Architectural Works'}
                  </h2>
                  <p className="text-xs sm:text-sm text-zinc-500 font-sans max-w-xl leading-relaxed">
                    {lang === 'de' 
                      ? 'Die 4 Hauptprojekte aus dem Portfolio von Sneha Patil mit allen Originaltexten, Plänen, Schnitten und Fassadendetails.' 
                      : 'The 4 primary architectural projects from Sneha Patil\'s portfolio, complete with original texts, site plans, sections, and technical details.'}
                  </p>
                </div>

                {/* Filter Controls */}
                <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
                  <span className="text-xs text-gray-400 uppercase tracking-widest font-mono font-bold flex items-center gap-1 shrink-0 mr-2">
                    <Filter className="w-3.5 h-3.5" />
                    Filter:
                  </span>
                  {[
                    { id: 'all', labelDE: 'Alle Projekte (4)', labelEN: 'All Projects (4)' },
                    { id: 'reuse', labelDE: 'Umnutzung', labelEN: 'Adaptive Reuse' },
                    { id: 'education', labelDE: 'Lernzentrum', labelEN: 'Education' },
                    { id: 'gastronomy', labelDE: 'Cafeteria', labelEN: 'Gastronomy' },
                    { id: 'monument', labelDE: 'Denkmal', labelEN: 'Monuments' }
                  ].map((f) => (
                    <button
                      key={f.id}
                      onClick={() => setSelectedFilter(f.id)}
                      className={`px-3 py-1.5 rounded text-[11px] uppercase tracking-wider font-semibold whitespace-nowrap transition-all border ${
                        selectedFilter === f.id
                          ? 'bg-zinc-900 border-zinc-900 text-white font-bold shadow-sm'
                          : 'bg-white border-gray-200 text-zinc-600 hover:border-zinc-400 hover:text-zinc-900'
                      }`}
                    >
                      {lang === 'de' ? f.labelDE : f.labelEN}
                    </button>
                  ))}
                </div>
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    lang={lang}
                    onOpenDetails={(p) => setActiveProject(p)}
                  />
                ))}
              </div>

            </div>
          </section>

          {/* Curriculum Vitae / Resume Section */}
          <ResumeSection lang={lang} />

          {/* Contact & Philosophy Section */}
          <ContactSection lang={lang} />

        </main>
      )}

      {/* Footer */}
      <Footer lang={lang} onLanguageToggle={handleLanguageToggle} />

      {/* Project Case Study Drawer Modal */}
      <ProjectDetailModal
        project={activeProject}
        lang={lang}
        onClose={() => setActiveProject(null)}
        onOpenDrawingInspector={(dw) => setInspectingDrawing(dw)}
      />

      {/* Lightbox Drawing Inspector */}
      <DrawingInspector
        drawing={inspectingDrawing}
        lang={lang}
        onClose={() => setInspectingDrawing(null)}
      />

    </div>
  );
}
