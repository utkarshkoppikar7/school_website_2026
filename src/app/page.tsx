"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Instagram,
  Youtube,
  GraduationCap,
  Sprout,
  BookOpen,
  Microscope,
  Rocket,
  Heart,
  Lightbulb,
  ShieldCheck,
  Monitor,
  Sparkles,
  Users,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
} from "lucide-react";
import { Placeholder } from "@/components/ui/placeholder";
import { WaveDivider, DoodleDecoration, FloatingShape } from "@/components/ui/decorations";
import { ColorfulBadge } from "@/components/ui/colorful-badge";
import { SectionWrapper, SectionHeader } from "@/components/ui/section";
import {
  colorfulStagger,
  popIn,
  bounceIn,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  gentlePulse,
  viewportConfig,
} from "@/lib/motion";
import { schoolData } from "@/lib/data";

const programIcons = { Sprout, BookOpen, Microscope, Rocket };
const whyIcons = { Heart, Lightbulb, ShieldCheck, Monitor, Sparkles, Users };

export default function HomePage() {
  const { programs, whyChooseUs, galleryLabels, contact, principal } = schoolData;

  return (
    <>
      {/* ─── HERO ──────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[calc(100vh-5rem)] flex items-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #FFFBF5 0%, #FFF5F5 50%, #FFFBEB 100%)" }}>

        {/* Floating background shapes */}
        <FloatingShape shape="circle" color="#10B981" size={300} className="absolute -top-16 -right-16 hidden lg:block" />
        <FloatingShape shape="blob" color="#8B5CF6" size={220} className="absolute bottom-10 -left-10" animationDelay="1s" />
        <FloatingShape shape="ring" color="#F59E0B" size={180} className="absolute top-1/2 right-1/4" animationDelay="2s" />
        <FloatingShape shape="circle" color="#0EA5E9" size={100} className="absolute top-20 left-1/3" animationDelay="0.5s" />

        {/* Doodle accents */}
        <DoodleDecoration type="star" color="#E03131" size={40} className="absolute top-24 left-8 opacity-20" />
        <DoodleDecoration type="sparkle" color="#8B5CF6" size={36} className="absolute bottom-24 right-16 opacity-25" />
        <DoodleDecoration type="book" color="#10B981" size={32} className="absolute bottom-16 left-16 opacity-20" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 w-full">
          <div className="grid lg:grid-cols-[55%_45%] gap-12 items-center">

            {/* Left: Content */}
            <motion.div
              variants={colorfulStagger}
              initial="hidden"
              animate="visible"
              className="text-center lg:text-left lg:pl-4"
            >
              <motion.p variants={popIn} className="text-xs font-body font-semibold uppercase tracking-[0.2em] text-stone-400 mb-4">
                Est. 1986 · Dharwad, Karnataka
              </motion.p>

              <motion.h1 variants={popIn} className="text-display font-display font-extrabold text-stone-900 leading-[1.05] mb-4">
                Sheela<br />
                Koppikar<br />
                <span className="text-brand-500">Vidya</span> Mandir
              </motion.h1>

              <motion.p variants={popIn} className="text-xl font-body font-medium text-brand-500 mb-2">
                Building Leaders With Heart &amp; Soul
              </motion.p>

              <motion.div variants={popIn} className="flex justify-center lg:justify-start mb-6">
                <span className="squiggle-underline text-transparent select-none w-40 h-3 block" />
              </motion.div>

              <motion.p variants={popIn} className="text-body-lg text-stone-500 max-w-lg mx-auto lg:mx-0 mb-8">
                {schoolData.description}
              </motion.p>

              <motion.div variants={popIn} className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8">
                <motion.div animate="animate" variants={gentlePulse}>
                  <Link
                    href="/admissions"
                    id="hero-apply-btn"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-500 text-white font-body font-semibold text-base hover:bg-brand-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  >
                    Admissions Open 2027-28
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </motion.div>
                <Link
                  href="/about"
                  id="hero-explore-btn"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-stone-300 text-stone-700 font-body font-semibold text-base hover:border-brand-500 hover:text-brand-500 transition-all"
                >
                  Explore Our School
                </Link>
              </motion.div>

              <motion.div variants={popIn} className="flex gap-4 justify-center lg:justify-start">
                <a href={contact.social.instagram.url} target="_blank" rel="noopener noreferrer" id="hero-instagram"
                  className="flex items-center gap-2 text-sm font-body text-stone-500 hover:text-pink-500 transition-colors">
                  <Instagram className="w-5 h-5" /> {contact.social.instagram.handle}
                </a>
                <a href={contact.social.youtube.url} target="_blank" rel="noopener noreferrer" id="hero-youtube"
                  className="flex items-center gap-2 text-sm font-body text-stone-500 hover:text-red-500 transition-colors">
                  <Youtube className="w-5 h-5" /> YouTube
                </a>
              </motion.div>
            </motion.div>

            {/* Right: Hero image placeholder with layered Polaroid effect */}
            <motion.div
              variants={bounceIn}
              initial="hidden"
              animate="visible"
              className="relative flex justify-center items-center"
            >
              {/* Offset decorative layers */}
              <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl bg-brand-100" />
              <div className="absolute inset-0 -translate-x-3 translate-y-6 rounded-3xl bg-sky-100" />
              <div className="relative w-full max-w-sm lg:max-w-none rotate-2 shadow-2xl rounded-3xl overflow-hidden">
                <Placeholder
                  label="Happy children in classroom"
                  aspectRatio="3/4"
                  colorScheme="emerald"
                  className="rounded-3xl"
                />
              </div>
            </motion.div>
          </div>
        </div>

        <WaveDivider fill="#ffffff" variant={1} className="absolute bottom-0 left-0 right-0" />
      </section>

      {/* ─── STATS BAR ──────────────────────────────────────────────────────────── */}
      <section className="bg-white border-y border-stone-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={colorfulStagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0"
          >
            {[
              { value: "Nursery – 5th Std", label: "Grades Offered", bg: "bg-emerald-50", iconColor: "text-emerald-500", Icon: GraduationCap },
              { value: "Est. 1986", label: "Year Founded", bg: "bg-sky-50", iconColor: "text-sky-500", Icon: BookOpen },
              { value: "500+", label: "Happy Students", bg: "bg-amber-50", iconColor: "text-amber-500", Icon: Users },
              { value: "39+", label: "Years of Excellence", bg: "bg-violet-50", iconColor: "text-violet-500", Icon: Sparkles },
            ].map((stat, i) => (
              <motion.div key={i} variants={bounceIn} className="flex flex-col items-center gap-2 lg:border-r last:border-0 border-stone-200 px-4">
                <div className={`w-12 h-12 rounded-xl ${stat.bg} flex items-center justify-center mb-1`}>
                  <stat.Icon className={`w-6 h-6 ${stat.iconColor}`} />
                </div>
                <span className="text-2xl font-display font-bold text-stone-900">{stat.value}</span>
                <span className="text-sm font-body text-stone-500 text-center">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <WaveDivider fill="#FAFAF9" variant={2} className="mt-6" />
      </section>

      {/* ─── WELCOME ────────────────────────────────────────────────────────────── */}
      <SectionWrapper background="default">
        <div className="grid lg:grid-cols-[60%_40%] gap-12 items-center">
          <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={viewportConfig}>
            <SectionHeader
              eyebrow="WELCOME"
              title="A Legacy of Nurturing Young Minds"
              alignment="left"
              className="mb-6"
            />
            <p className="text-body-lg text-stone-500 mb-8">{schoolData.description}</p>

            {/* Principal card */}
            <div className="bg-brand-50 border-l-4 border-brand-500 rounded-r-2xl p-5 mb-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6 text-brand-500" />
                </div>
                <div>
                  <p className="font-body font-semibold text-stone-900">{principal.name}</p>
                  <p className="text-xs font-body text-stone-500">{principal.title}</p>
                </div>
              </div>
              <blockquote className="font-heading italic text-stone-700 leading-relaxed">
                &ldquo;{principal.message}&rdquo;
              </blockquote>
            </div>

            <Link href="/about" className="inline-flex items-center gap-1 text-brand-500 font-body font-semibold hover:gap-2 transition-all">
              More About Our Story <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div variants={fadeInRight} initial="hidden" whileInView="visible" viewport={viewportConfig}>
            <Placeholder label="Children in classroom" aspectRatio="4/3" colorScheme="sky" className="rounded-2xl" />
          </motion.div>
        </div>
      </SectionWrapper>

      {/* ─── PROGRAMS ───────────────────────────────────────────────────────────── */}
      <SectionWrapper background="white">
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "radial-gradient(circle, #292524 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }} aria-hidden />

        <SectionHeader eyebrow="ACADEMICS" title="Programs Tailored for Every Age" titleFont="display" />

        <motion.div
          variants={colorfulStagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {programs.map((program) => {
            const Icon = programIcons[program.icon as keyof typeof programIcons];
            return (
              <motion.div
                key={program.title}
                variants={popIn}
                className={`relative rounded-2xl overflow-hidden border-t-4 ${program.borderClass} ${program.bgClass} p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 cursor-pointer`}
              >
                <div className={`w-12 h-12 rounded-xl ${program.iconBgClass} flex items-center justify-center mb-4`}>
                  {Icon && <Icon className={`w-6 h-6 ${program.iconColorClass}`} />}
                </div>
                <ColorfulBadge
                  text={program.ages}
                  color={program.accent as "emerald" | "sky" | "violet" | "amber"}
                  variant="soft"
                  className="mb-3"
                />
                <h3 className="text-h3 font-display font-bold text-stone-800 mb-1">{program.title}</h3>
                <p className="text-sm font-body text-stone-500 mb-2">{program.grades}</p>
                <p className="text-sm font-body text-stone-600 leading-relaxed">{program.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <WaveDivider fill="#F5F5F4" variant={3} className="mt-16 -mx-4 sm:-mx-6 lg:-mx-8" />
      </SectionWrapper>

      {/* ─── WHY CHOOSE SKVM ────────────────────────────────────────────────────── */}
      <SectionWrapper background="alternate">
        <SectionHeader eyebrow="WHY SKVM" title="Why Families Trust Us" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {whyChooseUs.map((item) => {
            const Icon = whyIcons[item.icon as keyof typeof whyIcons];
            const colorBg: Record<string, string> = {
              rose: "bg-rose-100 text-rose-500 border-rose-300",
              amber: "bg-amber-100 text-amber-600 border-amber-300",
              emerald: "bg-emerald-100 text-emerald-600 border-emerald-300",
              sky: "bg-sky-100 text-sky-600 border-sky-300",
              violet: "bg-violet-100 text-violet-600 border-violet-300",
              teal: "bg-teal-100 text-teal-600 border-teal-300",
            };
            return (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className={`bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border hover:border-l-4 group ${item.wide ? "md:col-span-2 lg:col-span-2" : ""}`}
              >
                <div className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center ${colorBg[item.color] || "bg-stone-100 text-stone-500"}`}>
                  {Icon && <Icon className="w-6 h-6" />}
                </div>
                <h3 className="text-h3 font-body font-semibold text-stone-800 mb-2">{item.title}</h3>
                <p className="text-sm font-body text-stone-500 leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </SectionWrapper>

      {/* ─── GALLERY PREVIEW ────────────────────────────────────────────────────── */}
      <SectionWrapper background="white">
        <SectionHeader eyebrow="CAMPUS LIFE" title="Life at SKVM" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-8"
        >
          {galleryLabels.slice(0, 6).map((item) => (
            <motion.div
              key={item.label}
              variants={fadeInUp}
              className="group overflow-hidden rounded-xl cursor-pointer"
            >
              <div className="transform group-hover:scale-105 transition-transform duration-300">
                <Placeholder
                  label={item.label}
                  aspectRatio="1/1"
                  colorScheme={item.color as "emerald" | "sky" | "violet" | "amber" | "orange" | "teal" | "rose" | "red"}
                  className="rounded-xl"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <Link
            href="/gallery"
            id="gallery-preview-cta"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-stone-300 text-stone-700 font-body font-semibold hover:border-brand-500 hover:text-brand-500 transition-all"
          >
            View Full Gallery <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </SectionWrapper>

      {/* ─── CTA BANNER ─────────────────────────────────────────────────────────── */}
      <section className="relative py-20 lg:py-28 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #E03131 0%, #C92A2A 100%)" }}>
        {/* Accent color splashes */}
        <FloatingShape shape="blob" color="#8B5CF6" size={250} className="absolute top-0 right-0 opacity-10" />
        <FloatingShape shape="circle" color="#F59E0B" size={200} className="absolute bottom-0 left-0 opacity-10" />

        {/* Doodle sparkles */}
        {[...Array(5)].map((_, i) => (
          <DoodleDecoration
            key={i}
            type={i % 2 === 0 ? "sparkle" : "star"}
            color="white"
            size={24 + i * 4}
            className={`absolute opacity-15 ${["top-8 left-12", "top-16 right-24", "bottom-8 left-1/3", "top-12 right-1/3", "bottom-16 right-12"][i]}`}
          />
        ))}

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="text-h1 font-display font-extrabold text-white mb-4"
          >
            Ready to Give Your Child the Best Start?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="text-body-lg text-white/80 mb-8 max-w-xl mx-auto"
          >
            Admissions for 2027-28 are now open.
          </motion.p>
          <motion.div
            animate="animate"
            variants={gentlePulse}
            initial="initial"
          >
            <Link
              href="/admissions"
              id="cta-apply-btn"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-brand-500 font-body font-bold text-lg hover:bg-stone-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              Apply Now →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── CONTACT PREVIEW ────────────────────────────────────────────────────── */}
      <SectionWrapper background="default">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={viewportConfig}>
            <SectionHeader eyebrow="GET IN TOUCH" title="We'd Love to Hear From You" alignment="left" className="mb-8" />

            <div className="space-y-5">
              {[
                { Icon: Phone, label: "Call Us", value: contact.phone, href: `tel:${contact.phone}` },
                { Icon: Mail, label: "Email Us", value: contact.email, href: `mailto:${contact.email}` },
                { Icon: MapPin, label: "Visit Us", value: contact.fullAddress, href: contact.googleMapsUrl },
              ].map(({ Icon, label, value, href }) => (
                <a key={label} href={href} target={label === "Visit Us" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center shrink-0 group-hover:bg-brand-100 transition-colors">
                    <Icon className="w-5 h-5 text-stone-500 group-hover:text-brand-500 transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs font-body text-stone-400 uppercase tracking-wide mb-0.5">{label}</p>
                    <p className="text-sm font-body text-stone-700 group-hover:text-brand-500 transition-colors leading-relaxed">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            <Link href="/contact" className="inline-flex items-center gap-1 mt-8 text-brand-500 font-body font-semibold hover:gap-2 transition-all">
              Contact Us <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div variants={fadeInRight} initial="hidden" whileInView="visible" viewport={viewportConfig}>
            <div className="rounded-xl overflow-hidden shadow-md border border-stone-200 h-72 lg:h-80">
              <iframe
                src={contact.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SKVM School Location"
              />
            </div>
          </motion.div>
        </div>
      </SectionWrapper>
    </>
  );
}
