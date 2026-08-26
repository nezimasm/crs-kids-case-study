import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MapPin,
  Info,
  Sparkles,
  DoorOpen,
  Camera,
  Tv,
  Utensils,
  Coffee,
  Search,
  Cpu,
  Palette,
  QrCode,
  Compass,
} from 'lucide-react';
import { playPopSound } from '../utils/sound';

export const InteractiveVenueMapSection: React.FC = () => {
  const [selectedZoneId, setSelectedZoneId] = useState<string>('ana-sahne');

  const zones = [
    {
      id: 'giris',
      title: 'GİRİŞ / KARŞILAMA',
      category: 'ÖN ALAN / KARŞILAMA',
      x: 18,
      y: 80,
      width: '16%',
      height: '14%',
      color: '#FF5E3A',
      icon: DoorOpen,
      what: 'Kâşif kimlikleri dağıtılır, anlık fotoğraf çekilerek kişisel pasaport üretilir.',
      why: 'Etkinliğe aidiyet hissiyle ve somut bir keşif aracıyla başlanması için giriş kapısında konumlandırıldı.',
      experience: 'Çocuk kendi pasaportunu boynuna takarak ilk heyecanı yaşar.',
    },
    {
      id: 'fotograf-alani',
      title: 'FOTOĞRAF ALANI & BACKDROP',
      category: 'ÖN ALAN / HATIRA',
      x: 40,
      y: 80,
      width: '18%',
      height: '14%',
      color: '#F5B72E',
      icon: Camera,
      what: 'CRS Kids temalı geniş fotoğraf duvarı ve eğlenceli el pankartlarıyla hatıra çekimi yapılır.',
      why: 'Ailelerin etkinlik başlangıcında ve çıkışında birlikte fotoğraf çektirebileceği ferah bir alandır.',
      experience: 'Aileler günün ilk toplu hatırasını oluşturur.',
    },
    {
      id: 'ana-sahne',
      title: 'ANA SAHNE & AMFİ',
      category: 'MERKEZ / BULUŞMA',
      x: 36,
      y: 44,
      width: '28%',
      height: '24%',
      color: '#F5B72E',
      icon: Tv,
      what: 'Açılış konuşması, çalışan mühendislerin sahne takdiri ve gün sonu madalya seremonisi gerçekleşir.',
      why: 'Tüm istasyonların ve dinlenme alanlarının merkezinde, herkesin rahatça görebileceği konumdadır.',
      experience: 'Çalışanlar emeğinin takdir edildiğini hisseder, çocuklar ortak coşkuyu paylaşır.',
    },
    {
      id: 'istasyon-1',
      title: 'İSTASYON 1 — KODU ÇÖZ',
      category: 'AÇIK ALAN / ÇADIR 1',
      x: 12,
      y: 22,
      width: '22%',
      height: '20%',
      color: '#FF5E3A',
      icon: Search,
      what: 'Dev zemin labirentinde yönerge kartlarıyla ekransız mantık ve algoritma oyunları oynanır.',
      why: 'Kodlamanın temeli olan sıralı mantık kurma becerisini bedensel hareketle öğretmek için tasarlandı.',
      experience: 'Çocuk adımlarla labirenti çözer ve pasaportundaki ilk damgayı kazanır.',
    },
    {
      id: 'istasyon-2',
      title: 'İSTASYON 2 — ROBOTU PROGRAMLA',
      category: 'AÇIK ALAN / ÇADIR 2',
      x: 39,
      y: 12,
      width: '22%',
      height: '20%',
      color: '#2AC4A4',
      icon: Cpu,
      what: 'Çocuklar tabletlerden blok kodlama yaparak akıllı robot araçları engelli parkurda yarıştırır.',
      why: 'CRS Kids dijital kodlama arayüzünün doğrudan fiziksel bir robotla etkileşimini göstermek için kuruldu.',
      experience: 'Kodunun fiziksel bir araçta çalıştığını gören çocuk büyük bir başarma hazzı duyar.',
    },
    {
      id: 'istasyon-3',
      title: 'İSTASYON 3 — KENDİ DÜNYANI YARAT',
      category: 'AÇIK ALAN / ÇADIR 3',
      x: 66,
      y: 22,
      width: '22%',
      height: '20%',
      color: '#F5B72E',
      icon: Palette,
      what: 'Karakter çizimi, piksel sanatı ve kendi ses kaydını animasyona ekleme atölyesi yürütülür.',
      why: 'Teknolojinin yalnızca mantık değil aynı zamanda sınırsız bir sanatsal üretim aracı olduğunu hissettirmek için yerleştirildi.',
      experience: 'Çocuk kendi çizdiği karakterin sahnede canlandığını izler.',
    },
    {
      id: 'ikram-alani',
      title: 'İKRAM ALANI',
      category: 'YAN ALAN / GASTRONOMİ',
      x: 75,
      y: 52,
      width: '18%',
      height: '18%',
      color: '#FF5E3A',
      icon: Utensils,
      what: 'Sağlıklı atıştırmalıklar, çocuklara özel organik menü ve temalı içecek bardakları sunulur.',
      why: 'İstasyonlar arası enerji depolamak ve ailelerin ayaküstü sohbet edebilmesi için konumlandırıldı.',
      experience: 'Aileler keyifli bir mola vererek lezzetli ikramları tadar.',
    },
    {
      id: 'dinlenme-alani',
      title: 'DİNLENME & SOSYAL ALAN',
      category: 'YAN ALAN / LOUNGE',
      x: 72,
      y: 76,
      width: '20%',
      height: '16%',
      color: '#2AC4A4',
      icon: Coffee,
      what: 'Gölge alanlar, minderler, kahve barı ve ebeveyn sohbet köşesi bulunur.',
      why: '300-350 kişilik etkinliğin akışında sakin ve konforlu bir nefes alma noktası oluşturmak için tasarlandı.',
      experience: 'Ebeveynler kahvelerini yudumlarken çocuklarını güvenli mesafeden izler.',
    },
  ];

  const selectedZone = zones.find((z) => z.id === selectedZoneId) || zones[2];

  return (
    <section
      id="alan"
      aria-label="Etkinlik Alan Tasarımı"
      className="relative py-28 px-4 sm:px-6 max-w-7xl mx-auto space-y-16"
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-[#2AC4A4]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2AC4A4]/15 border border-[#2AC4A4]/30 text-[#2AC4A4] text-xs font-mono">
          <Compass className="w-3.5 h-3.5" />
          <span>11 · MEKÂNSAL YERLEŞİM PLANI</span>
        </div>

        <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight">
          ŞİMDİ ALANA GİRELİM.
        </h2>

        <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
          “300–350 kişilik aile etkinliği için açık ve kapalı alanları birlikte kullanan bir yerleşim planı.”
        </p>

        {/* Mandatory Helper */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs text-[#2AC4A4] font-mono shadow-md">
          <Info className="w-3.5 h-3.5" />
          <span>Haritadaki alanlara tıklayarak keşfedin.</span>
        </div>
      </div>

      {/* TOP-DOWN REAL EVENT SITE PLAN CONTAINER */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Real Top-Down Architectural Layout Canvas */}
        <div className="lg:col-span-8 bg-[#090E1C] rounded-[44px] border-2 border-slate-800 p-6 sm:p-8 relative min-h-[520px] sm:min-h-[580px] shadow-2xl overflow-hidden select-none flex flex-col justify-between">
          {/* Site boundary & grass subtle texture */}
          <div className="absolute inset-0 bg-[radial-gradient(#1E293B_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

          {/* Outer Boundary Frame */}
          <div className="absolute inset-4 rounded-[36px] border-2 border-dashed border-slate-800/80 pointer-events-none" />

          {/* Pedestrian Stone Walkway Pathways */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            {/* Main Central Path connecting Entrance -> Stage */}
            <line x1="28%" y1="80%" x2="50%" y2="56%" stroke="#1E293B" strokeWidth="16" strokeLinecap="round" />
            <line x1="50%" y1="56%" x2="50%" y2="44%" stroke="#1E293B" strokeWidth="16" strokeLinecap="round" />
            {/* Branches to Tents */}
            <line x1="50%" y1="44%" x2="23%" y2="32%" stroke="#1E293B" strokeWidth="12" strokeLinecap="round" />
            <line x1="50%" y1="44%" x2="50%" y2="22%" stroke="#1E293B" strokeWidth="12" strokeLinecap="round" />
            <line x1="50%" y1="44%" x2="77%" y2="32%" stroke="#1E293B" strokeWidth="12" strokeLinecap="round" />
            {/* Branch to Food & Lounge */}
            <line x1="50%" y1="56%" x2="84%" y2="60%" stroke="#1E293B" strokeWidth="12" strokeLinecap="round" />
            <line x1="84%" y1="60%" x2="82%" y2="84%" stroke="#1E293B" strokeWidth="12" strokeLinecap="round" />
          </svg>

          {/* Compass & Scale Indicator */}
          <div className="absolute top-6 left-6 z-10 p-2.5 rounded-2xl bg-black/60 border border-slate-800 text-[10px] font-mono text-slate-400 space-y-1">
            <div className="flex items-center gap-1.5 text-white font-bold">
              <Compass className="w-3.5 h-3.5 text-[#2AC4A4]" />
              <span>YERLEŞİM PLANI (TOP-DOWN)</span>
            </div>
            <div className="text-[9px] text-slate-500">Ölçek: 1:150 · Açık + Kapalı Alan</div>
          </div>

          {/* Scattered Hidden QR Clue Markers on Map */}
          <div className="absolute top-[38%] left-[18%] z-10 flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#4F75FF]/20 border border-[#4F75FF]/50 text-[9px] font-mono text-[#4F75FF] shadow-sm pointer-events-none">
            <QrCode className="w-3 h-3" />
            <span>QR İpucu</span>
          </div>
          <div className="absolute top-[68%] left-[62%] z-10 flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#4F75FF]/20 border border-[#4F75FF]/50 text-[9px] font-mono text-[#4F75FF] shadow-sm pointer-events-none">
            <QrCode className="w-3 h-3" />
            <span>QR İpucu</span>
          </div>

          {/* Interactive Structural Zones Placement */}
          {zones.map((zone) => {
            const isSelected = zone.id === selectedZoneId;
            const Icon = zone.icon;

            return (
              <motion.button
                key={zone.id}
                id={`zone-map-btn-${zone.id}`}
                onClick={() => {
                  playPopSound();
                  setSelectedZoneId(zone.id);
                }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  left: `${zone.x}%`,
                  top: `${zone.y}%`,
                  width: zone.width,
                  height: zone.height,
                }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 rounded-2xl border-2 p-2 sm:p-3 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 shadow-xl ${
                  isSelected
                    ? 'ring-4 ring-white/30 bg-slate-900 border-white scale-105 z-30'
                    : 'bg-slate-900/90 border-slate-700 hover:border-slate-500'
                }`}
              >
                <div
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center text-slate-950 font-bold mb-1 shadow-md shrink-0"
                  style={{ backgroundColor: zone.color }}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <span
                  className="font-display font-black text-[9px] sm:text-[11px] leading-tight line-clamp-2"
                  style={{ color: isSelected ? '#FFFFFF' : '#E2E8F0' }}
                >
                  {zone.title}
                </span>
                {isSelected && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2AC4A4] mt-1 animate-pulse" />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* RIGHT: Detailed Zone Inspection Panel with 3 Precise Questions */}
        <div className="lg:col-span-4 bg-[#0E1528]/90 rounded-[40px] border border-slate-800 p-7 sm:p-8 space-y-6 shadow-2xl">
          {/* Panel Header */}
          <div className="flex items-center gap-3.5 border-b border-slate-800 pb-5">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center text-slate-950 shadow-lg shrink-0"
              style={{ backgroundColor: selectedZone.color }}
            >
              {React.createElement(selectedZone.icon, { className: 'w-6 h-6' })}
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block">
                {selectedZone.category}
              </span>
              <h3 className="font-display font-black text-xl text-white">
                {selectedZone.title}
              </h3>
            </div>
          </div>

          {/* 3 Explicit Answers */}
          <div className="space-y-4">
            {/* Question 1: BURADA NE OLUYOR? */}
            <div className="p-4 rounded-2xl bg-black/40 border border-slate-800 space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#FF5E3A] font-bold block">
                BURADA NE OLUYOR?
              </span>
              <p className="text-xs sm:text-sm text-slate-200 font-light leading-relaxed">
                {selectedZone.what}
              </p>
            </div>

            {/* Question 2: NEDEN BURADA? */}
            <div className="p-4 rounded-2xl bg-black/40 border border-slate-800 space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#F5B72E] font-bold block">
                NEDEN BURADA?
              </span>
              <p className="text-xs sm:text-sm text-slate-200 font-light leading-relaxed">
                {selectedZone.why}
              </p>
            </div>

            {/* Question 3: KATILIMCI NE YAŞIYOR? */}
            <div className="p-4 rounded-2xl bg-black/40 border border-slate-800 space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#2AC4A4] font-bold block">
                KATILIMCI NE YAŞIYOR?
              </span>
              <p className="text-xs sm:text-sm text-slate-200 font-light leading-relaxed">
                {selectedZone.experience}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
