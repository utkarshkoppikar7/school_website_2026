"use client";

import { cn } from "@/lib/utils";

// ─── Wave Divider ──────────────────────────────────────────────────────────────
interface WaveDividerProps {
  fill?: string;
  flip?: boolean;
  variant?: 1 | 2 | 3;
  className?: string;
}

const wavePaths = {
  1: "M0,32L60,42.7C120,53,240,75,360,74.7C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z",
  2: "M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,80C672,85,768,75,864,64C960,53,1056,43,1152,48C1248,53,1344,75,1392,85.3L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z",
  3: "M0,96L80,85.3C160,75,320,53,480,48C640,43,800,53,960,64C1120,75,1280,85,1360,90.7L1440,96L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z",
};

export function WaveDivider({
  fill = "#ffffff",
  flip = false,
  variant = 1,
  className,
}: WaveDividerProps) {
  return (
    <div
      className={cn("w-full overflow-hidden leading-none", className)}
      style={{ transform: flip ? "rotate(180deg)" : undefined }}
    >
      <svg
        viewBox="0 0 1440 120"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-16 md:h-20"
        preserveAspectRatio="none"
      >
        <path d={wavePaths[variant]} fill={fill} />
      </svg>
    </div>
  );
}

// ─── Doodle Decorations ───────────────────────────────────────────────────────
type DoodleType =
  | "star"
  | "squiggle"
  | "circle"
  | "dots"
  | "sparkle"
  | "heart"
  | "book"
  | "pencil";

interface DoodleDecorationProps {
  type?: DoodleType;
  color?: string;
  size?: number;
  className?: string;
  animate?: boolean;
}

const doodlePaths: Record<DoodleType, string> = {
  star: `<polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
  sparkle: `<path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/><circle cx="4" cy="4" r="1" fill="currentColor"/><circle cx="20" cy="18" r="1" fill="currentColor"/>`,
  circle: `<circle cx="12" cy="12" r="9" stroke-width="1.5" fill="none" stroke-linecap="round"/>`,
  squiggle: `<path d="M2 12 Q5 8 8 12 Q11 16 14 12 Q17 8 20 12 Q23 16 26 12" stroke-width="2" fill="none" stroke-linecap="round"/>`,
  dots: `<circle cx="4" cy="12" r="2" fill="currentColor"/><circle cx="12" cy="12" r="2" fill="currentColor"/><circle cx="20" cy="12" r="2" fill="currentColor"/><circle cx="8" cy="6" r="1.5" fill="currentColor"/><circle cx="16" cy="18" r="1.5" fill="currentColor"/>`,
  heart: `<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
  book: `<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
  pencil: `<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
};

export function DoodleDecoration({
  type = "star",
  color = "currentColor",
  size = 32,
  className,
  animate = true,
}: DoodleDecorationProps) {
  const viewBox = type === "squiggle" ? "0 0 28 24" : "0 0 24 24";

  return (
    <span
      className={cn(animate && "animate-float-slow", className)}
      style={{ color, display: "inline-block", width: size, height: size }}
      aria-hidden="true"
    >
      <svg
        viewBox={viewBox}
        width={size}
        height={size}
        xmlns="http://www.w3.org/2000/svg"
        dangerouslySetInnerHTML={{ __html: doodlePaths[type] }}
      />
    </span>
  );
}

// ─── Floating Shape ───────────────────────────────────────────────────────────
type ShapeType = "circle" | "blob" | "ring" | "triangle";

interface FloatingShapeProps {
  shape?: ShapeType;
  color?: string;
  size?: number;
  className?: string;
  animationDelay?: string;
}

export function FloatingShape({
  shape = "circle",
  color = "#e03131",
  size = 120,
  className,
  animationDelay = "0s",
}: FloatingShapeProps) {
  const shapeEl = {
    circle: (
      <div
        className="rounded-full"
        style={{ width: size, height: size, backgroundColor: color }}
      />
    ),
    ring: (
      <div
        className="rounded-full border-4"
        style={{
          width: size,
          height: size,
          borderColor: color,
          backgroundColor: "transparent",
        }}
      />
    ),
    blob: (
      <div
        style={{
          width: size,
          height: size,
          backgroundColor: color,
          borderRadius: "60% 40% 55% 45% / 45% 55% 45% 55%",
        }}
      />
    ),
    triangle: (
      <div
        style={{
          width: 0,
          height: 0,
          borderLeft: `${size / 2}px solid transparent`,
          borderRight: `${size / 2}px solid transparent`,
          borderBottom: `${size}px solid ${color}`,
        }}
      />
    ),
  };

  return (
    <span
      className={cn("animate-float-slow", className)}
      style={{ animationDelay, opacity: 0.07, display: "inline-block" }}
      aria-hidden="true"
    >
      {shapeEl[shape]}
    </span>
  );
}
