import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { playPopSound, playSuccessChime } from '../utils/sound';
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Calendar,
  Clock,
  MapPin,
  CheckCircle2,
  X,
  Search,
  Cpu,
  Palette,
  BookOpen,
  HeartHandshake,
} from 'lucide-react';

interface DigitalInvitationExperienceProps {
  onClose?: () => void;
  isStandalone?: boolean;
}

export const DigitalInvitationExperience: React.FC<DigitalInvitationExperienceProps> = ({
  onClose,
  isStandalone = false,
}) => {
  // Screen 1 to 7 (0 to 6 index)
  const [screenIndex, setScreenIndex] = useState<number>(0);
  const [isRsvpConfirmed, setIsRsvpConfirmed] = useState<boolean>(false);
  const [isAnimatingRsvp, setIsAnimatingRsvp] = useState<boolean>(false);

  const handleNext = () => {
    playPopSound();
    if (screenIndex < 6) {
      setScreenIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    playPopSound();
    if (screenIndex > 0) {
      setScreenIndex((prev) => prev - 1);
    }
  };

  const handleRsvpClick = () => {
    setIsAnimatingRsvp(true);
    playPopSound();
    playSuccessChime();

    // Trigger colorful celebration animation
    try {
      confetti({
        particleCount: 110,
        spread: 75,
        origin: { y: 0.6 },
        colors: ['#FF5E3A', '#F5B72E', '#2AC4A4', '#4F75FF', '#EC4899'],
      });
    } catch {}

    setTimeout(() => {
      setIsRsvpConfirmed(true);
      setIsAnimatingRsvp(false);
    }, 450);
  };

  const handleClose = () => {
    playPopSound();
    if (onClose) {
      onClose();
    } else {
      window.location.hash = '';
    }
  };

  return (
    <div
      id="digital-invitation-experience"
      className={`${
        isStandalone
          ? 'min-h-screen bg-[#070A14] text-white flex flex-col items-center justify-center p-4 selection:bg-[#FF5E3A] selection:text-white'
          : 'fixed inset-0 z-50 bg-[#070A14]/95 backdrop-blur-2xl flex items-center justify-center p-3 sm:p-6 overflow-y-auto'
      }`}
    >
      {/* Dynamic Animated Flowing Curved Lines & Ambient Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <svg
          viewBox="0 0 1440 900"
          fill="none"
          className="w-full h-full opacity-45"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="invLineGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF5E3A" />
              <stop offset="35%" stopColor="#F5B72E" />
              <stop offset="70%" stopColor="#2AC4A4" />
              <stop offset="100%" stopColor="#4F75FF" />
            </linearGradient>
            <linearGradient id="invLineGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#4F75FF" />
              <stop offset="50%" stopColor="#2AC4A4" />
              <stop offset="100%" stopColor="#FF5E3A" />
            </linearGradient>
          </defs>

          {/* Primary wave path */}
          <motion.path
            d="M -100 300 C 300 100, 600 700, 1100 200 C 1300 50, 1400 400, 1600 300"
            stroke="url(#invLineGrad1)"
            strokeWidth={isAnimatingRsvp ? '6' : '3'}
            strokeDasharray="14 10"
            animate={{
              strokeDashoffset: isAnimatingRsvp ? [0, -600] : [0, -240],
            }}
            transition={{
              duration: isAnimatingRsvp ? 4 : 16,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          {/* Counter-wave path */}
          <motion.path
            d="M -50 700 C 350 850, 700 250, 1200 650 C 1400 800, 1500 450, 1600 500"
            stroke="url(#invLineGrad2)"
            strokeWidth={isAnimatingRsvp ? '5' : '2.5'}
            strokeDasharray="10 8"
            animate={{
              strokeDashoffset: isAnimatingRsvp ? [0, 500] : [0, 200],
            }}
            transition={{
              duration: isAnimatingRsvp ? 5 : 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </svg>

        {/* Ambient glow orbs that pulse on RSVP */}
        <motion.div
          animate={{
            scale: isAnimatingRsvp ? [1, 1.4, 1.2] : [1, 1.08, 1],
            opacity: isAnimatingRsvp ? 0.4 : 0.2,
          }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF5E3A] rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: isAnimatingRsvp ? [1, 1.3, 1.1] : [1, 1.05, 1],
            opacity: isAnimatingRsvp ? 0.35 : 0.18,
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#2AC4A4] rounded-full blur-3xl"
        />
      </div>

      {/* Top Small Close Button (DAVETİYEYİ KAPAT ×) */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50">
        <button
          id="close-invitation-btn"
          onClick={handleClose}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 text-xs font-mono transition-all shadow-lg cursor-pointer"
        >
          <span>DAVETİYEYİ KAPAT</span>
          <span className="text-base leading-none font-bold">×</span>
        </button>
      </div>

      {/* Main Interactive Invitation Card Container */}
      <div className="relative z-10 w-full max-w-lg mx-auto bg-[#0E1528] border-2 border-slate-700/90 rounded-[36px] sm:rounded-[44px] p-6 sm:p-10 shadow-[0_30px_90px_rgba(0,0,0,0.85),0_0_50px_rgba(255,94,58,0.15)] overflow-hidden flex flex-col justify-between min-h-[580px]">
        {/* Top Header with CRS Kids Logo & Screen Indicator */}
        <div className="flex flex-col items-center text-center">
          <img src="/logo.png" alt="Crs soft kids" className="h-16 w-auto" draggable={false} />
          <div className="flex items-center gap-2 mt-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#2AC4A4]">
              DİJİTAL DAVETİYE
            </span>
            <span className="text-slate-600 font-mono text-xs">·</span>
            <span className="text-[10px] font-mono text-slate-400">
              EKRAN 0{screenIndex + 1} / 07
            </span>
          </div>
        </div>

        {/* Dynamic 7-Screen Sequence */}
        <div className="my-auto py-6">
          <AnimatePresence mode="wait">
            {/* SCREEN 01: CRS Kids logo, “PLAY WITH THE FUTURE.”, “Yakında sizlerle.”, Button: DAVETİYEYİ AÇ */}
            {screenIndex === 0 && (
              <motion.div
                key="screen-1"
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                className="space-y-6 text-center"
              >
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF5E3A]/20 border border-[#FF5E3A]/40 text-[#FF5E3A] text-xs font-mono">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>ÖZEL DAVET</span>
                </div>

                <div className="space-y-3">
                  <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-none">
                    PLAY WITH THE FUTURE.
                  </h2>
                  <p className="text-lg sm:text-xl text-[#F5B72E] font-medium">
                    Yakında sizlerle.
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 font-light max-w-sm mx-auto leading-relaxed">
                  Çalışanlarımızın ve çocuklarımızın birlikte üreteceği özel buluşmaya davetlisiniz.
                </p>

                <div className="pt-4">
                  <motion.button
                    id="invitation-screen1-btn"
                    onClick={handleNext}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#FF5E3A] via-[#F5B72E] to-[#2AC4A4] text-slate-950 font-display font-black text-sm uppercase tracking-wider shadow-xl shadow-[#FF5E3A]/30 hover:brightness-110 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>DAVETİYEYİ AÇ</span>
                    <ArrowRight className="w-4 h-4 stroke-[3]" />
                  </motion.button>
                </div>
              </motion.div>
            )}

            {/* SCREEN 02: “CRS Kids dünyasına davetlisin.”, Button: DEVAM ET → */}
            {screenIndex === 1 && (
              <motion.div
                key="screen-2"
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                className="space-y-6 text-center"
              >
                {/* Visual Icon Badge */}
                <div className="w-16 h-16 rounded-full bg-[#F5B72E]/20 border-2 border-[#F5B72E] text-[#F5B72E] flex items-center justify-center mx-auto shadow-lg shadow-[#F5B72E]/30 animate-pulse">
                  <Sparkles className="w-8 h-8" />
                </div>

                <div className="space-y-3">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#2AC4A4] block">
                    HOŞ GELDİNİZ
                  </span>
                  <h2 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight leading-tight">
                    CRS Kids dünyasına davetlisin.
                  </h2>
                </div>

                <p className="text-sm text-slate-300 font-light max-w-sm mx-auto leading-relaxed">
                  Teknolojinin, oyunun ve yaratıcılığın birleştiği rengârenk bir kâşif deneyimine adım atıyoruz.
                </p>

                <div className="pt-4">
                  <motion.button
                    id="invitation-screen2-btn"
                    onClick={handleNext}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 px-6 rounded-2xl bg-[#F5B72E] text-slate-950 font-display font-black text-sm uppercase tracking-wider shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>DEVAM ET →</span>
                  </motion.button>
                </div>
              </motion.div>
            )}

            {/* SCREEN 03: “Birlikte oynuyor, keşfediyor ve üretiyoruz.”, Button: DEVAM ET → */}
            {screenIndex === 2 && (
              <motion.div
                key="screen-3"
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                className="space-y-6 text-center"
              >
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2AC4A4]/20 border border-[#2AC4A4]/40 text-[#2AC4A4] text-xs font-mono">
                  <HeartHandshake className="w-3.5 h-3.5" />
                  <span>ORTAK DENEYİM</span>
                </div>

                <div className="space-y-3">
                  <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-white tracking-tight leading-snug">
                    “Birlikte oynuyor,<br />keşfediyor<br />ve üretiyoruz.”
                  </h2>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 font-light max-w-sm mx-auto leading-relaxed">
                  Çalışanlarımızın emeği ve çocuklarımızın hayal gücü aynı sahnede buluşuyor.
                </p>

                <div className="pt-4">
                  <motion.button
                    id="invitation-screen3-btn"
                    onClick={handleNext}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 px-6 rounded-2xl bg-[#2AC4A4] text-slate-950 font-display font-black text-sm uppercase tracking-wider shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>DEVAM ET →</span>
                  </motion.button>
                </div>
              </motion.div>
            )}

            {/* SCREEN 04: Show event information [TARİH], [SAAT], [MEKÂN], Button: DEVAM ET → */}
            {screenIndex === 3 && (
              <motion.div
                key="screen-4"
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                className="space-y-5 text-center"
              >
                <span className="text-xs font-mono uppercase tracking-widest text-[#FF5E3A] block">
                  ETKİNLİK BİLGİLERİ
                </span>

                <h2 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
                  Takvimini İşaretle!
                </h2>

                <div className="p-5 rounded-3xl bg-slate-900/90 border border-slate-800 text-left space-y-3.5 shadow-inner">
                  {/* [TARİH] */}
                  <div className="flex items-center gap-3.5 text-sm text-slate-200">
                    <div className="w-10 h-10 rounded-xl bg-[#FF5E3A]/20 text-[#FF5E3A] flex items-center justify-center shrink-0">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-[#FF5E3A] block uppercase font-bold">
                        [TARİH]
                      </span>
                      <strong className="text-white text-base">Cumartesi</strong>
                    </div>
                  </div>

                  {/* [SAAT] */}
                  <div className="flex items-center gap-3.5 text-sm text-slate-200 border-t border-slate-800/80 pt-3">
                    <div className="w-10 h-10 rounded-xl bg-[#F5B72E]/20 text-[#F5B72E] flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-[#F5B72E] block uppercase font-bold">
                        [SAAT]
                      </span>
                      <strong className="text-white text-base">09:30 – 17:00</strong>
                    </div>
                  </div>

                  {/* [MEKÂN] */}
                  <div className="flex items-center gap-3.5 text-sm text-slate-200 border-t border-slate-800/80 pt-3">
                    <div className="w-10 h-10 rounded-xl bg-[#2AC4A4]/20 text-[#2AC4A4] flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-[#2AC4A4] block uppercase font-bold">
                        [MEKÂN]
                      </span>
                      <strong className="text-white text-base">CRS Maslak Kampüsü</strong>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <motion.button
                    id="invitation-screen4-btn"
                    onClick={handleNext}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#FF5E3A] to-[#F5B72E] text-slate-950 font-display font-black text-sm uppercase tracking-wider shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>DEVAM ET →</span>
                  </motion.button>
                </div>
              </motion.div>
            )}

            {/* SCREEN 05: “Gün boyunca seni neler bekliyor?” Three visual elements: KEŞFET, ÜRET, YARAT, Button: DEVAM ET → */}
            {screenIndex === 4 && (
              <motion.div
                key="screen-5"
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                className="space-y-5 text-center"
              >
                <div className="space-y-1">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#2AC4A4] block">
                    GÜNÜN AKIŞI
                  </span>
                  <h2 className="font-display font-black text-2xl sm:text-3xl text-white">
                    Gün boyunca seni neler bekliyor?
                  </h2>
                </div>

                {/* 3 Visual Elements: KEŞFET, ÜRET, YARAT */}
                <div className="grid grid-cols-3 gap-3 pt-2">
                  {/* KEŞFET */}
                  <motion.div
                    whileHover={{ y: -4, scale: 1.04 }}
                    className="p-4 rounded-2xl bg-[#FF5E3A]/15 border-2 border-[#FF5E3A]/40 flex flex-col items-center justify-center space-y-2 shadow-lg"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#FF5E3A] text-slate-950 flex items-center justify-center shadow-md">
                      <Search className="w-5 h-5" />
                    </div>
                    <span className="font-display font-black text-sm text-white tracking-tight">
                      KEŞFET
                    </span>
                    <span className="text-[10px] text-slate-300 font-light leading-tight">
                      Kodu Çöz
                    </span>
                  </motion.div>

                  {/* ÜRET */}
                  <motion.div
                    whileHover={{ y: -4, scale: 1.04 }}
                    className="p-4 rounded-2xl bg-[#2AC4A4]/15 border-2 border-[#2AC4A4]/40 flex flex-col items-center justify-center space-y-2 shadow-lg"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#2AC4A4] text-slate-950 flex items-center justify-center shadow-md">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <span className="font-display font-black text-sm text-white tracking-tight">
                      ÜRET
                    </span>
                    <span className="text-[10px] text-slate-300 font-light leading-tight">
                      Robotu Kodla
                    </span>
                  </motion.div>

                  {/* YARAT */}
                  <motion.div
                    whileHover={{ y: -4, scale: 1.04 }}
                    className="p-4 rounded-2xl bg-[#F5B72E]/15 border-2 border-[#F5B72E]/40 flex flex-col items-center justify-center space-y-2 shadow-lg"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#F5B72E] text-slate-950 flex items-center justify-center shadow-md">
                      <Palette className="w-5 h-5" />
                    </div>
                    <span className="font-display font-black text-sm text-white tracking-tight">
                      YARAT
                    </span>
                    <span className="text-[10px] text-slate-300 font-light leading-tight">
                      Dünyanı Çiz
                    </span>
                  </motion.div>
                </div>

                <div className="pt-3">
                  <motion.button
                    id="invitation-screen5-btn"
                    onClick={handleNext}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 px-6 rounded-2xl bg-[#2AC4A4] text-slate-950 font-display font-black text-sm uppercase tracking-wider shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>DEVAM ET →</span>
                  </motion.button>
                </div>
              </motion.div>
            )}

            {/* SCREEN 06: Visual glimpse of Discovery Passport, Text: “Keşif Pasaportun hazır.”, Button: DEVAM ET → */}
            {screenIndex === 5 && (
              <motion.div
                key="screen-6"
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                className="space-y-6 text-center"
              >
                {/* Visual Glimpse of the Discovery Passport */}
                <div className="relative w-44 h-32 mx-auto rounded-2xl bg-gradient-to-br from-[#161F4D] to-[#0A0E24] border-2 border-[#F5B72E]/60 p-3 shadow-2xl flex flex-col justify-between rotate-[-3deg] hover:rotate-0 transition-transform">
                  <div className="flex items-center justify-between text-[9px] font-mono text-[#F5B72E]">
                    <span>PASAPORT</span>
                    <span>#CRS-2026</span>
                  </div>
                  <div className="flex justify-center my-auto">
                    <BookOpen className="w-8 h-8 text-[#2AC4A4]" />
                  </div>
                  <div className="text-[8px] font-mono text-center text-slate-300 border-t border-slate-700/80 pt-1">
                    4 ÖZEL DAMGA YUVASI
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#FF5E3A] block">
                    KÂŞİF BELGEN
                  </span>
                  <h2 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
                    Keşif Pasaportun hazır.
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                    Etkinlik kapısında sana özel teslim edilecek pasaportla 4 görevi tamamlayıp mühürleri toplayacaksın.
                  </p>
                </div>

                <div className="pt-2">
                  <motion.button
                    id="invitation-screen6-btn"
                    onClick={handleNext}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#FF5E3A] via-[#F5B72E] to-[#2AC4A4] text-slate-950 font-display font-black text-sm uppercase tracking-wider shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>DEVAM ET →</span>
                  </motion.button>
                </div>
              </motion.div>
            )}

            {/* SCREEN 07: Final RSVP screen “Buluşmak üzere.”, Button: KATILACAĞIM -> confirmation "Görüşmek üzere!" */}
            {screenIndex === 6 && (
              <motion.div
                key="screen-7"
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                className="space-y-6 text-center"
              >
                {!isRsvpConfirmed ? (
                  <>
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2AC4A4]/20 border border-[#2AC4A4]/40 text-[#2AC4A4] text-xs font-mono">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>SON ADIM</span>
                    </div>

                    <div className="space-y-2">
                      <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
                        Buluşmak üzere.
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                        CRS Kids ailesinin bu heyecan dolu lansman gününde yerinizi hemen onaylayın.
                      </p>
                    </div>

                    <div className="pt-4">
                      <motion.button
                        id="invitation-rsvp-btn"
                        onClick={handleRsvpClick}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="w-full py-5 px-6 rounded-2xl bg-gradient-to-r from-[#2AC4A4] via-[#F5B72E] to-[#FF5E3A] text-slate-950 font-display font-black text-base uppercase tracking-wider shadow-2xl shadow-[#2AC4A4]/40 hover:brightness-110 transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Sparkles className="w-5 h-5" />
                        <span>KATILACAĞIM</span>
                      </motion.button>
                    </div>
                  </>
                ) : (
                  /* Confirmed State: "Görüşmek üzere!" */
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#2AC4A4]/20 border-2 border-[#2AC4A4] text-[#2AC4A4] flex items-center justify-center mx-auto shadow-xl shadow-[#2AC4A4]/30 animate-bounce">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <div className="space-y-2">
                      <span className="text-xs font-mono uppercase tracking-widest text-[#2AC4A4] block">
                        KATILIM ONAYLANDI
                      </span>
                      <h3 className="font-display font-black text-3xl sm:text-4xl text-white">
                        Görüşmek üzere!
                      </h3>
                      <p className="text-sm text-slate-300 font-light leading-relaxed max-w-sm mx-auto">
                        Davetiyenizi onayladınız. Etkinlik günü kapıda Keşif Pasaportunuz ile kâşif serüvenine başlayacaksınız.
                      </p>
                    </div>

                    <div className="pt-2">
                      <button
                        id="invitation-close-after-rsvp-btn"
                        onClick={handleClose}
                        className="w-full py-3.5 px-6 rounded-2xl bg-white text-slate-950 font-display font-black text-xs uppercase tracking-wider hover:bg-slate-200 transition-colors cursor-pointer"
                      >
                        DAVETİYEYİ KAPAT & VAKA ÇALIŞMASINA DÖN
                      </button>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom Pagination Controls */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
          <button
            id="invitation-back-step-btn"
            onClick={handlePrev}
            disabled={screenIndex === 0}
            className={`p-2 rounded-xl text-slate-400 hover:text-white transition-opacity ${
              screenIndex === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100 hover:bg-slate-800 cursor-pointer'
            }`}
            title="Önceki Ekran"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          {/* 7 step indicator dots */}
          <div className="flex items-center gap-1.5">
            {Array.from({ length: 7 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  playPopSound();
                  setScreenIndex(idx);
                }}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === screenIndex
                    ? 'w-6 bg-[#FF5E3A]'
                    : idx < screenIndex
                    ? 'w-2 bg-[#2AC4A4]'
                    : 'w-2 bg-slate-700'
                }`}
                title={`Ekran ${idx + 1}`}
              />
            ))}
          </div>

          <button
            id="invitation-forward-step-btn"
            onClick={handleNext}
            disabled={screenIndex === 6}
            className={`p-2 rounded-xl text-slate-400 hover:text-white transition-opacity ${
              screenIndex === 6 ? 'opacity-0 pointer-events-none' : 'opacity-100 hover:bg-slate-800 cursor-pointer'
            }`}
            title="Sonraki Ekran"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
