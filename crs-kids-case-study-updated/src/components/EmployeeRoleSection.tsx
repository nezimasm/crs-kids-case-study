import React from 'react';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export const EmployeeRoleSection: React.FC = () => {
  const photo1 = '/images/calisan-hikaye.jpg';
  const photo2 = '/images/calisan-kutlama.jpg';

  return (
    <section
      id="calisanlarin-rolu"
      aria-label="Sahnede Çalışanlar Var"
      className="relative py-28 px-4 sm:px-6 max-w-7xl mx-auto space-y-16"
    >
      {/* Background Glows */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#FF5E3A]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#2AC4A4]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF5E3A]/15 border border-[#FF5E3A]/30 text-[#FF5E3A] text-xs font-mono">
          <Heart className="w-3.5 h-3.5" />
          <span>07 · ÇALIŞAN TAKDİRİ VE KUTLAMA</span>
        </div>

        <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
          SAHNEDE ÇALIŞANLAR VAR
        </h2>

        <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
          CRS Kids'in arkasındaki emeği yalnızca etkinliğin bir parçası olarak değil, günün sonunda görünür ve kutlanabilir bir ana dönüştürmek istedim. Çalışanlar aileleriyle birlikte bu başarıya tanıklık ederken, ekiplerin emeği de sahnede görünür hale geliyor.
        </p>
      </div>

      {/* Main Composition: STAGE PRESENTATION SCREEN CONTEXT + 2 OVERLAPPING PHOTO FRAMES */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* LEFT / CENTER: Main Stage Screen Backdrop with Two Overlapping Photo Frames */}
        <div className="lg:col-span-7 flex justify-center py-4">
          <div className="relative w-full max-w-lg rounded-[40px] bg-gradient-to-b from-[#131B36] via-[#0A0F22] to-[#060814] p-6 sm:p-8 border-2 border-slate-700/80 shadow-[0_30px_70px_rgba(0,0,0,0.85)] overflow-hidden">
            {/* Subtle Stage Lighting & Branding Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5E3A] animate-pulse" />
                <span className="text-[11px] font-mono font-bold tracking-widest text-[#FF5E3A] uppercase">
                  ANA SAHNE · GÖRSEL YANSITMA AKIŞI
                </span>
              </div>
              <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2.5 py-1 rounded-full border border-slate-800">
                CRS Kids Canlı
              </span>
            </div>

            {/* Stage Curved Line Visual Backing */}
            <div className="absolute top-16 right-8 opacity-20 pointer-events-none">
              <svg width="220" height="120" viewBox="0 0 220 120" fill="none">
                <path
                  d="M10 60 C 60 10, 160 110, 210 60"
                  stroke="#2AC4A4"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Two overlapping tilted physical photo frames */}
            <div className="relative w-full h-[380px] sm:h-[420px] mx-auto flex items-center justify-center">
              {/* Top Frame — Tilted Left (-4deg) */}
              <motion.div
                whileHover={{ rotate: -2, scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="absolute top-2 left-0 sm:left-4 w-[230px] sm:w-[270px] aspect-square bg-gradient-to-b from-[#1E293B] to-[#0F172A] rounded-[28px] p-3 border-4 border-slate-600/80 shadow-[0_20px_50px_rgba(0,0,0,0.85)] -rotate-4 z-10 select-none group"
              >
                <div className="w-full h-full rounded-[20px] border-2 border-slate-600/80 bg-black overflow-hidden relative">
                  <img
                    src={photo1}
                    alt="Ekiplerin Hazırlık ve Üretim Hikâyesi"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="text-[10px] font-mono text-slate-400 text-center mt-1.5">
                  01 · Ekiplerin Üretim Yolculuğu
                </div>
              </motion.div>

              {/* Bottom Frame — Tilted Right (+5deg), Slightly Overlapping */}
              <motion.div
                whileHover={{ rotate: 3, scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-2 right-0 sm:right-4 w-[230px] sm:w-[270px] aspect-square bg-gradient-to-b from-[#1E293B] to-[#0F172A] rounded-[28px] p-3 border-4 border-slate-600/80 shadow-[0_25px_60px_rgba(0,0,0,0.9)] rotate-5 z-20 select-none group"
              >
                <div className="w-full h-full rounded-[20px] border-2 border-slate-600/80 bg-black overflow-hidden relative">
                  <img
                    src={photo2}
                    alt="Sahne Teşekkür ve Kutlama Anı"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="text-[10px] font-mono text-slate-400 text-center mt-1.5">
                  02 · Ortak Başarı ve Kutlama
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* RIGHT: 3-Step Sahne Akışı + Photo Memory Rationale */}
        <div className="lg:col-span-5 space-y-4">
          {/* Step 1 */}
          <div className="p-5 rounded-3xl bg-[#0E1528]/80 border border-slate-800 space-y-1.5">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF5E3A] block font-bold">
              01 · EKİPLER SAHNEYE DAVET EDİLİR
            </span>
            <h3 className="font-display font-bold text-base text-white">
              Yöneticiler ve Ekipler Sahnede
            </h3>
            <p className="text-sm text-slate-300 font-light leading-relaxed">
              Günün kutlama bölümünde CRS Kids'in ortaya çıkmasında emeği olan ekipler yöneticileri tarafından sahneye davet edilir.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-5 rounded-3xl bg-[#0E1528]/80 border border-slate-800 space-y-1.5">
            <span className="text-xs font-mono uppercase tracking-widest text-[#2AC4A4] block font-bold">
              02 · EKİBİN HİKÂYESİ GÖRÜNÜR OLUR
            </span>
            <h3 className="font-display font-bold text-base text-white">
              Görsel Hikâye ve Emek Anlatımı
            </h3>
            <p className="text-sm text-slate-300 font-light leading-relaxed">
              Ekiplerden ve ailelerden önceden alınan birkaç fotoğraf ile gün içinde çekilen kareler sahne arkasındaki görsel akışta kullanılır.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-5 rounded-3xl bg-[#0E1528]/80 border border-slate-800 space-y-1.5">
            <span className="text-xs font-mono uppercase tracking-widest text-[#F5B72E] block font-bold">
              03 · ORTAK BAŞARI KUTLANIR
            </span>
            <h3 className="font-display font-bold text-base text-white">
              Ailelerle Birlikte Teşekkür
            </h3>
            <p className="text-sm text-slate-300 font-light leading-relaxed">
              Çalışanların emeğine teşekkür edilir ve aileleri de bu ana tanıklık eder.
            </p>
          </div>

          {/* Photo Memory Idea Highlight Box */}
          <div className="p-5 rounded-3xl bg-gradient-to-br from-[#121A33] to-[#0A0E1A] border border-[#2AC4A4]/40 space-y-2 text-xs font-mono text-slate-300 shadow-xl">
            <p className="text-white font-medium">
              Ailelerden önceden istenen fotoğraflar ve etkinlik günü çekilen kareler, çalışanların emeğini anlatan küçük bir görsel hikâyeye dönüşüyor.
            </p>
            <p className="text-slate-400">
              Böylece yapılan iş yalnızca sahnede takdir edilen bir başarı olarak kalmıyor; ailelerin de hatırlayacağı ortak bir anıya dönüşüyor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
