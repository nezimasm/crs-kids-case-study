import React, { useEffect, useRef } from 'react';

/**
 * Fixed, full-viewport background: flat black checkered (grid) pattern.
 * The area under the cursor softly glows, revealing the grid lines more
 * brightly nearby — kept minimal/clean on purpose.
 */
export const SiteBackgroundMotif: React.FC = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      const el = glowRef.current;
      if (!el) return;
      el.style.setProperty('--glow-x', `${e.clientX}px`);
      el.style.setProperty('--glow-y', `${e.clientY}px`);
      el.style.opacity = '1';
    };
    const handlePointerLeave = () => {
      const el = glowRef.current;
      if (el) el.style.opacity = '0';
    };

    window.addEventListener('pointermove', handlePointerMove);
    document.documentElement.addEventListener('mouseleave', handlePointerLeave);
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      document.documentElement.removeEventListener('mouseleave', handlePointerLeave);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none select-none overflow-hidden">
      {/* Flat black base */}
      <div className="absolute inset-0 bg-black" />

      {/* Checkered / grid lines */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.055) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.055) 1px, transparent 1px)',
          backgroundSize: '46px 46px',
        }}
      />

      {/* Soft glow that follows the cursor, lighting up nearby grid lines */}
      <div
        ref={glowRef}
        className="absolute inset-0 opacity-0 transition-opacity duration-500 ease-out"
        style={{
          background:
            'radial-gradient(420px circle at var(--glow-x, 50%) var(--glow-y, 50%), rgba(255,94,58,0.10), rgba(245,183,46,0.06) 35%, transparent 65%)',
        }}
      />

      {/* Gentle vignette so content edges stay readable */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,#000_96%)]" />
    </div>
  );
};
