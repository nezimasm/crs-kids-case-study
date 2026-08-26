import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TIMELINE_EVENTS } from '../data/caseStudyData';
import {
  Clock,
  MapPin,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  CalendarCheck,
  DoorOpen,
  Tv,
  Boxes,
  Utensils,
  Users,
  KeyRound,
  Palette,
  Trophy,
  Gift,
} from 'lucide-react';
import { playPopSound } from '../utils/sound';

export const EventStoryNarrativeSection: React.FC = () => {
  const [activeEventIndex, setActiveEventIndex] = useState<number>(2); // Default to station exploration (10:20)

  const activeEvent = TIMELINE_EVENTS[activeEventIndex];

  const getEventIcon = (iconName: string) => {
    switch (iconName) {
      case 'DoorOpen':
        return <DoorOpen className="w-5 h-5" />;
      case 'Tv':
        return <Tv className="w-5 h-5" />;
      case 'Boxes':
        return <Boxes className="w-5 h-5" />;
      case 'Utensils':
        return <Utensils className="w-5 h-5" />;
      case 'Users':
        return <Users className="w-5 h-5" />;
      case 'KeyRound':
        return <KeyRound className="w-5 h-5" />;
      case 'Palette':
        return <Palette className="w-5 h-5" />;
      case 'Trophy':
        return <Trophy className="w-5 h-5" />;
      case 'Gift':
        return <Gift className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section
      id="etkinlik"
      aria-label="Etkinlik Günü Hikâyesi"
      className="relative py-24 px-4 sm:px-6 max-w-7xl mx-auto"
    >
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#FF5E3A]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF5E3A]/15 border border-[#FF5E3A]/30 text-[#FF5E3A] text-xs font-mono mb-4">
          <Clock className="w-3.5 h-3.5" />
          <span>07 · GÜNÜN YAŞAYAN HİKÂYESİ</span>
        </div>
        <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight">
          PEKİ, BU GÜN NASIL YAŞANACAK?
        </h2>
        <p className="mt-4 text-slate-300 text-base sm:text-lg font-light">
          Klasik bir şirket etkinliğinin durağanlığından uzak; dakika dakika tasarlanmış, çocukların temposuna ve aile dinamiğine uygun ritmik bir akış.
        </p>
      </div>

      {/* Interactive Time Ribbon Scrubber */}
      <div className="mb-10 overflow-x-auto pb-4 pt-2 -mx-4 px-4 sm:mx-0 sm:px-0">
        <div className="flex items-center gap-2 sm:gap-2.5 min-w-[850px] lg:min-w-full">
          {TIMELINE_EVENTS.map((item, idx) => {
            const isActive = idx === activeEventIndex;
            return (
              <button
                key={item.time}
                id={`timeline-step-btn-${idx}`}
                onClick={() => {
                  playPopSound();
                  setActiveEventIndex(idx);
                }}
                className={`flex-1 min-w-[95px] p-3 rounded-2xl border text-center transition-all duration-200 focus:outline-none ${
                  isActive
                    ? 'bg-[#161F4D] border-white/50 shadow-lg scale-105 ring-1 ring-[#2AC4A4]'
                    : 'bg-[#111827]/70 hover:bg-[#111827] border-slate-800 text-slate-400'
                }`}
              >
                <div
                  className={`font-mono text-xs font-bold ${
                    isActive ? 'text-[#2AC4A4]' : 'text-slate-400'
                  }`}
                >
                  {item.time}
                </div>
                <div className="text-[11px] font-medium text-white truncate mt-1">
                  {item.visualTag}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Scene Showcase */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeEvent.time}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.3 }}
          className="p-8 sm:p-12 rounded-3xl bg-[#111827]/90 border border-slate-700/80 backdrop-blur-2xl shadow-2xl relative overflow-hidden"
        >
          {/* Ambient Corner Glow */}
          <div
            className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-20 pointer-events-none"
            style={{ backgroundColor: activeEvent.accentColor }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Column: Big Time & Zone Badge */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div
                  className="p-3.5 rounded-2xl text-white shadow-lg"
                  style={{ backgroundColor: activeEvent.accentColor }}
                >
                  {getEventIcon(activeEvent.icon)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-3xl sm:text-4xl font-black text-white">
                      {activeEvent.time}
                    </span>
                    <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      {activeEvent.visualTag}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#2AC4A4] font-medium mt-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{activeEvent.zone}</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <span className="text-xs font-mono uppercase text-slate-400 block mb-1">
                  Sahne Başlığı:
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-white leading-tight">
                  {activeEvent.title}
                </h3>
                <span className="text-sm font-semibold text-[#F5B72E]">
                  {activeEvent.subtitle}
                </span>
              </div>
            </div>

            {/* Right Column: Narrative Description & Highlight Box */}
            <div className="lg:col-span-7 space-y-5">
              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 text-slate-200 text-sm sm:text-base font-light leading-relaxed">
                {activeEvent.description}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-[#161F4D]/60 border border-slate-700/60">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#F5B72E]" />
                  <span className="text-xs text-slate-300 font-mono">
                    Kilit Deneyim Çıktısı:
                  </span>
                  <strong className="text-xs text-white">
                    {activeEvent.keyHighlight}
                  </strong>
                </div>

                {/* Scrubber Navigation Buttons */}
                <div className="flex items-center gap-2">
                  <button
                    id="prev-event-btn"
                    onClick={() => {
                      if (activeEventIndex > 0) {
                        playPopSound();
                        setActiveEventIndex(activeEventIndex - 1);
                      }
                    }}
                    disabled={activeEventIndex === 0}
                    className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-30 text-white transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    id="next-event-btn"
                    onClick={() => {
                      if (activeEventIndex < TIMELINE_EVENTS.length - 1) {
                        playPopSound();
                        setActiveEventIndex(activeEventIndex + 1);
                      }
                    }}
                    disabled={activeEventIndex === TIMELINE_EVENTS.length - 1}
                    className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-30 text-white transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};
