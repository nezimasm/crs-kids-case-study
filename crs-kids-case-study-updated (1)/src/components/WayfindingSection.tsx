import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Signpost, Compass, MapPin, ArrowRight, Sparkles, Check } from 'lucide-react';
import { playPopSound } from '../utils/sound';

export const WayfindingSection: React.FC = () => {
  const [activeSignIndex, setActiveSignIndex] = useState<number>(0);

  const wayfindingElements = [
    {
      id: 'entrance-totem',
      title: 'Karşılama & Giriş Totemi',
      height: 'H: 220 cm',
      location: 'Ana Giriş Kapısı & Otopark Yolu',
      color: '#FF5E3A',
      copyText: 'HOŞ GELDİNİZ KÂŞİFLER! 🚀 CRS KIDS DÜNYASI',
      purpose: 'Alana gelen aileleri yüksek görünürlükle karşılar, ilk andan itibaren neşeli ve teknolojik atmosferi hissettirir.',
      specs: 'Alüminyum kompozit, çift taraflı mat UV baskı, zemin sabitleme ayakları.',
    },
    {
      id: 'directional-arrows',
      title: 'Çift Kademeli İstasyon Yön Okları',
      height: 'H: 170cm (Yetişkin) & 110cm (Çocuk)',
      location: 'Ana Yürüme Yolları Kesişimi',
      color: '#2AC4A4',
      copyText: '→ ÇADIR 01 KODU ÇÖZ | ↑ AMFİ & SAHNE | ← AİLE BAHÇESİ',
      purpose: 'Hem yetişkinlerin hem de çocukların göz hizasına uygun çift katmanlı yönlendirme levhası.',
      specs: 'Ahşap ayaklı modüler yön okları, renk kodlu reflektif ikonlar.',
    },
    {
      id: 'station-flag-signs',
      title: 'Çadır Bayrakları & İstasyon Kimliği',
      height: 'H: 300 cm Flama',
      location: '3 Kodlama Çadırı Üzeri',
      color: '#F5B72E',
      copyText: '02 ROBOTU PROGRAMLA · 20 DK · 6-12 YAŞ',
      purpose: 'Uzaktan bakıldığında hangi çadırın nerede olduğunu renk ve numara ile anında ayırt ettirir.',
      specs: 'Rüzgâr geçiren su itici kumaş flama, içten aydınlatmalı LED tepe küresi.',
    },
    {
      id: 'stamp-totem',
      title: 'Damga Noktası Kiosk Totemi',
      height: 'H: 100 cm (Çocuk Boyu)',
      location: 'Her İstasyon Çıkış Kapısı',
      color: '#4F75FF',
      copyText: 'PASAPORTUNU BURAYA BAS! 🌟 MÜHÜR MASASI',
      purpose: 'Çocuğun kendi boyunda bağımsız olarak pasaportunu mühürlemesi için tasarlanan ergonomik ahşap masa.',
      specs: 'Yuvarlatılmış masif ahşap tabla, toksik olmayan gömme ıstampa yuvası.',
    },
    {
      id: 'secret-clue-poster',
      title: 'Gizli Görev UV İpucu Panosu',
      height: 'H: 150 cm',
      location: 'Ar-Ge Köşesi Duvarı',
      color: '#A855F7',
      copyText: 'ORTAK ŞİFRE BURADA SAKLI · UV IŞIĞI YÖNLENDİR',
      purpose: 'Sadece fener tutulduğunda parlayan floresan baskısıyla ailece çözülen interaktif gizem noktası.',
      specs: 'Görünmez UV floresan serigrafi baskı, interaktif butonlu mini projektör.',
    },
  ];

  const currentSign = wayfindingElements[activeSignIndex];

  return (
    <section
      id="yonlendirme"
      aria-label="Çevresel Grafik ve Yönlendirme Tasarımı"
      className="relative py-24 px-4 sm:px-6 max-w-7xl mx-auto"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-10 w-80 h-80 bg-[#4F75FF]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#4F75FF]/15 border border-[#4F75FF]/30 text-[#4F75FF] text-xs font-mono mb-4">
          <Signpost className="w-3.5 h-3.5" />
          <span>14 · ÇEVRESEL GRAFİK & WAYFINDING</span>
        </div>
        <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight">
          YÖNLENDİRME SİSTEMİ
        </h2>
        <p className="mt-4 text-slate-300 text-base sm:text-lg font-light">
          Grafik kimlik sadece ekranlarda değil; çocuğun adım attığı her metrekarede fiziksel olarak hayat bulur.
        </p>
      </div>

      {/* Interactive Wayfinding Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left List of Signs */}
        <div className="lg:col-span-5 space-y-3">
          {wayfindingElements.map((item, idx) => {
            const isActive = idx === activeSignIndex;
            return (
              <div
                key={item.id}
                id={`wayfinding-item-${item.id}`}
                onClick={() => {
                  playPopSound();
                  setActiveSignIndex(idx);
                }}
                className={`cursor-pointer p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between ${
                  isActive
                    ? 'bg-[#161F4D] border-white/40 shadow-xl scale-102 ring-1 ring-[#2AC4A4]'
                    : 'bg-[#111827]/70 hover:bg-[#111827] border-slate-800 text-slate-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-3 h-3 rounded-full shrink-0"
                    style={{ backgroundColor: item.color }}
                  />
                  <div>
                    <h3 className="font-display font-bold text-sm text-white">
                      {item.title}
                    </h3>
                    <span className="text-[11px] font-mono text-slate-400">
                      {item.location}
                    </span>
                  </div>
                </div>

                <span className="text-[10px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                  {item.height}
                </span>
              </div>
            );
          })}
        </div>

        {/* Right Physical Environmental Display Mockup Card */}
        <div className="lg:col-span-7">
          <motion.div
            key={currentSign.id}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#121A30] to-[#0A0F1D] border-2 border-slate-700/80 shadow-2xl space-y-6"
          >
            {/* Visual Totem Simulator Plate */}
            <div className="p-6 rounded-2xl bg-[#090D18] border border-slate-800 flex flex-col items-center justify-center text-center relative overflow-hidden shadow-inner min-h-[180px]">
              <div
                className="absolute top-0 inset-x-0 h-2"
                style={{ backgroundColor: currentSign.color }}
              />

              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-2">
                FİZİKSEL ÜRETİM METNİ & GRAFİK DÜZENİ
              </span>

              <div
                className="font-display font-black text-xl sm:text-2xl text-white tracking-wide max-w-md my-2"
                style={{ color: currentSign.color }}
              >
                {currentSign.copyText}
              </div>

              <div className="flex items-center gap-3 text-[11px] font-mono text-slate-400 mt-2">
                <span>Konum: {currentSign.location}</span>
                <span>•</span>
                <span>Ölçü: {currentSign.height}</span>
              </div>
            </div>

            {/* Purpose and Technical Specifications */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                <span className="text-[10px] font-mono text-[#FF5E3A] uppercase font-bold block mb-1">
                  Kullanıcı Deneyimi Amacı:
                </span>
                <p className="text-slate-200 font-light leading-relaxed">
                  {currentSign.purpose}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                <span className="text-[10px] font-mono text-[#2AC4A4] uppercase font-bold block mb-1">
                  Üretim & Malzeme Detayı:
                </span>
                <p className="text-slate-200 font-light leading-relaxed">
                  {currentSign.specs}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
