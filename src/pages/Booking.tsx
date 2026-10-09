import React, { useState } from 'react';
import {
  Calendar as CalendarIcon,
  Clock,
  Sparkles,
  Wallet,
  CreditCard,
  ChevronLeft,
  ChevronRight,
  MapPin,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
} from 'lucide-react';
import { Procedure } from '../types';
import {
  procedures,
  whatsappNumber,
  studioInfo,
  preAppointmentChecklist,
} from '../data/procedures';
import { Button } from '../components/Button';

export const Booking: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedModel, setSelectedModel] = useState<Procedure | null>(null);
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);

  const timeSlots = ['09:00', '11:00', '14:00', '16:30', '18:00'];
  const availableProcedures = procedures.filter((p) => p.price);
  const paymentMethods = [
    { id: 'pix', label: 'PIX' },
    { id: 'credito', label: 'Crédito' },
    { id: 'debito', label: 'Débito' },
    { id: 'dinheiro', label: 'Dinheiro' },
  ];
  const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

  const getDaysInMonth = (year: number, month: number) =>
    new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year: number, month: number) =>
    new Date(year, month, 1).getDay();

  const prevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    );
  };

  const nextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    );
  };

  const handleSelectDay = (day: number) => {
    const d = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day
    );
    setSelectedDate(d);
    setSelectedTime(null);
    setSelectedModel(null);
    setSelectedPayment(null);
  };

  const isSelectedDate = (day: number) => {
    if (!selectedDate) return false;
    return (
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === currentMonth.getMonth() &&
      selectedDate.getFullYear() === currentMonth.getFullYear()
    );
  };

  const handleConfirmWhatsApp = () => {
    if (selectedDate && selectedTime && selectedModel && selectedPayment) {
      const formattedDate = selectedDate.toLocaleDateString('pt-BR', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
      });
      const message = `Olá Rebecca, gostaria de confirmar um agendamento:
*Modelo:* ${selectedModel.name}
*Dia:* ${formattedDate}
*Horário:* ${selectedTime}
*Pagamento:* ${selectedPayment}
*Endereço confirmado:* R. Santa Luzia, 581 - Vila Caiçara`;

      const encoded = encodeURIComponent(message);
      window.open(
        `https://wa.me/${whatsappNumber}?text=${encoded}`,
        '_blank',
        'noopener,noreferrer'
      );
    }
  };

  const renderCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const totalDays = getDaysInMonth(year, month);
    const startDay = getFirstDayOfMonth(year, month);
    const cells = [];

    // Empty cells before start of month
    for (let i = 0; i < startDay; i++) {
      cells.push(
        <div key={`empty-${i}`} className="h-8 w-8 md:h-10 md:w-10" />
      );
    }

    const today = new Date();
    for (let day = 1; day <= totalDays; day++) {
      const isToday =
        today.getDate() === day &&
        today.getMonth() === month &&
        today.getFullYear() === year;
      const isSelected = isSelectedDate(day);

      cells.push(
        <button
          key={day}
          onClick={() => handleSelectDay(day)}
          className={`h-8 w-8 md:h-10 md:w-10 rounded-full flex items-center justify-center text-sm transition-all cursor-pointer
            ${
              isSelected
                ? 'bg-havilah-gold text-havilah-black font-bold shadow-lg shadow-havilah-gold/20 scale-110'
                : 'text-havilah-champagne hover:bg-havilah-gold/10'
            }
            ${isToday && !isSelected ? 'border border-havilah-gold/30' : ''}
          `}
        >
          {day}
        </button>
      );
    }

    return cells;
  };

  const capitalize = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <div className="animate-fade-in max-w-3xl mx-auto pb-16 space-y-8">
      <header className="text-center md:text-left">
        <h1 className="font-serif text-3xl md:text-4xl text-havilah-gold mb-2 font-bold">
          Agendar Horário
        </h1>
        <p className="text-havilah-champagne/70 text-sm md:text-base">
          Reserve seu momento de cuidado exclusivo com Rebecca Havilah.
        </p>
      </header>

      {/* Studio Location Pill */}
      <div className="bg-havilah-darkGray border border-havilah-gold/20 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-havilah-champagne/90">
          <MapPin size={18} className="text-havilah-gold shrink-0" />
          <span>
            <strong>Local de Atendimento:</strong> {studioInfo.address.fullFormatted}
          </span>
        </div>
        <a
          href={studioInfo.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-havilah-gold hover:underline flex items-center gap-1 font-semibold shrink-0"
        >
          Ver no Maps <ExternalLink size={12} />
        </a>
      </div>

      {/* Step 1: Calendar */}
      <div className="bg-havilah-card border border-havilah-gold/10 p-5 md:p-6 rounded-2xl shadow-md space-y-4">
        <div className="flex items-center justify-between border-b border-havilah-gold/10 pb-4">
          <h3 className="flex items-center gap-2 text-havilah-white font-serif text-lg font-semibold">
            <CalendarIcon size={18} className="text-havilah-gold" />
            1. Escolha a Data: {capitalize(
              currentMonth.toLocaleDateString('pt-BR', {
                month: 'long',
                year: 'numeric',
              })
            )}
          </h3>
          <div className="flex gap-2">
            <button
              onClick={prevMonth}
              className="p-2 hover:bg-havilah-gold/10 rounded-full text-havilah-gold transition-colors cursor-pointer"
              aria-label="Mês anterior"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextMonth}
              className="p-2 hover:bg-havilah-gold/10 rounded-full text-havilah-gold transition-colors cursor-pointer"
              aria-label="Próximo mês"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="mb-2 grid grid-cols-7 text-center">
          {weekDays.map((d) => (
            <span
              key={d}
              className="text-[10px] md:text-xs text-havilah-gold/60 uppercase tracking-wider font-semibold py-2"
            >
              {d}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-y-2 justify-items-center">
          {renderCalendarDays()}
        </div>
      </div>

      {/* Step 2: Time Slots */}
      {selectedDate && (
        <div className="bg-havilah-card border border-havilah-gold/10 p-5 md:p-6 rounded-2xl shadow-md animate-fade-in space-y-4">
          <h3 className="flex items-center gap-2 text-havilah-white font-serif text-lg font-semibold border-b border-havilah-gold/10 pb-3">
            <Clock size={18} className="text-havilah-gold" /> 2. Selecione o Horário
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
            {timeSlots.map((slot) => (
              <button
                key={slot}
                onClick={() => {
                  setSelectedTime(slot);
                  setSelectedModel(null);
                  setSelectedPayment(null);
                }}
                className={`py-3 md:py-2.5 px-3 rounded-xl text-sm transition-all border font-medium cursor-pointer ${
                  selectedTime === slot
                    ? 'bg-havilah-gold text-havilah-black border-havilah-gold shadow-md transform scale-105 font-bold'
                    : 'bg-havilah-darkGray border-havilah-gold/15 text-havilah-champagne hover:border-havilah-gold/40'
                }`}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 3: Choose Lash Style */}
      {selectedDate && selectedTime && (
        <div className="bg-havilah-card border border-havilah-gold/10 p-5 md:p-6 rounded-2xl shadow-md animate-fade-in space-y-4">
          <h3 className="flex items-center gap-2 text-havilah-white font-serif text-lg font-semibold border-b border-havilah-gold/10 pb-3">
            <Sparkles size={18} className="text-havilah-gold" /> 3. Escolha o Modelo
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {availableProcedures.map((proc) => (
              <button
                key={proc.id}
                onClick={() => {
                  setSelectedModel(proc);
                  setSelectedPayment(null);
                }}
                className={`p-4 rounded-xl text-left transition-all border flex justify-between items-center cursor-pointer ${
                  selectedModel?.id === proc.id
                    ? 'bg-havilah-gold text-havilah-black border-havilah-gold shadow-md font-semibold'
                    : 'bg-havilah-darkGray border-havilah-gold/15 text-havilah-champagne hover:border-havilah-gold/40'
                }`}
              >
                <div>
                  <span className="font-medium text-sm block">{proc.name}</span>
                  <span className="text-[11px] opacity-75">
                    {proc.id === 'volume_havilah' ? 'Assinatura do Studio' : 'Técnica Exclusiva'}
                  </span>
                </div>
                <span className="text-sm font-bold opacity-90">
                  R$ {proc.price}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 4: Payment Method */}
      {selectedDate && selectedTime && selectedModel && (
        <div className="bg-havilah-card border border-havilah-gold/10 p-5 md:p-6 rounded-2xl shadow-md animate-fade-in space-y-4">
          <h3 className="flex items-center gap-2 text-havilah-white font-serif text-lg font-semibold border-b border-havilah-gold/10 pb-3">
            <Wallet size={18} className="text-havilah-gold" /> 4. Forma de Pagamento
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {paymentMethods.map((m) => (
              <button
                key={m.id}
                onClick={() => setSelectedPayment(m.label)}
                className={`py-3 px-4 rounded-xl text-sm transition-all border flex items-center justify-center gap-2 font-medium cursor-pointer ${
                  selectedPayment === m.label
                    ? 'bg-havilah-gold text-havilah-black border-havilah-gold shadow-md font-bold'
                    : 'bg-havilah-darkGray border-havilah-gold/15 text-havilah-champagne hover:border-havilah-gold/40'
                }`}
              >
                <CreditCard size={14} />
                {m.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Pre-Appointment Guidelines */}
      <div className="bg-gradient-to-br from-havilah-card to-havilah-darkGray border border-havilah-gold/20 p-5 md:p-6 rounded-2xl space-y-4 shadow-xl">
        <div className="flex items-center gap-2 text-havilah-gold font-serif text-lg font-semibold">
          <AlertCircle size={20} />
          Orientações para o seu dia de atendimento
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          {preAppointmentChecklist.map((item, idx) => (
            <div
              key={idx}
              className="bg-black/50 border border-havilah-gold/10 p-3 rounded-xl flex gap-2.5 items-start"
            >
              <CheckCircle2 size={16} className="text-havilah-gold shrink-0 mt-0.5" />
              <div>
                <h5 className="text-xs font-semibold text-havilah-champagne">
                  {item.title}
                </h5>
                <p className="text-[11px] text-havilah-champagne/60 mt-0.5 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-[11px] text-havilah-champagne/60 italic border-t border-havilah-gold/10 pt-2 flex items-center gap-1.5">
          <MapPin size={13} className="text-havilah-gold shrink-0" />
          <span><strong>Chegada ao Estúdio:</strong> Entrada privativa sem placa na fachada no nº 581 da R. Santa Luzia. Toque a campainha ou mande mensagem ao chegar.</span>
        </p>
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <Button
          fullWidth
          onClick={handleConfirmWhatsApp}
          disabled={
            !selectedDate || !selectedTime || !selectedModel || !selectedPayment
          }
        >
          Confirmar e Agendar no WhatsApp com Rebecca
        </Button>
      </div>
    </div>
  );
};
