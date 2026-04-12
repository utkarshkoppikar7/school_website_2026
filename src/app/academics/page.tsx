"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Monitor, BookOpen, Trophy, Palette, Bus,
  Sprout, Microscope, Rocket,
  Gamepad2, FlaskConical, Music, BarChart3,
} from "lucide-react";
import { PageHero, SectionWrapper, SectionHeader } from "@/components/ui/section";
import { Placeholder } from "@/components/ui/placeholder";
import { FloatingShape, DoodleDecoration, WaveDivider } from "@/components/ui/decorations";
import { ColorfulBadge } from "@/components/ui/colorful-badge";
import { schoolData } from "@/lib/data";
import {
  fadeInUp, fadeInLeft, fadeInRight, staggerContainer,
  colorfulStagger, popIn, scaleIn, viewportConfig
} from "@/lib/motion";
import { useState } from "react";

const tabIcons = { Sprout, BookOpen, Microscope, Rocket };
const facilityIcons = { Monitor, BookOpen, Trophy, Palette, Bus };
const facilityColors: Record<string, string> = {
  sky: "text-sky-500 bg-sky-100",
  teal: "text-teal-500 bg-teal-100",
  orange: "text-orange-500 bg-orange-100",
  violet: "text-violet-500 bg-violet-100",
  emerald: "text-emerald-500 bg-emerald-100",
};
const facilityPlaceholderColors: Record<string, "sky" | "teal" | "orange" | "violet" | "emerald"> = {
  sky: "sky", teal: "teal", orange: "orange", violet: "violet", emerald: "emerald",
};

const subjects = [
  { name: "English", icon: "📖", desc: "Language, literature & communication", color: "bg-sky-50 border-sky-200" },
  { name: "Hindi", icon: "🇮🇳", desc: "National language proficiency", color: "bg-orange-50 border-orange-200" },
  { name: "Mathematics", icon: "🔢", desc: "Numbers, logic & problem-solving", color: "bg-violet-50 border-violet-200" },
  { name: "EVS", icon: "🌿", desc: "Environmental & social studies", color: "bg-emerald-50 border-emerald-200" },
  { name: "General Knowledge", icon: "🌍", desc: "Awareness of the world around us", color: "bg-amber-50 border-amber-200" },
  { name: "Computer Science", icon: "💻", desc: "Digital literacy & coding basics", color: "bg-sky-50 border-sky-200" },
  { name: "Art & Craft", icon: "🎨", desc: "Creative expression & fine motor skills", color: "bg-rose-50 border-rose-200" },
  { name: "Physical Education", icon: "⚽", desc: "Sports, fitness & teamwork", color: "bg-orange-50 border-orange-200" },
  { name: "Music & Dance", icon: "🎵", desc: "Rhythm, movement & cultural arts", color: "bg-violet-50 border-violet-200" },
];

const methodCards = [
  { icon: Gamepad2, emoji: "🎮", title: "Learning Through Play", desc: "Concepts taught through games, puzzles, and interactive activities that make learning irresistible.", color: "text-emerald-600 bg-emerald-100", border: "border-l-4 border-emerald-500" },
  { icon: FlaskConical, emoji: "🔬", title: "Hands-on Exploration", desc: "Lab experiments and real-world observation to develop scientific thinking from an early age.", color: "text-sky-600 bg-sky-100", border: "border-l-4 border-sky-500" },
  { icon: Music, emoji: "🎨", title: "Creative Expression", desc: "Art, music, and drama as core learning tools that develop imagination and emotional intelligence.", color: "text-violet-600 bg-violet-100", border: "border-l-4 border-violet-500" },
  { icon: BarChart3, emoji: "📊", title: "Continuous Assessment", desc: "Regular, pressure-free evaluation that tracks progress holistically and celebrates every milestone.", color: "text-amber-600 bg-amber-100", border: "border-l-4 border-amber-500" },
];

