"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod/v4";
import {
  Phone, Mail, MapPin, CheckCircle, Instagram, Youtube,
} from "lucide-react";
import { PageHero, SectionWrapper, SectionHeader } from "@/components/ui/section";
import { FloatingShape, DoodleDecoration } from "@/components/ui/decorations";
import { schoolData } from "@/lib/data";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, viewportConfig } from "@/lib/motion";

const schema = z.object({
  name: z.string().min(2, "Required"),
  email: z.string().email("Enter valid email"),
  phone: z.string().min(10, "Enter valid phone number"),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});
type FormData = z.infer<typeof schema>;

export default function ContactPage() {
  const { contact } = schoolData;
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Contact form:", data);
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="We're here to help. Reach out anytime."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        accentColor="#14B8A6"
      />

      {/* ─── CONTACT CARDS ────────────────────────────────────────────────────── */}
      <SectionWrapper background="white">
        <FloatingShape shape="circle" color="#14B8A6" size={200} className="absolute top-0 right-0" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid md:grid-cols-3 gap-6"
        >
          {[
            {
              Icon: Phone,
              title: "Call Us",
              value: contact.phone,
              href: `tel:${contact.phone}`,
              sub: "Mon–Sat, 8:30 AM – 3:00 PM",
              color: "text-emerald-500 bg-emerald-100",
            },
            {
              Icon: Mail,
              title: "Email Us",
              value: contact.email,
              href: `mailto:${contact.email}`,
              sub: "We respond within 24 hours",
              color: "text-sky-500 bg-sky-100",
            },
            {
              Icon: MapPin,
              title: "Visit Us",
              value: contact.fullAddress,
              href: contact.googleMapsUrl,
              sub: "Get Directions →",
              color: "text-brand-500 bg-brand-100",
            },
          ].map(({ Icon, title, value, href, sub, color }) => (
            <motion.div
              key={title}
              variants={fadeInUp}
              className="bg-white rounded-2xl p-7 border border-stone-100 hover:shadow-lg hover:-translate-y-1 transition-all text-center group"
            >
              <a href={href} target={title === "Visit Us" ? "_blank" : undefined} rel="noopener noreferrer">
                <div className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-body font-semibold text-stone-800 mb-2">{title}</h3>
                <p className="text-sm font-body text-stone-600 break-words leading-relaxed mb-2">{value}</p>
                <p className="text-xs font-body text-stone-400 group-hover:text-brand-500 transition-colors">{sub}</p>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* ─── MAP ──────────────────────────────────────────────────────────────── */}
      <SectionWrapper background="alternate">
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportConfig}
          className="rounded-2xl overflow-hidden shadow-lg border border-stone-200 h-80 lg:h-96 mb-6">
          <iframe
            src={contact.mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="SKVM School on Google Maps"
          />
        </motion.div>
        <div className="text-center">
          <a
            href={contact.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="map-directions-btn"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-stone-900 text-white font-body font-semibold hover:bg-stone-800 transition-all shadow-md"
          >
            <MapPin className="w-4 h-4" />
            Get Directions →
          </a>
        </div>
      </SectionWrapper>

      {/* ─── CONTACT FORM ─────────────────────────────────────────────────────── */}
      <SectionWrapper background="white">
        <FloatingShape shape="blob" color="#8B5CF6" size={200} className="absolute bottom-0 left-0" animationDelay="0.5s" />

        <div className="max-w-2xl mx-auto">
          <SectionHeader eyebrow="SEND US A MESSAGE" title="We'd Love to Hear From You" />

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl p-12 text-center shadow-lg border border-stone-100"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-emerald-500" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-stone-900 mb-2">Message Sent!</h3>
              <p className="font-body text-stone-500 mb-6">
                Thank you for reaching out. We&apos;ll get back to you within 24 hours.
              </p>
              <button onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 rounded-full bg-brand-500 text-white font-body font-semibold hover:bg-brand-600 transition-colors">
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <motion.form
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white rounded-2xl p-8 shadow-lg border border-stone-100"
              noValidate
            >
              <div className="grid md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-sm font-body font-semibold text-stone-700 mb-1.5">Your Name *</label>
                  <input {...register("name")} placeholder="Full name"
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 font-body text-sm focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100 transition-all" />
                  {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-body font-semibold text-stone-700 mb-1.5">Email Address *</label>
                  <input type="email" {...register("email")} placeholder="you@email.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 font-body text-sm focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100 transition-all" />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-body font-semibold text-stone-700 mb-1.5">Phone Number *</label>
                  <input type="tel" {...register("phone")} placeholder="+91 9812345678"
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 font-body text-sm focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100 transition-all" />
                  {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-body font-semibold text-stone-700 mb-1.5">Subject *</label>
                  <select {...register("subject")}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 font-body text-sm focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100 transition-all bg-white">
                    <option value="">Select a subject...</option>
                    {["General Inquiry", "Admissions", "Feedback", "Other"].map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  {errors.subject && <p className="text-xs text-red-500 mt-1">{errors.subject.message}</p>}
                </div>
              </div>

              <div className="mb-7">
                <label className="block text-sm font-body font-semibold text-stone-700 mb-1.5">Message *</label>
                <textarea {...register("message")} rows={4} placeholder="How can we help you?"
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-200 font-body text-sm focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100 transition-all resize-none" />
                {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>}
              </div>

              <button type="submit" id="contact-submit-btn"
                className="w-full sm:w-auto px-8 py-3 rounded-full bg-brand-500 text-white font-body font-bold hover:bg-brand-600 transition-all shadow-lg hover:-translate-y-0.5">
                Send Message →
              </button>
            </motion.form>
          )}
        </div>
      </SectionWrapper>

      {/* ─── SOCIAL MEDIA ─────────────────────────────────────────────────────── */}
      <SectionWrapper background="dark">
        <DoodleDecoration type="sparkle" color="white" size={28} className="absolute top-10 left-20 opacity-10" />
        <DoodleDecoration type="heart" color="white" size={24} className="absolute bottom-10 right-20 opacity-10" />

        <div className="text-center mb-10">
          <p className="text-xs font-body font-semibold uppercase tracking-[0.2em] text-brand-400 mb-3">CONNECT</p>
          <div className="w-12 h-1 rounded-full bg-brand-400 mb-5 mx-auto" />
          <h2 className="text-h2 font-heading font-bold text-white">Follow Us on Social Media</h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto"
        >
          {/* Instagram */}
          <motion.div
            variants={fadeInLeft}
            className="bg-stone-800 rounded-2xl p-8 border border-stone-700 hover:border-pink-500 transition-colors group"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center mb-5">
              <Instagram className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-body font-bold text-white text-lg mb-1">Instagram</h3>
            <p className="text-sm font-body text-stone-400 mb-5">{contact.social.instagram.handle}</p>
            <a
              href={contact.social.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              id="contact-instagram-btn"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm font-body font-semibold hover:opacity-90 transition-opacity"
            >
              <Instagram className="w-4 h-4" /> Follow Us
            </a>
          </motion.div>

          {/* YouTube */}
          <motion.div
            variants={fadeInRight}
            className="bg-stone-800 rounded-2xl p-8 border border-stone-700 hover:border-red-500 transition-colors group"
          >
            <div className="w-12 h-12 rounded-xl bg-red-600 flex items-center justify-center mb-5">
              <Youtube className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-body font-bold text-white text-lg mb-1">YouTube</h3>
            <p className="text-sm font-body text-stone-400 mb-5">{contact.social.youtube.handle}</p>
            <a
              href={contact.social.youtube.url}
              target="_blank"
              rel="noopener noreferrer"
              id="contact-youtube-btn"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-red-600 text-white text-sm font-body font-semibold hover:bg-red-700 transition-colors"
            >
              <Youtube className="w-4 h-4" /> Subscribe
            </a>
          </motion.div>
        </motion.div>
      </SectionWrapper>
    </>
  );
}
