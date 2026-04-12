"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn, Instagram, Youtube } from "lucide-react";
import { useState } from "react";
import { PageHero, SectionWrapper, SectionHeader } from "@/components/ui/section";
import { Placeholder } from "@/components/ui/placeholder";
import { FloatingShape, DoodleDecoration } from "@/components/ui/decorations";
import { schoolData } from "@/lib/data";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/motion";

const categories = ["All", "Academics", "Sports", "Cultural Events", "Campus"];

const galleryItems = [
  { label: "Annual Day Performance", cat: "Cultural Events", color: "violet" },
  { label: "Science Activity", cat: "Academics", color: "sky" },
  { label: "Sports Day", cat: "Sports", color: "orange" },
  { label: "Art Class", cat: "Academics", color: "rose" },
  { label: "Library Reading Time", cat: "Academics", color: "teal" },
  { label: "Playground Fun", cat: "Sports", color: "emerald" },
  { label: "Computer Lab", cat: "Academics", color: "sky" },
  { label: "Music Class", cat: "Cultural Events", color: "violet" },
  { label: "Cultural Festival", cat: "Cultural Events", color: "amber" },
  { label: "Independence Day", cat: "Cultural Events", color: "rose" },
  { label: "Teacher's Day", cat: "Campus", color: "teal" },
  { label: "Classroom Learning", cat: "Academics", color: "emerald" },
] as const;

const instaPosts = [
  { label: "Happy learners", color: "sky" },
  { label: "Sports day fun", color: "orange" },
  { label: "Art showcase", color: "violet" },
  { label: "Annual day", color: "rose" },
  { label: "Library time", color: "teal" },
  { label: "Morning assembly", color: "amber" },
  { label: "Science fair", color: "emerald" },
  { label: "Music class", color: "sky" },
  { label: "Playground moments", color: "violet" },
] as const;

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const filtered = galleryItems.filter(
    (item) => activeCategory === "All" || item.cat === activeCategory
  );

  const openLightbox = (idx: number) => setLightboxIdx(idx);
  const closeLightbox = () => setLightboxIdx(null);
  const prevItem = () => setLightboxIdx((i) => (i !== null ? Math.max(0, i - 1) : 0));
  const nextItem = () => setLightboxIdx((i) => (i !== null ? Math.min(filtered.length - 1, i + 1) : 0));

  return (
    <>
      <PageHero
        title="Gallery"
        subtitle="Moments that define the SKVM experience"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
        accentColor="#F59E0B"
      />

      {/* ─── PHOTO GALLERY ────────────────────────────────────────────────────── */}
      <SectionWrapper background="white">
        <FloatingShape shape="circle" color="#F59E0B" size={200} className="absolute top-0 right-0" />
        <FloatingShape shape="blob" color="#10B981" size={160} className="absolute bottom-10 left-10" animationDelay="1s" />

        <SectionHeader eyebrow="MOMENTS" title="Photo Gallery" />

        {/* Category filter tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`gallery-cat-${cat.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full font-body font-semibold text-sm transition-all ${
                activeCategory === cat
                  ? "bg-brand-500 text-white shadow-md"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div
          key={activeCategory}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {filtered.map((item, idx) => (
            <motion.div
              key={item.label}
              variants={fadeInUp}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
              onClick={() => openLightbox(idx)}
            >
              <div className="transform group-hover:scale-105 transition-transform duration-300">
                <Placeholder
                  label={item.label}
                  aspectRatio="1/1"
                  colorScheme={item.color as "emerald" | "sky" | "violet" | "amber" | "orange" | "teal" | "rose" | "red"}
                  className="rounded-xl"
                />
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center rounded-xl">
                <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightboxIdx !== null && filtered[lightboxIdx] && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-2xl overflow-hidden max-w-lg w-full shadow-2xl"
              >
                <Placeholder
                  label={filtered[lightboxIdx].label}
                  aspectRatio="4/3"
                  colorScheme={filtered[lightboxIdx].color as "emerald" | "sky" | "violet" | "amber" | "orange" | "teal" | "rose" | "red"}
                  className="rounded-t-2xl rounded-b-none"
                />
                <div className="p-4 flex items-center justify-between">
                  <button onClick={prevItem} disabled={lightboxIdx === 0}
                    className="p-2 rounded-lg hover:bg-stone-100 disabled:opacity-30 transition-colors">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <p className="text-sm font-body text-stone-600">{filtered[lightboxIdx].label}</p>
                  <button onClick={nextItem} disabled={lightboxIdx === filtered.length - 1}
                    className="p-2 rounded-lg hover:bg-stone-100 disabled:opacity-30 transition-colors">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
              <button onClick={closeLightbox} className="absolute top-4 right-4 p-2 text-white hover:text-stone-300">
                <X className="w-6 h-6" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </SectionWrapper>

      {/* ─── VIDEO TOUR (DARK) ────────────────────────────────────────────────── */}
      <SectionWrapper background="dark">
        <DoodleDecoration type="sparkle" color="white" size={28} className="absolute top-10 left-20 opacity-10" />
        <DoodleDecoration type="star" color="white" size={24} className="absolute bottom-10 right-20 opacity-10" />

        <div className="max-w-3xl mx-auto text-center">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportConfig}>
            <p className="text-xs font-body font-semibold uppercase tracking-[0.2em] text-brand-400 mb-3">VIRTUAL TOUR</p>
            <div className="w-12 h-1 rounded-full bg-brand-400 mb-5 mx-auto" />
            <h2 className="text-h2 font-heading font-bold text-white mb-6">See Our Campus in Action</h2>
          </motion.div>
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportConfig}
            className="mb-8">
            <Placeholder
              label="School Tour Video (YouTube Embed)"
              aspectRatio="16/9"
              colorScheme="red"
              className="rounded-2xl"
            />
          </motion.div>
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportConfig}>
            <a
              href={schoolData.contact.social.youtube.url}
              target="_blank"
              rel="noopener noreferrer"
              id="gallery-youtube-link"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-600 text-white font-body font-semibold hover:bg-red-700 transition-all shadow-lg"
            >
              <Youtube className="w-5 h-5" />
              Watch More on YouTube →
            </a>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* ─── INSTAGRAM FEED ───────────────────────────────────────────────────── */}
      <SectionWrapper background="default">
        <SectionHeader eyebrow="FOLLOW US" title="SKVM on Instagram" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-3 gap-3 max-w-2xl mx-auto mb-8"
        >
          {instaPosts.map((post) => (
            <motion.div
              key={post.label}
              variants={fadeInUp}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
            >
              <Placeholder
                label={post.label}
                aspectRatio="1/1"
                colorScheme={post.color as "sky" | "orange" | "violet" | "rose" | "teal" | "amber" | "emerald"}
                className="rounded-xl"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center rounded-xl">
                <Instagram className="w-7 h-7 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <a
            href={schoolData.contact.social.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            id="gallery-instagram-link"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-body font-semibold hover:opacity-90 transition-opacity shadow-lg"
          >
            <Instagram className="w-5 h-5" />
            Follow {schoolData.contact.social.instagram.handle}
          </a>
        </div>
      </SectionWrapper>
    </>
  );
}
