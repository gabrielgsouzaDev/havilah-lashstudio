import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Check, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { AppRoute, ProcedureId } from '../types';
import { procedures, additionalServices, whatsappNumber } from '../data/procedures';

export const Pricing: React.FC = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<'todos' | 'naturais' | 'marcantes'>('todos');

  const filteredProcedures = procedures.filter((p) => {
    if (filter === 'naturais') {
      return (
        p.id === ProcedureId.VOLUME_HAVILAH ||
        p.id === ProcedureId.NATURAL_SOFT ||
        p.id === ProcedureId.VOLUME_DIVINE ||
        p.id === ProcedureId.CAPPING
      );
    }
    if (filter === 'marcantes') {
      return (
        p.id === ProcedureId.VOLUME_PREMIUM ||
        p.id === ProcedureId.FOX_EYES ||
        p.id === ProcedureId.PRINCESS_EFFECT ||
        p.id === ProcedureId.COMBO_GLAMOUR
      );
    }
    return true;
  });

  const handleBookModel = (procName: string) => {
    navigate(AppRoute.BOOKING);
  };

  return (
    <div className="animate-fade-in max-w-5xl mx-auto pb-16 space-y-10">
      {/* Editorial Header */}
      <header className="text-center space-y-2">
        <p className="text-havilah-gold/70 text-xs uppercase tracking-widest font-semibold">
          Menu de Procedimentos
        </p>
        <h1 className="font-serif text-3xl md:text-5xl text-havilah-gold font-bold">
          Modelos & Investimento
        </h1>
        <p className="text-havilah-champagne/70 text-xs md:text-sm max-w-lg mx-auto">
          Técnicas exclusivas desenvolvidas para valorizar a anatomia única dos seus olhos, com materiais de alta precisão e conforto absoluto.
        </p>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-2 pt-4">
          <button
            onClick={() => setFilter('todos')}
            className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
              filter === 'todos'
                ? 'bg-havilah-gold text-havilah-black font-bold shadow-md shadow-havilah-gold/20'
                : 'bg-havilah-darkGray text-havilah-champagne/70 border border-havilah-gold/20 hover:border-havilah-gold/40'
            }`}
          >
            Todos os 8 Modelos
          </button>
          <button
            onClick={() => setFilter('naturais')}
            className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
              filter === 'naturais'
                ? 'bg-havilah-gold text-havilah-black font-bold shadow-md shadow-havilah-gold/20'
                : 'bg-havilah-darkGray text-havilah-champagne/70 border border-havilah-gold/20 hover:border-havilah-gold/40'
            }`}
          >
            Naturais & Delicados
          </button>
          <button
            onClick={() => setFilter('marcantes')}
            className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
              filter === 'marcantes'
                ? 'bg-havilah-gold text-havilah-black font-bold shadow-md shadow-havilah-gold/20'
                : 'bg-havilah-darkGray text-havilah-champagne/70 border border-havilah-gold/20 hover:border-havilah-gold/40'
            }`}
          >
            Marcantes & Glamour
          </button>
        </div>
      </header>

      {/* Luxury Procedure Catalog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProcedures.map((item) => (
          <div
            key={item.id}
            className="bg-havilah-card border border-havilah-gold/20 hover:border-havilah-gold/50 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              {/* Image with Tag Overlay */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={item.imagePlaceholder}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute top-3 left-3">
                  {item.id === ProcedureId.VOLUME_HAVILAH ? (
                    <span className="bg-havilah-gold text-havilah-black text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-md">
                      Assinatura do Estúdio
                    </span>
                  ) : item.id === ProcedureId.COMBO_GLAMOUR ? (
                    <span className="bg-havilah-gold text-havilah-black text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-md">
                      Mais Procurado
                    </span>
                  ) : (
                    <span className="bg-black/70 backdrop-blur-xs text-havilah-gold border border-havilah-gold/30 text-[10px] font-medium uppercase tracking-wider px-2.5 py-1 rounded-md">
                      Técnica Exclusiva
                    </span>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-2xl text-havilah-white font-bold">
                    {item.name}
                  </h3>
                </div>

                <p className="text-havilah-champagne/75 text-xs md:text-sm leading-relaxed line-clamp-3">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Price Footer & Booking Action */}
            <div className="p-6 pt-0 border-t border-havilah-gold/10 mt-2 space-y-4">
              <div className="flex items-baseline justify-between pt-3">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-havilah-champagne/50 block font-medium">
                    Aplicação Completa
                  </span>
                  <span className="font-serif text-2xl text-havilah-gold font-bold">
                    R$ {item.price}
                  </span>
                </div>

                {item.maintenancePrice && (
                  <div className="text-right">
                    <span className="text-[10px] uppercase tracking-wider text-havilah-champagne/50 block font-medium">
                      Manutenção (20 dias)
                    </span>
                    <span className="font-serif text-lg text-havilah-champagne/80 font-semibold">
                      R$ {item.maintenancePrice}
                    </span>
                  </div>
                )}
              </div>

              <button
                onClick={() => handleBookModel(item.name)}
                className="w-full bg-havilah-darkGray border border-havilah-gold/30 hover:bg-havilah-gold hover:text-black text-havilah-gold text-xs font-semibold py-2.5 px-4 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
              >
                <span>Agendar este modelo</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Featured Combo & Additional Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
        {/* Featured Combo */}
        <div className="bg-gradient-to-br from-[#1a160e] via-havilah-card to-black border-2 border-havilah-gold/40 p-6 md:p-8 rounded-2xl relative shadow-xl flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider bg-havilah-gold text-havilah-black px-3 py-1 rounded-full shadow-md">
                Experiência Completa
              </span>
              <span className="font-serif text-3xl text-havilah-gold font-bold">
                R$ 230
              </span>
            </div>

            <div>
              <h3 className="font-serif text-2xl text-havilah-white font-bold mb-1">
                Combo Glamour
              </h3>
              <p className="text-xs text-havilah-champagne/70">
                A opção perfeita para quem quer praticidade total com a manutenção já garantida.
              </p>
            </div>

            <ul className="space-y-2.5 text-xs text-havilah-champagne/85 pt-2">
              <li className="flex items-center gap-2">
                <Check size={15} className="text-havilah-gold shrink-0" />
                <span>Aplicação do modelo exclusivo Volume Havilah</span>
              </li>
              <li className="flex items-center gap-2">
                <Check size={15} className="text-havilah-gold shrink-0" />
                <span>Kit especial de higienização (shampoo neutro + pincel)</span>
              </li>
              <li className="flex items-center gap-2">
                <Check size={15} className="text-havilah-gold shrink-0" />
                <span>Primeira manutenção (até 20 dias) inclusa no pacote</span>
              </li>
            </ul>
          </div>

          <button
            onClick={() => navigate(AppRoute.BOOKING)}
            className="mt-6 w-full bg-havilah-gold text-havilah-black font-semibold text-xs py-3 px-4 rounded-xl hover:bg-havilah-goldLight transition-all cursor-pointer shadow-md"
          >
            Quero o Combo Glamour
          </button>
        </div>

        {/* Additional Services */}
        <div className="bg-havilah-card border border-havilah-gold/20 p-6 md:p-8 rounded-2xl shadow-xl flex flex-col justify-between">
          <div>
            <h3 className="font-serif text-xl text-havilah-white font-bold mb-1">
              Serviços Adicionais
            </h3>
            <p className="text-xs text-havilah-champagne/60 mb-6">
              Procedimentos de remoção segura e higienização dos fios.
            </p>

            <div className="space-y-3">
              {additionalServices.map((svc) => (
                <div
                  key={svc.id}
                  className="flex justify-between items-center text-xs border-b border-havilah-gold/10 pb-3"
                >
                  <span className="text-havilah-champagne/90 font-medium">
                    {svc.name}
                  </span>
                  <span className="text-havilah-gold font-bold font-serif text-sm">
                    R$ {svc.price}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6">
            <p className="text-[11px] text-havilah-champagne/50 italic mb-3">
              Remoções são feitas com produto específico que dissolve a cola sem quebrar os fios naturais.
            </p>
            <button
              onClick={() => navigate(AppRoute.BOOKING)}
              className="w-full bg-havilah-darkGray border border-havilah-gold/30 text-havilah-champagne hover:border-havilah-gold text-xs font-semibold py-2.5 px-4 rounded-xl transition-all cursor-pointer"
            >
              Agendar Serviço Adicional
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
