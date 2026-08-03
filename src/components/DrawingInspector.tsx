import React, { useState } from 'react';
import { ArchitecturalDrawing, Language } from '../types';
import { X, ZoomIn, ZoomOut, Maximize2, Layers, Download, Check } from 'lucide-react';
import { ArchitecturalSvgDiagram } from './ArchitecturalSvgDiagram';

interface Props {
  drawing: ArchitecturalDrawing | null;
  lang: Language;
  onClose: () => void;
}

export const DrawingInspector: React.FC<Props> = ({ drawing, lang, onClose }) => {
  if (!drawing) return null;

  const [zoom, setZoom] = useState<number>(100);

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 25, 250));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 25, 75));

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex flex-col animate-fadeIn">
      {/* Lightbox Header */}
      <div className="h-16 bg-white border-b border-gray-200 px-6 flex items-center justify-between shrink-0 text-zinc-900">
        <div className="flex items-center gap-3">
          <span className="text-[10px] bg-zinc-900 text-white font-mono font-bold px-2.5 py-1 uppercase tracking-widest">
            SCALE {drawing.scale}
          </span>
          <div>
            <h3 className="font-serif italic font-bold text-sm text-zinc-900">
              {lang === 'de' ? drawing.titleDE : drawing.titleEN}
            </h3>
            <span className="text-[10px] font-mono text-gray-400">
              Type: {drawing.type.toUpperCase()}
            </span>
          </div>
        </div>

        {/* Zoom Controls & Close */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 bg-[#F5F5F3] p-1 border border-gray-200">
            <button
              onClick={handleZoomOut}
              className="p-1.5 hover:bg-zinc-900 hover:text-white text-zinc-800 transition-colors"
              title="Zoom Out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono font-bold px-2 text-zinc-900">
              {zoom}%
            </span>
            <button
              onClick={handleZoomIn}
              className="p-1.5 hover:bg-zinc-900 hover:text-white text-zinc-800 transition-colors"
              title="Zoom In"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={onClose}
            className="p-2 bg-[#F5F5F3] hover:bg-zinc-900 hover:text-white text-zinc-900 border border-gray-200 transition-colors"
            title="Close Lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Lightbox Main Stage */}
      <div className="flex-1 overflow-auto p-8 flex items-center justify-center bg-[#F5F5F3] select-none">
        <div 
          className="transition-transform duration-300 ease-out max-w-5xl w-full"
          style={{ transform: `scale(${zoom / 100})` }}
        >
          {drawing.imageOrSvg.startsWith('http') || drawing.imageOrSvg.startsWith('/src') ? (
            <div className="overflow-hidden border border-gray-200 bg-white shadow-xl">
              <img
                src={drawing.imageOrSvg}
                alt={drawing.titleEN}
                className="w-full h-auto object-contain max-h-[75vh] mx-auto"
                referrerPolicy="no-referrer"
              />
            </div>
          ) : (
            <ArchitecturalSvgDiagram type={drawing.imageOrSvg} lang={lang} />
          )}
        </div>
      </div>

      {/* Lightbox Footer Info */}
      <div className="p-4 bg-white border-t border-gray-200 text-center text-xs text-zinc-600 font-sans">
        <p className="max-w-2xl mx-auto">
          {lang === 'de' ? drawing.descriptionDE : drawing.descriptionEN}
        </p>
      </div>
    </div>
  );
};
