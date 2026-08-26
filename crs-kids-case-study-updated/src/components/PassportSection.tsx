import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { playStampSound, playSuccessChime } from '../utils/sound';
import {
  BookOpen,
  Sparkles,
  Check,
  Search,
  Cpu,
  Palette,
  HeartHandshake,
  QrCode,
  ArrowRight,
  Camera,
} from 'lucide-react';

interface PassportSectionProps {
  stampedList?: string[];
  onToggleStamp?: (stampId: string) => void;
}

export const PassportSection: React.FC<PassportSectionProps> = ({
  stampedList: externalStampedList,
  onToggleStamp: externalOnToggleStamp,
}) => {
  const passportFrontImg = '/images/pasaport-on-yuz.png';
  const [internalStampedList, setInternalStampedList] = useState<string[]>([
    'kesfet',
    'uret',
    'yarat',
    'birlikte',
  ]);
  const [showQrModal, setShowQrModal] = useState<boolean>(false);

  const stampedList = externalStampedList || internalStampedList;

  const tasks = [
    {
      id: 'kesfet',
      num: '01',
      name: 'KEŞFET',
      tentName: 'Çadır 1 · Kodu Çöz',
      color: '#F5B72E', // yellow
      bgTint: 'rgba(245, 183, 46, 0.15)',
      icon: Search,
    },
    {
      id: 'uret',
      num: '02',
      name: 'ÜRET',
      tentName: 'Çadır 2 · Robotu Programla',
      color: '#FF5E3A', // orange
      bgTint: 'rgba(255, 94, 58, 0.15)',
      icon: Cpu,
    },
    {
      id: 'yarat',
      num: '03',
      name: 'YARAT',
      tentName: 'Çadır 3 · Kendi Dünyanı Yarat',
      color: '#2AC4A4', // green
      bgTint: 'rgba(42, 196, 164, 0.15)',
      icon: Palette,
    },
    {
      id: 'birlikte',
      num: '04',
      name: 'BİRLİKTE',
      tentName: 'Ailenle Birlikte Görevi',
      color: '#4F75FF', // blue
      bgTint: 'rgba(79, 117, 255, 0.15)',
      icon: HeartHandshake,
    },
  ];

  const handleToggle = (taskId: string) => {
    playStampSound();
    if (externalOnToggleStamp) {
      externalOnToggleStamp(taskId);
    } else {
      let updated: string[];
      if (internalStampedList.includes(taskId)) {
        updated = internalStampedList.filter((id) => id !== taskId);
      } else {
        updated = [...internalStampedList, taskId];
      }
      setInternalStampedList(updated);

      if (updated.length === 4) {
        playSuccessChime();
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.7 },
            colors: ['#F5B72E', '#FF5E3A', '#2AC4A4', '#4F75FF'],
          });
        } catch {}
      }
    }
  };

  const progressPercent = Math.round((stampedList.length / 4) * 100);
  const isComplete = stampedList.length === 4;

  return (
    <section
      id="pasaport"
      aria-label="Keşif Pasaportu"
      className="relative py-28 px-4 sm:px-6 max-w-7xl mx-auto space-y-20"
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#F5B72E]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-[#2AC4A4]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Title */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5B72E]/15 border border-[#F5B72E]/30 text-[#F5B72E] text-xs font-mono">
          <BookOpen className="w-3.5 h-3.5" />
          <span>09 · KEŞİF PASAPORTU</span>
        </div>
        <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight">
          KEŞİF PASAPORTU
        </h2>
      </div>

      {/* ========================================================================= */}
      {/* TOP: ONE LARGE VERTICAL PORTRAIT PASSPORT-FRONT IMAGE PLACEHOLDER + TEXT */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center bg-[#0E1528]/60 p-6 sm:p-10 rounded-[40px] border border-slate-800 shadow-2xl">
        {/* LEFT: Large Vertical Portrait Passport-Front Image (fixed / locked) */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="w-full max-w-[340px] sm:max-w-[380px] aspect-[1600/2273] rounded-[36px] bg-gradient-to-b from-[#141C38] to-[#0A0E1C] border-2 border-slate-700/80 relative overflow-hidden shadow-2xl">
            <img
              src={passportFrontImg ?? '/images/pasaport-on-yuz.png'}
              alt="Keşif Pasaportu Ön Yüz Tasarımı — Kaşif #005 Neziha"
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* RIGHT: Warm Personal Explanation */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-[#F5B72E] text-xs font-mono">
            <span>ÖN YÜZ · KİŞİSEL KİMLİK</span>
          </div>

          <h3 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight leading-tight">
            KİŞİYE ÖZEL PASAPORT
          </h3>

          <div className="space-y-4 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            <p>
              Etkinliğe gelen her çocuk girişte kendi keşif pasaportunu alıyor. O gün çekilen <strong className="text-[#FF5E3A] font-semibold">anlık fotoğrafı</strong>, <strong className="text-[#2AC4A4] font-semibold">CRS Kids evrenindeki</strong> kişisel görseline dönüştürülerek kartın ön yüzüne yerleştiriliyor ve çocuğa özel bir <strong className="text-[#F5B72E] font-semibold">keşif numarası</strong> veriliyor. Böylece çocuk daha etkinliğin başında kendine ait bir hatırayla CRS Kids dünyasına giriyor.
            </p>
            <p>
              Gün boyunca istasyonlarda tamamladığı görevler bu kartta karşılık buluyor. Her damga, çocuğun etkinlik içinde gerçekten bir şey yaptığını ve bir sonraki adıma geçtiğini görünür hale getiriyor; <strong className="text-[#FF5E3A] font-semibold">dört görev</strong> tamamlandığında ise <strong className="text-[#2AC4A4] font-semibold">final QR</strong>'ı açılıyor.
            </p>
            <p className="text-white font-medium italic text-base border-l-2 border-[#F5B72E] pl-4 py-1">
              Amacım, kartı yalnızca bir giriş materyali değil, çocuğun gün boyunca taşıdığı küçük bir keşif hikâyesine dönüştürmekti.
            </p>
          </div>

          {/* Supporting Visual Statements */}
          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300">
              <span className="text-[#F5B72E] font-bold block mb-1">01 · İLK TEMAS</span>
              Bu kart, CRS Kids ile çocuk arasında kurulan ilk fiziksel temas noktası.
            </div>
            <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300">
              <span className="text-[#2AC4A4] font-bold block mb-1">02 · GÖRÜNÜR İLERLEME</span>
              Çocuk, etkinlik boyunca yaptığı her şeyin kartında bir karşılığını görüyor.
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* BELOW: INTERACTIVE PASSPORT BACK / TASK SYSTEM                            */}
      {/* ========================================================================= */}
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#2AC4A4] block">
              İNTERAKTİF ARKA YÜZ & GÖREV SİSTEMİ
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
              GÖREVLERİ TAMAMLA & QR'I AÇ
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-slate-400">İLERLEME:</span>
            <div className="w-32 h-3 bg-slate-900 rounded-full overflow-hidden border border-slate-800 p-0.5">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#F5B72E] via-[#2AC4A4] to-[#4F75FF] transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <span className="text-xs font-mono font-bold text-white">
              %{progressPercent}
            </span>
          </div>
        </div>

        {/* Instructions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
          <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 text-[#F5B72E] flex items-center gap-2">
            <Sparkles className="w-4 h-4 shrink-0" />
            <span>Damgalamak için tiklere tıklayın.</span>
          </div>
          <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 text-[#2AC4A4] flex items-center gap-2">
            <QrCode className="w-4 h-4 shrink-0" />
            <span>Her görev tamamlandığında bir damga kazanırsın.</span>
          </div>
        </div>

        {/* Spatial Grid: LEFT Vertical Tasks + RIGHT Passport-Back Visual & QR */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: 4 Tasks Arranged Vertically */}
          <div className="lg:col-span-6 space-y-4">
            {tasks.map((task) => {
              const isChecked = stampedList.includes(task.id);
              const Icon = task.icon;

              return (
                <div
                  key={task.id}
                  id={`task-item-${task.id}`}
                  onClick={() => handleToggle(task.id)}
                  className={`p-5 rounded-[28px] border-2 transition-all duration-300 flex items-center justify-between cursor-pointer select-none relative overflow-hidden ${
                    isChecked
                      ? 'bg-gradient-to-r from-[#141E3A] to-[#0D152A] shadow-xl ring-2'
                      : 'bg-[#0E1528]/80 hover:bg-[#121A33] border-slate-800 text-slate-400'
                  }`}
                  style={{
                    borderColor: isChecked ? task.color : undefined,
                    boxShadow: isChecked ? `0 0 25px ${task.bgTint}` : undefined,
                  }}
                >
                  <div className="flex items-center gap-4">
                    {/* Checkbox */}
                    <div
                      className={`w-9 h-9 rounded-2xl border-2 flex items-center justify-center transition-all ${
                        isChecked
                          ? 'border-transparent text-slate-950 scale-110 shadow-lg'
                          : 'border-slate-600 bg-black/40 text-transparent hover:border-slate-400'
                      }`}
                      style={{ backgroundColor: isChecked ? task.color : undefined }}
                    >
                      <Check className="w-5 h-5 stroke-[3]" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span
                          className="font-mono font-bold text-xs"
                          style={{ color: isChecked ? task.color : '#94A3B8' }}
                        >
                          {task.num}
                        </span>
                        <h4
                          className="font-display font-black text-lg text-white"
                          style={{ color: isChecked ? task.color : '#F1F5F9' }}
                        >
                          {task.name}
                        </h4>
                      </div>
                      <span className="text-xs text-slate-400 font-light">
                        {task.tentName}
                      </span>
                    </div>
                  </div>

                  {/* Stamp badge */}
                  <div className="flex items-center gap-2">
                    {isChecked ? (
                      <span
                        className="px-3 py-1 rounded-full text-xs font-mono font-bold flex items-center gap-1.5 shadow-md"
                        style={{
                          backgroundColor: `${task.color}25`,
                          color: task.color,
                          border: `1px solid ${task.color}60`,
                        }}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        <span>DAMGALANDI</span>
                      </span>
                    ) : (
                      <span className="text-[11px] font-mono text-slate-500">
                        Bekliyor ○
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT: Large Visual Passport-Back + 4-Quadrant QR Construction */}
          <div className="lg:col-span-6 bg-gradient-to-b from-[#101732] via-[#0A0F22] to-[#070A18] rounded-[36px] p-7 sm:p-8 border-2 border-slate-700/90 shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase">
                  PASAPORT ARKA YÜZ
                </span>
                <h4 className="font-display font-black text-xl text-white">
                  KÂŞİF QR KOD MATRİSİ
                </h4>
              </div>
              <div
                className={`px-3 py-1 rounded-full text-xs font-mono font-bold ${
                  isComplete
                    ? 'bg-[#2AC4A4] text-slate-950 animate-pulse'
                    : 'bg-slate-800 text-slate-300'
                }`}
              >
                {stampedList.length}/4 TAMAMLANDI
              </div>
            </div>

            {/* Visual QR 4-Quadrant Matrix */}
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 mx-auto p-4 rounded-3xl bg-black border-2 border-slate-700 shadow-2xl flex flex-col justify-between overflow-hidden">
              {/* Top Row: Q1 (Yellow) & Q2 (Orange) */}
              <div className="grid grid-cols-2 gap-2 h-1/2">
                {/* Quadrant 1: KEŞFET */}
                <div
                  className={`rounded-2xl border flex flex-col items-center justify-center transition-all duration-500 ${
                    stampedList.includes('kesfet')
                      ? 'border-[#F5B72E] bg-[#F5B72E]/20 text-[#F5B72E] shadow-[0_0_25px_rgba(245,183,46,0.5)]'
                      : 'border-slate-800 bg-slate-900/40 text-slate-700'
                  }`}
                >
                  <Search className="w-6 h-6 mb-1" />
                  <span className="text-[9px] font-mono font-bold">01 KEŞFET</span>
                </div>

                {/* Quadrant 2: ÜRET */}
                <div
                  className={`rounded-2xl border flex flex-col items-center justify-center transition-all duration-500 ${
                    stampedList.includes('uret')
                      ? 'border-[#FF5E3A] bg-[#FF5E3A]/20 text-[#FF5E3A] shadow-[0_0_25px_rgba(255,94,58,0.5)]'
                      : 'border-slate-800 bg-slate-900/40 text-slate-700'
                  }`}
                >
                  <Cpu className="w-6 h-6 mb-1" />
                  <span className="text-[9px] font-mono font-bold">02 ÜRET</span>
                </div>
              </div>

              {/* Bottom Row: Q3 (Green) & Q4 (Blue) */}
              <div className="grid grid-cols-2 gap-2 h-1/2 mt-2">
                {/* Quadrant 3: YARAT */}
                <div
                  className={`rounded-2xl border flex flex-col items-center justify-center transition-all duration-500 ${
                    stampedList.includes('yarat')
                      ? 'border-[#2AC4A4] bg-[#2AC4A4]/20 text-[#2AC4A4] shadow-[0_0_25px_rgba(42,196,164,0.5)]'
                      : 'border-slate-800 bg-slate-900/40 text-slate-700'
                  }`}
                >
                  <Palette className="w-6 h-6 mb-1" />
                  <span className="text-[9px] font-mono font-bold">03 YARAT</span>
                </div>

                {/* Quadrant 4: BİRLİKTE */}
                <div
                  className={`rounded-2xl border flex flex-col items-center justify-center transition-all duration-500 ${
                    stampedList.includes('birlikte')
                      ? 'border-[#4F75FF] bg-[#4F75FF]/20 text-[#4F75FF] shadow-[0_0_25px_rgba(79,117,255,0.5)]'
                      : 'border-slate-800 bg-slate-900/40 text-slate-700'
                  }`}
                >
                  <HeartHandshake className="w-6 h-6 mb-1" />
                  <span className="text-[9px] font-mono font-bold">04 BİRLİKTE</span>
                </div>
              </div>

              {/* Center QR Unlock Badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-950 border-2 border-white/20 flex items-center justify-center shadow-2xl">
                <QrCode
                  className={`w-6 h-6 ${
                    isComplete ? 'text-[#2AC4A4] animate-pulse' : 'text-slate-600'
                  }`}
                />
              </div>
            </div>

            {/* Bottom Status & Unlock Button */}
            <div className="space-y-3 pt-2 text-center">
              {isComplete ? (
                <div className="space-y-2">
                  <div className="p-3 rounded-2xl bg-[#2AC4A4]/20 border border-[#2AC4A4] text-[#2AC4A4] text-xs font-mono font-bold">
                    🎉 GÖREV TAMAMLANDI! TÜM DAMGALAR PARLIYOR.
                  </div>
                  <button
                    type="button"
                    id="open-qr-final-btn"
                    onClick={() => {
                      playSuccessChime();
                      const element = document.getElementById('qr-kilit');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#FF5E3A] via-[#F5B72E] to-[#2AC4A4] text-slate-950 font-display font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-[#2AC4A4]/30 hover:scale-102 cursor-pointer transition-all"
                  >
                    <QrCode className="w-4 h-4 stroke-[3]" />
                    <span>QR'I AÇ</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <p className="text-xs font-mono text-slate-400">
                  QR Kodun tamamlanması için kalan görev sayısı: {4 - stampedList.length}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
