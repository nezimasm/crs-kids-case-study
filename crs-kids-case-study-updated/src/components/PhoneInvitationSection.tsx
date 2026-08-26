import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DigitalInvitationExperience } from './DigitalInvitationExperience';
import { playPopSound, playSuccessChime } from '../utils/sound';
import confetti from 'canvas-confetti';
import {
  Smartphone,
  Sparkles,
  ArrowRight,
  Info,
  Calendar,
  MapPin,
  Clock,
  CheckCircle2,
  BookOpen,
  ChevronRight,
} from 'lucide-react';

export const PhoneInvitationSection: React.FC = () => {
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [isRsvpDone, setIsRsvpDone] = useState<boolean>(false);

  const storyCards = [
    {
      num: '01',
      title: 'İLK TEMAS',
      desc: 'Deneyim etkinlik alanında değil, çalışanın telefonunda başlıyor.',
      color: '#FF5E3A',
      phoneScreen: 'teaser',
    },
    {
      num: '02',
      title: 'MERAK',
      desc: 'Davetiyeyi açmak, günün ilk küçük keşif anına dönüşüyor.',
      color: '#F5B72E',
      phoneScreen: 'story',
    },
    {
      num: '03',
      title: 'HİKÂYE',
      desc: 'Bilgi vermek yerine, etkinliğin atmosferini daha gelmeden hissettirmeyi amaçladım.',
      color: '#2AC4A4',
      phoneScreen: 'passport',
    },
    {
      num: '04',
      title: 'GEÇİŞ',
      desc: 'Dijital davetiye, katılımcıyı fiziksel etkinlikteki keşif deneyimine hazırlıyor.',
      color: '#4F75FF',
      phoneScreen: 'rsvp',
    },
  ];

  const handleCardClick = (idx: number) => {
    playPopSound();
    setActiveCardIndex(idx);
  };

  const handleRsvp = (e: React.MouseEvent) => {
    e.stopPropagation();
    playSuccessChime();
    setIsRsvpDone(true);
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#FF5E3A', '#F5B72E', '#2AC4A4', '#4F75FF'],
      });
    } catch {}
  };

  return (
    <section
      id="davetiye"
      aria-label="Mikro Deneyim / Davetiye"
      className="relative py-28 px-4 sm:px-6 max-w-7xl mx-auto"
    >
      {/* Background colorful organic curved paths */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <svg viewBox="0 0 1200 800" className="w-full h-full" fill="none">
          <path
            d="M -100 200 C 200 50, 400 500, 700 250 S 1100 600, 1300 300"
            stroke="#FF5E3A"
            strokeWidth="10"
            strokeLinecap="round"
          />
          <path
            d="M -50 600 C 300 750, 500 200, 850 450 S 1150 150, 1350 400"
            stroke="#2AC4A4"
            strokeWidth="8"
            strokeDasharray="14 10"
          />
          <path
            d="M 100 -50 C 350 300, 200 650, 600 700 S 1000 500, 1250 850"
            stroke="#F5B72E"
            strokeWidth="6"
          />
        </svg>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* LEFT COLUMN: Narrative & 4 Story Cards */}
        <div className="lg:col-span-6 space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF5E3A]/15 border border-[#FF5E3A]/30 text-[#FF5E3A] text-xs font-mono">
              <Smartphone className="w-3.5 h-3.5" />
              <span>02 · MİKRO DENEYİM</span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
              MİKRO DENEYİM
            </h2>

            <p className="text-xl sm:text-2xl text-slate-200 font-medium">
              Bu deneyim bir davetle başlıyor.
            </p>

            <p className="text-base text-slate-300 font-light leading-relaxed">
              Etkinliğe fiziksel alandan önce, çalışanın akıllı telefonuna gelen interaktif mikro davetiye ile başlanır.
            </p>
          </div>

          {/* 4 Story / Intention Cards */}
          <div className="space-y-3.5">
            {storyCards.map((card, idx) => {
              const isSelected = activeCardIndex === idx;
              return (
                <button
                  key={card.num}
                  id={`invitation-story-card-${idx}`}
                  onClick={() => handleCardClick(idx)}
                  className={`w-full p-5 sm:p-6 rounded-[28px] border text-left transition-all cursor-pointer relative overflow-hidden flex items-start gap-4 ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#151D3B] to-[#0D1429] border-white/40 shadow-2xl scale-[1.02] ring-2 ring-[#2AC4A4]/40'
                      : 'bg-[#0E1528]/80 hover:bg-[#121A33] border-slate-800 text-slate-400'
                  }`}
                >
                  {/* Left Number Tag */}
                  <span
                    className="shrink-0 w-9 h-9 rounded-2xl flex items-center justify-center font-mono font-bold text-xs shadow-inner"
                    style={{
                      backgroundColor: `${card.color}25`,
                      color: card.color,
                      border: `1px solid ${card.color}40`,
                    }}
                  >
                    {card.num}
                  </span>

                  <div className="space-y-1 pr-4">
                    <h3 className="font-display font-bold text-base sm:text-lg text-white tracking-tight flex items-center gap-2">
                      <span>{card.title}</span>
                      {isSelected && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#2AC4A4]/20 text-[#2AC4A4] border border-[#2AC4A4]/30">
                          Aktif Görünüm
                        </span>
                      )}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                      {card.desc}
                    </p>
                  </div>

                  <ChevronRight
                    className={`w-5 h-5 ml-auto shrink-0 transition-transform self-center ${
                      isSelected ? 'text-white translate-x-1' : 'text-slate-600'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Helper Note */}
          <div className="inline-flex items-center gap-2 p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 text-xs text-[#2AC4A4] font-mono shadow-md w-full">
            <Info className="w-4 h-4 text-[#2AC4A4] shrink-0" />
            <span>Soldaki notları takip ederken davetiyenin telefonda nasıl değiştiğini keşfedin.</span>
          </div>
        </div>

        {/* RIGHT COLUMN: ONE LARGE STICKY SMARTPHONE */}
        <div className="lg:col-span-6 flex justify-center lg:sticky lg:top-24">
          <div className="relative w-[320px] sm:w-[360px] h-[660px] bg-[#090D16] rounded-[52px] p-3.5 border-[7px] border-slate-800 shadow-[0_30px_90px_rgba(0,0,0,0.9),0_0_50px_rgba(255,94,58,0.2)] ring-1 ring-white/10 flex flex-col justify-between select-none">
            {/* Dynamic Island */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-30 flex items-center justify-between px-3">
              <div className="w-2.5 h-2.5 rounded-full bg-[#111827]" />
              <div className="w-10 h-1 bg-[#1F2937] rounded-full" />
              <div className="w-2 h-2 rounded-full bg-[#2AC4A4] animate-pulse" />
            </div>

            {/* Smartphone Screen Viewport */}
            <div className="w-full h-full bg-gradient-to-b from-[#0E162C] via-[#090E1D] to-[#060812] rounded-[40px] overflow-hidden flex flex-col justify-between pt-7 pb-5 px-5 relative">
              {/* Status bar */}
              <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono pt-1 px-1 z-20">
                <span>09:41</span>
                <div className="flex items-center gap-1.5">
                  <span>5G</span>
                  <div className="w-4 h-2 border border-slate-400 rounded-xs p-0.5 flex items-center">
                    <div className="w-full h-full bg-[#2AC4A4] rounded-2xs" />
                  </div>
                </div>
              </div>

              {/* Dynamic Screen Transitions based on selected card */}
              <AnimatePresence mode="wait">
                {activeCardIndex === 0 && (
                  <motion.div
                    key="screen-0"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.04 }}
                    transition={{ duration: 0.35 }}
                    className="my-auto text-center space-y-5 z-10"
                  >
                    <div className="flex justify-center">
                      <img src="/logo.png" alt="Crs soft kids" className="h-16 w-auto" draggable={false} />
                    </div>

                    <div className="space-y-1.5">
                      <span className="text-[10px] font-mono tracking-widest uppercase text-[#FF5E3A] px-2.5 py-0.5 rounded-full bg-[#FF5E3A]/10 border border-[#FF5E3A]/30 inline-block">
                        ÖZEL AİLE DAVETİYESİ
                      </span>
                      <h3 className="font-display font-black text-2xl text-white tracking-tight">
                        PLAY WITH THE FUTURE.
                      </h3>
                      <p className="text-xs text-slate-300 font-light px-2">
                        Yakında sizlerle.
                      </p>
                    </div>

                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-[11px] text-slate-300 text-left space-y-1.5">
                      <div className="flex items-center gap-2 text-white font-medium">
                        <Calendar className="w-3.5 h-3.5 text-[#F5B72E]" />
                        <span>Cumartesi · 1 Günlük Deneyim</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-400">
                        <MapPin className="w-3.5 h-3.5 text-[#2AC4A4]" />
                        <span>İstanbul · CRS Kids Campus</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeCardIndex === 1 && (
                  <motion.div
                    key="screen-1"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.04 }}
                    transition={{ duration: 0.35 }}
                    className="my-auto text-center space-y-4 z-10"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[#F5B72E]/20 border border-[#F5B72E]/40 text-[#F5B72E] flex items-center justify-center mx-auto">
                      <Sparkles className="w-6 h-6" />
                    </div>

                    <div className="space-y-2">
                      <span className="text-[10px] font-mono tracking-widest uppercase text-[#F5B72E] px-2.5 py-0.5 rounded-full bg-[#F5B72E]/10 border border-[#F5B72E]/30 inline-block">
                        MERAK & HİKÂYE
                      </span>
                      <h3 className="font-display font-black text-xl text-white tracking-tight">
                        Geleceği Birlikte Kodluyoruz
                      </h3>
                      <p className="text-xs text-slate-300 font-light leading-relaxed">
                        Çocukların teknolojiyi yalnızca tüketen değil, eğlenerek üreten kâşiflere dönüştüğü özel bir gün.
                      </p>
                    </div>

                    <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 text-[11px] text-[#2AC4A4] font-mono">
                      Girişte çocuğun kendi pasaportu onu bekliyor.
                    </div>
                  </motion.div>
                )}

                {activeCardIndex === 2 && (
                  <motion.div
                    key="screen-2"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.04 }}
                    transition={{ duration: 0.35 }}
                    className="my-auto text-center space-y-4 z-10"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[#2AC4A4]/20 border border-[#2AC4A4]/40 text-[#2AC4A4] flex items-center justify-center mx-auto">
                      <BookOpen className="w-6 h-6" />
                    </div>

                    <div className="space-y-1.5">
                      <span className="text-[10px] font-mono tracking-widest uppercase text-[#2AC4A4] px-2.5 py-0.5 rounded-full bg-[#2AC4A4]/10 border border-[#2AC4A4]/30 inline-block">
                        KEŞİF PASAPORTU ÖN İZLEME
                      </span>
                      <h3 className="font-display font-black text-xl text-white tracking-tight">
                        4 Görev, 1 Ortak Başarı
                      </h3>
                    </div>

                    {/* Passport mini preview */}
                    <div className="p-3 rounded-2xl bg-[#121935] border border-slate-700 text-left space-y-1.5 text-[11px]">
                      <div className="flex items-center justify-between text-slate-300 font-mono text-[10px]">
                        <span>KEŞİF KARTI</span>
                        <span className="text-[#F5B72E]">#CRS-2026</span>
                      </div>
                      <div className="grid grid-cols-2 gap-1.5 pt-1 text-[10px] font-mono">
                        <span className="px-2 py-1 rounded bg-[#FF5E3A]/20 text-[#FF5E3A] truncate">01 KEŞFET</span>
                        <span className="px-2 py-1 rounded bg-[#2AC4A4]/20 text-[#2AC4A4] truncate">02 ÜRET</span>
                        <span className="px-2 py-1 rounded bg-[#F5B72E]/20 text-[#F5B72E] truncate">03 YARAT</span>
                        <span className="px-2 py-1 rounded bg-[#4F75FF]/20 text-[#4F75FF] truncate">04 BİRLİKTE</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeCardIndex === 3 && (
                  <motion.div
                    key="screen-3"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.04 }}
                    transition={{ duration: 0.35 }}
                    className="my-auto text-center space-y-4 z-10"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[#4F75FF]/20 border border-[#4F75FF]/40 text-[#4F75FF] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>

                    <div className="space-y-1.5">
                      <span className="text-[10px] font-mono tracking-widest uppercase text-[#4F75FF] px-2.5 py-0.5 rounded-full bg-[#4F75FF]/10 border border-[#4F75FF]/30 inline-block">
                        KATILIM TEYİDİ / RSVP
                      </span>
                      <h3 className="font-display font-black text-xl text-white tracking-tight">
                        Ailenizle Birlikte Katılın
                      </h3>
                      <p className="text-xs text-slate-300 font-light">
                        150 çalışan · 300–350 katılımcı kontenjanı
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={handleRsvp}
                      className={`w-full py-3 px-4 rounded-xl font-display font-bold text-xs uppercase tracking-wider transition-all cursor-pointer ${
                        isRsvpDone
                          ? 'bg-[#2AC4A4] text-slate-950 shadow-lg'
                          : 'bg-[#4F75FF] text-white hover:bg-[#3B65FF]'
                      }`}
                    >
                      {isRsvpDone ? '✓ KATILIMINIZ ONAYLANDI' : 'AİLEMLE KATILIYORUM'}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Bottom Buttons: Fullscreen Experience & Navigation */}
              <div className="space-y-2.5 z-10 pt-2 border-t border-slate-800/80">
                <motion.button
                  id="phone-open-invitation-btn"
                  onClick={() => {
                    playPopSound();
                    setModalOpen(true);
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-[#FF5E3A] via-[#F5B72E] to-[#2AC4A4] text-slate-950 font-display font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-[#FF5E3A]/30 cursor-pointer"
                >
                  <span>TAM EKRAN DENEYİMİ AÇ</span>
                  <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
                </motion.button>

                {/* Step dots */}
                <div className="flex items-center justify-center gap-1.5 py-1">
                  {storyCards.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => handleCardClick(i)}
                      className={`h-1.5 rounded-full transition-all cursor-pointer ${
                        activeCardIndex === i
                          ? 'w-6 bg-[#2AC4A4]'
                          : 'w-1.5 bg-slate-700 hover:bg-slate-500'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Home bar */}
              <div className="w-24 h-1 bg-slate-700/80 rounded-full mx-auto mt-1" />
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Interactive Modal View */}
      {modalOpen && (
        <DigitalInvitationExperience onClose={() => setModalOpen(false)} />
      )}
    </section>
  );
};
