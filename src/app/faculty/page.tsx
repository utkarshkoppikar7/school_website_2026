"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Users, Heart, Sparkles } from "lucide-react";
import { PageHero, SectionWrapper, SectionHeader } from "@/components/ui/section";
import { Placeholder } from "@/components/ui/placeholder";
import { FloatingShape, DoodleDecoration } from "@/components/ui/decorations";
import { schoolData } from "@/lib/data";
import {
  fadeInUp, fadeInLeft, fadeInRight, staggerContainer,
  bounceIn, viewportConfig
} from "@/lib/motion";

const teachingPillars = [
  { icon: Users, title: "Individualized Attention", desc: "Every child is seen, heard, and supported in their unique learning journey. Our teachers know each student personally.", color: "text-sky-600 bg-sky-100" },
  { icon: Heart, title: "Nurturing Environment", desc: "A warm, secure classroom where children feel safe to ask questions, make mistakes, and grow without fear.", color: "text-rose-600 bg-rose-100" },
  { icon: Sparkles, title: "Holistic Growth", desc: "We develop the whole child — intellectually, emotionally, socially, and physically — not just academics.", color: "text-violet-600 bg-violet-100" },
];

const facultyStats = [
  { value: "25+", label: "Dedicated Teachers", icon: "👩‍🏫", color: "bg-sky-50 text-sky-500" },
  { value: "15:1", label: "Student-Teacher Ratio", icon: "📊", color: "bg-emerald-50 text-emerald-500" },
  { value: "39+", label: "Years of Educational Legacy", icon: "🏛️", color: "bg-amber-50 text-amber-600" },
  { value: "100%", label: "Commitment to Every Child", icon: "❤️", color: "bg-rose-50 text-rose-500" },
];

export default function FacultyPage() {
  const { principal, chiefAcademicOfficer } = schoolData;

  return (
    <>
      <PageHero
        title="Our Faculty"
        subtitle="Experienced educators committed to your child's growth"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Faculty" }]}
        accentColor="#10B981"
      />

      {/* ─── LEADERSHIP TEAM ──────────────────────────────────────────────────── */}
      <SectionWrapper background="white">
        <FloatingShape shape="circle" color="#10B981" size={200} className="absolute top-0 right-0" />
        <FloatingShape shape="blob" color="#8B5CF6" size={160} className="absolute bottom-10 left-10" animationDelay="1s" />

        <SectionHeader eyebrow="LEADERSHIP" title="Our Leadership Team" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid md:grid-cols-2 gap-10"
        >
          {[
            {
              person: principal,
              scheme: "red" as const,
              accent: "bg-brand-500",
              border: "border-brand-500",
              bg: "bg-brand-50",
              gradient: "from-brand-50 to-white",
            },
            {
              person: chiefAcademicOfficer,
              scheme: "violet" as const,
              accent: "bg-violet-500",
              border: "border-violet-500",
              bg: "bg-violet-50",
              gradient: "from-violet-50 to-white",
            },
          ].map(({ person, scheme, accent, border, bg, gradient }) => (
            <motion.div
              key={person.name}
              variants={fadeInUp}
              className={`rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow bg-gradient-to-b ${gradient} border border-stone-100`}
            >
              <div className={`h-2 ${accent}`} />
              <div className="p-8 lg:p-10">
                <div className="flex flex-col items-center text-center mb-8">
                  <div className="w-28 h-28 rounded-full overflow-hidden mb-4 ring-4 ring-stone-100">
                    <Placeholder label={person.name} aspectRatio="1/1" colorScheme={scheme} />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-stone-900">{person.name}</h3>
                  <p className="text-sm font-body text-stone-500 mt-1">{person.title}</p>
                </div>
                <blockquote className={`font-heading italic text-stone-700 leading-loose text-lg pl-5 border-l-4 ${border} ${bg} rounded-r-2xl py-4 pr-4`}>
                  &ldquo;{person.message}&rdquo;
                </blockquote>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* ─── TEACHING PHILOSOPHY ──────────────────────────────────────────────── */}
      <SectionWrapper background="alternate">
        <DoodleDecoration type="heart" color="#F43F5E" size={36} className="absolute top-16 right-20 opacity-20" />
        <DoodleDecoration type="star" color="#F59E0B" size={32} className="absolute bottom-20 left-12 opacity-20" />

        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportConfig}>
            <p className="text-xs font-body font-semibold uppercase tracking-[0.2em] text-brand-500 mb-3">OUR PHILOSOPHY</p>
            <div className="w-12 h-1 rounded-full bg-brand-500 mb-5 mx-auto" />
            <h2 className="text-h2 font-heading font-bold text-stone-900 mb-6">Every Child Is Unique</h2>
            <blockquote className="font-heading italic text-2xl text-stone-700 leading-relaxed border-l-4 border-brand-500 pl-6 text-left">
              &ldquo;We at SKVM provide a conducive and loving atmosphere to bring out the best in every child.&rdquo;
            </blockquote>
            <p className="text-sm font-body text-stone-500 mt-3 text-left pl-6">— {principal.name}, {principal.title}</p>
          </motion.div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid md:grid-cols-3 gap-6"
        >
          {teachingPillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={fadeInUp}
              className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`w-12 h-12 rounded-xl ${pillar.color} flex items-center justify-center mb-4`}>
                <pillar.icon className="w-6 h-6" />
              </div>
              <h3 className="font-body font-semibold text-stone-800 text-lg mb-2">{pillar.title}</h3>
              <p className="text-sm font-body text-stone-500 leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* ─── STATS ────────────────────────────────────────────────────────────── */}
      <SectionWrapper background="white">
        <SectionHeader eyebrow="BY THE NUMBERS" title="Our Faculty at a Glance" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {facultyStats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={bounceIn}
              className={`rounded-2xl ${stat.color.split(" ")[0]} p-8 text-center hover:shadow-md transition-shadow`}
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <p className={`font-display text-3xl font-bold mb-1 ${stat.color.split(" ")[1]}`}>{stat.value}</p>
              <p className="text-sm font-body text-stone-500 leading-tight">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>
    </>
  );
}