const tabDetails: Record<string, { subjects: string[], activities: string[], outcomes: string[], placeholderColor: "emerald" | "sky" | "violet" | "amber" }> = {
  "Nursery & KG": {
    subjects: ["Alphabets & Numbers", "Colors & Shapes", "Rhymes & Storytelling", "Sensory Activities"],
    activities: ["Sand play", "Block building", "Musical circles", "Nature walks"],
    outcomes: ["Love of learning", "Social skills", "Language foundation", "Fine motor development"],
    placeholderColor: "emerald",
  },
  "Primary I": {
    subjects: ["Reading & Writing", "Basic Maths", "EVS", "Hindi", "Art & PE"],
    activities: ["Reading circles", "Math games", "Science explore", "Craft projects"],
    outcomes: ["Reading fluency", "Numeracy skills", "Critical thinking", "Creative expression"],
    placeholderColor: "sky",
  },
  "Primary II": {
    subjects: ["Advanced Maths", "Science", "Social Studies", "Computer Basics", "Languages"],
    activities: ["Science projects", "Group research", "Debates", "Field trips"],
    outcomes: ["Inquiry mindset", "Collaboration", "Research skills", "Environmental awareness"],
    placeholderColor: "violet",
  },
  "Primary III": {
    subjects: ["All Core Subjects", "Leadership Projects", "Digital Literacy", "Life Skills"],
    activities: ["Project-based learning", "School leadership", "Public speaking", "Community service"],
    outcomes: ["Leadership skills", "Responsibility", "Middle school readiness", "Civic awareness"],
    placeholderColor: "amber",
  },
};

