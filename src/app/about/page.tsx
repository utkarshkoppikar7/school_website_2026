"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Flame, Award, Users } from "lucide-react";
import { PageHero, SectionWrapper, SectionHeader } from "@/components/ui/section";
import { Placeholder } from "@/components/ui/placeholder";
import { FloatingShape } from "@/components/ui/decorations";
import { schoolData } from "@/lib/data";
import {
  fadeInUp, fadeInLeft, fadeInRight, staggerContainer, viewportConfig
} from "@/lib/motion";

const valueIcons = { Heart, Flame, Award, Users };
const valueColors: Record<string, string> = {
  rose: "text-rose-500 bg-rose-100",
  amber: "text-amber-600 bg-amber-100",
  violet: "text-violet-600 bg-violet-100",
  emerald: "text-emerald-600 bg-emerald-100",
};

const timeline = [
  { year: "1986", event: "Founded as Disneyland School by the Koppikar family", color: "bg-emerald-500" },
  { year: "2000s", event: "Growth and curriculum expansion across all grades", color: "bg-sky-500" },
  { year: "Today", event: "500+ students, trusted by Dharwad families for 39+ years", color: "bg-brand-500" },
];

export default function AboutPage() {
  const { principal, chiefAcademicOfficer, values } = schoolData;

  return (
    <>
      <PageHero
        title="About SKVM"
        subtitle="39 years of building futures, one child at a time"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      {/* ─── OUR STORY ────────────────────────────────────────────────────────── */}
      <SectionWrapper background="white">
        <FloatingShape shape="circle" color="#10B981" size={200} className="absolute top-0 right-0" animationDelay="0.5s" />
        <FloatingShape shape="blob" color="#0EA5E9" size={150} className="absolute bottom-10 left-10" />

        <div className="grid lg:grid-cols-[55%_45%] gap-12 items-start">
          <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={viewportConfig}>
            <SectionHeader eyebrow="OUR STORY" title="From Disneyland School to SKVM" alignment="left" className="mb-6" />
            <div className="space-y-4 text-body-lg text-stone-600 mb-10">
              <p>
                Founded in 1986 as <em>Disneyland School</em>, the institution was born from the vision of
                creating a school that feels like a second home — a place where every child arrives with
                excitement and leaves with knowledge, friends, and confidence.
              </p>
              <p>
                Over nearly four decades, it has grown into{" "}
                <strong className="text-stone-900">Sheela Koppikar Vidya Mandir</strong> — a name synonymous
                with excellence in primary education in Dharwad. The school&apos;s ethos has always been
                simple: nurture each child&apos;s unique potential in a warm, caring environment.
              </p>
              <p>
                Today, with 500+ students and a dedicated faculty team, SKVM continues its founding
                mission — building leaders with heart and soul.
              </p>
            </div>

            {/* Timeline */}
            <div className="space-y-5">
              {timeline.map((item, i) => (
                <motion.div key={i} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportConfig}
                  className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-full ${item.color} flex items-center justify-center shrink-0 mt-0.5`}>
                    <span className="text-white text-xs font-body font-bold">{i + 1}</span>
                  </div>
                  <div>
                    <p className="text-sm font-body font-bold text-stone-400 mb-0.5">{item.year}</p>
                    <p className="text-sm font-body text-stone-700 leading-relaxed">{item.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeInRight} initial="hidden" whileInView="visible" viewport={viewportConfig} className="lg:sticky lg:top-28">
            <Placeholder label="School Building Exterior" aspectRatio="3/4" colorScheme="sky" className="rounded-2xl" />
          </motion.div>
        </div>
      </SectionWrapper>

      {/* ─── LEADERSHIP ───────────────────────────────────────────────────────── */}
      <SectionWrapper background="alternate">
        <FloatingShape shape="ring" color="#E03131" size={180} className="absolute top-10 right-10" />

        <SectionHeader eyebrow="LEADERSHIP" title="The Faces Behind Our Mission" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid md:grid-cols-2 gap-8"
        >
          {[
            { person: principal, accentClass: "bg-brand-500", borderClass: "border-brand-500", bgClass: "bg-brand-50", scheme: "red" as const },
            { person: chiefAcademicOfficer, accentClass: "bg-violet-500", borderClass: "border-violet-500", bgClass: "bg-violet-50", scheme: "violet" as const },
          ].map(({ person, accentClass, borderClass, bgClass, scheme }) => (
            <motion.div key={person.name} variants={fadeInUp}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className={`h-1.5 ${accentClass}`} />
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden shrink-0">
                    <Placeholder label={`${person.name}`} aspectRatio="1/1" colorScheme={scheme} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-stone-900 text-lg">{person.name}</h3>
                    <p className="text-sm font-body text-stone-500">{person.title}</p>
                  </div>
                </div>
                <blockquote className={`font-heading italic text-stone-700 leading-relaxed pl-4 border-l-4 ${borderClass} ${bgClass} rounded-r-xl py-3 pr-3`}>
                  &ldquo;{person.message}&rdquo;
                </blockquote>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* ─── OUR VALUES ───────────────────────────────────────────────────────── */}
      <SectionWrapper background="white">
        <SectionHeader eyebrow="OUR VALUES" title="What We Stand For" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid sm:grid-cols-2 gap-8"
        >
          {values.map((value) => {
            const Icon = valueIcons[value.icon as keyof typeof valueIcons];
            const colors = valueColors[value.color] || "text-stone-500 bg-stone-100";
            return (
              <motion.div key={value.title} variants={fadeInUp}
                className="p-8 rounded-2xl border border-stone-100 hover:border-stone-200 hover:shadow-md transition-all">
                <div className={`w-14 h-14 rounded-2xl ${colors} flex items-center justify-center mb-5`}>
                  {Icon && <Icon className="w-7 h-7" />}
                </div>
                <h3 className="font-heading text-xl font-bold text-stone-900 mb-2">{value.title}</h3>
                <p className="font-body text-stone-500 leading-relaxed">{value.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </SectionWrapper>

      {/* ─── CTA ──────────────────────────────────────────────────────────────── */}
      <section className="relative py-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #E03131 0%, #C92A2A 100%)" }}>
        <FloatingShape shape="blob" color="#F59E0B" size={200} className="absolute top-0 right-0 opacity-10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportConfig}
            className="text-h1 font-display font-extrabold text-white mb-4">
            Become Part of the SKVM Family
          </motion.h2>
          <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportConfig}
            className="text-body-lg text-white/80 mb-8">
            Admissions open for 2027-28. Limited seats available.
          </motion.p>
          <Link href="/admissions" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-brand-500 font-body font-bold text-lg hover:bg-stone-50 transition-all shadow-xl hover:-translate-y-1">
            Apply Now →
          </Link>
        </div>
      </section>
    </>
  );
}
