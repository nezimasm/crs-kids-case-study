import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CurvedLineMotif } from './CurvedLineMotif';
import { Compass, Info, Clock, Sparkles, ChevronRight } from 'lucide-react';
import { playPopSound } from '../utils/sound';

export const ExperienceJourneySection: React.FC = () => {
  const [selectedPointIndex, setSelectedPointIndex] = useState<number>(0);

  const journeyPoints = [
    {
      time: '09.30',
      title: 'KARŞILAMA',
      desc: 'Aileler kapıda sıcak bir müzikle karşılanır, polaroid fotoğraf çekilip Keşif Pasaportuna yapıştırılır.',
      color: '#FF5E3A',
      tag: 'Giriş',
    },
    {
      time: '10.00',
      title: 'İLK KARŞILAŞMA',
      desc: 'CRS Kids dünyası ve animasyonlu açılış hikâyesi sahnede çocuklarla ilk kez buluşur.',
      color: '#F5B72E',
      tag: 'Açılış',
    },
    {
      time: '10.20',
      title: 'KEŞİF',
      desc: '3 tematik çadırda fiziksel kodlama, robotik parkur ve dijital yaratım atölyeleri başlar.',
      color: '#2AC4A4',
      tag: 'İstasyonlar',
    },
    {
      time: '12.30',
      title: 'ÖĞLE YEMEĞİ',
      desc: 'Açık hava bahçesinde aile pikniği, çocuk menüsü ve serbest oyun alanları.',
      color: '#4F75FF',
      tag: 'Sosyal Mola',
    },
    {
      time: '13.30',
      title: 'ÇALIŞAN HİKÂYESİ',
      desc: 'Ürünü kodlayan mühendisler ve tasarımcılar çocukların merak ettiği soruları sahnede yanıtlar.',
      color: '#A855F7',
      tag: 'Çalışan Sahnesi',
    },
    {
      time: '14.00',
      title: 'AİLE DENEYİMİ',
      desc: '4. damga için alana gizlenmiş ipuçları ve Ar-Ge şifresi çocuk ve ebeveyn ortak takımıyla çözülür.',
      color: '#EC4899',
      tag: 'Gizli Görev',
    },
    {
      time: '15.15',
      title: 'SERBEST KEŞİF',
      desc: 'Maker masalarında 3D robot maketlerini boyama ve yaratıcı çıkartma atölyesi.',
      color: '#2AC4A4',
      tag: 'Maker',
    },
    {
      time: '16.20',
      title: 'KUTLAMA',
      desc: '4 damgayı toplayan kâşiflere madalyaları takılır, konfeti ve toplu aile fotoğrafı çekilir.',
      color: '#F5B72E',
      tag: 'Final Seremonisi',
    },
    {
      time: '17.00',
      title: 'ÇIKIŞ',
      desc: 'Take-home eğitici kodlama kutusu ve magnet hatırası ile neşeyle vedalaşılır.',
      color: '#FF5E3A',
      tag: 'Vedalaşma',
    },
  ];

  return (
    <section
      id="journey"
      aria-label="Deneyim Yolculuğu"
      className="relative py-24 px-4 sm:px-6 max-w-6xl mx-auto"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#FF5E3A]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#4F75FF]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#4F75FF]/15 border border-[#4F75FF]/30 text-[#4F75FF] text-xs font-mono mb-4">
          <Compass className="w-3.5 h-3.5" />
          <span>05 · ZAMAN VE DENEYİM AKIŞI</span>
        </div>
        <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight">
          DENEYİM YOLCULUĞU
        </h2>

        {/* Mandatory Helper Instruction */}
        <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs text-[#2AC4A4] font-mono">
          <Info className="w-3.5 h-3.5" />
          <span>Akışı keşfetmek için saatlerin üzerine tıklayın.</span>
        </div>
      </div>

      {/* Vertical S-Curved Flowing Journey Container */}
      <div className="relative py-8">
        {/* Subtle center background flowing line */}
        <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-[#FF5E3A] via-[#F5B72E] via-[#2AC4A4] to-[#FF5E3A] opacity-30 rounded-full" />

        <div className="space-y-8 relative z-10">
          {journeyPoints.map((pt, idx) => {
            const isSelected = idx === selectedPointIndex;
            const isLeft = idx % 2 === 0;

            return (
              <div
                key={pt.time}
                className={`flex flex-col md:flex-row items-center gap-4 sm:gap-8 ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Time & Title Trigger Button */}
                <div className={`w-full md:w-1/2 flex ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
                  <button
                    id={`journey-time-btn-${idx}`}
                    onClick={() => {
                      playPopSound();
                      setSelectedPointIndex(idx);
                    }}
                    className={`w-full max-w-md text-left p-5 sm:p-6 rounded-3xl border transition-all duration-300 flex items-center justify-between ${
                      isSelected
                        ? 'bg-[#161F4D] border-white/40 shadow-2xl scale-102 ring-2 ring-white/20'
                        : 'bg-[#111827]/80 hover:bg-[#111827] border-slate-800 text-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="font-mono font-black text-xl sm:text-2xl px-3 py-1.5 rounded-2xl shadow-inner"
                        style={{
                          backgroundColor: `${pt.color}20`,
                          color: pt.color,
                          border: `1px solid ${pt.color}40`,
                        }}
                      >
                        {pt.time}
                      </div>

                      <div>
                        <span className="text-[10px] font-mono uppercase text-slate-400 block">
                          {pt.tag}
                        </span>
                        <h3 className="font-display font-black text-lg sm:text-xl text-white">
                          {pt.title}
                        </h3>
                      </div>
                    </div>

                    <div
                      className={`w-3 h-3 rounded-full transition-all ${
                        isSelected ? 'scale-125 ring-4 ring-white/20' : 'opacity-40'
                      }`}
                      style={{ backgroundColor: pt.color }}
                    />
                  </button>
                </div>

                {/* Center Node dot on Desktop */}
                <div className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 border-2 border-slate-700 z-20 shrink-0">
                  <div
                    className="w-3 h-3 rounded-full transition-all"
                    style={{ backgroundColor: pt.color }}
                  />
                </div>

                {/* Detail Content Panel beside it */}
                <div className={`w-full md:w-1/2 flex ${isLeft ? 'md:justify-start' : 'md:justify-end'}`}>
                  <div
                    className={`w-full max-w-md p-5 rounded-3xl border transition-all duration-300 ${
                      isSelected
                        ? 'bg-slate-900/90 border-slate-700 opacity-100 shadow-xl'
                        : 'bg-slate-900/40 border-slate-800/60 opacity-60'
                    }`}
                  >
                    <p className="text-xs sm:text-sm text-slate-200 font-light leading-relaxed">
                      {pt.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
