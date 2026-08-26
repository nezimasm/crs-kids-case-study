import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HeartHandshake, QrCode, Sparkles, CheckCircle2, Search, MapPin, Check } from 'lucide-react';
import { playStampSound, playSuccessChime } from '../utils/sound';
import confetti from 'canvas-confetti';

interface AilenleBirlikteProps {
  stampedList?: string[];
  onToggleStamp?: (stampId: string) => void;
}

export const SecretFamilyMissionSection: React.FC<AilenleBirlikteProps> = ({
  stampedList = [],
  onToggleStamp,
}) => {
  const isMissionDone = stampedList.includes('birlikte');
  const [scannedLocally, setScannedLocally] = useState<boolean>(false);

  const handleScanClue = () => {
    playStampSound();
    setScannedLocally(true);
    if (onToggleStamp) {
      if (!isMissionDone) {
        onToggleStamp('birlikte');
      }
    }
    playSuccessChime();
    try {
      confetti({
        particleCount: 70,
        spread: 65,
        origin: { y: 0.6 },
        colors: ['#4F75FF', '#2AC4A4', '#F5B72E'],
      });
    } catch {}
  };

  return (
    <section
      id="gizli-gorev"
      aria-label="Ailenle Birlikte"
      className="relative py-28 px-4 sm:px-6 max-w-7xl mx-auto"
    >
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#4F75FF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-gradient-to-b from-[#0E1736] via-[#0A1028] to-[#070B1A] p-8 sm:p-12 rounded-[44px] border-2 border-[#4F75FF]/40 shadow-2xl">
        {/* LEFT: Narrative & Clue */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#4F75FF]/20 border border-[#4F75FF]/40 text-[#4F75FF] text-xs font-mono">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>10 · 4. GÖREV: AİLENLE BİRLİKTE</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            AİLENLE BİRLİKTE
          </h2>

          <p className="text-xl text-[#F5B72E] font-medium">
            Son görev aileyle birlikte tamamlanıyor.
          </p>

          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            Çocuk, etkinlik alanında verilen küçük bir ipucunu takip ederek saklanan QR işaretini ailesinden bir yetişkinle birlikte buluyor. QR okutulduğunda son damga tamamlanıyor ve final açılıyor.
          </p>

          {/* Child Clue Card */}
          <div className="p-6 rounded-3xl bg-black/50 border border-slate-700/80 space-y-3 shadow-xl">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
              KÂŞİF İPUCU MESAJI
            </span>
            <div className="font-display font-bold text-lg sm:text-xl text-white border-l-4 border-[#4F75FF] pl-4 py-1">
              Birlikte etrafa bak. Bir sonraki adım çok uzakta değil.
            </div>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              Çocuk ve ailesi mekândaki ipucunu takip ederek saklanan QR işaretini birlikte buluyor ve taratıyor.
            </p>
          </div>

          <p className="text-xs sm:text-sm text-slate-400 font-light">
            Bu QR taraması ile pasaporttaki 4. damga (<strong className="text-[#4F75FF]">04 BİRLİKTE</strong>) tamamlanır ve nihai kutlama ödül seremonisine geçilir.
          </p>
        </div>

        {/* RIGHT: Interactive Hidden QR Marker Finder */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className={`w-full max-w-sm p-8 rounded-3xl border-2 transition-all text-center space-y-6 ${
              isMissionDone || scannedLocally
                ? 'bg-[#4F75FF]/15 border-[#4F75FF] shadow-[0_0_35px_rgba(79,117,255,0.4)]'
                : 'bg-slate-900/90 border-slate-700 hover:border-slate-500'
            }`}
          >
            {/* Clue Marker Icon */}
            <div className="relative mx-auto w-24 h-24 rounded-3xl bg-black/60 border border-white/20 flex items-center justify-center shadow-inner">
              <QrCode
                className={`w-12 h-12 transition-colors ${
                  isMissionDone || scannedLocally ? 'text-[#4F75FF]' : 'text-slate-500'
                }`}
              />
              <span className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full bg-[#4F75FF] text-[9px] font-mono font-bold text-white">
                QR #04
              </span>
            </div>

            <div className="space-y-1">
              <h3 className="font-display font-bold text-lg text-white">
                {isMissionDone || scannedLocally
                  ? '✓ 4. DAMGA KAZANILDI'
                  : 'MEKÂNDAKİ GİZLİ QR ETİKETİ'}
              </h3>
              <p className="text-xs text-slate-300 font-light">
                {isMissionDone || scannedLocally
                  ? 'Pasaporttaki BİRLİKTE görevi damgalandı.'
                  : 'QR etiketini bulun ve taratmak için tıklayın.'}
              </p>
            </div>

            <button
              type="button"
              id="find-family-clue-btn"
              onClick={handleScanClue}
              className={`w-full py-3.5 px-5 rounded-2xl font-display font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg ${
                isMissionDone || scannedLocally
                  ? 'bg-[#4F75FF] text-white'
                  : 'bg-gradient-to-r from-[#4F75FF] to-[#2AC4A4] text-slate-950 hover:scale-102 shadow-[#4F75FF]/20'
              }`}
            >
              {isMissionDone || scannedLocally ? (
                <>
                  <Check className="w-4 h-4 stroke-[3]" />
                  <span>DAMGA PASAPORTTA AKTİF</span>
                </>
              ) : (
                <>
                  <Search className="w-4 h-4" />
                  <span>QR'I TARA & DAMGAYI KAZAN</span>
                </>
              )}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
