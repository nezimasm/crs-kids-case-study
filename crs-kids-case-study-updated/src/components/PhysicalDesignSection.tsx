import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { playPopSound } from '../utils/sound';
import {
  Palette,
  Camera,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Upload,
  X,
  CheckCircle2,
  Package,
  Layers,
  FileCode,
  BookOpen,
  Award,
} from 'lucide-react';

interface ImageSlotProps {
  id: string;
  label?: string;
  sublabel?: string;
  aspectClass?: string;
  circular?: boolean;
  fitMode?: 'cover' | 'contain';
  helperText?: string;
  defaultImageUrl?: string;
}

const ReplaceableImagePlaceholder: React.FC<ImageSlotProps> = ({
  id,
  label = 'GÖRSEL EKLE',
  sublabel,
  aspectClass = 'aspect-video',
  circular = false,
  fitMode = 'contain',
  helperText,
  defaultImageUrl,
}) => {
  const [imageUrl, setImageUrl] = useState<string | null>(defaultImageUrl ?? null);
  const isLocked = Boolean(defaultImageUrl);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isLocked) return;
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImageUrl(url);
      playPopSound();
    }
  };

  const handleClearImage = (e: React.MouseEvent) => {
    if (isLocked) return;
    e.stopPropagation();
    setImageUrl(null);
    playPopSound();
  };

  if (circular) {
    return (
      <div className="relative group flex flex-col items-center">
        <label
          htmlFor={isLocked ? undefined : `upload-${id}`}
          className={`relative w-40 h-40 sm:w-52 sm:h-52 rounded-full border-2 transition-all duration-300 flex flex-col items-center justify-center overflow-hidden shadow-2xl ${
            isLocked ? 'cursor-default' : 'cursor-pointer'
          } ${
            imageUrl
              ? 'border-slate-600 bg-black'
              : 'border-dashed border-slate-700/90 bg-gradient-to-b from-[#11182A] to-[#0A0E1A] hover:border-[#F5B72E]/80 hover:bg-[#151D33]'
          }`}
        >
          {!isLocked && (
            <input
              id={`upload-${id}`}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
          )}

          {imageUrl ? (
            <>
              <img
                src={imageUrl}
                alt={label}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              {!isLocked && (
                <button
                  type="button"
                  onClick={handleClearImage}
                  className="absolute top-3 right-3 p-1.5 rounded-full bg-black/80 hover:bg-red-600 text-white transition-colors z-20"
                  title="Görseli Kaldır"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </>
          ) : (
            <div className="text-center p-4 space-y-2 pointer-events-none">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto text-slate-400 group-hover:text-[#F5B72E] group-hover:scale-110 transition-transform">
                <Upload className="w-5 h-5" />
              </div>
              <span className="font-display font-bold text-xs sm:text-sm text-slate-200 tracking-wider block">
                {label}
              </span>
              {sublabel && (
                <span className="text-[10px] font-mono text-slate-400 block">
                  {sublabel}
                </span>
              )}
            </div>
          )}
        </label>
        {helperText && (
          <span className="text-[11px] font-mono text-slate-400 mt-3 text-center">
            {helperText}
          </span>
        )}
      </div>
    );
  }

  return (
    <div className="relative group w-full">
      <label
        htmlFor={isLocked ? undefined : `upload-${id}`}
        className={`relative w-full ${aspectClass} rounded-[32px] border-2 transition-all duration-300 flex flex-col items-center justify-center overflow-hidden shadow-2xl ${
          isLocked ? 'cursor-default' : 'cursor-pointer'
        } ${
          imageUrl
            ? 'border-slate-600 bg-black'
            : 'border-dashed border-slate-700/90 bg-gradient-to-br from-[#10172A] via-[#0D1322] to-[#070A12] hover:border-[#2AC4A4]/80 hover:bg-[#121A30]'
        }`}
      >
        {!isLocked && (
          <input
            id={`upload-${id}`}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
        )}

        {imageUrl ? (
          <>
            <img
              src={imageUrl}
              alt={label}
              className={`w-full h-full ${
                fitMode === 'cover' ? 'object-cover' : 'object-contain'
              } ${isLocked ? '' : 'p-2'}`}
              referrerPolicy="no-referrer"
            />
            {!isLocked && (
              <button
                type="button"
                onClick={handleClearImage}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/80 hover:bg-red-600 text-white transition-colors z-20"
                title="Görseli Kaldır"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </>
        ) : (
          <div className="text-center p-6 space-y-3 pointer-events-none">
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto text-slate-400 group-hover:text-[#2AC4A4] group-hover:scale-110 transition-transform">
              <Upload className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <span className="font-display font-bold text-sm sm:text-base text-slate-200 tracking-wider block">
                {label}
              </span>
              {sublabel && (
                <span className="text-xs font-mono text-slate-400 block">
                  {sublabel}
                </span>
              )}
            </div>
            <span className="inline-block text-[10px] font-mono text-[#2AC4A4] bg-[#2AC4A4]/10 border border-[#2AC4A4]/20 px-3 py-1 rounded-full">
              Tıkla veya Sürükle Bırak
            </span>
          </div>
        )}
      </label>
    </div>
  );
};

export const PhysicalDesignSection: React.FC = () => {
  // Hand Banners Carousel State (3 circular paddle items)
  const [activeCircleIndex, setActiveCircleIndex] = useState<number>(0);

  const circularBanners = [
    {
      id: 'banner_circle_1',
      title: 'ALTERNATİF 01',
      color: '#FF5E3A',
      imageUrl: '/images/el-pankart-1.png',
    },
    {
      id: 'banner_circle_2',
      title: 'ALTERNATİF 02',
      color: '#2AC4A4',
      imageUrl: '/images/el-pankart-2.png',
    },
    {
      id: 'banner_circle_3',
      title: 'ALTERNATİF 03',
      color: '#F5B72E',
      imageUrl: '/images/el-pankart-3.png',
    },
  ];

  const handlePrevCircle = () => {
    playPopSound();
    setActiveCircleIndex((prev) =>
      prev > 0 ? prev - 1 : circularBanners.length - 1
    );
  };

  const handleNextCircle = () => {
    playPopSound();
    setActiveCircleIndex((prev) =>
      prev < circularBanners.length - 1 ? prev + 1 : 0
    );
  };

  return (
    <section
      id="tasarim"
      aria-label="Fiziksel Tasarımlar"
      className="relative py-28 px-4 sm:px-6 max-w-7xl mx-auto space-y-28"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#FF5E3A]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-2/3 left-0 w-[500px] h-[500px] bg-[#2AC4A4]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EC4899]/15 border border-[#EC4899]/30 text-[#EC4899] text-xs font-mono">
          <Palette className="w-3.5 h-3.5" />
          <span>14 · GRAFİK & FİZİKSEL TASARIM</span>
        </div>

        <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
          FİZİKSEL TASARIMLAR
        </h2>

        <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
          CRS Kids görsel kimliğinin fiziksel temas noktalarına aktarıldığı editoryal portfolyo seçkisi.
        </p>
      </div>

      {/* ========================================================================= */}
      {/* 01 — BACKDROP / FOTOĞRAF ALANI (16:9 Image Placeholder) */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* LEFT: Large 16:9 Replaceable Visual Placeholder */}
        <div className="lg:col-span-7">
          <ReplaceableImagePlaceholder
            id="backdrop_photo_area"
            label="GÖRSEL EKLE"
            sublabel="16:9 Backdrop / Fotoğraf Alanı Tasarımı"
            aspectClass="aspect-video"
            fitMode="cover"
            defaultImageUrl="/images/fotograf-alani-backdrop.png"
          />
        </div>

        {/* RIGHT: Short Explanation */}
        <div className="lg:col-span-5 space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/90 border border-slate-700 text-[#FF5E3A] text-xs font-mono">
            <span>01 · SAHNE & PRODÜKSİYON</span>
          </div>

          <h3 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight leading-tight">
            FOTOĞRAF ALANI
          </h3>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Girişte çekilen çocuk fotoğrafını CRS Kids evreninin içine taşıyan bir fotoğraf alanı tasarladım. Bu alan, etkinliğin ilk temasını daha kişisel hale getirirken aynı görsel dili fiziksel alana da taşıyor.
          </p>

          <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-slate-400">
            <span className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800">
              ✓ 16:9 Sahne Formatı
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800">
              ✓ Kişiselleştirilmiş Hatıra
            </span>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 02 — EL PANKARTLARI (3 Circular Replaceable Image Placeholders + Swipeable) */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* LEFT: 3 Circular 1:1 Image Placeholders (Desktop Grid, Mobile Carousel) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="p-8 rounded-[36px] bg-gradient-to-br from-[#0F1629] to-[#080C16] border-2 border-slate-700/80 shadow-2xl relative overflow-hidden">
            {/* Desktop View: All 3 Circular Placeholders side by side */}
            <div className="hidden sm:grid sm:grid-cols-3 gap-6 items-center justify-items-center">
              {circularBanners.map((banner) => (
                <div key={banner.id} className="relative flex flex-col items-center">
                  <ReplaceableImagePlaceholder
                    id={banner.id}
                    label="GÖRSEL EKLE"
                    sublabel={banner.title}
                    circular={true}
                    fitMode="cover"
                    defaultImageUrl={banner.imageUrl}
                  />
                  <div className="mt-4 text-center">
                    <span
                      className="text-xs font-mono font-bold tracking-wider block"
                      style={{ color: banner.color }}
                    >
                      {banner.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile View: Swipeable Carousel Single Circular Placeholder */}
            <div className="sm:hidden flex flex-col items-center space-y-4">
              <div className="flex items-center justify-between w-full px-2">
                <button
                  type="button"
                  onClick={handlePrevCircle}
                  className="p-2 rounded-full bg-slate-800 text-white hover:bg-slate-700 cursor-pointer"
                  title="Önceki Pankart"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono text-slate-400 font-bold">
                  {circularBanners[activeCircleIndex].title} (0{activeCircleIndex + 1} / 03)
                </span>
                <button
                  type="button"
                  onClick={handleNextCircle}
                  className="p-2 rounded-full bg-slate-800 text-white hover:bg-slate-700 cursor-pointer"
                  title="Sonraki Pankart"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <ReplaceableImagePlaceholder
                key={circularBanners[activeCircleIndex].id}
                id={circularBanners[activeCircleIndex].id}
                label="GÖRSEL EKLE"
                sublabel={circularBanners[activeCircleIndex].title}
                circular={true}
                fitMode="cover"
                defaultImageUrl={circularBanners[activeCircleIndex].imageUrl}
              />

              <div className="text-center">
                <span
                  className="text-xs font-mono font-bold tracking-wider block"
                  style={{ color: circularBanners[activeCircleIndex].color }}
                >
                  {circularBanners[activeCircleIndex].title}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Short Explanation */}
        <div className="lg:col-span-5 space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/90 border border-slate-700 text-[#F5B72E] text-xs font-mono">
            <span>02 · DESTEK MATERYALİ</span>
          </div>

          <h3 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight leading-tight">
            EL PANKARTLARI
          </h3>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Etkinlik boyunca çocukların ve ailelerin fotoğraf alanında elinde tutabileceği küçük destek materyalleri kurguladım. Aynı görsel dili daha oyunlu ve paylaşılabilir bir fiziksel forma taşımayı hedefledim.
          </p>

          <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-slate-400">
            <span className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800">
              ✓ Yuvarlak Form (1:1 Daire)
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800">
              ✓ 3 Farklı Tasarım
            </span>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 03 — İKRAM / BARDAK TASARIMLARI (3 Square 1:1 Image Placeholders) */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* LEFT: 3 Square 1:1 Image Placeholders */}
        <div className="lg:col-span-7">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <ReplaceableImagePlaceholder
              id="cup_design_1"
              label="GÖRSEL EKLE"
              sublabel="İkram Bardağı Tasarımı"
              aspectClass="aspect-video"
              fitMode="contain"
              defaultImageUrl="/images/ikram-bardak.jpg"
            />
            <ReplaceableImagePlaceholder
              id="cup_design_2"
              label="GÖRSEL EKLE"
              sublabel="İkram Tabağı & Bayrakçık"
              aspectClass="aspect-[3/2]"
              fitMode="contain"
              defaultImageUrl="/images/ikram-tabak.jpg"
            />
            <ReplaceableImagePlaceholder
              id="cup_design_3"
              label="GÖRSEL EKLE"
              sublabel="Masa Örtüsü Tasarımı"
              aspectClass="aspect-square"
              fitMode="contain"
              defaultImageUrl="/images/ikram-masa-ortusu.jpg"
            />
          </div>
        </div>

        {/* RIGHT: Short Explanation */}
        <div className="lg:col-span-5 space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/90 border border-slate-700 text-[#4F75FF] text-xs font-mono">
            <span>03 · GASTRONOMİ & TEMAS NOKTALARI</span>
          </div>

          <h3 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight leading-tight">
            İKRAM
          </h3>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            CRS Kids görsel dilini, etkinlikte kullanılan günlük materyallere de aktardım. Bardak, tabak, bayrakçık ve masa örtüsü tasarımlarında logo, renk ve kıvrımlı çizgi dilini devam ettirdim.
          </p>

          <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-slate-400">
            <span className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800">
              ✓ Bardak, Tabak & Masa Örtüsü
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800">
              ✓ Geri Dönüştürülebilir Kağıt
            </span>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 04 — YÖNLENDİRME (2 Taller Vertical ~2:3 / Portrait Image Placeholders) */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* LEFT: 2 Vertical Image Placeholders (Taller Portrait Proportion for Totems & Signage) */}
        <div className="lg:col-span-7">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto">
            <div className="space-y-2">
              <div className="flex items-center justify-between px-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#2AC4A4]">
                  01 · GİRİŞ YÖNLENDİRMESİ
                </span>
              </div>
              <ReplaceableImagePlaceholder
                id="wayfinding_entrance"
                label="GÖRSEL EKLE"
                sublabel="Giriş Yönlendirmesi (Dikey Totem)"
                aspectClass="aspect-[2/3] sm:min-h-[480px]"
                fitMode="contain"
                defaultImageUrl="/images/yonlendirme-giris.jpg"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between px-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#F5B72E]">
                  02 · İSTASYON YÖNLENDİRMESİ
                </span>
              </div>
              <ReplaceableImagePlaceholder
                id="wayfinding_stations"
                label="GÖRSEL EKLE"
                sublabel="İstasyon Yönlendirmesi (Dikey Totem)"
                aspectClass="aspect-[2/3] sm:min-h-[480px]"
                fitMode="contain"
                defaultImageUrl="/images/yonlendirme-istasyon.jpg"
              />
            </div>
          </div>
        </div>

        {/* RIGHT: Short Explanation */}
        <div className="lg:col-span-5 space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/90 border border-slate-700 text-[#2AC4A4] text-xs font-mono">
            <span>04 · ALAN MİMARİSİ</span>
          </div>

          <h3 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight leading-tight">
            YÖNLENDİRME
          </h3>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Etkinlik alanında yön bulmayı kolaylaştırmak için aynı CRS Kids görsel dilini dikey yönlendirme yüzeylerine ve totemlere taşıdım.
          </p>

          <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-slate-400">
            <span className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800">
              ✓ Giriş & Karşılama Totemi
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800">
              ✓ İstasyon & Çadır Yönlendirmeleri
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800">
              ✓ Yüksek Dikey Format
            </span>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 05 — EXPLORER KIT (LEFT: Single Large Box Image, RIGHT: Text + Icons List) */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* LEFT: ONE Large Replaceable Image Area for the BOX / PACKAGING */}
        <div className="lg:col-span-7">
          <div className="space-y-2">
            <div className="flex items-center justify-between px-1">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#2AC4A4] font-bold">
                KUTU & AMBALAJ TASARIMI
              </span>
              <Package className="w-4 h-4 text-[#2AC4A4]" />
            </div>
            <ReplaceableImagePlaceholder
              id="kit_box_packaging"
              label="GÖRSEL EKLE"
              sublabel="Explorer Kit / Özel Kutu & Packaging Tasarımı"
              aspectClass="aspect-video"
              fitMode="contain"
              defaultImageUrl="/images/explorer-kit-kutu.jpg"
            />
          </div>
        </div>

        {/* RIGHT: Text + Short Visual List with Small Icons (NO 2nd large image) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/90 border border-slate-700 text-[#2AC4A4] text-xs font-mono">
            <span>05 · EVE GÖTÜRÜLEBİLİR HATIRA</span>
          </div>

          <h3 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight leading-tight">
            EXPLORER KIT
          </h3>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Günün sonunda çocuğun yanında götürebileceği özel bir CRS Kids seti kurguladım. Keşif boyunca kullanılan materyalleri ve kodlama temalı kalıcı bir hatırayı bir araya getirmeyi amaçladım.
          </p>

          {/* Kit Contents: Text + Small Icons only */}
          <div className="space-y-3 pt-2">
            <span className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider block">
              SET İÇERİĞİ
            </span>

            <div className="grid grid-cols-1 gap-2.5">
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-900/90 border border-slate-800/90 text-slate-200">
                <div className="w-8 h-8 rounded-xl bg-[#2AC4A4]/15 border border-[#2AC4A4]/30 flex items-center justify-center text-[#2AC4A4] shrink-0">
                  <FileCode className="w-4 h-4" />
                </div>
                <span className="font-mono text-xs sm:text-sm font-semibold text-white">
                  Kodlama Temalı Kart
                </span>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-900/90 border border-slate-800/90 text-slate-200">
                <div className="w-8 h-8 rounded-xl bg-[#FF5E3A]/15 border border-[#FF5E3A]/30 flex items-center justify-center text-[#FF5E3A] shrink-0">
                  <BookOpen className="w-4 h-4" />
                </div>
                <span className="font-mono text-xs sm:text-sm font-semibold text-white">
                  Mini Kodlama / Robotik Kitabı
                </span>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-900/90 border border-slate-800/90 text-slate-200">
                <div className="w-8 h-8 rounded-xl bg-[#F5B72E]/15 border border-[#F5B72E]/30 flex items-center justify-center text-[#F5B72E] shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <span className="font-mono text-xs sm:text-sm font-semibold text-white">
                  Keşif Rozeti
                </span>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-900/90 border border-slate-800/90 text-slate-200">
                <div className="w-8 h-8 rounded-xl bg-[#4F75FF]/15 border border-[#4F75FF]/30 flex items-center justify-center text-[#4F75FF] shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span className="font-mono text-xs sm:text-sm font-semibold text-white">
                  Küçük Hatıra Ürünü
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
