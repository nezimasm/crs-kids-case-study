import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Boxes, Info, Sparkles, Clock, CheckCircle2, Search, Cpu, Palette } from 'lucide-react';
import { playPopSound } from '../utils/sound';

interface StationTentsSectionProps {
  onSelectStationStamp?: (stampId: string) => void;
}

export const StationTentsSection: React.FC<StationTentsSectionProps> = ({
  onSelectStationStamp,
}) => {
  const [selectedTentIndex, setSelectedTentIndex] = useState<number>(0);

  const tents = [
    {
      id: 'tent-1',
      stampId: 'kesfet',
      num: '01',
      title: 'KODU ÇÖZ',
      slogan: 'İPUCUNU BUL!',
      format: 'Fiziksel Kodlama',
      duration: '15 dk',
      desc: 'Komutları sıralar, yolu çözer ve hatayı düzeltir.',
      childActivity: 'Dev yer labirentinde yön kartlarını doğru sırayla dizerek algoritma mantığını kavrar.',
      stamp: '1. DAMGA — KEŞFET',
      color: '#FF5E3A',
      shadowColor: 'rgba(255, 94, 58, 0.25)',
      icon: Search,
      svgShape: (
        <svg viewBox="0 0 220 190" className="w-full h-full" fill="none">
          {/* Spatial 3D event tent */}
          <polygon points="110,20 200,165 20,165" fill="#181126" stroke="#FF5E3A" strokeWidth="3.5" />
          <polygon points="110,20 110,165 20,165" fill="#FF5E3A" fillOpacity="0.25" />
          <polygon points="110,20 200,165 110,165" fill="#FF5E3A" fillOpacity="0.4" />
          {/* Open tent canopy door */}
          <polygon points="110,65 145,165 75,165" fill="#0A0612" stroke="#FF5E3A" strokeWidth="1.5" />
          {/* Mast flag */}
          <line x1="110" y1="20" x2="110" y2="0" stroke="#FF5E3A" strokeWidth="3" />
          <polygon points="110,0 150,8 110,16" fill="#F5B72E" />
        </svg>
      ),
    },
    {
      id: 'tent-2',
      stampId: 'uret',
      num: '02',
      title: 'ROBOTU PROGRAMLA',
      slogan: 'KODU ÇALIŞTIR!',
      format: 'Blok Tabanlı Robotik',
      duration: '15 dk',
      desc: 'Robot parkurunu tamamlamak için yön bloklarını dizer.',
      childActivity: 'Tablet üzerinden sürükle-bırak kod blokları oluşturarak masadaki robotun hedefe ulaşmasını sağlar.',
      stamp: '2. DAMGA — ÜRET',
      color: '#2AC4A4',
      shadowColor: 'rgba(42, 196, 164, 0.25)',
      icon: Cpu,
      svgShape: (
        <svg viewBox="0 0 220 190" className="w-full h-full" fill="none">
          <polygon points="110,15 205,165 15,165" fill="#0E2222" stroke="#2AC4A4" strokeWidth="3.5" />
          <polygon points="110,15 110,165 15,165" fill="#2AC4A4" fillOpacity="0.25" />
          <polygon points="110,15 205,165 110,165" fill="#2AC4A4" fillOpacity="0.4" />
          <polygon points="110,60 150,165 70,165" fill="#041212" stroke="#2AC4A4" strokeWidth="1.5" />
          <line x1="110" y1="15" x2="110" y2="0" stroke="#2AC4A4" strokeWidth="3" />
          <polygon points="110,0 150,8 110,16" fill="#FF5E3A" />
        </svg>
      ),
    },
    {
      id: 'tent-3',
      stampId: 'yarat',
      num: '03',
      title: 'KENDİ DÜNYANI YARAT',
      slogan: 'SIRA SENDE!',
      format: 'Yaratıcı Dijital Tasarım',
      duration: '20 dk',
      desc: 'Karakterini ve sahneni tasarlayıp dijital dünyada canlandırır.',
      childActivity: 'Dokunmatik ekranda kendi robot kâşifini çizer, renklendirir ve dev ekranda dans ettirir.',
      stamp: '3. DAMGA — YARAT',
      color: '#F5B72E',
      shadowColor: 'rgba(245, 183, 46, 0.25)',
      icon: Palette,
      svgShape: (
        <svg viewBox="0 0 220 190" className="w-full h-full" fill="none">
          <polygon points="110,20 200,165 20,165" fill="#262010" stroke="#F5B72E" strokeWidth="3.5" />
          <polygon points="110,20 110,165 20,165" fill="#F5B72E" fillOpacity="0.25" />
          <polygon points="110,20 200,165 110,165" fill="#F5B72E" fillOpacity="0.4" />
          <polygon points="110,65 145,165 75,165" fill="#120E04" stroke="#F5B72E" strokeWidth="1.5" />
          <line x1="110" y1="20" x2="110" y2="0" stroke="#F5B72E" strokeWidth="3" />
          <polygon points="110,0 150,8 110,16" fill="#2AC4A4" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="istasyonlar"
      aria-label="Keşif İstasyonları ve Çadırlar"
      className="relative py-24 px-4 sm:px-6 max-w-7xl mx-auto"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#2AC4A4]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF5E3A]/15 border border-[#FF5E3A]/30 text-[#FF5E3A] text-xs font-mono">
          <Boxes className="w-3.5 h-3.5" />
          <span>08 · KODLAMA VE ATÖLYE ÇADIRLARI</span>
        </div>
        <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
          İSTASYONLAR
        </h2>

        <p className="text-lg sm:text-xl text-[#F5B72E] font-medium">
          Üç istasyon. Üç farklı kodlama deneyimi.
        </p>

        <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
          CRS Kids'in çocuklara kodlamayı sevdirmek ve temel kodlama becerilerini oyun içinde öğretmek amacıyla üç farklı istasyon deneyimi tasarladım. Her istasyonda çocuklar farklı bir problemle karşılaşıyor, deneyerek öğreniyor ve günü hareketli bir şekilde geçiriyor.
        </p>

        {/* Mandatory Helper Instruction */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs text-[#2AC4A4] font-mono mt-2">
          <Info className="w-3.5 h-3.5" />
          <span>İstasyonların üzerine tıklayarak içeriklerini keşfedin.</span>
        </div>
      </div>

      {/* 3 Physical Event Tents in Spatial Composition */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-end mb-12">
        {tents.map((tent, idx) => {
          const isSelected = idx === selectedTentIndex;
          const Icon = tent.icon;

          return (
            <motion.div
              key={tent.id}
              onClick={() => {
                playPopSound();
                setSelectedTentIndex(idx);
                if (onSelectStationStamp) {
                  onSelectStationStamp(tent.stampId);
                }
              }}
              whileHover={{ y: -8, scale: 1.03 }}
              className={`relative rounded-[36px] p-6 sm:p-8 cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                idx === 1 ? 'md:-translate-y-4' : ''
              } ${
                isSelected
                  ? 'bg-gradient-to-b from-[#141B33] to-[#0A0E1A] border-2 border-white/40 shadow-[0_25px_60px_rgba(0,0,0,0.85)] scale-102 ring-2 ring-white/10'
                  : 'bg-[#101626]/80 hover:bg-[#101626] border border-slate-800'
              }`}
            >
              {/* Playful Tent Header Flag */}
              <div className="flex items-center justify-between mb-4">
                <div
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold shadow-md"
                  style={{
                    backgroundColor: `${tent.color}25`,
                    color: tent.color,
                    border: `1px solid ${tent.color}40`,
                  }}
                >
                  <Sparkles className="w-3 h-3" />
                  <span>{tent.slogan}</span>
                </div>

                <div className="flex items-center gap-1 text-xs text-slate-400 font-mono">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{tent.duration}</span>
                </div>
              </div>

              {/* Illustrated Spatial 3D Tent Visual */}
              <div className="w-44 h-38 mx-auto my-3 relative">
                {tent.svgShape}
              </div>

              {/* Title & Slogan */}
              <div className="text-center space-y-2 mt-2">
                <span className="text-[10px] font-mono uppercase text-slate-400 block tracking-wider">
                  ÇADIR {tent.num} · {tent.format}
                </span>

                <h3 className="font-display font-black text-2xl text-white tracking-tight">
                  {tent.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 font-light pt-1">
                  {tent.desc}
                </p>

                {/* Stamp Reward Pill */}
                <div
                  className="mt-4 py-2.5 px-4 rounded-2xl text-xs font-mono font-bold text-slate-950 flex items-center justify-center gap-2 shadow-md transition-transform hover:scale-102"
                  style={{ backgroundColor: tent.color }}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tent.stamp}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Selected Tent Active Overview Panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={tents[selectedTentIndex].id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl max-w-3xl mx-auto space-y-4 text-center"
        >
          <div className="flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-widest text-[#2AC4A4]">
            <CheckCircle2 className="w-4 h-4" />
            <span>ÇADIR 0{selectedTentIndex + 1} DETAYI & ETKİNLİK PLANI</span>
          </div>

          <h4 className="font-display font-black text-2xl sm:text-3xl text-white">
            {tents[selectedTentIndex].title} · {tents[selectedTentIndex].slogan}
          </h4>

          <p className="text-sm text-slate-200 font-light max-w-2xl mx-auto leading-relaxed">
            {tents[selectedTentIndex].childActivity}
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-slate-400">
            <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700">
              Süre: {tents[selectedTentIndex].duration}
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700">
              Format: {tents[selectedTentIndex].format}
            </span>
            <span
              className="px-3 py-1 rounded-full font-bold text-slate-950"
              style={{ backgroundColor: tents[selectedTentIndex].color }}
            >
              Kazanım: {tents[selectedTentIndex].stamp}
            </span>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Smooth Visual Transition to Keşif Pasaportu with Curved Line Motif */}
      <div className="mt-16 pt-10 border-t border-slate-800/80 text-center max-w-xl mx-auto space-y-4">
        {/* Curved-line motif icon */}
        <div className="flex justify-center items-center">
          <svg width="120" height="24" viewBox="0 0 120 24" fill="none" className="text-[#F5B72E]">
            <path
              d="M0 12 Q30 0 60 12 T120 12"
              stroke="currentColor"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <p className="text-sm sm:text-base text-slate-300 font-medium">
          Görev burada yapılıyor. İlerlemen burada görünür oluyor.
        </p>

        <a
          href="#pasaport"
          onClick={(e) => {
            e.preventDefault();
            playPopSound();
            document.getElementById('pasaport')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#F5B72E] hover:text-[#F5B72E]/80 transition-colors px-4 py-2 rounded-full bg-[#F5B72E]/10 border border-[#F5B72E]/30"
        >
          <span>Keşif Pasaportu ile İlerlemeyi Gör</span>
          <span>↓</span>
        </a>
      </div>
    </section>
  );
};
