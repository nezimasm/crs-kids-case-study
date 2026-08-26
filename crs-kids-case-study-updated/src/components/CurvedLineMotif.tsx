import React, { useId } from 'react';
import { motion } from 'motion/react';

interface CurvedLineMotifProps {
  className?: string;
  variant?: 'hero' | 'flow' | 's-curve' | 'divider' | 'gentle' | 'accent' | 'orbit' | 'connector' | 'neon-field';
  animated?: boolean;
}

export const CurvedLineMotif: React.FC<CurvedLineMotifProps> = ({
  className = '',
  variant = 'flow',
  animated = true,
}) => {
  const uid = useId();

  if (variant === 'neon-field') {
    const gradA = `neonDiag1-${uid}`;
    const gradB = `neonDiag2-${uid}`;
    const gradC = `neonDiag3-${uid}`;
    const glowSoft = `neonBlurSoft-${uid}`;
    const glowStrong = `neonBlurStrong-${uid}`;

    return (
      <div className={`absolute inset-0 pointer-events-none overflow-hidden select-none ${className}`}>
        {/* Fine dot grid, very subtle */}
        <div className="absolute inset-0 bg-dots-pattern opacity-[0.18]" />

        <svg
          viewBox="0 0 1440 1024"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id={gradA} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4F75FF" stopOpacity="0.85" />
              <stop offset="45%" stopColor="#F5B72E" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#2AC4A4" stopOpacity="0.85" />
            </linearGradient>
            <linearGradient id={gradB} x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FF5E3A" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#F5B72E" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#4F75FF" stopOpacity="0.7" />
            </linearGradient>
            <linearGradient id={gradC} x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2AC4A4" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#FF5E3A" stopOpacity="0.55" />
            </linearGradient>
            <filter id={glowSoft} x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="6" result="b" />
              <feComposite in="SourceGraphic" in2="b" operator="over" />
            </filter>
            <filter id={glowStrong} x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="14" />
            </filter>
          </defs>

          {/* Wide soft glow duplicate underneath the main diagonal (creates the "silik neon" haze) */}
          <motion.line
            x1="-120" y1="60" x2="1180" y2="1060"
            stroke={`url(#${gradA})`}
            strokeWidth="26"
            filter={`url(#${glowStrong})`}
            opacity="0.35"
            animate={animated ? { x1: [-160, -80, -160], y1: [40, 80, 40] } : {}}
            transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Primary thick dashed diagonal line, top-left to center */}
          <motion.line
            x1="-120" y1="60" x2="1180" y2="1060"
            stroke={`url(#${gradA})`}
            strokeWidth="4.5"
            strokeDasharray="20 16"
            strokeLinecap="round"
            filter={`url(#${glowSoft})`}
            animate={
              animated
                ? { strokeDashoffset: [0, -260], x1: [-160, -80, -160], y1: [40, 80, 40] }
                : {}
            }
            transition={{
              strokeDashoffset: { duration: 16, repeat: Infinity, ease: 'linear' },
              x1: { duration: 14, repeat: Infinity, ease: 'easeInOut' },
              y1: { duration: 14, repeat: Infinity, ease: 'easeInOut' },
            }}
          />

          {/* Secondary thick dashed diagonal, upper right sweeping down */}
          <motion.line
            x1="1560" y1="-40" x2="700" y2="760"
            stroke={`url(#${gradB})`}
            strokeWidth="3.5"
            strokeDasharray="4 4 18 14"
            strokeLinecap="round"
            filter={`url(#${glowSoft})`}
            opacity="0.75"
            animate={
              animated
                ? { strokeDashoffset: [0, 220], x2: [680, 740, 680] }
                : {}
            }
            transition={{
              strokeDashoffset: { duration: 20, repeat: Infinity, ease: 'linear' },
              x2: { duration: 18, repeat: Infinity, ease: 'easeInOut' },
            }}
          />

          {/* Third, faint low diagonal drifting across the lower half */}
          <motion.line
            x1="-80" y1="920" x2="1500" y2="140"
            stroke={`url(#${gradC})`}
            strokeWidth="2.5"
            strokeDasharray="10 10"
            strokeLinecap="round"
            opacity="0.45"
            animate={animated ? { strokeDashoffset: [0, -180], y1: [900, 940, 900] } : {}}
            transition={{
              strokeDashoffset: { duration: 24, repeat: Infinity, ease: 'linear' },
              y1: { duration: 22, repeat: Infinity, ease: 'easeInOut' },
            }}
          />

          {/* Dashed orbit ring, cropped top-left corner like a floating node cluster */}
          <motion.circle
            cx="60" cy="10" r="70"
            stroke={`url(#${gradA})`}
            strokeWidth="2"
            strokeDasharray="6 8"
            fill="none"
            opacity="0.55"
            animate={animated ? { rotate: 360 } : {}}
            style={{ transformOrigin: '60px 10px' }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          />

          {/* Small dashed orbit ring bottom-right */}
          <motion.circle
            cx="1370" cy="980" r="90"
            stroke={`url(#${gradB})`}
            strokeWidth="1.5"
            strokeDasharray="5 7"
            fill="none"
            opacity="0.4"
            animate={animated ? { rotate: -360 } : {}}
            style={{ transformOrigin: '1370px 980px' }}
            transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
          />

          {/* Neon node dots riding along the primary diagonal */}
          {[
            { cx: 210, cy: 340, r: 6, fill: '#4F75FF' },
            { cx: 480, cy: 590, r: 8, fill: '#F5B72E' },
            { cx: 860, cy: 340, r: 5, fill: '#2AC4A4' },
            { cx: 1120, cy: 160, r: 7, fill: '#FF5E3A' },
          ].map((dot, i) => (
            <motion.circle
              key={i}
              cx={dot.cx}
              cy={dot.cy}
              r={dot.r}
              fill={dot.fill}
              filter={`url(#${glowSoft})`}
              animate={
                animated
                  ? { opacity: [0.4, 1, 0.4], scale: [1, 1.25, 1] }
                  : { opacity: 0.8 }
              }
              transition={{ duration: 3.5 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
              style={{ transformOrigin: `${dot.cx}px ${dot.cy}px` }}
            />
          ))}
        </svg>
      </div>
    );
  }

  if (variant === 'hero') {
    return (
      <div className={`absolute inset-0 pointer-events-none overflow-hidden select-none ${className}`}>
        <svg
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full opacity-45"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id={`heroLineGrad1-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF5E3A" stopOpacity="0.85" />
              <stop offset="35%" stopColor="#F5B72E" stopOpacity="0.85" />
              <stop offset="70%" stopColor="#2AC4A4" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#4F75FF" stopOpacity="0.75" />
            </linearGradient>
            <linearGradient id={`heroLineGrad2-${uid}`} x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2AC4A4" stopOpacity="0.6" />
              <stop offset="45%" stopColor="#F5B72E" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#FF5E3A" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id={`heroLineGrad3-${uid}`} x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#4F75FF" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#2AC4A4" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#F5B72E" stopOpacity="0.4" />
            </linearGradient>
            <filter id={`heroGlow-${uid}`} x="-10%" y="-10%" width="120%" height="120%">
              <feGaussianBlur stdDeviation="10" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Deep Glowing atmospheric path */}
          <path
            d="M -100 450 C 250 150, 480 750, 850 350 C 1150 50, 1350 550, 1600 250"
            stroke={`url(#heroLineGrad1-${uid})`}
            strokeWidth="14"
            strokeLinecap="round"
            filter={`url(#heroGlow-${uid})`}
            className="opacity-25"
          />

          {/* Primary animated sharp stroke matching CRS Kids curved loop */}
          <motion.path
            d="M -100 450 C 250 150, 480 750, 850 350 C 1150 50, 1350 550, 1600 250"
            stroke={`url(#heroLineGrad1-${uid})`}
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeDasharray="16 10"
            animate={
              animated
                ? {
                    strokeDashoffset: [0, -260],
                  }
                : {}
            }
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          {/* Secondary counter-curve */}
          <motion.path
            d="M -50 680 C 350 880, 650 180, 1050 620 C 1280 870, 1450 380, 1550 480"
            stroke={`url(#heroLineGrad2-${uid})`}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="10 8"
            animate={
              animated
                ? {
                    strokeDashoffset: [0, 180],
                  }
                : {}
            }
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          {/* Soft third ambient loop */}
          <motion.path
            d="M 100 200 C 400 50, 700 400, 1100 200 C 1300 100, 1400 300, 1500 250"
            stroke={`url(#heroLineGrad3-${uid})`}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray="6 6"
            animate={
              animated
                ? {
                    strokeDashoffset: [0, -120],
                  }
                : {}
            }
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          {/* Playful Floating Circles along the paths */}
          <circle cx="480" cy="520" r="7" fill="#FF5E3A" opacity="0.85" />
          <circle cx="850" cy="350" r="9" fill="#F5B72E" opacity="0.9" />
          <circle cx="1150" cy="200" r="6" fill="#2AC4A4" opacity="0.85" />
          <circle cx="320" cy="280" r="5" fill="#4F75FF" opacity="0.75" />
        </svg>
      </div>
    );
  }

  if (variant === 'connector') {
    return (
      <div className={`w-full overflow-hidden select-none pointer-events-none ${className}`}>
        <svg
          viewBox="0 0 1200 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-16 sm:h-20 opacity-50"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id={`connectorGrad-${uid}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF5E3A" stopOpacity="0.2" />
              <stop offset="30%" stopColor="#FF5E3A" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#F5B72E" stopOpacity="0.9" />
              <stop offset="70%" stopColor="#2AC4A4" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#4F75FF" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <motion.path
            d="M 0 60 C 300 10, 600 110, 900 30 C 1050 -10, 1150 80, 1200 60"
            stroke={`url(#connectorGrad-${uid})`}
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="12 8"
            animate={
              animated
                ? {
                    strokeDashoffset: [0, -200],
                  }
                : {}
            }
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          />
        </svg>
      </div>
    );
  }

  if (variant === 'divider') {
    return (
      <div className={`w-full overflow-hidden select-none py-4 pointer-events-none ${className}`}>
        <svg
          viewBox="0 0 1200 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12 sm:h-14 opacity-50"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id={`dividerGrad-${uid}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF5E3A" stopOpacity="0.1" />
              <stop offset="30%" stopColor="#FF5E3A" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#F5B72E" stopOpacity="0.9" />
              <stop offset="70%" stopColor="#2AC4A4" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#2AC4A4" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <motion.path
            d="M 0 40 Q 300 10, 600 40 T 1200 40"
            stroke={`url(#dividerGrad-${uid})`}
            strokeWidth="2.5"
            strokeLinecap="round"
            animate={
              animated
                ? {
                    d: [
                      'M 0 40 Q 300 10, 600 40 T 1200 40',
                      'M 0 40 Q 300 70, 600 40 T 1200 40',
                      'M 0 40 Q 300 10, 600 40 T 1200 40',
                    ],
                  }
                : {}
            }
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </svg>
      </div>
    );
  }

  if (variant === 's-curve') {
    return (
      <svg
        viewBox="0 0 200 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-full pointer-events-none ${className}`}
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={`scurveGrad-${uid}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FF5E3A" />
            <stop offset="35%" stopColor="#F5B72E" />
            <stop offset="70%" stopColor="#2AC4A4" />
            <stop offset="100%" stopColor="#4F75FF" />
          </linearGradient>
        </defs>
        <path
          d="M 100 0 C 180 150, 20 250, 100 400 C 180 550, 20 650, 100 800"
          stroke={`url(#scurveGrad-${uid})`}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeDasharray="8 6"
        />
      </svg>
    );
  }

  return (
    <div className={`absolute inset-x-0 pointer-events-none overflow-hidden select-none ${className}`}>
      <svg
        viewBox="0 0 1440 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-48 opacity-35"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={`genericFlowGrad-${uid}`} x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#FF5E3A" stopOpacity="0.2" />
            <stop offset="35%" stopColor="#F5B72E" stopOpacity="0.75" />
            <stop offset="75%" stopColor="#2AC4A4" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#4F75FF" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <motion.path
          d="M 0 150 C 360 280, 720 20, 1080 180 C 1260 260, 1380 100, 1440 140"
          stroke={`url(#genericFlowGrad-${uid})`}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="12 8"
          animate={
            animated
              ? {
                  strokeDashoffset: [0, -200],
                }
              : {}
          }
          transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
        />
      </svg>
    </div>
  );
};
