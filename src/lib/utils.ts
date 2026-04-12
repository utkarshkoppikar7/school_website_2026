import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Color map for dynamic accent assignments
export const accentColorMap = {
  red: {
    bg: "bg-red-100",
    softBg: "bg-red-50",
    text: "text-red-600",
    border: "border-red-300",
    icon: "text-red-500",
  },
  emerald: {
    bg: "bg-emerald-100",
    softBg: "bg-emerald-50",
    text: "text-emerald-600",
    border: "border-emerald-300",
    icon: "text-emerald-500",
  },
  sky: {
    bg: "bg-sky-100",
    softBg: "bg-sky-50",
    text: "text-sky-600",
    border: "border-sky-300",
    icon: "text-sky-500",
  },
  violet: {
    bg: "bg-violet-100",
    softBg: "bg-violet-50",
    text: "text-violet-600",
    border: "border-violet-300",
    icon: "text-violet-500",
  },
  amber: {
    bg: "bg-amber-100",
    softBg: "bg-amber-50",
    text: "text-amber-600",
    border: "border-amber-300",
    icon: "text-amber-500",
  },
  rose: {
    bg: "bg-rose-100",
    softBg: "bg-rose-50",
    text: "text-rose-600",
    border: "border-rose-300",
    icon: "text-rose-500",
  },
  orange: {
    bg: "bg-orange-100",
    softBg: "bg-orange-50",
    text: "text-orange-600",
    border: "border-orange-300",
    icon: "text-orange-500",
  },
  teal: {
    bg: "bg-teal-100",
    softBg: "bg-teal-50",
    text: "text-teal-600",
    border: "border-teal-300",
    icon: "text-teal-500",
  },
} as const;

export type AccentColor = keyof typeof accentColorMap;
