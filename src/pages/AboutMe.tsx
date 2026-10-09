import React from 'react';
import {
  Award,
  ShieldCheck,
  Instagram,
  MapPin,
  Sparkles,
  Heart,
  Check,
  ExternalLink,
} from 'lucide-react';
import { studioLogo, rebeccaPhoto, studioInfo } from '../data/procedures';

export const AboutMe: React.FC = () => {
  return (
    <div className="animate-fade-in space-y-12 pb-16">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-havilah-gold/20 pb-4">
        <div>
          <h1 className="text-3xl font-serif text-havilah-gold tracking-wide mb-1 font-bold">
            Sobre mim
          </h1>
          <p className="text-sm text-havilah-champagne/70">
            Conheça o atendimento e o padrão de cuidado de Rebecca Havilah.
          </p>
        </div>

        <a
          href={studioInfo.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-havilah-gold/10 border border-havilah-gold/40 text-havilah-gold hover:bg-havilah-gold hover:text-black transition-all px-4 py-2 rounded-xl text-xs font-semibold w-fit"
        >
          <Instagram size={15} />
          {studioInfo.instagram}
          <ExternalLink size={12} />
        </a>
      </div>

      {/* Main Profile Card */}
      <div className="bg-havilah-darkGray border border-havilah-gold/30 p-6 md:p-10 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center md:items-start gap-8 relative overflow-hidden">
        <div className="w-44 h-44 shrink-0 relative">
          <img
            src={studioLogo}
            alt="Rebecca Havilah"
            className="w-full h-full object-cover rounded-full border-2 border-havilah-gold shadow-[0_0_20px_rgba(212,175,55,0.25)] bg-black"
          />
        </div>

        <div className="text-center md:text-left space-y-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-havilah-gold tracking-wider font-bold">
              Rebecca Havilah
            </h2>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mt-2">
              <span className="text-xs uppercase tracking-widest text-havilah-goldLight font-semibold">
                Lash Artist & Visagista
              </span>
              <span className="text-havilah-champagne/40 hidden md:inline">•</span>
              <span className="text-xs text-havilah-champagne/70 flex items-center gap-1">
                <MapPin size={13} className="text-havilah-gold" />
                Vila Caiçara, Praia Grande - SP
              </span>
            </div>
          </div>

          <p className="text-havilah-champagne/90 leading-relaxed text-sm md:text-base">
            Especialista em extensão de cílios com atendimento individual e personalizado em Praia Grande. Meu foco é proporcionar uma experiência de acolhimento e valorização do seu olhar, priorizando sempre a saúde dos seus fios naturais com técnicas de isolamento preciso e produtos dermatologicamente testados.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-2">
            <div className="bg-havilah-card border border-havilah-gold/20 px-3.5 py-1.5 rounded-lg text-xs text-havilah-champagne/90 flex items-center gap-1.5">
              <Award size={14} className="text-havilah-gold" />
              <span>Mais de 5 anos de atuação</span>
            </div>
            <div className="bg-havilah-card border border-havilah-gold/20 px-3.5 py-1.5 rounded-lg text-xs text-havilah-champagne/90 flex items-center gap-1.5">
              <Sparkles size={14} className="text-havilah-gold" />
              <span>Criadora do Volume Havilah</span>
            </div>
            <div className="bg-havilah-card border border-havilah-gold/20 px-3.5 py-1.5 rounded-lg text-xs text-havilah-champagne/90 flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-havilah-gold" />
              <span>Biossegurança e Saúde Ocular</span>
            </div>
          </div>
        </div>
      </div>

      {/* Philosophy & Care */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 border-b border-havilah-gold/20 pb-2">
          <Heart size={20} className="text-havilah-gold" />
          <h3 className="text-2xl font-serif text-havilah-gold font-semibold">
            Nosso Cuidado com Seu Olhar
          </h3>
        </div>

        <div className="text-havilah-champagne/85 space-y-4 text-sm md:text-base leading-relaxed">
          <p>
            A extensão de cílios bem executada nunca deve pesar, incomodar ou causar queda precoce dos seus fios naturais. No Havilah Studio, cada atendimento começa com uma avaliação da estrutura dos seus cílios e do formato dos seus olhos para definir o peso, a curvatura e o comprimento exatos.
          </p>
          <p>
            O espaço na Vila Caiçara foi estruturado para ser calmo, silencioso e acolhedor. Aqui você tem um momento de pausa na sua rotina, com maca confortável, ambiente climatizado e toda a atenção voltada exclusivamente para você durante a sessão.
          </p>
        </div>

        {/* Real photo gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
          <div className="relative rounded-xl overflow-hidden border border-havilah-gold/20 h-48 group shadow-lg">
            <img
              src="/ciliosfox.jpg"
              alt="Extensão Fox Eyes aplicada"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
              <span className="text-xs text-havilah-champagne font-medium">Aplicação Fox Eyes</span>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden border border-havilah-gold/20 h-48 group shadow-lg">
            <img
              src="/ciliosled.jpg"
              alt="Aplicação Efeito Princesa"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
              <span className="text-xs text-havilah-champagne font-medium">Acabamento Efeito Princesa</span>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden border border-havilah-gold/20 h-48 group shadow-lg">
            <img
              src={rebeccaPhoto}
              alt="Atendimento com Rebecca Havilah"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
              <span className="text-xs text-havilah-champagne font-medium">Atendimento no Estúdio</span>
            </div>
          </div>
        </div>
      </div>

      {/* Differentials of Service */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 border-b border-havilah-gold/20 pb-2">
          <ShieldCheck size={20} className="text-havilah-gold" />
          <h3 className="text-2xl font-serif text-havilah-gold font-semibold">
            Pilares do Atendimento
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-havilah-card border border-havilah-gold/15 rounded-xl p-6 md:p-8 space-y-3 shadow-lg">
            <div className="flex items-center gap-2 text-havilah-gold font-serif text-lg font-semibold">
              <Sparkles size={18} />
              <span>Visagismo Ocular Personalizado</span>
            </div>
            <p className="text-sm text-havilah-champagne/75 leading-relaxed">
              Não existe um modelo único para todo mundo. Harmonizamos a espessura, o direcionamento e a curvatura dos fios de acordo com o caimento da sua pálpebra e suas preferências cotidianas.
            </p>
          </div>

          <div className="bg-havilah-card border border-havilah-gold/15 rounded-xl p-6 md:p-8 space-y-3 shadow-lg">
            <div className="flex items-center gap-2 text-havilah-gold font-serif text-lg font-semibold">
              <ShieldCheck size={18} />
              <span>Biossegurança e Materiais Certificados</span>
            </div>
            <p className="text-sm text-havilah-champagne/75 leading-relaxed">
              Pinças esterilizadas, descartáveis de uso único por cliente, fios hipoalergênicos ultraleves e adesivos de alta qualidade registrados para assegurar retenção duradoura sem agredir seus olhos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
