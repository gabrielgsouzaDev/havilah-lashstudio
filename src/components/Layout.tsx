import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  House,
  Sparkles,
  Calendar,
  Eye,
  ShieldCheck,
  User,
  Instagram,
  MapPin,
} from 'lucide-react';
import { AppRoute } from '../types';
import { studioLogo, studioInfo } from '../data/procedures';
import { ChatModal } from './ChatModal';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Reordered according to user priority
  const navItems = [
    { icon: House, label: 'Início', path: AppRoute.DASHBOARD },
    { icon: Sparkles, label: 'Modelos & Valores', path: AppRoute.PRICING },
    { icon: Calendar, label: 'Agendar Horário', path: AppRoute.BOOKING },
    { icon: Eye, label: 'Consultoria', path: AppRoute.CONSULTANCY },
    { icon: ShieldCheck, label: 'Cuidados', path: AppRoute.CARE },
    { icon: User, label: 'Sobre a Rebecca', path: AppRoute.ABOUT_ME },
  ];

  // Mobile Bottom App Bar items (top 5 priority)
  const mobileNavItems = [
    { icon: House, label: 'Início', path: AppRoute.DASHBOARD },
    { icon: Sparkles, label: 'Valores', path: AppRoute.PRICING },
    { icon: Calendar, label: 'Agendar', path: AppRoute.BOOKING, isPrimary: true },
    { icon: Eye, label: 'Consultoria', path: AppRoute.CONSULTANCY },
    { icon: User, label: 'Sobre', path: AppRoute.ABOUT_ME },
  ];

  const getDesktopLinkClasses = (path: string) => {
    const base =
      'w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 cursor-pointer text-sm tracking-wide font-medium';
    const active =
      'bg-havilah-gold/15 text-havilah-gold border-l-2 border-havilah-gold font-semibold shadow-inner';
    const inactive =
      'text-havilah-champagne/70 hover:text-havilah-gold hover:bg-havilah-gold/5';

    return location.pathname === path ? `${base} ${active}` : `${base} ${inactive}`;
  };

  return (
    <div className="min-h-screen bg-havilah-black text-havilah-champagne font-sans flex flex-col md:flex-row selection:bg-havilah-gold selection:text-black">
      {/* Mobile Top Header (Minimal & Clean) */}
      <header className="md:hidden flex items-center justify-between px-4 py-3 bg-havilah-black/95 backdrop-blur-md border-b border-havilah-gold/20 sticky top-0 z-40">
        <div
          className="flex items-center gap-2.5 cursor-pointer"
          onClick={() => navigate(AppRoute.DASHBOARD)}
        >
          <img
            src={studioLogo}
            alt="Logo Rebecca Havilah"
            className="w-9 h-9 rounded-full border border-havilah-gold object-cover shadow-md"
          />
          <div className="flex flex-col justify-center items-start">
            <span className="font-serif text-havilah-gold tracking-widest text-xs leading-none font-bold">
              REBECCA HAVILAH
            </span>
            <span className="text-[10px] text-havilah-goldLight/70 tracking-wider uppercase mt-0.5">
              Lash Studio • Praia Grande
            </span>
          </div>
        </div>

        <a
          href={studioInfo.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-havilah-gold p-2 hover:bg-havilah-gold/10 rounded-full transition-colors"
          title="Instagram @byrebeccahavilah"
        >
          <Instagram size={18} />
        </a>
      </header>

      {/* Desktop Sidebar Navigation */}
      <aside className="hidden md:flex flex-col sticky top-0 left-0 h-screen w-72 bg-havilah-darkGray border-r border-havilah-gold/15 z-40 flex-shrink-0">
        <div className="p-7 flex flex-col h-full overflow-y-auto">
          {/* Logo & Brand Header */}
          <div
            className="mb-8 text-center flex flex-col items-center cursor-pointer"
            onClick={() => navigate(AppRoute.DASHBOARD)}
          >
            <img
              src={studioLogo}
              alt="Logo Rebecca Havilah"
              className="w-16 h-16 rounded-full border-2 border-havilah-gold object-cover mx-auto mb-3 bg-havilah-black shadow-[0_0_20px_rgba(212,175,55,0.25)]"
            />
            <h2 className="font-serif text-havilah-gold tracking-widest text-base leading-none font-bold">
              REBECCA HAVILAH
            </h2>
            <p className="text-[11px] text-havilah-goldLight/70 tracking-wider uppercase mt-1.5 font-medium">
              Lash Studio
            </p>
          </div>

          {/* Reordered Desktop Navigation */}
          <nav className="flex-1 space-y-1.5">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={getDesktopLinkClasses(item.path)}
              >
                <item.icon size={18} className="shrink-0" />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Sidebar Footer with Location & Social */}
          <div className="mt-auto pt-6 border-t border-havilah-gold/15 space-y-3">
            <a
              href={studioInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-havilah-gold/10 hover:bg-havilah-gold hover:text-black border border-havilah-gold/30 text-havilah-gold text-xs font-semibold transition-all"
            >
              <Instagram size={14} />
              <span>{studioInfo.instagram}</span>
            </a>

            <div className="text-[11px] text-center text-havilah-champagne/60 leading-tight">
              <p className="text-havilah-gold/80 font-medium">Vila Caiçara • Praia Grande</p>
              <p className="text-[10px] text-havilah-champagne/40 mt-0.5">R. Santa Luzia, 581</p>
            </div>

            <p className="text-[10px] text-center text-havilah-champagne/30 pt-1">
              © 2026 Havilah Lash Studio
            </p>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 w-full min-w-0 bg-havilah-black">
        <div className="p-4 md:p-10 max-w-6xl mx-auto pb-28 md:pb-12 min-h-[calc(100vh-80px)]">
          {children}
        </div>
      </main>

      {/* Mobile Bottom App Navigation Bar (App Style) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0c0c0c]/95 backdrop-blur-md border-t border-havilah-gold/20 px-2 py-1.5 flex items-center justify-around shadow-[0_-5px_20px_rgba(0,0,0,0.8)]">
        {mobileNavItems.map((item) => {
          const isActive = location.pathname === item.path;

          if (item.isPrimary) {
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`flex flex-col items-center justify-center -mt-5 cursor-pointer transition-transform active:scale-95`}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-2 ${
                    isActive
                      ? 'bg-havilah-gold text-havilah-black border-white shadow-havilah-gold/50'
                      : 'bg-havilah-gold text-havilah-black border-black shadow-havilah-gold/30'
                  }`}
                >
                  <item.icon size={22} className="stroke-[2.5]" />
                </div>
                <span className="text-[10px] font-bold text-havilah-gold mt-1">
                  {item.label}
                </span>
              </button>
            );
          }

          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center justify-center py-1 px-2 rounded-lg transition-colors cursor-pointer ${
                isActive
                  ? 'text-havilah-gold font-bold'
                  : 'text-havilah-champagne/60 hover:text-havilah-gold'
              }`}
            >
              <item.icon size={19} className={isActive ? 'stroke-[2.5]' : ''} />
              <span className="text-[10px] mt-0.5 tracking-tight font-medium">
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Floating Virtual Assistant Modal/Drawer (Available on ALL pages) */}
      <ChatModal />
    </div>
  );
};
