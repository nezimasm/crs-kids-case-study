import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Gamepad2, Code2, Palette, HeartHandshake } from 'lucide-react';
import { CurvedLineMotif } from './CurvedLineMotif';
import { playPopSound } from '../utils/sound';

export const ConceptSection: React.FC = () => {
  const conceptTiles = [
    {
      id: 'play',
      tag: '01 · PLAY',
      title: 'PLAY',
      desc: 'Öğrenmeyi oyunun içine taşı.',
      color: '#FF5E3A',
      icon: Gamepad2,
      bgGradient: 'from-[#FF5E3A]/20 via-[#FF5E3A]/5 to-transparent',
      borderColor: 'border-[#FF5E3A]/40',
      curveSvg: (
        <svg viewBox="0 0 100 40" fill="none" className="w-20 h-8 opacity-80">
          <path d="M 5 35 C 30 5, 70 35, 95 10" stroke="#FF5E3A" strokeWidth="3.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: 'code',
      tag: '02 · CODE',
      title: 'CODE',
      desc: 'Kodlamayı deneyerek keşfet.',
      color: '#2AC4A4',
      icon: Code2,
      bgGradient: 'from-[#2AC4A4]/20 via-[#2AC4A4]/5 to-transparent',
      borderColor: 'border-[#2AC4A4]/40',
      curveSvg: (
        <svg viewBox="0 0 100 40" fill="none" className="w-20 h-8 opacity-80">
          <path d="M 5 10 C 35 35, 65 5, 95 30" stroke="#2AC4A4" strokeWidth="3.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: 'create',
      tag: '03 · CREATE',
      title: 'CREATE',
      desc: 'Fikrini küçük bir çıktıya dönüştür.',
      color: '#F5B72E',
      icon: Palette,
      bgGradient: 'from-[#F5B72E]/20 via-[#F5B72E]/5 to-transparent',
      borderColor: 'border-[#F5B72E]/40',
      curveSvg: (
        <svg viewBox="0 0 100 40" fill="none" className="w-20 h-8 opacity-80">
          <path d="M 5 25 C 25 5, 75 35, 95 15" stroke="#F5B72E" strokeWidth="3.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: 'together',
      tag: '04 · TOGETHER',
      title: 'TOGETHER',
      desc: 'Deneyimi aileyle paylaş.',
      color: '#4F75FF',
      icon: HeartHandshake,
      bgGradient: 'from-[#4F75FF]/20 via-[#4F75FF]/5 to-transparent',
      borderColor: 'border-[#4F75FF]/40',
      curveSvg: (
        <svg viewBox="0 0 100 40" fill="none" className="w-20 h-8 opacity-80">
          <path d="M 5 30 C 40 5, 60 35, 95 10" stroke="#4F75FF" strokeWidth="3.5" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="konsept"
      aria-label="Konsept: PLAY WITH THE FUTURE."
      className="relative py-28 px-4 sm:px-6 max-w-7xl mx-auto text-center overflow-hidden"
    >
      {/* Background organic curved path */}
      <CurvedLineMotif variant="flow" animated={true} className="top-10" />

      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF5E3A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-12">
        {/* Header & Tagline */}
        <div className="space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF5E3A]/15 border border-[#FF5E3A]/30 text-[#FF5E3A] text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>06 · KREATİF KONSEPT</span>
          </div>

          <motion.h2
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white leading-none"
          >
            PLAY WITH THE FUTURE.
          </motion.h2>

          <p className="text-base sm:text-xl text-slate-300 font-light leading-relaxed">
            Teknolojiyi oyun, üretim ve birlikte keşfetme üzerinden yaşatan bir gün.
          </p>
        </div>

        {/* 4 Colorful Visual Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {conceptTiles.map((tile, idx) => {
            const Icon = tile.icon;
            return (
              <motion.div
                key={tile.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                onClick={playPopSound}
                className={`relative p-8 rounded-[32px] bg-gradient-to-b ${tile.bgGradient} bg-[#0E1528] border-2 ${tile.borderColor} shadow-2xl flex flex-col justify-between h-72 cursor-pointer group overflow-hidden transition-all`}
              >
                {/* Top Icon & Tag */}
                <div className="flex items-center justify-between">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-slate-950 shadow-md group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: tile.color }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <span
                    className="font-mono font-bold text-[10px] tracking-widest px-2.5 py-1 rounded-full border bg-black/50"
                    style={{ color: tile.color, borderColor: `${tile.color}40` }}
                  >
                    {tile.tag}
                  </span>
                </div>

                {/* Curved line motif inside card */}
                <div className="my-2">{tile.curveSvg}</div>

                {/* Title and Short Supporting Sentence */}
                <div className="space-y-1">
                  <h3
                    className="font-display font-black text-2xl tracking-tight"
                    style={{ color: tile.color }}
                  >
                    {tile.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-200 font-light leading-relaxed">
                    {tile.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
