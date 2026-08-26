import React, { useState, useEffect } from 'react';
import { playPopSound, isSoundEnabled, setSoundEnabled } from '../utils/sound';
import { Volume2, VolumeX, Menu, X, Sparkles } from 'lucide-react';

export const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [soundOn, setSoundOn] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'BRİF', href: '#brif' },
    { label: 'JOURNEY', href: '#journey' },
    { label: 'KONSEPT', href: '#konsept' },
    { label: 'DENEYİM', href: '#istasyonlar' },
    { label: 'ALAN', href: '#alan' },
    { label: 'TASARIM', href: '#tasarim' },
    { label: 'PLAN', href: '#plan' },
    { label: 'ETKİ', href: '#etki' },
  ];

  const handleNavClick = (href: string) => {
    playPopSound();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - topOffset,
        behavior: 'smooth',
      });
    }
  };

  const toggleSound = () => {
    const newState = !soundOn;
    setSoundOn(newState);
    setSoundEnabled(newState);
    if (newState) playPopSound();
  };

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080B14]/90 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Left: Brand Logo & Designer Name */}
        <div className="flex items-center gap-4">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            className="flex items-center focus:outline-none"
          >
            <img
              src="/logo.png"
              alt="Crs soft kids"
              className="h-9 sm:h-10 w-auto"
              draggable={false}
            />
          </a>
          <div className="hidden sm:block border-l border-slate-800 pl-3">
            <span className="text-xs font-display font-bold text-white block">
              Neziha Şimşek
            </span>
            <span className="text-[10px] font-mono text-[#2AC4A4] block">
              EX Case Study
            </span>
          </div>
        </div>

        {/* Center: Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 rounded-full px-4 py-1.5 backdrop-blur-md">
          {navLinks.map((item) => (
            <button
              key={item.label}
              id={`nav-link-${item.label.toLowerCase()}`}
              onClick={() => handleNavClick(item.href)}
              className="px-3 py-1.5 text-xs font-mono font-medium text-slate-300 hover:text-white rounded-full hover:bg-white/5 transition-all"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right: Sound Toggle & Mobile Menu */}
        <div className="flex items-center gap-3">
          <button
            id="sound-toggle-btn"
            onClick={toggleSound}
            className="p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition-colors"
            title={soundOn ? 'Sesi Kapat' : 'Sesi Aç'}
          >
            {soundOn ? (
              <Volume2 className="w-4 h-4 text-[#2AC4A4]" />
            ) : (
              <VolumeX className="w-4 h-4 text-slate-500" />
            )}
          </button>

          {/* Mobile hamburger */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => {
              playPopSound();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="lg:hidden p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0E1A]/95 backdrop-blur-2xl border-b border-slate-800 p-6 space-y-4">
          <div className="flex flex-col space-y-2">
            {navLinks.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-left py-2.5 px-4 text-sm font-mono text-slate-200 hover:bg-white/5 rounded-xl transition-all"
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 font-mono flex items-center justify-between">
            <span>Neziha Şimşek · EX Design</span>
            <span className="text-[#2AC4A4]">CRS Kids</span>
          </div>
        </div>
      )}
    </header>
  );
};
