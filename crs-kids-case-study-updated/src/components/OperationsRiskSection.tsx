import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Users, LifeBuoy, AlertTriangle, CheckCircle2, UserCheck } from 'lucide-react';

export const OperationsRiskSection: React.FC = () => {
  const stakeholderGroups = [
    { name: 'İnsan Kaynakları (İK)', role: 'Katılımcı kaydı, kurum kültürü hedefleri & çalışan deneyimi ölçümü.' },
    { name: 'Ar-Ge & Yazılım Ekibi', role: 'CRS Kids ürününün demosunu sunma, teknoloji içeriklerini doğrulama.' },
    { name: 'İç İletişim & Marka', role: 'Fotoğraf/video arşivleme, iç bülten ve motivasyon yayını.' },
    { name: 'Gönüllü Mühendis Mentorlar', role: 'İstasyonlarda çocuklara kodlamayı sevdiren ve yol gösteren 12 kişilik ekip.' },
    { name: 'Mekân, Güvenlik & Sağlık', role: 'Fiziksel alan güvenliği, ambulans, hijyen ve ikram operasyonu.' },
  ];

  const operationalHighlights = [
    { title: '1:6 Mentor-Çocuk Oranı', desc: 'Her 6 çocuğa 1 eğitimli CRS Soft genç mühendis mentor eşlik eder.' },
    { title: 'Rotasyonlu Akış Yönetimi', desc: '350 katılımcı 3 gruba ayrılarak istasyonlarda yığılma ve bekleme süresi sıfıra indirilir.' },
    { title: 'Dijital Check-in & Yaka Kartı', desc: 'Girişte anlık QR okuma ve çocuğun alerji/veli bilgisini içeren renkli akıllı bileklik.' },
    { title: 'Pedagojik Destek', desc: 'Çocuk gelişim uzmanı eşliğinde hazırlanan zorluk derecesi ayarlanabilir kodlama adımları.' },
  ];

  const riskMitigations = [
    {
      risk: 'Beklenmeyen Hava Muhalefeti / Yağmur',
      solution: 'Tüm çadırlar su geçirmez ve ısıtmalı jeodezik kubbe mimarisindedir; açık alan hemen kapalı amfiye kaydırılır.',
      level: 'Düşük Risk',
    },
    {
      risk: 'Alerjen ve Gıda Hassasiyetleri',
      solution: 'Kayıt formundaki verilerle hazırlanan glütensiz/fıstıksız özel çocuk menüleri ve etiketli büfe.',
      level: 'Yönetildi',
    },
    {
      risk: 'Kayıp Çocuk veya Kalabalıktan Ayrılma',
      solution: 'Alana giriş-çıkış tek kapıdan kontrollüdür. Tüm çocukların bilekliğinde ebeveyn telefonlu NFC/barkod bulunur.',
      level: 'Tam Kontrol',
    },
    {
      risk: 'Teknik Ekipman / Cihaz Kesintisi',
      solution: 'Her istasyonda %30 yedek tablet/robotik kit ve jeneratör destekli offline çalışabilen yerel ağ kurgusu.',
      level: 'Yedekli',
    },
  ];

  return (
    <section
      id="operasyon"
      aria-label="Operasyon, Paydaşlar ve Risk Yönetimi"
      className="relative py-24 px-4 sm:px-6 max-w-7xl mx-auto"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-[#2AC4A4]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2AC4A4]/15 border border-[#2AC4A4]/30 text-[#2AC4A4] text-xs font-mono mb-4">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>16 · OPERASYONEL GÜVENLİK & PAYDAŞLAR</span>
        </div>
        <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight">
          OPERASYON, PAYDAŞLAR & RİSK
        </h2>
        <p className="mt-4 text-slate-300 text-base sm:text-lg font-light">
          Büyük ölçekli bir aile etkinliğinin pürüzsüz geçmesi için kurgulanan 360° yönetim ve acil durum protokolleri.
        </p>
      </div>

      {/* 3 Large Operational Pillar Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Pillar 1: Paydaşlar (Stakeholders) */}
        <div className="p-7 sm:p-8 rounded-3xl bg-[#111827]/90 border border-slate-800 backdrop-blur-xl shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-[#FF5E3A] text-white">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase text-slate-400 block">
                  İÇ & DIŞ İŞ BİRLİĞİ
                </span>
                <h3 className="font-display font-black text-xl text-white">
                  Paydaş Matrisi
                </h3>
              </div>
            </div>

            <div className="space-y-3">
              {stakeholderGroups.map((sh, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <strong className="text-xs text-white block mb-0.5">{sh.name}</strong>
                  <p className="text-[11px] text-slate-300 font-light leading-relaxed">{sh.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pillar 2: Operasyon & Mentorluk */}
        <div className="p-7 sm:p-8 rounded-3xl bg-[#111827]/90 border border-slate-800 backdrop-blur-xl shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-[#2AC4A4] text-slate-950">
                <UserCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase text-slate-400 block">
                  SAHA ORGANİZASYONU
                </span>
                <h3 className="font-display font-black text-xl text-white">
                  Operasyon & Mentorluk
                </h3>
              </div>
            </div>

            <div className="space-y-3">
              {operationalHighlights.map((op, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#2AC4A4] mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{op.title}</span>
                  </div>
                  <p className="text-[11px] text-slate-300 font-light leading-relaxed">{op.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pillar 3: Risk Yönetimi & Plan B */}
        <div className="p-7 sm:p-8 rounded-3xl bg-[#111827]/90 border border-slate-800 backdrop-blur-xl shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-[#F5B72E] text-slate-950">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase text-slate-400 block">
                  PROAKTİF ÖNLEMLER
                </span>
                <h3 className="font-display font-black text-xl text-white">
                  Risk & Plan B Protokolü
                </h3>
              </div>
            </div>

            <div className="space-y-3">
              {riskMitigations.map((rm, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="flex items-center justify-between mb-1">
                    <strong className="text-xs text-white truncate">{rm.risk}</strong>
                    <span className="text-[9px] font-mono text-[#2AC4A4] bg-[#2AC4A4]/10 px-1.5 py-0.5 rounded">
                      {rm.level}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-300 font-light leading-relaxed">{rm.solution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
