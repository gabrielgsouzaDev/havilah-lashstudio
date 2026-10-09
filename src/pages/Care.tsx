import React from 'react';
import { careTips, careTipImages } from '../data/procedures';

export const Care: React.FC = () => {
  return (
    <div className="animate-fade-in pb-10">
      <header className="mb-10 text-center">
        <p className="text-havilah-gold/60 text-xs uppercase tracking-widest mb-2 font-medium">
          Havilah Lash Studio
        </p>
        <h1 className="font-serif text-3xl md:text-4xl text-havilah-gold mb-3">
          Cuidados Essenciais
        </h1>
        <div className="w-16 h-px bg-havilah-gold/40 mx-auto mb-3" />
        <p className="text-havilah-champagne/60 text-sm md:text-base max-w-md mx-auto">
          Para manter seus cílios impecáveis e duradouros.
        </p>
      </header>

      {/* 4 Essential Care Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {careTips.map((tip, idx) => (
          <div
            key={idx}
            className="relative rounded-2xl overflow-hidden border border-havilah-gold/20 hover:border-havilah-gold/50 transition-all duration-300 group cursor-default shadow-xl"
            style={{ height: '260px' }}
          >
            <img
              src={careTipImages[tip.icon]}
              alt={tip.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/30" />

            {/* Step Number Badge */}
            <div className="absolute top-4 right-4 w-8 h-8 rounded-full border border-havilah-gold/50 flex items-center justify-center bg-black/40 backdrop-blur-xs">
              <span className="text-havilah-gold text-xs font-serif font-bold">
                {idx + 1}
              </span>
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="w-8 h-px bg-havilah-gold/60 mb-3" />
              <h3 className="font-serif text-xl text-havilah-gold mb-2 font-semibold">
                {tip.title}
              </h3>
              <p className="text-havilah-champagne/85 text-sm leading-relaxed">
                {tip.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Cycle Banner */}
      <div className="mt-10 relative rounded-2xl overflow-hidden border border-havilah-gold/20 shadow-xl">
        <img
          src="/ciliosfox2.jpg"
          alt="Extensão de cílios e ciclo biológico dos fios"
          className="w-full h-44 object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/50 flex items-center px-6 md:px-10">
          <div>
            <div className="w-8 h-px bg-havilah-gold mb-3" />
            <h3 className="text-havilah-gold font-serif text-lg md:text-xl mb-1 font-semibold">
              Ciclo natural dos fios e manutenção
            </h3>
            <p className="text-sm text-havilah-champagne/85 max-w-lg leading-relaxed">
              O corpo humano renova naturalmente de 3 a 5 fios de cílios por dia. Por isso, a manutenção a cada 15 a 20 dias é essencial para repor os fios novos e manter o alinhamento impecável da extensão.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
