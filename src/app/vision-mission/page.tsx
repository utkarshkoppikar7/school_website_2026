"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Quote, BookOpen, ShieldCheck, Globe } from "lucide-react";
import { PageHero, SectionWrapper, SectionHeader } from "@/components/ui/section";
import { Placeholder } from "@/components/ui/placeholder";
import { FloatingShape, DoodleDecoration } from "@/components/ui/decorations";
import { schoolData } from "@/lib/data";
import {
  fadeInUp, fadeInLeft, fadeInRight, staggerContainer,
  scaleIn, viewportConfig
} from "@/lib/motion";

const coreValues = [
  { title: "Integrity", icon: ShieldCheck, color: "text-emerald-500 bg-emerald-100" },
  { title: "Excellence", icon: BookOpen, color: "text-sky-500 bg-sky-100" },
  { title: "Compassion", icon: Quote, color: "text-rose-500 bg-rose-100" },
  { title: "Innovation", icon: Globe, color: "text-violet-500 bg-violet-100" },
  { title: "Respect", icon: ShieldCheck, color: "text-amber-600 bg-amber-100" },
  { title: "Growth", icon: BookOpen, color: "text-teal-500 bg-teal-100" },
];

const approachPillars = [
  {
    icon: "📚",
    title: "Academic Excellence",
    desc: "A rigorous yet enjoyable curriculum that challenges students while keeping learning fun and engaging.",
    color: "bg-sky-50 border-sky-200",
  },
  {
    icon: "💪",
    title: "Character Building",
    desc: "Instilling values of discipline, empathy, and respect that students carry throughout their lives.",
    color: "bg-violet-50 border-violet-200",
  },
  {
    icon: "🌍",
    title: "Life Skills",
    desc: "Practical skills for the 21st century — communication, collaboration, creativity, and critical thinking.",
    color: "bg-emerald-50 border-emerald-200",
  },
];

export default function VisionMissionPage() {
  return (
    <>
      <PageHero
        title="Vision & Mission"
        subtitle="Guiding principles that shape every decision we make"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Vision & Mission" }]}
        accentColor="#8B5CF6"
      />

      {/* ─── VISION ───────────────────────────────────────────────────────────── */}
      <SectionWrapper background="white">
        <FloatingShape shape="circle" color="#8B5CF6" size={250} className="absolute top-0 left-0" />
        <FloatingShape shape="ring" color="#10B981" size={150} className="absolute bottom-10 right-10" />

        <div className="grid lg:grid-cols-[45%_55%] gap-12 items-center">
          <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={viewportConfig}>
            <Placeholder label="Students in assembly" aspectRatio="4/3" colorScheme="violet" className="rounded-2xl" />
          </motion.div>

          <motion.div variants={fadeInRight} initial="hidden" whileInView="visible" viewport={viewportConfig} className="relative">
            <div className="absolute -top-6 -left-4 text-brand-200" aria-hidden>
              <Quote className="w-16 h-16" strokeWidth={1} />
            </div>
            <p className="text-xs font-body font-semibold uppercase tracking-[0.2em] text-brand-500 mb-3">OUR VISION</p>
            <div className="w-12 h-1 rounded-full bg-brand-500 mb-5" />
            <p className="font-heading text-h3 text-stone-800 leading-relaxed italic pl-4 border-l-4 border-brand-500">
              {schoolData.vision}
            </p>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* ─── MISSION ──────────────────────────────────────────────────────────── */}
      <SectionWrapper background="default">
        <FloatingShape shape="blob" color="#0EA5E9" size={200} className="absolute top-10 right-10" animationDelay="1s" />

        <div className="grid lg:grid-cols-[55%_45%] gap-12 items-center">
          <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={viewportConfig} className="relative">
            <div className="absolute -top-6 -left-4 text-sky-200" aria-hidden>
              <Quote className="w-16 h-16" strokeWidth={1} />
            </div>
            <p className="text-xs font-body font-semibold uppercase tracking-[0.2em] text-sky-500 mb-3">OUR MISSION</p>
            <div className="w-12 h-1 rounded-full bg-sky-500 mb-5" />
            <p className="font-heading text-h3 text-stone-800 leading-relaxed italic pl-4 border-l-4 border-sky-500">
              {schoolData.mission}
            </p>
          </motion.div>

          <motion.div variants={fadeInRight} initial="hidden" whileInView="visible" viewport={viewportConfig}>
            <Placeholder label="Classroom Activity" aspectRatio="4/3" colorScheme="sky" className="rounded-2xl" />
          </motion.div>
        </div>
      </SectionWrapper>

      {/* ─── CORE VALUES (DARK SECTION) ───────────────────────────────────────── */}
      <SectionWrapper background="dark">
        <DoodleDecoration type="star" color="white" size={32} className="absolute top-8 right-16 opacity-10" />
        <DoodleDecoration type="sparkle" color="white" size={24} className="absolute bottom-16 left-20 opacity-10" />

        <SectionHeader
          eyebrow="CORE VALUES"
          title="The Pillars of Our Philosophy"
          className="[&_p]:text-brand-400 [&_h2]:text-white [&_.w-12]:block"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {coreValues.map((val) => (
            <motion.div
              key={val.title}
              variants={fadeInUp}
              className="bg-stone-800 rounded-xl p-6 border border-stone-700 hover:border-brand-500 transition-colors group"
            >
              <div className={`w-12 h-12 rounded-xl ${val.color} flex items-center justify-center mb-4`}>
                <val.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-2">{val.title}</h3>
              <div className="w-8 h-0.5 rounded-full bg-brand-500 group-hover:w-16 transition-all duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* ─── OUR APPROACH ─────────────────────────────────────────────────────── */}
      <SectionWrapper background="white">
        <SectionHeader eyebrow="HOW WE LIVE OUR MISSION" title="Our Approach to Education" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid md:grid-cols-3 gap-6"
        >
          {approachPillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={scaleIn}
              className={`rounded-2xl p-8 border ${pillar.color} hover:shadow-md transition-shadow`}
            >
              <div className="text-4xl mb-4">{pillar.icon}</div>
              <h3 className="font-display text-xl font-bold text-stone-800 mb-3">{pillar.title}</h3>
              <p className="font-body text-stone-500 leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>
    </>
  );
}
