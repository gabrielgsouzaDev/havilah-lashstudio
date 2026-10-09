import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqList } from '../data/procedures';

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [filter, setFilter] = useState<string>('todos');

  const categories = [
    { id: 'todos', label: 'Todas as Dúvidas' },
    { id: 'procedimento', label: 'Procedimento' },
    { id: 'cuidados', label: 'Cuidados & Rotina' },
    { id: 'agendamento', label: 'Agendamento & Pagamento' },
  ];

  const filtered =
    filter === 'todos'
      ? faqList
      : faqList.filter((item) => item.category === filter);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className="bg-havilah-card border border-havilah-gold/20 rounded-2xl p-6 md:p-8 space-y-6 shadow-xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-havilah-gold/15 pb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <HelpCircle size={20} className="text-havilah-gold" />
            <h3 className="font-serif text-2xl text-havilah-gold font-semibold">
              Perguntas Frequentes
            </h3>
          </div>
          <p className="text-havilah-champagne/70 text-xs md:text-sm">
            Tire todas as suas dúvidas antes da sua primeira ou próxima sessão.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => {
                setFilter(c.id);
                setOpenIdx(null);
              }}
              className={`px-3 py-1 rounded-full text-xs transition-all cursor-pointer ${
                filter === c.id
                  ? 'bg-havilah-gold text-havilah-black font-bold shadow-md'
                  : 'bg-havilah-darkGray text-havilah-champagne/70 border border-havilah-gold/20 hover:border-havilah-gold/40'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Accordion list */}
      <div className="space-y-3">
        {filtered.map((item, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className="border border-havilah-gold/15 rounded-xl overflow-hidden transition-colors bg-havilah-darkGray/50 hover:border-havilah-gold/30"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full p-4 md:p-5 flex items-center justify-between text-left gap-4 cursor-pointer"
              >
                <span className="font-serif text-sm md:text-base text-havilah-white font-medium">
                  {item.question}
                </span>
                <ChevronDown
                  size={18}
                  className={`text-havilah-gold transition-transform duration-300 shrink-0 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-4 pb-4 md:px-5 md:pb-5 pt-0 text-xs md:text-sm text-havilah-champagne/80 leading-relaxed border-t border-havilah-gold/10 mt-1">
                  <div className="pt-3">{item.answer}</div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
