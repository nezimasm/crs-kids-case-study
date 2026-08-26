import React from 'react';
import { motion } from 'motion/react';
import { CurvedLineMotif } from './CurvedLineMotif';
import { ArrowDown, Users, Sparkles, MapPin, Clock, Heart, Compass } from 'lucide-react';
import { playPopSound } from '../utils/sound';

const statChips = [
  { icon: Users, label: '150', suffix: 'Çalışan', color: '#4F75FF' },
  { icon: Sparkles, label: '300–350', suffix: 'Toplam Katılımcı', color: '#FF5E3A' },
  { icon: MapPin, label: 'İstanbul', suffix: '', color: '#F5B72E' },
  { icon: Clock, label: '1 Günlük', suffix: 'Deneyim', color: '#2AC4A4' },
];

export const HeroSection: React.FC = () => {
  const handleStartExplore = () => {
    playPopSound();
    const element = document.getElementById('davetiye');
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - topOffset,
        behavior: 'smooth',
      });
    }
  };

  const handleGoToArea = () => {
    playPopSound();
    const element = document.getElementById('alan');
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - topOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="hero"
      aria-label="Giriş ve Başlık"
      className="relative min-h-[92vh] flex flex-col items-center justify-center pt-28 pb-16 px-4 overflow-hidden"
    >
      {/* Extra local density of the animated neon line motif, layered above the global backdrop */}
      <CurvedLineMotif variant="neon-field" animated={true} className="opacity-90" />
      <CurvedLineMotif variant="hero" animated={true} className="opacity-30" />

      {/* Dynamic ambient floating lights */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-[#FF5E3A]/15 via-[#F5B72E]/10 to-[#2AC4A4]/15 rounded-full blur-3xl pointer-events-none opacity-60" />

      {/* "Aile & Çocuk Odaklı" badge — floats pinned to the left on larger screens (matches reference),
          sits inline above the content on small screens so it never overlaps anything. */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="relative z-10 mb-6 sm:mb-0 sm:absolute sm:left-4 lg:left-8 sm:bottom-28 lg:bottom-32"
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0B1A15]/90 border border-[#2AC4A4]/50 shadow-[0_0_25px_-8px_rgba(42,196,164,0.7)] backdrop-blur-sm"
        >
          <Heart className="w-3.5 h-3.5 text-[#2AC4A4]" />
          <span className="text-[10px] sm:text-xs font-mono font-bold tracking-wider text-[#2AC4A4]">
            AİLE &amp; ÇOCUK ODAKLI
          </span>
        </motion.div>
      </motion.div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* OFFICIAL BRAND LOGO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          whileHover={{ scale: 1.03 }}
          className="relative mb-6 select-none"
        >
          {/* Soft ambient glow behind the logo */}
          <div className="absolute inset-0 -m-6 bg-gradient-to-r from-[#FF5E3A]/20 via-[#F5B72E]/15 to-[#2AC4A4]/20 rounded-full blur-2xl pointer-events-none opacity-60 animate-pulse" />
          <img
            src="/logo.png"
            alt="Crs soft kids — Play with future!"
            className="relative h-28 sm:h-36 md:h-44 lg:h-48 w-auto drop-shadow-[0_10px_35px_rgba(0,0,0,0.45)]"
            draggable={false}
          />
        </motion.div>

        {/* DOMINANT MOTTO */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-none"
        >
          <span className="text-white">PLAY WITH THE</span>{' '}
          <span className="bg-gradient-to-r from-[#8FD8FF] via-[#FF9466] to-[#F5B72E] bg-clip-text text-transparent">
            FUTURE.
          </span>
        </motion.h1>

        {/* SMALL SUBTITLE */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-5 text-base sm:text-xl text-slate-300 font-light tracking-wide"
        >
          Çalışan Deneyimi Tasarımı Vaka Çalışması
        </motion.p>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.42 }}
          className="mt-4 max-w-2xl text-sm sm:text-base text-slate-400 leading-relaxed"
        >
          CRS Kids'in ilk lansmanını; çalışanlar, çocuklar ve aileler için ortak gurur, bağ ve
          eğlence yaratan etkileşimli bir keşif gününe dönüştüren deneyim mimarisi.
        </motion.p>

        {/* METADATA CHIPS — 4 separate pills, matching reference layout */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-7 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3"
        >
          {statChips.map((chip, i) => {
            const Icon = chip.icon;
            return (
              <motion.div
                key={chip.label + i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.55 + i * 0.08 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-900/80 border border-slate-800 shadow-md backdrop-blur-sm text-xs sm:text-sm font-mono transition-shadow hover:shadow-[0_0_20px_-6px_var(--chip-glow)]"
                style={{ '--chip-glow': chip.color } as React.CSSProperties}
              >
                <Icon className="w-4 h-4" style={{ color: chip.color }} />
                <span className="text-white font-semibold">{chip.label}</span>
                {chip.suffix && <span className="text-slate-400">{chip.suffix}</span>}
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <button
            id="hero-start-cta-btn"
            onClick={handleStartExplore}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#4F75FF] via-[#8FD8FF] to-[#2AC4A4] text-slate-950 font-display font-black text-sm uppercase tracking-wider shadow-xl shadow-[#4F75FF]/25 hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none"
          >
            <span>KEŞFETMEYE BAŞLA</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </button>

          <button
            id="hero-goto-area-btn"
            onClick={handleGoToArea}
            className="group relative inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-slate-900/80 border border-slate-700 text-slate-100 font-display font-bold text-sm uppercase tracking-wider backdrop-blur-sm hover:border-[#2AC4A4]/60 hover:text-[#2AC4A4] hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none"
          >
            <Compass className="w-4 h-4 group-hover:rotate-45 transition-transform duration-500" />
            <span>İnteraktif Alana Git</span>
          </button>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#0B0F19] to-transparent pointer-events-none" />
    </section>
  );
};
