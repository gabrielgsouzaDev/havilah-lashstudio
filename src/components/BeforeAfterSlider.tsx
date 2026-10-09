import React, { useState, useRef } from 'react';
import { beforeAfterItems } from '../data/procedures';
import { Sparkles, MoveHorizontal, Eye } from 'lucide-react';

export const BeforeAfterSlider: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const current = beforeAfterItems[selectedIdx];

  const updatePosition = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pos = ((clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, pos)));
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // Ignored if capture already lost
    }
  };

  return (
    <div className="bg-havilah-card border border-havilah-gold/20 rounded-2xl p-6 md:p-8 space-y-6 shadow-xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Sparkles size={18} className="text-havilah-gold" />
            <h3 className="font-serif text-2xl text-havilah-gold font-semibold">
              Comparativo de Efeitos
            </h3>
          </div>
          <p className="text-havilah-champagne/70 text-xs md:text-sm">
            Arraste a linha para comparar o olhar natural com a extensão de cílios aplicada.
          </p>
        </div>

        {/* Technique Switcher Tabs */}
        <div className="flex flex-wrap gap-2">
          {beforeAfterItems.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setSelectedIdx(idx);
                setSliderPosition(50);
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                selectedIdx === idx
                  ? 'bg-havilah-gold text-havilah-black font-semibold shadow-md shadow-havilah-gold/20'
                  : 'bg-havilah-darkGray text-havilah-champagne/70 border border-havilah-gold/20 hover:border-havilah-gold/50'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Comparison Canvas with Smooth Pointer Dragging */}
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={() => setIsDragging(false)}
        className="relative h-72 md:h-96 rounded-xl overflow-hidden cursor-ew-resize select-none border border-havilah-gold/30 shadow-2xl touch-none active:cursor-grabbing"
      >
        {/* Full Image: After */}
        <img
          src={current.afterImage}
          alt={`Resultado: ${current.title}`}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />

        {/* Clipped Image: Before */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={current.beforeImage}
            alt={`Antes: ${current.title}`}
            className="absolute inset-0 w-full h-full object-cover max-w-none pointer-events-none"
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        {/* Divider Line & Handle */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-havilah-gold shadow-[0_0_12px_rgba(212,175,55,0.9)] pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div
            className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-havilah-gold text-havilah-black flex items-center justify-center font-bold text-xs shadow-xl border-2 border-black transition-transform ${
              isDragging ? 'scale-115' : 'hover:scale-105'
            }`}
          >
            <MoveHorizontal size={16} />
          </div>
        </div>

        {/* Labels with Icons */}
        <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-xs border border-havilah-gold/30 px-3 py-1 rounded-full text-[10px] md:text-xs text-havilah-champagne font-medium pointer-events-none flex items-center gap-1.5">
          <Eye size={12} className="text-havilah-champagne/70" />
          Natural
        </div>
        <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-xs border border-havilah-gold/30 px-3 py-1 rounded-full text-[10px] md:text-xs text-havilah-gold font-bold pointer-events-none flex items-center gap-1.5">
          <Sparkles size={12} className="text-havilah-gold" />
          Extensão Havilah
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-havilah-champagne/70 gap-2 border-t border-havilah-gold/10 pt-4">
        <span>
          <strong className="text-havilah-gold font-semibold">{current.technique}:</strong>{' '}
          {current.description}
        </span>
        <span className="text-havilah-champagne/50 shrink-0">
          Segure e arraste o marcador para os lados
        </span>
      </div>
    </div>
  );
};