export default function AcademicsPage() {
  const [activeTab, setActiveTab] = useState("Nursery & KG");
  const tabs = ["Nursery & KG", "Primary I", "Primary II", "Primary III"];
  const detail = tabDetails[activeTab];

  return (
    <>
      <PageHero
        title="Academics"
        subtitle="Comprehensive education for holistic development"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Academics" }]}
        accentColor="#0EA5E9"
      />

      {/* ─── PHILOSOPHY ───────────────────────────────────────────────────────── */}
      <SectionWrapper background="default">
        <FloatingShape shape="circle" color="#10B981" size={200} className="absolute top-0 right-0" />
        <DoodleDecoration type="pencil" color="#8B5CF6" size={40} className="absolute top-16 right-24 opacity-20" />

        <div className="max-w-3xl mx-auto text-center">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportConfig}>
            <p className="text-xs font-body font-semibold uppercase tracking-[0.2em] text-brand-500 mb-3">OUR APPROACH</p>
            <div className="w-12 h-1 rounded-full bg-brand-500 mb-5 mx-auto" />
            <h2 className="text-h2 font-display font-bold text-stone-900 mb-6">Learning Should Be Fun</h2>
            <p className="text-body-lg text-stone-500 leading-relaxed">
              At SKVM, we believe that the best learning happens when children are engaged, curious, and joyful.
              Our activity-based, child-centered approach ensures that every lesson feels like an adventure.
              We blend academic rigor with play, creativity with discipline, and guidance with freedom — because
              that&apos;s how remarkable human beings are shaped.
            </p>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* ─── PROGRAMS TABS ────────────────────────────────────────────────────── */}
      <SectionWrapper background="white">
        <SectionHeader eyebrow="GRADE-WISE" title="Programs for Every Stage" titleFont="display" />

        {/* Tab buttons */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              id={`tab-${tab.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-full font-body font-semibold text-sm transition-all ${
                activeTab === tab
                  ? "bg-brand-500 text-white shadow-md"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid lg:grid-cols-2 gap-10 items-start"
        >
          <div>
            <h3 className="font-display text-2xl font-bold text-stone-900 mb-6">{activeTab}</h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-stone-50 rounded-xl p-4">
                <p className="text-xs font-body text-stone-400 uppercase tracking-wide mb-2">Subjects</p>
                <ul className="space-y-1">
                  {detail.subjects.map((s) => (
                    <li key={s} className="text-sm font-body text-stone-700 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-stone-50 rounded-xl p-4">
                <p className="text-xs font-body text-stone-400 uppercase tracking-wide mb-2">Activities</p>
                <ul className="space-y-1">
                  {detail.activities.map((a) => (
                    <li key={a} className="text-sm font-body text-stone-700 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-brand-50 rounded-xl p-4">
              <p className="text-xs font-body text-brand-500 uppercase tracking-wide mb-2 font-semibold">Learning Outcomes</p>
              <div className="flex flex-wrap gap-2">
                {detail.outcomes.map((o) => (
                  <span key={o} className="px-3 py-1 rounded-full text-xs font-body font-medium bg-brand-100 text-brand-700">{o}</span>
                ))}
              </div>
            </div>
          </div>
          <Placeholder
            label={`${activeTab} Classroom`}
            aspectRatio="4/3"
            colorScheme={detail.placeholderColor}
            className="rounded-2xl"
          />
        </motion.div>
      </SectionWrapper>

      {/* ─── SUBJECTS GRID ────────────────────────────────────────────────────── */}
      <SectionWrapper background="alternate">
        <SectionHeader eyebrow="WHAT WE TEACH" title="Our Curriculum" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {subjects.map((subj) => (
            <motion.div
              key={subj.name}
              variants={fadeInUp}
              className={`rounded-xl p-5 border ${subj.color} hover:shadow-sm transition-shadow flex items-center gap-4`}
            >
              <span className="text-3xl">{subj.icon}</span>
              <div>
                <h4 className="font-body font-semibold text-stone-800">{subj.name}</h4>
                <p className="text-xs font-body text-stone-500 mt-0.5">{subj.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* ─── FACILITIES ───────────────────────────────────────────────────────── */}
      <SectionWrapper background="white">
        <SectionHeader eyebrow="FACILITIES" title="World-Class Infrastructure" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {schoolData.facilities.map((facility, i) => {
            const FacilityIcon = facilityIcons[facility.icon as keyof typeof facilityIcons];
            const iconColors = facilityColors[facility.color] || "text-stone-500 bg-stone-100";
            const phColor = facilityPlaceholderColors[facility.color] || "sky";
            return (
              <motion.div key={facility.name} variants={scaleIn}
                className="rounded-2xl overflow-hidden border border-stone-100 hover:shadow-lg transition-all group">
                <Placeholder
                  label={facility.name}
                  aspectRatio="16/9"
                  colorScheme={phColor}
                  className="rounded-none border-0"
                />
                <div className="p-5">
                  <div className={`w-10 h-10 rounded-xl ${iconColors} flex items-center justify-center mb-3`}>
                    {FacilityIcon && <FacilityIcon className="w-5 h-5" />}
                  </div>
                  <h3 className="font-body font-semibold text-stone-900 mb-1">{facility.name}</h3>
                  <p className="text-sm font-body text-stone-500">{facility.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </SectionWrapper>

      {/* ─── METHODOLOGY ──────────────────────────────────────────────────────── */}
      <SectionWrapper background="alternate">
        <SectionHeader eyebrow="HOW WE TEACH" title="Our Teaching Methodology" />

        <motion.div
          variants={colorfulStagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid sm:grid-cols-2 gap-6"
        >
          {methodCards.map((card) => (
            <motion.div
              key={card.title}
              variants={popIn}
              className={`bg-white rounded-2xl p-7 ${card.border} hover:shadow-md transition-shadow`}
            >
              <div className={`w-12 h-12 rounded-xl ${card.color} flex items-center justify-center mb-4`}>
                <card.icon className="w-6 h-6" />
              </div>
              <h3 className="font-body font-semibold text-stone-800 text-lg mb-2">{card.title}</h3>
              <p className="text-sm font-body text-stone-500 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>
    </>
  );
}
