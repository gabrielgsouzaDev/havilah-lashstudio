import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../types';
import { carouselImages, rebeccaPhoto } from '../data/procedures';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { LocationCard } from '../components/LocationCard';
import { FAQSection } from '../components/FAQSection';

export const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { number: '5+', label: 'Anos de experiência' },
    { number: '500+', label: 'Clientes atendidas' },
    { number: '8', label: 'Modelos exclusivos' },
  ];

  const quickLinks = [
    {
      label: 'Valores',
      sub: 'Conheça nossos serviços',
      route: AppRoute.PRICING,
      img: '/sobrancelhahenna.jpg',
    },
    {
      label: 'Consultoria IA',
      sub: 'Descubra seu estilo ideal',
      route: AppRoute.CONSULTANCY,
      img: '/gringa.jpg',
    },
    {
      label: 'Cuidados',
      sub: 'Preserve seus cílios',
      route: AppRoute.CARE,
      img: '/sobrancelha2.jpg',
    },
  ];

  return (
    <div className="space-y-12 animate-fade-in pb-16">
      {/* Hero Banner */}
      <div
        className="relative rounded-2xl overflow-hidden border border-havilah-gold/20 shadow-2xl"
        style={{ minHeight: '340px' }}
      >
        <img
          src={rebeccaPhoto}
          alt="Rebecca Havilah"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent" />

        {/* Brand Tag Top Left */}
        <div className="absolute top-6 left-6 z-10">
          <div className="flex items-center gap-2">
            <div className="w-px h-8 bg-havilah-gold/50" />
            <div>
              <p className="text-havilah-gold/70 text-xs uppercase tracking-widest font-medium">
                by
              </p>
              <p className="text-havilah-gold font-serif text-sm tracking-wide">
                Rebecca Havilah
              </p>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div
          className="relative z-10 p-6 md:p-8 pt-20 md:pt-20 flex flex-col justify-end h-full"
          style={{ minHeight: '340px' }}
        >
          <p className="text-havilah-gold/70 text-xs uppercase tracking-widest mb-2 font-medium">
            Havilah Lash Studio • Praia Grande - SP
          </p>
          <h1 className="font-serif text-3xl md:text-5xl text-white mb-2 leading-tight">
            Realçando o que há
            <br />
            <span className="text-havilah-gold">de mais belo em você</span>
          </h1>
          <div className="w-12 h-px bg-havilah-gold/50 my-4" />
          <p className="text-havilah-champagne/70 text-sm max-w-sm mb-6 leading-relaxed">
            Especialista em extensão de cílios, visagismo e criadora do exclusivo modelo Havilah na Vila Caiçara.
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => navigate(AppRoute.BOOKING)}
              className="bg-havilah-gold text-havilah-black font-serif px-8 py-3 rounded-full hover:bg-havilah-goldLight transition-all text-sm tracking-wide font-semibold shadow-lg shadow-havilah-gold/20 hover:scale-105 active:scale-95 cursor-pointer"
            >
              Agendar Horário
            </button>
            <button
              onClick={() => navigate(AppRoute.CONSULTANCY)}
              className="bg-black/60 border border-havilah-gold/40 text-havilah-gold font-serif px-6 py-3 rounded-full hover:bg-havilah-gold/10 transition-all text-sm tracking-wide cursor-pointer"
            >
              Consultoria com IA
            </button>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-3 md:gap-4">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className="bg-havilah-card border border-havilah-gold/10 rounded-xl p-4 text-center hover:border-havilah-gold/30 transition-all shadow-md"
          >
            <p className="font-serif text-2xl md:text-3xl text-havilah-gold mb-1 font-semibold">
              {item.number}
            </p>
            <p className="text-havilah-champagne/50 text-xs leading-tight">
              {item.label}
            </p>
          </div>
        ))}
      </div>

      {/* Quick Navigation Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {quickLinks.map((item, idx) => (
          <div
            key={idx}
            onClick={() => navigate(item.route)}
            className="relative rounded-xl overflow-hidden border border-havilah-gold/20 hover:border-havilah-gold/60 cursor-pointer group transition-all duration-300 shadow-lg"
            style={{ height: '140px' }}
          >
            <img
              src={item.img}
              alt={item.label}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="font-serif text-havilah-gold text-base font-semibold">
                {item.label}
              </p>
              <p className="text-havilah-champagne/60 text-xs">
                {item.sub}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Work Gallery / Carousel */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <p className="text-havilah-gold/60 text-xs uppercase tracking-widest font-medium">
            Nosso trabalho em fotos reais
          </p>
          <div className="flex gap-1.5 items-center">
            {carouselImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === currentSlide
                    ? 'w-6 bg-havilah-gold'
                    : 'w-2 bg-havilah-gold/20 hover:bg-havilah-gold/40'
                }`}
                aria-label={`Ir para foto ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        <div
          className="relative rounded-2xl overflow-hidden border border-havilah-gold/20 shadow-xl"
          style={{ height: '240px' }}
        >
          {carouselImages.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Trabalho Lash Studio ${idx + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                idx === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Comparativo de Efeitos Antes & Depois Interativo */}
      <BeforeAfterSlider />

      {/* Localização e Atendimento no Estúdio */}
      <LocationCard />

      {/* Dúvidas Frequentes */}
      <FAQSection />
    </div>
  );
};
