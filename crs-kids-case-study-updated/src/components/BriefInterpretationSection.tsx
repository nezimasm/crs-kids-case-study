import React from 'react';
import { motion } from 'motion/react';
import { FileText } from 'lucide-react';

export const BriefInterpretationSection: React.FC = () => {
  const cards = [
    {
      num: '01',
      title: 'SADECE BİR LANSMAN DEĞİL',
      color: '#FF5E3A',
      paragraphs: (
        <>
          CRS Kids'in <strong className="text-white font-semibold">ilk kez</strong> çalışanlar ve aileleriyle buluşacağı bu anı klasik bir ürün lansmanı gibi ele almak istemedim. <strong className="text-[#FF5E3A] font-semibold">Ürünü duyurmanın ötesine</strong> geçip, çalışanların emeğini görünür kılan bir gün tasarlamayı hedefledim.
        </>
      ),
    },
    {
      num: '02',
      title: 'İLK KARŞILAŞMA',
      color: '#F5B72E',
      paragraphs: (
        <>
          CRS Kids, çalışanlar ve aileleri için <strong className="text-white font-semibold">ilk kez</strong> bu etkinlikte deneyimlenecek. Bu nedenle ilk karşılaşmayı merak uyandıran, anlaşılır ve katılımcıyı <strong className="text-[#F5B72E] font-semibold">aktif olarak içine alan</strong> bir deneyim olarak kurguladım.
        </>
      ),
    },
    {
      num: '03',
      title: 'ÇALIŞAN + AİLE',
      color: '#2AC4A4',
      paragraphs: (
        <>
          Etkinliğin odağında <strong className="text-white font-semibold">yalnızca çocuklar yok</strong>. Çalışanların kendi aileleriyle birlikte katılabildiği, çocuğun keşfini desteklerken <strong className="text-[#2AC4A4] font-semibold">çalışanın da</strong> ortaya çıkan ürünle bağını görünür kılan bir deneyim tasarladım.
        </>
      ),
    },
    {
      num: '04',
      title: 'BİR GÜNLÜK ORTAK DENEYİM',
      color: '#4F75FF',
      paragraphs: (
        <>
          Tek günlük etkinliği birbirinden bağımsız aktiviteler yerine, <strong className="text-white font-semibold">baştan sonuna bir hikâyesi olan</strong> bir deneyim olarak ele aldım. Girişten istasyonlara, aile görevinden kapanışa kadar günün tamamını <strong className="text-[#4F75FF] font-semibold">birbirine bağlayan bir akış</strong> oluşturdum.
        </>
      ),
    },
  ];

  return (
    <section
      id="brif"
      aria-label="Brifi Nasıl Yorumladım?"
      className="relative py-24 px-4 sm:px-6 max-w-7xl mx-auto"
    >
      {/* Background soft glow */}
      <div className="absolute top-10 right-1/4 w-80 h-80 bg-[#FF5E3A]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5B72E]/15 border border-[#F5B72E]/30 text-[#F5B72E] text-xs font-mono mb-4">
          <FileText className="w-3.5 h-3.5" />
          <span>03 · STRATEJİK BAKIŞ</span>
        </div>
        <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight">
          BRİFİ NASIL YORUMLADIM?
        </h2>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {cards.map((card, idx) => (
          <motion.div
            key={card.num}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            whileHover={{ y: -4 }}
            className="relative p-7 sm:p-8 rounded-[32px] bg-[#111827]/80 border border-slate-800 hover:border-slate-700 backdrop-blur-xl shadow-xl flex flex-col justify-between"
          >
            {/* Top color accent */}
            <div
              className="absolute top-0 inset-x-8 h-1 rounded-full opacity-80"
              style={{ backgroundColor: card.color }}
            />

            <div>
              <span
                className="font-mono font-black text-2xl sm:text-3xl mb-3 block"
                style={{ color: card.color }}
              >
                {card.num}
              </span>

              <h3 className="font-display font-bold text-lg sm:text-xl text-white tracking-tight mb-4">
                {card.title}
              </h3>

              <p className="text-sm text-slate-300 font-light leading-relaxed">
                {card.paragraphs}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Single Highlighted Bottom Sentence */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#161F4D]/80 to-[#10182E]/80 border border-[#2AC4A4]/40 shadow-xl text-center"
      >
        <p className="font-display font-bold text-lg sm:text-2xl text-white leading-relaxed">
          Bu ilk karşılaşmayı çalışanlar ve aileleri için anlamlı bir güne dönüştürmek istedim.
        </p>
      </motion.div>
    </section>
  );
};
