import React from 'react';
import { CurvedLineMotif } from './CurvedLineMotif';

/**
 * Fixed, full-viewport animated background of thick neon diagonal lines + dot grid,
 * matching the CRS Kids brand motif. Sits behind Navigation and all sections (z-0),
 * stays anchored while the page scrolls so the motion reads as ambient/atmospheric
 * rather than tied to any one section.
 */
export const SiteBackgroundMotif: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none select-none">
      {/* Base dark gradient wash so the lines stay soft/silik rather than harsh */}
      <div className="absolute inset-0 bg-[#070A12]" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#0B0F19] via-[#070A12] to-[#05070D]" />

      <CurvedLineMotif variant="neon-field" animated={true} className="opacity-70" />

      {/* Vignette so content edges stay readable */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,#070A12_92%)]" />
    </div>
  );
};
