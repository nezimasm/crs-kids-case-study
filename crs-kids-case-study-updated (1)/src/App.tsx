import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { SiteBackgroundMotif } from './components/SiteBackgroundMotif';
import { HeroSection } from './components/HeroSection';
import { PhoneInvitationSection } from './components/PhoneInvitationSection';
import { BriefInterpretationSection } from './components/BriefInterpretationSection';
import { AudiencePersonasSection } from './components/AudiencePersonasSection';
import { ExperienceJourneySection } from './components/ExperienceJourneySection';
import { ConceptSection } from './components/ConceptSection';
import { EmployeeRoleSection } from './components/EmployeeRoleSection';
import { PassportSection } from './components/PassportSection';
import { StationTentsSection } from './components/StationTentsSection';
import { SecretFamilyMissionSection } from './components/SecretFamilyMissionSection';
import { QrFinalExperienceSection } from './components/QrFinalExperienceSection';
import { InteractiveVenueMapSection } from './components/InteractiveVenueMapSection';
import { DesignSystemSection } from './components/DesignSystemSection';
import { PhysicalDesignSection } from './components/PhysicalDesignSection';
import { ProjectTimelineSection } from './components/ProjectTimelineSection';
import { BudgetBreakdownSection } from './components/BudgetBreakdownSection';
import { SuccessMetricsSection } from './components/SuccessMetricsSection';
import { FinalClosingSection } from './components/FinalClosingSection';
import { DigitalInvitationExperience } from './components/DigitalInvitationExperience';

export default function App() {
  const [isInvitationRoute, setIsInvitationRoute] = useState<boolean>(false);
  const [stampedList, setStampedList] = useState<string[]>([
    'kesfet',
    'uret',
  ]);

  const handleToggleStamp = (stampId: string) => {
    if (stampedList.includes(stampId)) {
      setStampedList(stampedList.filter((id) => id !== stampId));
    } else {
      setStampedList([...stampedList, stampId]);
    }
  };

  const handleAddStamp = (stampId: string) => {
    if (!stampedList.includes(stampId)) {
      setStampedList([...stampedList, stampId]);
    }
  };

  useEffect(() => {
    const checkRoute = () => {
      if (
        window.location.pathname === '/invitation' ||
        window.location.hash === '#invitation' ||
        window.location.hash === '#/invitation'
      ) {
        setIsInvitationRoute(true);
      } else {
        setIsInvitationRoute(false);
      }
    };

    checkRoute();
    window.addEventListener('hashchange', checkRoute);
    window.addEventListener('popstate', checkRoute);

    return () => {
      window.removeEventListener('hashchange', checkRoute);
      window.removeEventListener('popstate', checkRoute);
    };
  }, []);

  if (isInvitationRoute) {
    return (
      <DigitalInvitationExperience
        isStandalone={true}
        onClose={() => {
          window.location.hash = '';
          setIsInvitationRoute(false);
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#070A12] text-slate-100 font-sans selection:bg-[#FF5E3A]/30 selection:text-white relative overflow-x-hidden">
      {/* Fixed animated neon line + dot-grid backdrop, visible behind every section */}
      <SiteBackgroundMotif />

      {/* Sticky Top Interactive Navigation */}
      <Navigation />

      {/* Main Case Study Flow */}
      <main className="relative z-10 space-y-4 sm:space-y-8">
        {/* 01 · Hero Header & Exact CRS Kids Logo */}
        <HeroSection />

        {/* 02 · Interactive Phone Invitation Experience */}
        <PhoneInvitationSection />

        {/* 03 · Strategic Brief Interpretation (BRİFİ NASIL YORUMLADIM?) */}
        <BriefInterpretationSection />

        {/* 04 · Audience Personas (KİM İÇİN TASARLADIM?) */}
        <AudiencePersonasSection />

        {/* 05 · Flowing S-Curved Journey Map (DENEYİM YOLCULUĞU) */}
        <ExperienceJourneySection />

        {/* 06 · Minimal Concept (PLAY WITH THE FUTURE.) */}
        <ConceptSection />

        {/* 07 · Dedicated Employee Role (ÇALIŞANLARIN ROLÜ VE TAKDİRİ) */}
        <EmployeeRoleSection />

        {/* 08 · 3 Spatial Station Tents (İSTASYONLAR) */}
        <StationTentsSection onSelectStationStamp={handleAddStamp} />

        {/* 09 · Discovery Passport & Progress (KEŞİF PASAPORTU) */}
        <PassportSection
          stampedList={stampedList}
          onToggleStamp={handleToggleStamp}
        />

        {/* 10 · Co-op Family Mission (AİLENLE BİRLİKTE) */}
        <SecretFamilyMissionSection
          stampedList={stampedList}
          onToggleStamp={handleToggleStamp}
        />

        {/* 11 · 4-Stamp QR Unlock & Reward (QR KOD KİLİDİ / FİNAL) */}
        <QrFinalExperienceSection completedCount={stampedList.length} />

        {/* 12 · Spatial Top-Down Site Plan (ŞİMDİ ALANA GİRELİM.) */}
        <InteractiveVenueMapSection />

        {/* 13 · Visual Design System Tokens (TASARIM SİSTEMİ) */}
        <DesignSystemSection />

        {/* 14 · Physical Design Mockups (FİZİKSEL TASARIMLAR) */}
        <PhysicalDesignSection />

        {/* 15 · 4-Phase Implementation Plan (UYGULAMA PLANI) */}
        <ProjectTimelineSection />

        {/* 16 · Clean Budget Allocation (BÜTÇE DAĞILIMI) */}
        <BudgetBreakdownSection />

        {/* 17 · 4 Key Success Metrics (BAŞARIYI NASIL ÖLÇERİM?) */}
        <SuccessMetricsSection />

        {/* 18 · Closing & Designer Credit (FINAL) */}
        <FinalClosingSection />
      </main>
    </div>
  );
}
