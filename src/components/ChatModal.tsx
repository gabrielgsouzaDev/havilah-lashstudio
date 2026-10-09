import React, { useState, useEffect, useRef } from 'react';
import { Send, LoaderCircle, X, MessageCircle, Sparkles } from 'lucide-react';
import { ChatMessage } from '../types';
import { HavilahAvatar } from './HavilahAvatar';

export const ChatModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: 'Olá! Sou a assistente do Havilah Lash Studio. Posso tirar dúvidas sobre os modelos de cílios, agendamentos ou cuidados. Como posso ajudar você hoje?',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isLoading]);

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const trimmed = inputValue.trim();
    if (!trimmed || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: trimmed,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: trimmed }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Erro na API');

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'model',
          text: data.text,
          timestamp: new Date(),
        },
      ]);
    } catch (err) {
      console.error('Erro Chat:', err);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'model',
          text: 'Para informações imediatas ou agendamento de horários, você também pode falar diretamente com a Rebecca pelo WhatsApp (13) 99700-2356.',
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-50 bg-gradient-to-r from-havilah-gold to-havilah-goldLight text-havilah-black p-3.5 rounded-full shadow-[0_4px_25px_rgba(212,175,55,0.4)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer border-2 border-black group"
          aria-label="Abrir conversa com Assistente Havilah"
        >
          <div className="relative">
            <HavilahAvatar size={28} />
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-black" />
          </div>
          <span className="text-xs font-bold font-serif hidden sm:inline pr-1">
            Dúvidas? Fale Conosco
          </span>
        </button>
      )}

      {/* Chat Window Modal / Drawer */}
      {isOpen && (
        <div className="fixed bottom-0 sm:bottom-6 right-0 sm:right-6 z-50 w-full sm:w-96 h-[85vh] sm:h-[540px] max-h-[85vh] bg-havilah-card border sm:border-2 border-havilah-gold/30 sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="p-4 bg-havilah-darkGray border-b border-havilah-gold/20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <HavilahAvatar size={34} />
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 ring-1 ring-black" />
              </div>
              <div>
                <h4 className="font-serif text-havilah-white font-bold text-sm">
                  Assistente Havilah
                </h4>
                <p className="text-[11px] text-havilah-goldLight/70 flex items-center gap-1">
                  Atendimento Digital
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-havilah-champagne/60 hover:text-havilah-gold p-1.5 rounded-lg transition-colors cursor-pointer"
              aria-label="Fechar chat"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin text-xs leading-relaxed">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {msg.role === 'model' && (
                  <div className="mr-2 mt-1 shrink-0">
                    <HavilahAvatar size={24} />
                  </div>
                )}
                <div
                  className={`max-w-[85%] p-3 rounded-xl shadow-md ${
                    msg.role === 'user'
                      ? 'bg-havilah-gold text-havilah-black font-medium rounded-tr-xs'
                      : 'bg-havilah-darkGray border border-havilah-gold/15 text-havilah-champagne/90 rounded-tl-xs'
                  }`}
                >
                  <div className="whitespace-pre-wrap">{msg.text}</div>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start items-center gap-2">
                <HavilahAvatar size={24} />
                <div className="bg-havilah-darkGray border border-havilah-gold/15 p-2.5 rounded-xl rounded-tl-xs flex items-center gap-2 text-[11px] text-havilah-champagne/60">
                  <LoaderCircle size={14} className="animate-spin text-havilah-gold" />
                  <span>Digitando resposta...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Bar */}
          <form
            onSubmit={handleSubmit}
            className="p-3 bg-havilah-darkGray border-t border-havilah-gold/15 flex gap-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Digite sua dúvida sobre cílios..."
              className="flex-1 bg-havilah-black border border-havilah-gold/20 rounded-xl px-3 py-2 text-xs text-havilah-champagne placeholder:text-havilah-champagne/40 focus:border-havilah-gold focus:outline-none"
            />
            <button
              type="submit"
              disabled={isLoading || !inputValue.trim()}
              className="bg-havilah-gold text-havilah-black p-2.5 rounded-xl hover:bg-havilah-goldLight disabled:opacity-40 transition-all cursor-pointer font-bold shrink-0"
              aria-label="Enviar"
            >
              <Send size={15} />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
