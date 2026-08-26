import React from 'react';
import { motion } from 'motion/react';
import { CurvedLineMotif } from './CurvedLineMotif';
import { ArrowUp, Sparkles, Heart } from 'lucide-react';
import { playPopSound } from '../utils/sound';

export const FinalClosingSection: React.FC = () => {
  const scrollToTop = () => {
    playPopSound();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer
      id="final"
      aria-label="Kapanış ve İletişim"
      className="relative py-28 px-4 sm:px-6 overflow-hidden bg-[#060810] border-t border-slate-800 text-center"
    >
      {/* Background flowing curved lines */}
      <CurvedLineMotif variant="hero" animated={true} className="opacity-30" />

      {/* Center glowing orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#FF5E3A]/15 via-[#F5B72E]/10 to-[#2AC4A4]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto space-y-8">
        {/* Official Brand Logo */}
        <div className="flex justify-center">
          <img src="/logo.png" alt="Crs soft kids — Play with future!" className="h-32 sm:h-40 w-auto" draggable={false} />
        </div>

        {/* DOMINANT MOTTO */}
        <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tight leading-none">
          PLAY WITH THE FUTURE.
        </h2>

        {/* Highlighted Closing Statement */}
        <p className="text-xl sm:text-2xl text-slate-200 font-light max-w-2xl mx-auto leading-relaxed">
          Bir ürünü tanıtmanın ötesinde, birlikte yaşanan bir gün tasarladım.
        </p>

        {/* Metadata & Author Credits */}
        <div className="pt-6 space-y-2">
          <p className="text-xs sm:text-sm font-mono text-[#2AC4A4] uppercase tracking-widest">
            CRS Kids · Employee Experience Case Study
          </p>
          <p className="text-base sm:text-lg font-display font-bold text-white">
            Neziha Şimşek
          </p>
        </div>

        {/* Back to top button */}
        <div className="pt-8">
          <button
            id="scroll-to-top-btn"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300 hover:text-white transition-all shadow-lg"
          >
            <span>BAŞA DÖN</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
