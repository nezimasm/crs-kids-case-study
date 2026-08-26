import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Users, Code2, Sparkles, HeartHandshake, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';
import { playPopSound } from '../utils/sound';

export const AudiencePersonasSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>('calisan');

  const personas = [
    {
      id: 'calisan',
      tag: '01 · ÇALIŞAN',
      title: 'ÇALIŞAN',
      shortQuote: 'Bunu biz yaptık.',
      color: '#FF5E3A',
      icon: Code2,
      description:
        'CRS Kids\'in ortaya çıkmasında emeği olan çalışanı yalnızca katılımcı olarak değil, bu hikâyenin bir parçası olarak ele aldım. Ailesiyle birlikte ortaya çıkan ürünü deneyimlemesini ve emeğinin görünür olmasını istedim.',
      needs: [
        'Emeğinin görünür olması',
        'Ailesiyle paylaşabileceği ortak anlar',
        'Ürüne ve ekibe dair aidiyet',
      ],
      emotionalOutcome: 'Takdir edilme ve yaptığı işle gurur duyma.',
    },
    {
      id: 'cocuk',
      tag: '02 · ÇOCUK',
      title: 'ÇOCUK',
      shortQuote: 'Bunu ilk kez keşfediyorum.',
      color: '#2AC4A4',
      icon: Sparkles,
      description:
        'CRS Kids\'in ana kullanıcılarından biri olan çocuğun kodlamayla ilk karşılaşmasını oyun ve üretim üzerinden yaşamasını hedefledim. Ürünü yalnızca görmek yerine küçük görevlerle denemesini ve kendi fikrini üretmesini istedim.',
      needs: [
        'Oynayarak öğrenme',
        'Kendi hızında deneme',
        'Görevi tamamladığında somut bir sonuç görme',
      ],
      emotionalOutcome: 'Merak, eğlence ve başarma hissi.',
    },
    {
      id: 'aile',
      tag: '03 · AİLE',
      title: 'AİLE',
      shortQuote: 'Bunu birlikte yaşıyoruz.',
      color: '#F5B72E',
      icon: HeartHandshake,
      description:
        'Etkinliği yalnızca çocukların katıldığı bir deneyim olarak ele almadım. Ailelerin çocuğa eşlik ettiği, birlikte vakit geçirdiği ve CRS Kids\'i yakından tanıdığı bir yapı kurguladım.',
      needs: [
        'Çocuğa eşlik etmek',
        'Birlikte vakit geçirmek',
        'Rahat ve akışkan bir etkinlik deneyimi',
      ],
      emotionalOutcome: 'Güvenli, samimi ve birlikte geçirilen kaliteli zaman.',
    },
  ];

  const handleToggle = (id: string) => {
    playPopSound();
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="hedef-kitle"
      aria-label="Kim İçin Tasarladım?"
      className="relative py-28 px-4 sm:px-6 max-w-7xl mx-auto"
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-[#2AC4A4]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2AC4A4]/15 border border-[#2AC4A4]/30 text-[#2AC4A4] text-xs font-mono">
          <Users className="w-3.5 h-3.5" />
          <span>04 · ODAK KİTLE</span>
        </div>
        <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight">
          KİM İÇİN TASARLADIM?
        </h2>
        <p className="text-slate-300 text-base sm:text-lg font-light">
          Deneyimi üç temel paydaşın bakış açısı, ihtiyaçları ve duygusal çıktıları etrafında şekillendirdim.
        </p>
      </div>

      {/* 3 Expandable Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
        {personas.map((persona) => {
          const isExpanded = expandedId === persona.id;
          const Icon = persona.icon;

          return (
            <motion.div
              key={persona.id}
              layout
              className={`rounded-[36px] bg-[#0E1526]/90 border transition-all duration-300 shadow-2xl overflow-hidden flex flex-col justify-between ${
                isExpanded
                  ? 'border-slate-500 ring-2 ring-white/10 bg-gradient-to-b from-[#141C36] to-[#0A0E1A]'
                  : 'border-slate-800 hover:border-slate-700 bg-[#0E1526]/80'
              }`}
            >
              {/* Card Header & Closed Summary */}
              <div className="p-7 sm:p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
                    {persona.tag}
                  </span>
                  <div
                    className="w-10 h-10 rounded-2xl flex items-center justify-center text-slate-950 shadow-md"
                    style={{ backgroundColor: persona.color }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div>
                  <h3
                    className="font-display font-black text-2xl sm:text-3xl tracking-tight"
                    style={{ color: persona.color }}
                  >
                    {persona.title}
                  </h3>
                  <p className="text-lg sm:text-xl text-white font-medium mt-1">
                    {persona.shortQuote}
                  </p>
                </div>

                {/* Expand / Collapse Button */}
                <button
                  type="button"
                  id={`expand-persona-${persona.id}`}
                  onClick={() => handleToggle(persona.id)}
                  className={`w-full py-3 px-4 rounded-2xl font-mono text-xs uppercase tracking-wider flex items-center justify-between transition-all cursor-pointer ${
                    isExpanded
                      ? 'bg-white/10 text-white'
                      : 'bg-slate-900/90 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
                  }`}
                >
                  <span>{isExpanded ? 'İÇGÖRÜYÜ GİZLE' : 'İÇGÖRÜYÜ İNCELE'}</span>
                  {isExpanded ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#2AC4A4]" />
                  )}
                </button>
              </div>

              {/* Expanded Detailed Accordion Content */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className="px-7 pb-8 sm:px-8 space-y-5 border-t border-slate-800/80 pt-5"
                  >
                    <p className="text-sm text-slate-200 font-light leading-relaxed">
                      “{persona.description}”
                    </p>

                    {/* Needs list */}
                    <div className="space-y-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                        DENEYİM İHTİYAÇLARI
                      </span>
                      <ul className="space-y-1.5 text-xs text-slate-300 font-light">
                        {persona.needs.map((need, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span
                              className="w-1.5 h-1.5 rounded-full shrink-0"
                              style={{ backgroundColor: persona.color }}
                            />
                            <span>{need}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Emotional Outcome */}
                    <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-1">
                      <span
                        className="text-[10px] font-mono uppercase tracking-wider block font-bold"
                        style={{ color: persona.color }}
                      >
                        DUYGUSAL ÇIKTI
                      </span>
                      <p className="text-xs text-slate-200 font-medium">
                        “{persona.emotionalOutcome}”
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
