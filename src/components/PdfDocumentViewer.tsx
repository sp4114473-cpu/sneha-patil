import React, { useState } from 'react';
import { ALL_PDF_PAGES, PERSONAL_INFO } from '../data/portfolioData';
import { Language, PdfPage } from '../types';
import { 
  ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Maximize2, 
  Download, FileText, Layers, X, Grid, CheckCircle2 
} from 'lucide-react';
import { ArchitecturalSvgDiagram } from './ArchitecturalSvgDiagram';

interface Props {
  lang: Language;
  onClose: () => void;
}

export const PdfDocumentViewer: React.FC<Props> = ({ lang, onClose }) => {
  const [currentPageNum, setCurrentPageNum] = useState<number>(1);
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [isGridMode, setIsGridMode] = useState<boolean>(false);

  const currentPage: PdfPage = ALL_PDF_PAGES.find(p => p.pageNumber === currentPageNum) || ALL_PDF_PAGES[0];

  const handleNextPage = () => {
    if (currentPageNum < ALL_PDF_PAGES.length) {
      setCurrentPageNum(currentPageNum + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPageNum > 1) {
      setCurrentPageNum(currentPageNum - 1);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-white text-zinc-900 flex flex-col animate-fadeIn">
      {/* Top Reader Toolbar */}
      <div className="h-16 bg-white border-b border-gray-200 px-4 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="p-2 bg-[#F5F5F3] hover:bg-zinc-900 hover:text-white text-zinc-900 border border-gray-200 transition-colors"
            title="Close PDF Reader"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="hidden sm:block">
            <h3 className="font-serif italic font-bold text-sm text-zinc-900 flex items-center gap-2">
              <FileText className="w-4 h-4 text-zinc-900" />
              SNEHA PATIL — PORTFOLIO (20 PAGES)
            </h3>
            <span className="text-[11px] text-gray-400 font-mono">
              {lang === 'de' ? currentPage.titleDE : currentPage.titleEN}
            </span>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 bg-[#F5F5F3] p-1 border border-gray-200">
            <button
              onClick={handlePrevPage}
              disabled={currentPageNum === 1}
              className="p-1.5 hover:bg-zinc-900 hover:text-white text-zinc-800 disabled:opacity-30 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono font-bold px-2 text-zinc-900">
              Page {currentPageNum} / {ALL_PDF_PAGES.length}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPageNum === ALL_PDF_PAGES.length}
              className="p-1.5 hover:bg-zinc-900 hover:text-white text-zinc-800 disabled:opacity-30 transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Grid Toggle */}
          <button
            onClick={() => setIsGridMode(!isGridMode)}
            className={`p-2 border text-[11px] font-bold uppercase tracking-widest flex items-center gap-1.5 transition-colors ${
              isGridMode ? 'bg-zinc-900 border-zinc-900 text-white' : 'bg-[#F5F5F3] border-gray-200 text-zinc-900 hover:bg-gray-200'
            }`}
          >
            <Grid className="w-4 h-4" />
            <span className="hidden sm:inline">{isGridMode ? 'Single View' : '20-Pages Grid'}</span>
          </button>

          {/* Download Simulated Portfolio PDF */}
          <a
            href="#download"
            onClick={(e) => {
              e.preventDefault();
              alert(lang === 'de' 
                ? 'Das vollständige PDF-Portfolio von Sneha Patil wird für den Download vorbereitet...' 
                : 'Preparing Sneha Patil\'s complete PDF portfolio download...');
            }}
            className="hidden lg:flex items-center gap-1.5 bg-zinc-900 hover:bg-black text-white font-bold text-[11px] uppercase tracking-widest px-4 py-2 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download PDF</span>
          </a>
        </div>
      </div>

      {/* Main Content Area */}
      {isGridMode ? (
        /* Grid Overview Mode (All 20 Pages) */
        <div className="flex-1 overflow-y-auto p-6 bg-[#F5F5F3]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-xl font-serif italic text-zinc-900 mb-6">
              {lang === 'de' ? 'Alle 20 Seiten des Original-Portfolios' : 'All 20 Original Portfolio Pages'}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {ALL_PDF_PAGES.map((page) => {
                const isSelected = page.pageNumber === currentPageNum;
                return (
                  <div
                    key={page.pageNumber}
                    onClick={() => {
                      setCurrentPageNum(page.pageNumber);
                      setIsGridMode(false);
                    }}
                    className={`cursor-pointer group rounded-xl p-2 border transition-all ${
                      isSelected 
                        ? 'bg-amber-950/40 border-amber-500 ring-2 ring-amber-500/50' 
                        : 'bg-slate-950 border-slate-800 hover:border-slate-600'
                    }`}
                  >
                    <div className="aspect-[3/4] bg-slate-900 rounded-lg overflow-hidden relative mb-2 flex items-center justify-center p-2 border border-slate-800">
                      {page.previewImage ? (
                        <img 
                          src={page.previewImage} 
                          alt={`Page ${page.pageNumber}`} 
                          className="w-full h-full object-cover rounded" 
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <div className="text-center p-3">
                          <Layers className="w-8 h-8 text-slate-600 mx-auto mb-2" />
                          <span className="text-[10px] font-mono font-bold text-amber-400 block">
                            PAGE {page.pageNumber}
                          </span>
                        </div>
                      )}
                      <span className="absolute top-2 left-2 bg-slate-900/90 text-amber-400 font-mono text-[10px] font-bold px-1.5 py-0.5 rounded border border-slate-700">
                        P. {page.pageNumber}
                      </span>
                    </div>
                    <div className="text-xs font-semibold text-slate-200 line-clamp-1 group-hover:text-amber-400">
                      {lang === 'de' ? page.titleDE : page.titleEN}
                    </div>
                    <div className="text-[10px] text-slate-400 line-clamp-1 mt-0.5">
                      {page.category}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        /* Single Page Viewer with Sidebar */
        <div className="flex-1 flex overflow-hidden">
          {/* Left Thumbnails Sidebar */}
          <div className="hidden md:flex w-64 bg-slate-900/80 border-r border-slate-800 flex-col overflow-y-auto p-3 space-y-2 shrink-0">
            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 px-2 py-1">
              Document Pages
            </span>
            {ALL_PDF_PAGES.map((page) => {
              const isSelected = page.pageNumber === currentPageNum;
              return (
                <button
                  key={page.pageNumber}
                  onClick={() => setCurrentPageNum(page.pageNumber)}
                  className={`w-full p-2.5 rounded-lg text-left transition-all flex items-start gap-3 border ${
                    isSelected
                      ? 'bg-amber-600/20 border-amber-500 text-amber-200'
                      : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700 text-slate-400'
                  }`}
                >
                  <span className={`w-6 h-6 rounded flex items-center justify-center font-mono text-xs font-bold shrink-0 ${
                    isSelected ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-300'
                  }`}>
                    {page.pageNumber}
                  </span>
                  <div className="overflow-hidden">
                    <span className="text-xs font-semibold block text-slate-200 truncate">
                      {lang === 'de' ? page.titleDE : page.titleEN}
                    </span>
                    <span className="text-[10px] text-slate-500 block truncate">
                      {page.category}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Center Page Viewing Stage */}
          <div className="flex-1 bg-slate-950 p-4 sm:p-8 overflow-y-auto flex flex-col items-center justify-start">
            <div className="w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl space-y-6">
              
              {/* Page Title Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <span className="text-xs font-mono font-bold text-amber-500 uppercase tracking-widest block mb-1">
                    DOCUMENT PAGE {currentPage.pageNumber} OF 20
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                    {lang === 'de' ? currentPage.titleDE : currentPage.titleEN}
                  </h2>
                </div>
                <span className="text-xs font-bold bg-slate-800 text-amber-300 px-3 py-1.5 rounded-full border border-slate-700">
                  {currentPage.category}
                </span>
              </div>

              {/* Page Visual Render or Interactive SVG */}
              <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
                {currentPage.previewImage ? (
                  <img
                    src={currentPage.previewImage}
                    alt={currentPage.titleEN}
                    className="w-full h-auto object-contain max-h-[550px] mx-auto"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="p-4">
                    <ArchitecturalSvgDiagram
                      type={
                        currentPage.pageNumber === 6 ? 'site_plan_furnace' :
                        currentPage.pageNumber === 7 ? 'facade_detail_furnace' :
                        currentPage.pageNumber === 18 ? 'rw_facade_detail' :
                        'generic'
                      }
                      lang={lang}
                    />
                  </div>
                )}
              </div>

              {/* Page OCR / Exact Text Snippet Panel */}
              <div className="bg-slate-950/80 p-5 rounded-xl border border-slate-800/80 space-y-2">
                <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold uppercase tracking-wider">
                  <FileText className="w-4 h-4" />
                  <span>Exact Content extracted from Page {currentPage.pageNumber}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans whitespace-pre-line">
                  {lang === 'de' ? currentPage.textSnippetDE : currentPage.textSnippetEN}
                </p>
              </div>

              {/* Page Footer Jump bar */}
              <div className="flex items-center justify-between text-xs text-slate-400 pt-2">
                <button
                  onClick={handlePrevPage}
                  disabled={currentPageNum === 1}
                  className="hover:text-amber-400 flex items-center gap-1 disabled:opacity-30"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous Page</span>
                </button>
                <span className="font-mono text-slate-500">
                  Document ID: Sneha_Patil_Portfolio_2025.pdf
                </span>
                <button
                  onClick={handleNextPage}
                  disabled={currentPageNum === ALL_PDF_PAGES.length}
                  className="hover:text-amber-400 flex items-center gap-1 disabled:opacity-30"
                >
                  <span>Next Page</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};
