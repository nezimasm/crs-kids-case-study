import React from 'react';
import { motion } from 'motion/react';

interface CrsKidsLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
  onHoverAction?: boolean;
}

export const CrsKidsLogo: React.FC<CrsKidsLogoProps> = ({
  className = '',
  size = 'md',
  animated = true,
  onHoverAction = true,
}) => {
  const sizeMap = {
    sm: 'h-10 w-auto',
    md: 'h-16 md:h-20 w-auto',
    lg: 'h-24 md:h-32 w-auto',
    xl: 'h-36 md:h-48 w-auto',
  };

  return (
    <motion.div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      whileHover={onHoverAction ? { scale: 1.03 } : {}}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
    >
      {/* Background soft glow when animated */}
      {animated && (
        <div className="absolute inset-0 -m-4 bg-gradient-to-r from-[#FF5E3A]/20 via-[#F5B72E]/15 to-[#2AC4A4]/20 rounded-full blur-2xl pointer-events-none opacity-60 animate-pulse" />
      )}

      <svg
        viewBox="0 0 600 380"
        className={`${sizeMap[size]} transition-transform duration-300 drop-shadow-sm`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Vertical gradient for 'kids' wordmark matching the uploaded brand asset */}
          <linearGradient id="kidsGradient" x1="300" y1="90" x2="300" y2="360" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FF6A47" />
            <stop offset="28%" stopColor="#FF844B" />
            <stop offset="55%" stopColor="#FAB839" />
            <stop offset="78%" stopColor="#6BCBB9" />
            <stop offset="100%" stopColor="#32B5A0" />
          </linearGradient>

          {/* Secondary gradient for glow and accents */}
          <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF7A59" />
            <stop offset="100%" stopColor="#FF5028" />
          </linearGradient>

          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* ============================================================ */}
        {/* HUGE BACKGROUND WORDMARK: 'kids' */}
        {/* ============================================================ */}
        <g id="kids-wordmark" fill="url(#kidsGradient)">
          {/* Letter 'k' */}
          <path
            d="M 125 105 
               C 138 105, 148 115, 148 128 
               L 148 190 
               C 165 170, 185 152, 208 145 
               C 220 141, 232 148, 235 160 
               C 238 172, 230 184, 218 188 
               C 198 195, 178 212, 160 230 
               L 230 330 
               C 238 342, 232 355, 220 358 
               C 208 360, 196 352, 190 342 
               L 148 275 
               L 148 335 
               C 148 348, 138 358, 125 358 
               C 112 358, 102 348, 102 335 
               L 102 128 
               C 102 115, 112 105, 125 105 Z"
          />

          {/* Letter 'i' */}
          <g id="letter-i">
            {/* Dot of i */}
            <circle cx="282" cy="120" r="22" />
            {/* Stem of i */}
            <path
              d="M 282 165 
                 C 295 165, 305 175, 305 188 
                 L 305 335 
                 C 305 348, 295 358, 282 358 
                 C 269 358, 259 348, 259 335 
                 L 259 188 
                 C 259 175, 269 165, 282 165 Z"
            />
          </g>

          {/* Letter 'd' */}
          <g id="letter-d">
            <path
              d="M 405 95 
                 C 418 95, 428 105, 428 118 
                 L 428 335 
                 C 428 348, 418 358, 405 358 
                 C 392 358, 382 348, 382 335 
                 L 382 300 
                 C 365 330, 335 358, 295 358 
                 C 250 358, 215 320, 215 272 
                 C 215 220, 255 185, 305 185 
                 C 340 185, 368 205, 382 235 
                 L 382 118 
                 C 382 105, 392 95, 405 95 Z
                 M 322 230 
                 C 288 230, 260 250, 260 272 
                 C 260 295, 285 315, 320 315 
                 C 355 315, 382 295, 382 272 
                 C 382 248, 355 230, 322 230 Z"
            />
          </g>

          {/* Letter 's' */}
          <path
            d="M 525 210 
               C 525 210, 500 185, 455 185 
               C 415 185, 390 210, 390 240 
               C 390 270, 420 285, 455 295 
               C 490 305, 510 315, 510 335 
               C 510 358, 480 365, 455 365 
               C 425 365, 400 350, 390 340 
               C 380 330, 365 332, 355 342 
               C 345 352, 348 368, 360 378 
               C 382 398, 418 410, 458 410 
               C 512 410, 555 378, 555 330 
               C 555 290, 520 270, 485 260 
               C 455 250, 435 242, 435 228 
               C 435 215, 450 205, 470 205 
               C 492 205, 510 215, 520 225 
               C 530 235, 545 235, 555 225 
               C 562 218, 555 200, 525 210 Z"
            transform="translate(15, -45)"
          />
        </g>

        {/* ============================================================ */}
        {/* FOREGROUND BRAND LOGO: 'Crs soft' + Connected Robot Character */}
        {/* ============================================================ */}
        <g id="crs-soft-group">
          {/* 'Crs' in Deep Navy Blue (#161F4D) */}
          <g id="text-crs" fill="#1A255D" stroke="#1A255D" strokeWidth="1">
            {/* 'C' */}
            <path
              d="M 175 62 
                 C 168 55, 155 48, 138 48 
                 C 112 48, 92 68, 92 95 
                 C 92 122, 112 142, 138 142 
                 C 158 142, 170 135, 178 126 
                 C 184 120, 182 110, 174 104 
                 C 166 98, 156 100, 150 106 
                 C 146 112, 142 116, 136 116 
                 C 125 116, 117 106, 117 95 
                 C 117 84, 125 74, 136 74 
                 C 144 74, 150 78, 155 83 
                 C 162 89, 172 88, 178 80 
                 C 182 74, 182 68, 175 62 Z"
            />
            {/* 'r' */}
            <path
              d="M 198 75 
                 C 192 75, 188 80, 188 86 
                 L 188 135 
                 C 188 140, 192 145, 198 145 
                 C 204 145, 208 140, 208 135 
                 L 208 102 
                 C 215 92, 225 86, 236 86 
                 C 242 86, 246 82, 246 76 
                 C 246 70, 242 66, 236 66 
                 C 222 66, 208 72, 198 84 
                 L 198 86 Z"
            />
            {/* 's' */}
            <path
              d="M 270 95 
                 C 266 84, 256 78, 245 78 
                 C 234 78, 226 84, 226 92 
                 C 226 100, 232 104, 242 108 
                 L 248 110 
                 C 262 115, 272 122, 272 134 
                 C 272 148, 258 158, 242 158 
                 C 228 158, 218 150, 214 142 
                 C 210 136, 212 128, 218 124 
                 C 224 120, 232 122, 236 128 
                 C 238 132, 242 136, 248 136 
                 C 255 136, 260 130, 260 124 
                 C 260 118, 254 114, 245 110 
                 L 238 107 
                 C 226 102, 216 95, 216 83 
                 C 216 68, 230 58, 246 58 
                 C 258 58, 270 65, 276 74 
                 C 280 80, 278 88, 272 92 
                 C 270 94, 268 95, 270 95 Z"
            />
          </g>

          {/* Connected Robot / Kid Icon with 3 Orange Antenna Nodes */}
          <g id="connected-robot-character">
            {/* Indigo arch connection */}
            <path
              d="M 270 98 
                 C 270 70, 290 50, 318 50 
                 C 345 50, 365 70, 365 98 
                 C 365 125, 345 145, 318 145 
                 C 290 145, 270 125, 270 98 Z"
              fill="none"
              stroke="#1A255D"
              strokeWidth="14"
              strokeLinecap="round"
            />

            {/* Side antenna stems */}
            <path
              d="M 272 82 Q 255 60 245 50"
              fill="none"
              stroke="#1A255D"
              strokeWidth="9"
              strokeLinecap="round"
            />
            <path
              d="M 362 82 Q 380 60 390 50"
              fill="none"
              stroke="#1A255D"
              strokeWidth="9"
              strokeLinecap="round"
            />

            {/* Left Orange Node */}
            <circle cx="242" cy="48" r="14" fill="url(#nodeGradient)" />
            {/* Center Orange Head / Character Face */}
            <circle cx="318" cy="98" r="28" fill="url(#nodeGradient)" />
            {/* Right Orange Node */}
            <circle cx="392" cy="48" r="14" fill="url(#nodeGradient)" />

            {/* Cute robot face eye details on center node */}
            <circle cx="310" cy="94" r="3.5" fill="#FFFFFF" />
            <circle cx="326" cy="94" r="3.5" fill="#FFFFFF" />
            <path
              d="M 312 104 Q 318 112 324 104"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
          </g>

          {/* 'soft' in Deep Navy Blue (#1A255D) */}
          <g id="text-soft" fill="#1A255D" stroke="#1A255D" strokeWidth="1">
            {/* 's' */}
            <path
              d="M 415 95 
                 C 411 84, 401 78, 390 78 
                 C 379 78, 371 84, 371 92 
                 C 371 100, 377 104, 387 108 
                 L 393 110 
                 C 407 115, 417 122, 417 134 
                 C 417 148, 403 158, 387 158 
                 C 373 158, 363 150, 359 142 
                 C 355 136, 357 128, 363 124 
                 C 369 120, 377 122, 381 128 
                 C 383 132, 387 136, 393 136 
                 C 400 136, 405 130, 405 124 
                 C 405 118, 399 114, 390 110 
                 L 383 107 
                 C 371 102, 361 95, 361 83 
                 C 361 68, 375 58, 391 58 
                 C 403 58, 415 65, 421 74 
                 C 425 80, 423 88, 417 92 
                 C 415 94, 413 95, 415 95 Z"
              transform="translate(10, 0)"
            />
            {/* 'o' */}
            <path
              d="M 445 108 
                 C 445 88, 460 72, 482 72 
                 C 504 72, 519 88, 519 108 
                 C 519 128, 504 144, 482 144 
                 C 460 144, 445 128, 445 108 Z
                 M 465 108 
                 C 465 118, 472 126, 482 126 
                 C 492 126, 499 118, 499 108 
                 C 499 98, 492 90, 482 90 
                 C 472 90, 465 98, 465 108 Z"
            />
            {/* 'f' */}
            <path
              d="M 545 60 
                 C 538 52, 528 50, 518 54 
                 C 512 56, 508 62, 508 72 
                 L 508 78 
                 L 498 78 
                 C 492 78, 488 82, 488 88 
                 C 488 94, 492 98, 498 98 
                 L 508 98 
                 L 508 135 
                 C 508 140, 512 145, 518 145 
                 C 524 145, 528 140, 528 135 
                 L 528 98 
                 L 542 98 
                 C 548 98, 552 94, 552 88 
                 C 552 82, 548 78, 542 78 
                 L 528 78 
                 L 528 72 
                 C 528 66, 532 64, 538 64 
                 C 542 64, 548 66, 552 70 
                 C 558 74, 564 72, 568 66 
                 C 570 60, 565 54, 545 60 Z"
            />
            {/* 't' */}
            <path
              d="M 578 68 
                 C 578 62, 574 58, 568 58 
                 C 562 58, 558 62, 558 68 
                 L 558 78 
                 L 548 78 
                 C 542 78, 538 82, 538 88 
                 C 538 94, 542 98, 548 98 
                 L 558 98 
                 L 558 128 
                 C 558 138, 564 145, 576 145 
                 C 582 145, 588 142, 592 138 
                 C 596 134, 596 126, 590 122 
                 C 584 118, 578 120, 576 124 
                 C 574 126, 572 126, 570 126 
                 C 568 126, 568 124, 568 120 
                 L 568 98 
                 L 582 98 
                 C 588 98, 592 94, 592 88 
                 C 592 82, 588 78, 582 78 
                 L 568 78 
                 L 568 68 Z"
            />
          </g>
        </g>
      </svg>
    </motion.div>
  );
};
