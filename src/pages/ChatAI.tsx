import React, { useState, useEffect, useRef } from 'react';
import { Send, LoaderCircle } from 'lucide-react';
import { ChatMessage } from '../types';
import { HavilahAvatar } from '../components/HavilahAvatar';

export const ChatAI: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: 'Olá! Sou a assistente do Havilah Lash Studio. Posso tirar suas dúvidas sobre modelos de cílios, agendamentos, localização na Vila Caiçara ou cuidados. Como posso ajudar você hoje?',
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
    scrollToBottom();
  }, [messages, isLoading]);

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
          text: 'Desculpe, ocorreu um erro ao conectar com a assistente. Se preferir, fale conosco pelo WhatsApp!',
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-[calc(100vh-140px)] flex flex-col bg-havilah-card border border-havilah-gold/10 rounded-2xl overflow-hidden animate-fade-in shadow-2xl">
      {/* Chat Header */}
      <div className="p-4 bg-havilah-darkGray border-b border-havilah-gold/10 flex items-center gap-3">
        <HavilahAvatar size={40} />
        <div>
          <h3 className="font-serif text-havilah-white font-semibold">
            Assistente Havilah
          </h3>
          <p className="text-xs text-havilah-goldLight/80 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
            Online
          </p>
        </div>
      </div>

      {/* Message List */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 scrollbar-thin">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${
              msg.role === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            {msg.role === 'model' && (
              <div className="mr-2 mt-1 flex-shrink-0">
                <HavilahAvatar size={34} />
              </div>
            )}
            <div
              className={`max-w-[85%] md:max-w-[75%] p-4 rounded-2xl text-sm leading-relaxed shadow-md ${
                msg.role === 'user'
                  ? 'bg-havilah-gold text-havilah-black rounded-tr-sm font-medium'
                  : 'bg-havilah-darkGray border border-havilah-gold/10 text-havilah-champagne rounded-tl-sm'
              }`}
            >
              <div className="whitespace-pre-wrap">{msg.text}</div>
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start items-center gap-2">
            <HavilahAvatar size={34} />
            <div className="bg-havilah-darkGray border border-havilah-gold/10 p-4 rounded-2xl rounded-tl-sm flex items-center gap-2 shadow-md">
              <LoaderCircle size={16} className="animate-spin text-havilah-gold" />
              <span className="text-xs text-havilah-champagne/60">
                Havilah está digitando...
              </span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Bar */}
      <form
        onSubmit={handleSubmit}
        className="p-3 md:p-4 bg-havilah-darkGray border-t border-havilah-gold/10 flex gap-2"
      >
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Digite sua dúvida..."
          className="flex-1 bg-havilah-black border border-havilah-gold/20 rounded-xl px-4 py-3 text-havilah-champagne placeholder:text-havilah-champagne/30 focus:border-havilah-gold focus:outline-none transition-colors"
        />
        <button
          type="submit"
          disabled={isLoading || !inputValue.trim()}
          className="bg-havilah-gold text-havilah-black p-3.5 rounded-xl hover:bg-havilah-goldLight disabled:opacity-40 transition-all cursor-pointer font-bold flex items-center justify-center shadow-md active:scale-95"
          aria-label="Enviar mensagem"
        >
          <Send size={18} />
        </button>
      </form>
    </div>
  );
};
