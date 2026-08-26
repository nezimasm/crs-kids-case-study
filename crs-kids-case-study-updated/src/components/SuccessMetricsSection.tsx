import React from 'react';
import { motion } from 'motion/react';
import { Award, Users, Heart, CheckCircle2, TrendingUp } from 'lucide-react';

export const SuccessMetricsSection: React.FC = () => {
  const metrics = [
    {
      value: '%90+',
      label: 'Katılım Oranı',
      sublabel: 'Hedeflenen Katılım Hacmi',
      color: '#FF5E3A',
      icon: Users,
    },
    {
      value: '4.5 / 5',
      label: 'Çalışan Deneyimi',
      sublabel: 'eNPS & Aidiyet Artışı',
      color: '#F5B72E',
      icon: TrendingUp,
    },
    {
      value: '4.5 / 5',
      label: 'Aile Deneyimi',
      sublabel: 'Genel Memnuniyet Skoru',
      color: '#2AC4A4',
      icon: Heart,
    },
    {
      value: '%80+',
      label: 'Görev Tamamlama',
      sublabel: '4 Damgayı Alan Kâşifler',
      color: '#4F75FF',
      icon: CheckCircle2,
    },
  ];

  return (
    <section
      id="etki"
      aria-label="Başarıyı Nasıl Ölçerim?"
      className="relative py-24 px-4 sm:px-6 max-w-7xl mx-auto"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-[#2AC4A4]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2AC4A4]/15 border border-[#2AC4A4]/30 text-[#2AC4A4] text-xs font-mono mb-4">
          <Award className="w-3.5 h-3.5" />
          <span>16 · BAŞARI VE DEĞERLENDİRME</span>
        </div>
        <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight">
          BAŞARIYI NASIL ÖLÇERİM?
        </h2>
      </div>

      {/* 4 Big Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {metrics.map((m, idx) => {
          const Icon = m.icon;
          return (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-[#111827]/90 border border-slate-800 shadow-xl text-center flex flex-col justify-between"
            >
              <div className="flex justify-center mb-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-slate-950 shadow-md"
                  style={{ backgroundColor: m.color }}
                >
                  <Icon className="w-6 h-6" />
                </div>
              </div>

              <div>
                <div
                  className="font-display font-black text-4xl sm:text-5xl mb-2 tracking-tight"
                  style={{ color: m.color }}
                >
                  {m.value}
                </div>
                <h3 className="font-display font-bold text-lg text-white">
                  {m.label}
                </h3>
              </div>

              <span className="text-xs text-slate-400 font-mono mt-3 block">
                {m.sublabel}
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* Short concluding sentence */}
      <div className="max-w-2xl mx-auto text-center p-6 rounded-3xl bg-slate-900/80 border border-slate-800">
        <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
          Etkinlik sonrası toplanacak geri bildirimlerle deneyimin hangi bölümlerinin en yüksek etkiyi yarattığını ve çalışan bağlılığını nasıl desteklediğini değerlendirmeyi hedefliyorum.
        </p>
      </div>
    </section>
  );
};
