import { cn } from "@/lib/utils";

type BadgeColor =
  | "red"
  | "emerald"
  | "sky"
  | "violet"
  | "amber"
  | "orange"
  | "teal"
  | "rose";
type BadgeVariant = "solid" | "soft" | "outline";

interface ColorfulBadgeProps {
  text: string;
  color?: BadgeColor;
  variant?: BadgeVariant;
  className?: string;
}

const colorMap: Record<BadgeColor, Record<BadgeVariant, string>> = {
  red: {
    solid: "bg-red-500 text-white",
    soft: "bg-red-100 text-red-700",
    outline: "border border-red-400 text-red-600 bg-transparent",
  },
  emerald: {
    solid: "bg-emerald-500 text-white",
    soft: "bg-emerald-100 text-emerald-700",
    outline: "border border-emerald-400 text-emerald-600 bg-transparent",
  },
  sky: {
    solid: "bg-sky-500 text-white",
    soft: "bg-sky-100 text-sky-700",
    outline: "border border-sky-400 text-sky-600 bg-transparent",
  },
  violet: {
    solid: "bg-violet-500 text-white",
    soft: "bg-violet-100 text-violet-700",
    outline: "border border-violet-400 text-violet-600 bg-transparent",
  },
  amber: {
    solid: "bg-amber-400 text-amber-900",
    soft: "bg-amber-100 text-amber-700",
    outline: "border border-amber-400 text-amber-600 bg-transparent",
  },
  orange: {
    solid: "bg-orange-500 text-white",
    soft: "bg-orange-100 text-orange-700",
    outline: "border border-orange-400 text-orange-600 bg-transparent",
  },
  teal: {
    solid: "bg-teal-500 text-white",
    soft: "bg-teal-100 text-teal-700",
    outline: "border border-teal-400 text-teal-600 bg-transparent",
  },
  rose: {
    solid: "bg-rose-500 text-white",
    soft: "bg-rose-100 text-rose-700",
    outline: "border border-rose-400 text-rose-600 bg-transparent",
  },
};

export function ColorfulBadge({
  text,
  color = "red",
  variant = "soft",
  className,
}: ColorfulBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-0.5 rounded-full text-xs font-semibold tracking-wide font-body",
        colorMap[color][variant],
        className
      )}
    >
      {text}
    </span>
  );
}
