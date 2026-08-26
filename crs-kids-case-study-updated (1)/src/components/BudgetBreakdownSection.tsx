import React from 'react';
import { motion } from 'motion/react';
import { Wallet, Users, PieChart, ShieldCheck } from 'lucide-react';

export const BudgetBreakdownSection: React.FC = () => {
  const budgetItems = [
    { name: 'Mekân Kiralama & Tesis', share: '%24', color: '#FF5E3A' },
    { name: 'Catering & İkramlar', share: '%22', color: '#F5B72E' },
    { name: 'Prodüksiyon & Sahne', share: '%18', color: '#2AC4A4' },
    { name: 'Kodlama & Aktivite Ekipmanları', share: '%14', color: '#4F75FF' },
    { name: 'Baskı & Pasaport / Dekorasyon', share: '%8', color: '#A855F7' },
    { name: 'Take-Home Kâşif Kitleri', share: '%7', color: '#EC4899' },
    { name: 'Fotoğraf & Video Belgesel', share: '%4', color: '#14B8A6' },
    { name: 'Güvenlik, İlk Yardım & Beklenmeyen', share: '%3', color: '#64748B' },
  ];

  return (
    <section
      id="butce"
      aria-label="Bütçe Dağılımı"
      className="relative py-24 px-4 sm:px-6 max-w-7xl mx-auto"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#F5B72E]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5B72E]/15 border border-[#F5B72E]/30 text-[#F5B72E] text-xs font-mono mb-4">
          <Wallet className="w-3.5 h-3.5" />
          <span>15 · FİNANSAL PLANLAMA</span>
        </div>
        <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight">
          BÜTÇE DAĞILIMI
        </h2>
        <p className="mt-4 text-slate-300 text-base sm:text-lg font-light">
          300–350 kişilik katılımcı hacmi için optimize edilmiş maliyet modeli.
        </p>
      </div>

      {/* Top 2 Key Highlights: Total Estimate & Per-Person Cost */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
        <div className="p-6 rounded-3xl bg-gradient-to-b from-[#161F4D] to-[#0E1528] border border-slate-700 text-center shadow-xl">
          <span className="text-xs font-mono uppercase text-slate-400 block mb-1">
            TOPLAM TAHMİNİ BÜTÇE
          </span>
          <div className="font-display font-black text-3xl sm:text-4xl text-[#F5B72E]">
            ₺750.000 – ₺850.000
          </div>
          <p className="text-xs text-slate-400 font-light mt-1">
            Tüm prodüksiyon, yeme-içme ve kitler dahil
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-gradient-to-b from-[#161F4D] to-[#0E1528] border border-slate-700 text-center shadow-xl">
          <span className="text-xs font-mono uppercase text-slate-400 block mb-1">
            KİŞİ BAŞI TAHMİN
          </span>
          <div className="font-display font-black text-3xl sm:text-4xl text-[#2AC4A4]">
            ~₺2.400 / Katılımcı
          </div>
          <p className="text-xs text-slate-400 font-light mt-1">
            Tam gün deneyim, yemek ve hediyeler
          </p>
        </div>
      </div>

      {/* Clean Budget Categories List */}
      <div className="max-w-3xl mx-auto bg-[#0F1526] rounded-3xl border border-slate-800 p-6 sm:p-8 shadow-xl space-y-4">
        {budgetItems.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between p-3 rounded-2xl bg-slate-900/60 border border-slate-800/80 text-sm"
          >
            <div className="flex items-center gap-3">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-slate-200 font-medium">{item.name}</span>
            </div>
            <span
              className="font-mono font-bold text-sm"
              style={{ color: item.color }}
            >
              {item.share}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
