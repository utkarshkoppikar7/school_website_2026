"use client";

import { cn } from "@/lib/utils";
import { ImageIcon } from "lucide-react";

type ColorScheme =
  | "red"
  | "emerald"
  | "sky"
  | "violet"
  | "amber"
  | "orange"
  | "teal"
  | "rose";

interface PlaceholderProps {
  label: string;
  aspectRatio?: "1/1" | "4/3" | "16/9" | "3/4" | "3/2";
  className?: string;
  colorScheme?: ColorScheme;
  icon?: React.ReactNode;
}

const schemeMap: Record<
  ColorScheme,
  { bg: string; border: string; icon: string; text: string }
> = {
  red: {
    bg: "bg-red-50",
    border: "border-red-200",
    icon: "text-red-400",
    text: "text-red-400",
  },
  emerald: {
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    icon: "text-emerald-400",
    text: "text-emerald-400",
  },
  sky: {
    bg: "bg-sky-50",
    border: "border-sky-200",
    icon: "text-sky-400",
    text: "text-sky-400",
  },
  violet: {
    bg: "bg-violet-50",
    border: "border-violet-200",
    icon: "text-violet-400",
    text: "text-violet-400",
  },
  amber: {
    bg: "bg-amber-50",
    border: "border-amber-200",
    icon: "text-amber-400",
    text: "text-amber-400",
  },
  orange: {
    bg: "bg-orange-50",
    border: "border-orange-200",
    icon: "text-orange-400",
    text: "text-orange-400",
  },
  teal: {
    bg: "bg-teal-50",
    border: "border-teal-200",
    icon: "text-teal-400",
    text: "text-teal-400",
  },
  rose: {
    bg: "bg-rose-50",
    border: "border-rose-200",
    icon: "text-rose-400",
    text: "text-rose-400",
  },
};

const aspectMap: Record<string, string> = {
  "1/1": "aspect-square",
  "4/3": "aspect-[4/3]",
  "16/9": "aspect-video",
  "3/4": "aspect-[3/4]",
  "3/2": "aspect-[3/2]",
};

export function Placeholder({
  label,
  aspectRatio = "4/3",
  className,
  colorScheme = "red",
  icon,
}: PlaceholderProps) {
  const scheme = schemeMap[colorScheme];
  const aspectClass = aspectMap[aspectRatio] ?? "aspect-[4/3]";

  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center rounded-2xl border-2 border-dashed overflow-hidden",
        scheme.bg,
        scheme.border,
        aspectClass,
        className
      )}
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative flex flex-col items-center gap-2">
        <div className={cn("animate-float", scheme.icon)}>
          {icon ?? <ImageIcon className="w-10 h-10" strokeWidth={1.5} />}
        </div>
        <p className={cn("text-sm font-medium text-center px-4", scheme.text)}>
          {label}
        </p>
      </div>
    </div>
  );
}
