import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { QrCode, Sparkles, CheckCircle2, Gift, Trophy, ArrowRight, Award, Package, RotateCcw } from 'lucide-react';
import { playPopSound, playSuccessChime } from '../utils/sound';

interface QrFinalExperienceSectionProps {
  completedCount?: number;
}

export const QrFinalExperienceSection: React.FC<QrFinalExperienceSectionProps> = ({
  completedCount = 4,
}) => {
  const isUnlocked = completedCount >= 4;
  const [isQrModalOpen, setIsQrModalOpen] = useState<boolean>(false);
  const [isRewardRevealed, setIsRewardRevealed] = useState<boolean>(false);

  const handleOpenQrModal = () => {
    playPopSound();
    setIsQrModalOpen(true);
  };

  const handleOpenReward = () => {
    playPopSound();
    playSuccessChime();
    setIsRewardRevealed(true);

    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#FF5E3A', '#F5B72E', '#2AC4A4', '#4F75FF', '#EC4899'],
      });
    } catch {}
  };

  const handleCloseModal = () => {
    playPopSound();
    setIsQrModalOpen(false);
    setIsRewardRevealed(false);
  };

  return (
    <section
      id="qr-deneyim"
      aria-label="QR ve Final Dijital An"
      className="relative py-24 px-4 sm:px-6 max-w-7xl mx-auto"
    >
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-[#2AC4A4]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left: Explanation & Instructions */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2AC4A4]/15 border border-[#2AC4A4]/30 text-[#2AC4A4] text-xs font-mono">
            <QrCode className="w-3.5 h-3.5" />
            <span>11 · FİNAL / QR KOD KİLİDİ</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
            GÖREV TAMAMLANDI
          </h2>

          <p className="text-xl text-[#2AC4A4] font-medium leading-relaxed">
            Dört görevi tamamladın. Şimdi finali açabilirsin.
          </p>

          {/* Interactive Helper Text */}
          <div className="inline-flex items-center gap-2 p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 text-xs text-[#F5B72E] font-mono shadow-md">
            <Sparkles className="w-4 h-4 text-[#F5B72E] shrink-0" />
            <span>Dört görevi tamamladığında QR aktifleşir ve final kutlaması açılır.</span>
          </div>
        </div>

        {/* Right: Interactive Passport QR Box */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="w-full max-w-md bg-[#0D1426] rounded-[36px] p-8 border-2 border-slate-700/80 shadow-2xl relative overflow-hidden text-center select-none space-y-6">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-b border-slate-800 pb-3">
              <span className={isUnlocked ? 'text-[#2AC4A4] font-bold' : 'text-slate-500'}>
                {completedCount} / 4 GÖREV TAMAMLANDI
              </span>
              <span className={isUnlocked ? 'text-[#F5B72E]' : 'text-slate-600'}>
                {isUnlocked ? 'KİLİT AÇILDI ✨' : 'KİLİTLİ 🔒'}
              </span>
            </div>

            {/* Big Glowing Clickable QR */}
            <div
              onClick={isUnlocked ? handleOpenQrModal : undefined}
              className={`w-48 h-48 mx-auto p-4 rounded-3xl transition-transform flex flex-col items-center justify-center border-4 ${
                isUnlocked
                  ? 'bg-white cursor-pointer hover:scale-105 shadow-[0_0_40px_rgba(42,196,164,0.35)] border-[#2AC4A4]'
                  : 'bg-slate-900 border-slate-700 opacity-60 cursor-not-allowed'
              }`}
            >
              {isUnlocked ? (
                <div className="grid grid-cols-5 gap-1.5 w-full h-full p-1">
                  {Array.from({ length: 25 }).map((_, i) => (
                    <div
                      key={i}
                      className={`rounded-xs ${
                        i % 2 === 0 || i === 0 || i === 4 || i === 20 || i === 24 || i === 12
                          ? 'bg-slate-950'
                          : 'bg-transparent'
                      }`}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-slate-500 flex flex-col items-center gap-2">
                  <QrCode className="w-12 h-12" />
                  <span className="text-[10px] font-mono">4 Damga Bekleniyor</span>
                </div>
              )}
            </div>

            <button
              id="open-qr-modal-btn"
              onClick={handleOpenQrModal}
              disabled={!isUnlocked}
              className={`w-full py-4 px-6 rounded-2xl font-display font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                isUnlocked
                  ? 'bg-gradient-to-r from-[#2AC4A4] via-[#F5B72E] to-[#FF5E3A] text-slate-950 shadow-xl hover:scale-102 active:scale-98 cursor-pointer'
                  : 'bg-slate-800 text-slate-500 cursor-not-allowed'
              }`}
            >
              <QrCode className="w-4 h-4" />
              <span>QR'I AÇ →</span>
            </button>
          </div>
        </div>
      </div>

      {/* FINAL DIGITAL CELEBRATION MODAL */}
      <AnimatePresence>
        {isQrModalOpen && (
          <div className="fixed inset-0 z-50 bg-[#070A14]/95 backdrop-blur-2xl flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-[#0E1528] border-2 border-slate-700 rounded-[36px] p-8 sm:p-10 shadow-[0_30px_90px_rgba(0,0,0,0.9)] text-center space-y-6 overflow-hidden"
            >
              {/* Top Close Button */}
              <button
                id="close-qr-modal-btn"
                onClick={handleCloseModal}
                className="absolute top-6 right-6 p-2.5 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors"
              >
                ✕
              </button>

              {!isRewardRevealed ? (
                <div className="space-y-6">
                  <div className="w-20 h-20 rounded-full bg-[#F5B72E]/20 border-2 border-[#F5B72E] text-[#F5B72E] flex items-center justify-center mx-auto shadow-xl shadow-[#F5B72E]/30 animate-pulse">
                    <Trophy className="w-10 h-10" />
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#2AC4A4] block">
                      TEBRİKLER KÂŞİF!
                    </span>
                    <h3 className="font-display font-black text-3xl text-white">
                      GÖREV TAMAMLANDI!
                    </h3>
                    <p className="text-base text-slate-300 font-light">
                      Bugün CRS Kids'i birlikte keşfettiniz.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-black/40 border border-white/10 text-xs text-slate-300">
                    Tüm istasyonları tamamladınız ve gizli aile görevini başarıyla çözdünüz.
                  </div>

                  <button
                    id="reveal-reward-btn"
                    onClick={handleOpenReward}
                    className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#FF5E3A] via-[#F5B72E] to-[#2AC4A4] text-slate-950 font-display font-black text-sm uppercase tracking-wider shadow-2xl hover:scale-102 active:scale-98 transition-all flex items-center justify-center gap-2"
                  >
                    <Gift className="w-5 h-5" />
                    <span>ÖDÜLÜ AÇ ✨</span>
                  </button>
                </div>
              ) : (
                /* Explorer Kit Revealed */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-6"
                >
                  <div className="w-20 h-20 rounded-full bg-[#2AC4A4]/20 border-2 border-[#2AC4A4] text-[#2AC4A4] flex items-center justify-center mx-auto shadow-xl shadow-[#2AC4A4]/30 animate-bounce">
                    <Package className="w-10 h-10" />
                  </div>

                  <div className="space-y-1">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#2AC4A4] block">
                      FİZİKSEL HEDİYE KİTİ
                    </span>
                    <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
                      CRS Kids Explorer Kit
                    </h3>
                  </div>

                  <div className="p-5 rounded-3xl bg-slate-900 border border-slate-800 text-left space-y-3 text-xs text-slate-300">
                    <div className="flex items-center gap-2 text-white font-bold text-sm">
                      <Award className="w-5 h-5 text-[#F5B72E]" />
                      <span>Kâşif Madalyası & Eğitici Set</span>
                    </div>
                    <ul className="space-y-1.5 text-slate-400 font-light">
                      <li>✦ Ahşap parçalı montajlanabilir CRS Robot Maketi</li>
                      <li>✦ 10 Parçalık ekran-sız (unplugged) kodlama kartları</li>
                      <li>✦ Resmi CRS Kids Kâşif Rozeti ve Başarı Sertifikası</li>
                    </ul>
                  </div>

                  <button
                    id="return-from-reward-btn"
                    onClick={handleCloseModal}
                    className="w-full py-3.5 px-6 rounded-2xl bg-white text-slate-950 font-display font-black text-xs uppercase tracking-wider hover:bg-slate-200 transition-colors"
                  >
                    VAKA ÇALIŞMASINA DÖN ↓
                  </button>
                </motion.div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
