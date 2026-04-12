"use client";

import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  background?: "default" | "alternate" | "dark" | "brand" | "white";
  contained?: boolean;
  id?: string;
}

export function SectionWrapper({
  children,
  className,
  background = "default",
  contained = true,
  id,
}: SectionWrapperProps) {
  const bgMap = {
    default: "bg-stone-50",
    alternate: "bg-stone-100",
    dark: "bg-stone-900 text-white",
    brand: "bg-brand-500 text-white",
    white: "bg-white",
  };

  return (
    <section
      id={id}
      className={cn("relative py-20 lg:py-28 overflow-hidden", bgMap[background], className)}
    >
      {contained ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
      ) : (
        children
      )}
    </section>
  );
}

// ─── Section Header ───────────────────────────────────────────────────────────
interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  alignment?: "left" | "center";
  className?: string;
  titleFont?: "heading" | "display";
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  alignment = "center",
  className,
  titleFont = "heading",
}: SectionHeaderProps) {
  const isCenter = alignment === "center";

  return (
    <div className={cn("mb-12 lg:mb-16", isCenter && "text-center", className)}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-500 font-body mb-2">
          {eyebrow}
        </p>
      )}
      {/* Red decorative bar */}
      <div
        className={cn(
          "w-12 h-1 rounded-full bg-brand-500 mb-4",
          isCenter && "mx-auto"
        )}
      />
      <h2
        className={cn(
          "text-h2",
          titleFont === "display" ? "font-display" : "font-heading",
          "text-stone-900 mb-4"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-body-lg text-stone-500 max-w-2xl",
            isCenter && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

// ─── Inner Page Hero ──────────────────────────────────────────────────────────
interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; href?: string }[];
  accentColor?: string;
}

export function PageHero({
  title,
  subtitle,
  breadcrumbs,
  accentColor = "#e03131",
}: PageHeroProps) {
  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #1c1917 0%, #292524 60%, #1c1917 100%)",
      }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10"
        style={{ background: accentColor, filter: "blur(60px)" }}
        aria-hidden
      />
      <div
        className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-10"
        style={{ background: "#e03131", filter: "blur(50px)" }}
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {breadcrumbs && (
          <nav className="flex items-center gap-2 text-sm font-body mb-6">
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span className="text-stone-600">/</span>}
                {crumb.href && i < breadcrumbs.length - 1 ? (
                  <a
                    href={crumb.href}
                    className="text-stone-400 hover:text-white transition-colors"
                  >
                    {crumb.label}
                  </a>
                ) : (
                  <span className="text-white">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 className="text-h1 font-display text-white mb-4">{title}</h1>
        {subtitle && (
          <p className="text-body-lg text-stone-300 max-w-xl">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
