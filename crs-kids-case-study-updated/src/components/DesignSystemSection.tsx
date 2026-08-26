import React from 'react';
import { motion } from 'motion/react';
import { Palette, Sparkles, Activity, Layers, CircleDot, Type, Flame } from 'lucide-react';
import { playPopSound } from '../utils/sound';

export const DesignSystemSection: React.FC = () => {
  const colorPalette = [
    {
      name: 'TEKNOLOJİ CYAN',
      hex: '#00E5FF',
      role: 'Keşif / dijital',
      bgClass: 'bg-[#00E5FF]',
      textDark: true,
    },
    {
      name: 'ENERJİ MERCAN',
      hex: '#FF6B4A',
      role: 'Aksiyon / hareket',
      bgClass: 'bg-[#FF6B4A]',
      textDark: true,
    },
    {
      name: 'SICAK SARI',
      hex: '#FFC000',
      role: 'Oyun / keşif',
      bgClass: 'bg-[#FFC000]',
      textDark: true,
    },
    {
      name: 'DOĞAL ZÜMRÜT',
      hex: '#10B981',
      role: 'Üretim / tamamlanma',
      bgClass: 'bg-[#10B981]',
      textDark: true,
    },
    {
      name: 'MAVİ / INDIGO',
      hex: '#1E2B58',
      role: 'Teknoloji / kontrast',
      bgClass: 'bg-[#1E2B58]',
      textDark: false,
    },
    {
      name: 'OBSİDYEN',
      hex: '#090A10',
      role: 'Ana zemin',
      bgClass: 'bg-[#090A10]',
      textDark: false,
    },
  ];

  const designElements = [
    {
      title: 'KIVRIMLI ÇİZGİ',
      desc: 'Logodaki organik akış ve rota dili',
      icon: Activity,
      color: '#FF6B4A',
      visual: (
        <svg viewBox="0 0 120 40" fill="none" className="w-full h-10">
          <path d="M 5 30 C 35 5, 85 35, 115 10" stroke="#FF6B4A" strokeWidth="4" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: 'ORGANİK FORMLAR',
      desc: 'Yumuşak köşeli, oyun dolu yüzeyler',
      icon: Layers,
      color: '#00E5FF',
      visual: (
        <div className="flex items-center justify-center gap-2">
          <div className="w-8 h-8 rounded-3xl bg-[#00E5FF]/30 border border-[#00E5FF] rotate-6" />
          <div className="w-6 h-6 rounded-2xl bg-[#FFC000]/40 border border-[#FFC000] -rotate-12" />
        </div>
      ),
    },
    {
      title: 'YUVARLAK GEOMETRİ',
      desc: 'Çocuk dostu, güvenli ve kapsayıcı',
      icon: CircleDot,
      color: '#10B981',
      visual: (
        <div className="flex items-center justify-center gap-2">
          <div className="w-7 h-7 rounded-full bg-[#10B981]/30 border border-[#10B981]" />
          <div className="w-5 h-5 rounded-full bg-[#FF6B4A]/30 border border-[#FF6B4A]" />
        </div>
      ),
    },
    {
      title: 'TİPOGRAFİ',
      desc: 'Modern, dengeli ve okunabilir sans-serif',
      icon: Type,
      color: '#FFC000',
      visual: (
        <span className="font-display font-black text-xl tracking-tight text-white">
          Aa Bb 123
        </span>
      ),
    },
    {
      title: 'MOTION',
      desc: 'Akıcı, canlı ve mikro tepkili geçişler',
      icon: Flame,
      color: '#00E5FF',
      visual: (
        <div className="flex items-center justify-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-bounce" />
          <span className="w-2 h-2 rounded-full bg-[#FFC000] animate-bounce delay-100" />
          <span className="w-2 h-2 rounded-full bg-[#FF6B4A] animate-bounce delay-200" />
        </div>
      ),
    },
  ];

  return (
    <section
      id="tasarim-sistemi"
      aria-label="Tasarım Sistemi"
      className="relative py-28 px-4 sm:px-6 max-w-7xl mx-auto space-y-16"
    >
      {/* Background soft glow */}
      <div className="absolute top-1/2 right-10 w-[550px] h-[550px] bg-[#00E5FF]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00E5FF]/15 border border-[#00E5FF]/30 text-[#00E5FF] text-xs font-mono">
          <Palette className="w-3.5 h-3.5" />
          <span>12 · GÖRSEL TASARIM SİSTEMİ</span>
        </div>

        <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight">
          TASARIM SİSTEMİ
        </h2>

        <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
          “CRS Kids'in görsel dili; teknoloji, oyun ve hareket fikrini aynı dünyada buluşturuyor.”
        </p>
      </div>

      {/* Large Dark Rounded Panel */}
      <div className="bg-[#090A10] rounded-[44px] border-2 border-slate-800 p-8 sm:p-12 shadow-2xl space-y-12">
        {/* Color Palette Tokens */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <h3 className="font-display font-bold text-lg sm:text-xl text-white flex items-center gap-2">
              <Palette className="w-5 h-5 text-[#FFC000]" />
              <span>RENK PALETİ</span>
            </h3>
            <span className="text-xs font-mono text-slate-400">CRS Kids Renk Tokenları</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {colorPalette.map((color) => (
              <motion.div
                key={color.hex}
                whileHover={{ y: -4 }}
                onClick={playPopSound}
                className="p-4 rounded-3xl bg-[#111625] border border-slate-800 space-y-3 cursor-pointer select-none"
              >
                <div
                  className={`w-full h-16 rounded-2xl ${color.bgClass} shadow-md border border-white/10 flex items-end p-2`}
                >
                  <span
                    className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${
                      color.textDark ? 'bg-black/60 text-white' : 'bg-white/90 text-slate-950'
                    }`}
                  >
                    {color.hex}
                  </span>
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-display font-bold text-xs text-white truncate">
                    {color.name}
                  </h4>
                  <p className="text-[10px] text-slate-400 font-light truncate">
                    {color.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Visual Language Elements Grid */}
        <div className="space-y-6 pt-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <h3 className="font-display font-bold text-lg sm:text-xl text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#00E5FF]" />
              <span>GÖRSEL YAPI TAŞLARI</span>
            </h3>
            <span className="text-xs font-mono text-slate-400">Form & Tipografi & Hareket</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {designElements.map((el) => {
              const Icon = el.icon;
              return (
                <div
                  key={el.title}
                  className="p-5 rounded-3xl bg-[#111625] border border-slate-800 flex flex-col justify-between h-52 space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <div
                      className="w-9 h-9 rounded-2xl flex items-center justify-center text-slate-950 shadow-md"
                      style={{ backgroundColor: el.color }}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Visual Demonstration */}
                  <div className="py-2 flex items-center justify-center">
                    {el.visual}
                  </div>

                  <div>
                    <h4 className="font-display font-bold text-xs text-white">
                      {el.title}
                    </h4>
                    <p className="text-[10px] text-slate-400 font-light mt-0.5">
                      {el.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Short Design Rationale Quote Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#141C33]/80 border border-slate-700/80">
          <blockquote className="text-sm sm:text-base text-slate-200 font-light leading-relaxed">
            “Logodaki kıvrımlı çizgiyi tüm deneyime taşıdım. Hareketli formlar ve yuvarlak geometriler çocuklara yönelik daha enerjik ve oyunlu bir dünya oluştururken teknoloji hissini koruyor.”
          </blockquote>
        </div>
      </div>
    </section>
  );
};
