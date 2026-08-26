import React from 'react';
import { motion } from 'motion/react';
import { Calendar, CheckCircle2 } from 'lucide-react';

export const ProjectTimelineSection: React.FC = () => {
  const phases = [
    {
      id: 'hazirlik',
      step: '01',
      title: 'HAZIRLIK',
      timeframe: 'T-6 Hafta – T-3 Hafta',
      color: '#FF5E3A',
      desc: 'Brif analizi, içerik planlama, mekân kurgusu ve operasyonel hazırlıklar.',
      actions: [
        'Brifin analizi ve çalışan içgörülerinin toplanması',
        'Mekân seçimi ve akış mimarisi',
        '3 kodlama çadırı eğitmen içeriğinin hazırlanması',
      ],
    },
    {
      id: 'uretim',
      step: '02',
      title: 'ÜRETİM',
      timeframe: 'T-3 Hafta – T-1 Hafta',
      color: '#F5B72E',
      desc: 'Fiziksel materyallerin üretimi, dijital davetiye, alan tasarımları ve kit hazırlığı.',
      actions: [
        'Mobil dijital davetiyenin dağıtımı ve RSVP takibi',
        'Keşif pasaportları ve kâşif kitlerinin basımı',
        'Robotik donanım ve yazılımların test edilmesi',
      ],
    },
    {
      id: 'etkinlik',
      step: '03',
      title: 'ETKİNLİK',
      timeframe: 'D-Day (Etkinlik Günü)',
      color: '#2AC4A4',
      desc: 'Girişten kapanışa kadar tüm günün akışı, istasyonlar ve aile deneyimi.',
      actions: [
        '09:30 – 17:00 kesintisiz operasyon ve karşılama',
        '3 çadırda rotasyonlu kodlama ve gizli aile görevi',
        'Madalya seremonisi ve anında fotoğraf çekimi',
      ],
    },
    {
      id: 'sonrasi',
      step: '04',
      title: 'SONRASI',
      timeframe: 'T+1 Gün – T+7 Gün',
      color: '#4F75FF',
      desc: 'Katılımcı geri bildirimleri, ölçümleme ve deneyimin devamı.',
      actions: [
        'Dijital fotoğraf galerisinin çalışanlara iletilmesi',
        'Geri bildirim anketi ve başarı ölçümlemesi',
        'Case study raporunun paylaşımı',
      ],
    },
  ];

  return (
    <section
      id="plan"
      aria-label="Uygulama Planı"
      className="relative py-24 px-4 sm:px-6 max-w-7xl mx-auto"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-[#FF5E3A]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF5E3A]/15 border border-[#FF5E3A]/30 text-[#FF5E3A] text-xs font-mono mb-4">
          <Calendar className="w-3.5 h-3.5" />
          <span>14 · UYGULAMA MİMARİSİ</span>
        </div>
        <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight">
          UYGULAMA PLANI
        </h2>
        <p className="mt-4 text-slate-300 text-base sm:text-lg font-light">
          Deneyimi hayata geçiren 4 aşamalı yalın süreç.
        </p>
      </div>

      {/* 4 Clean Phases Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {phases.map((phase, idx) => (
          <motion.div
            key={phase.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="p-7 rounded-[32px] bg-[#111827]/90 border border-slate-800 shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span
                  className="w-8 h-8 rounded-xl flex items-center justify-center font-mono font-bold text-xs"
                  style={{
                    backgroundColor: `${phase.color}20`,
                    color: phase.color,
                  }}
                >
                  {phase.step}
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  {phase.timeframe}
                </span>
              </div>

              <h3 className="font-display font-black text-2xl text-white mb-2">
                {phase.title}
              </h3>

              <p className="text-xs text-slate-300 font-light leading-relaxed mb-4">
                {phase.desc}
              </p>

              <ul className="space-y-2.5 border-t border-slate-800/80 pt-3">
                {phase.actions.map((act, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-400 font-light">
                    <CheckCircle2
                      className="w-3.5 h-3.5 shrink-0 mt-0.5"
                      style={{ color: phase.color }}
                    />
                    <span>{act}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
