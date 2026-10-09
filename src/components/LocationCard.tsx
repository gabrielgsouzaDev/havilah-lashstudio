import React from 'react';
import { MapPin, Instagram, ExternalLink, Clock, MessageCircle } from 'lucide-react';
import { studioInfo } from '../data/procedures';

export const LocationCard: React.FC = () => {
  return (
    <div className="bg-havilah-card border border-havilah-gold/20 rounded-2xl p-6 md:p-8 space-y-6 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-havilah-gold/15 pb-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <MapPin size={20} className="text-havilah-gold shrink-0" />
            <h3 className="font-serif text-2xl text-havilah-gold font-semibold">
              Atendimento no Estúdio
            </h3>
          </div>
          <p className="text-havilah-champagne/90 text-sm">
            {studioInfo.address.fullFormatted}
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs text-havilah-champagne/70 bg-havilah-darkGray px-3.5 py-2 rounded-xl border border-havilah-gold/20 w-fit">
          <Clock size={15} className="text-havilah-gold shrink-0" />
          <span>Seg a Sex: 09h às 19h • Sáb: 09h às 16h</span>
        </div>
      </div>

      {/* Arrival notice without placa */}
      <div className="bg-havilah-darkGray border border-havilah-gold/20 rounded-xl p-4 md:p-5 text-xs md:text-sm text-havilah-champagne/85 leading-relaxed space-y-1">
        <p className="font-semibold text-havilah-gold">
          Acesso e identificação no local:
        </p>
        <p>
          O atendimento é individual em espaço privativo. Como não há placa comercial na fachada, ao chegar no número 581 basta tocar a campainha ou avisar pelo WhatsApp que abriremos o portão para você.
        </p>
      </div>

      {/* Action buttons */}
      <div className="flex flex-wrap gap-3 pt-1">
        <a
          href={studioInfo.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-havilah-gold text-havilah-black font-semibold text-xs py-2.5 px-4 rounded-xl hover:bg-havilah-goldLight transition-colors shadow-md shadow-havilah-gold/15"
        >
          <MapPin size={15} />
          Abrir no Google Maps
          <ExternalLink size={12} className="opacity-80" />
        </a>

        <a
          href={studioInfo.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-havilah-darkGray border border-havilah-gold/30 text-havilah-champagne hover:border-havilah-gold hover:text-havilah-gold font-medium text-xs py-2.5 px-4 rounded-xl transition-colors"
        >
          <Instagram size={15} className="text-havilah-gold" />
          {studioInfo.instagram}
          <ExternalLink size={12} className="opacity-60" />
        </a>

        <a
          href={studioInfo.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-havilah-darkGray border border-havilah-gold/30 text-havilah-champagne hover:border-havilah-gold hover:text-havilah-gold font-medium text-xs py-2.5 px-4 rounded-xl transition-colors"
        >
          <MessageCircle size={15} className="text-havilah-gold" />
          WhatsApp
        </a>
      </div>
    </div>
  );
};
