"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod/v4";
import { CheckCircle, MessageCircle, FileText, Users, PartyPopper, ChevronDown, ChevronUp } from "lucide-react";
import { PageHero, SectionWrapper, SectionHeader } from "@/components/ui/section";
import { FloatingShape, DoodleDecoration } from "@/components/ui/decorations";
import { ColorfulBadge } from "@/components/ui/colorful-badge";
import { schoolData } from "@/lib/data";
import { fadeInUp, staggerContainer, colorfulStagger, popIn, gentlePulse, viewportConfig } from "@/lib/motion";

const stepIcons = { MessageCircle, FileText, Users, CheckCircle, PartyPopper };

const eligibilityData = [
  { cls: "Nursery", age: "3 years" },
  { cls: "LKG", age: "4 years" },
  { cls: "UKG", age: "5 years" },
  { cls: "1st Standard", age: "6 years" },
  { cls: "2nd–5th Standard", age: "Age appropriate" },
];

const schema = z.object({
  childName: z.string().min(2, "Required"),
  dob: z.string().min(1, "Required"),
  grade: z.string().min(1, "Please select a grade"),
  parentName: z.string().min(2, "Required"),
  phone: z.string().min(10, "Enter valid phone number"),
  email: z.string().email("Enter valid email"),
  address: z.string().min(5, "Required"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function AdmissionsPage() {
  const { admissions } = schoolData;
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    setSubmitted(true);
  };

  const stepColors: Record<string, string> = {
    sky: "bg-sky-500", violet: "bg-violet-500", emerald: "bg-emerald-500",
    amber: "bg-amber-500", rose: "bg-rose-500",
  };

  return (
    <>
      <PageHero
        title="Admissions"
        subtitle="Admissions Open for Academic Year 2027-28"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Admissions" }]}
        accentColor="#F59E0B"
      />

      {/* ─── PROCESS TIMELINE ─────────────────────────────────────────────────── */}
      <SectionWrapper background="white">
        <FloatingShape shape="circle" color="#F59E0B" size={200} className="absolute top-0 right-0" />
        <DoodleDecoration type="star" color="#F59E0B" size={36} className="absolute top-20 left-10 opacity-20" />

        <SectionHeader eyebrow="HOW TO APPLY" title="Admission Process" />

        <div className="max-w-2xl mx-auto">
          {admissions.steps.map((step, i) => {
            const Icon = stepIcons[step.icon as keyof typeof stepIcons] || CheckCircle;
            const isLast = i === admissions.steps.length - 1;
            return (
              <motion.div
                key={step.title}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                className="flex gap-5 relative"
              >
                {/* Connector line */}
                {!isLast && (
                  <div className={`absolute left-[19px] top-10 w-0.5 h-full ${stepColors[step.color] || "bg-brand-500"} opacity-20`} />
                )}
                <div className={`w-10 h-10 rounded-full ${stepColors[step.color] || "bg-brand-500"} flex items-center justify-center shrink-0 z-10 mt-0.5 shadow-md`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className={`pb-8 ${isLast ? "" : ""}`}>
                  <div className="flex items-center gap-2 mb-1">
                    <ColorfulBadge text={`Step ${i + 1}`} color={step.color as "sky" | "violet" | "emerald" | "amber" | "rose"} variant="soft" />
                  </div>
                  <h3 className="font-body font-semibold text-stone-900 text-lg mb-1">{step.title}</h3>
                  <p className="text-sm font-body text-stone-500 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </SectionWrapper>

      {/* ─── DATES & ELIGIBILITY ──────────────────────────────────────────────── */}
      <SectionWrapper background="alternate">
        <SectionHeader eyebrow="PLAN AHEAD" title="Important Dates & Eligibility" />

        <div className="grid md:grid-cols-2 gap-10">
          {/* Eligibility table */}
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportConfig}>
            <h3 className="font-body font-semibold text-stone-900 text-lg mb-4">Age Eligibility (by June 1)</h3>
            <div className="rounded-2xl overflow-hidden border border-stone-200">
              <table className="w-full text-sm font-body">
                <thead>
                  <tr className="bg-stone-800 text-white">
                    <th className="px-4 py-3 text-left font-semibold">Class</th>
                    <th className="px-4 py-3 text-left font-semibold">Minimum Age</th>
                  </tr>
                </thead>
                <tbody>
                  {eligibilityData.map((row, i) => (
                    <tr key={row.cls} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                      <td className="px-4 py-3 text-stone-800 font-medium">{row.cls}</td>
                      <td className="px-4 py-3 text-stone-600">{row.age}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Date cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="space-y-4"
          >
            <h3 className="font-body font-semibold text-stone-900 text-lg mb-4">Key Dates for 2027-28</h3>
            {[
              { title: "Application Opens", date: admissions.dates.applicationStart, color: "bg-emerald-50 border-emerald-200 text-emerald-700", icon: "📋" },
              { title: "Application Deadline", date: admissions.dates.applicationDeadline, color: "bg-amber-50 border-amber-200 text-amber-700", icon: "⏰" },
              { title: "Interaction Sessions", date: admissions.dates.interactionDates, color: "bg-sky-50 border-sky-200 text-sky-700", icon: "👥" },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className={`rounded-xl p-4 border ${item.color} flex items-center gap-4`}
              >
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="text-xs font-body font-semibold uppercase tracking-wide opacity-70 mb-0.5">{item.title}</p>
                  <p className="font-body font-bold text-stone-900">{item.date}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </SectionWrapper>

      {/* ─── DOCUMENTS ────────────────────────────────────────────────────────── */}
      <SectionWrapper background="white">
        <div className="max-w-2xl mx-auto">
          <SectionHeader eyebrow="DOCUMENTS" title="What You'll Need" />
          <motion.ul
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="space-y-4"
          >
            {admissions.documents.map((doc) => (
              <motion.li
                key={doc}
                variants={fadeInUp}
                className="flex items-center gap-3 p-4 rounded-xl border border-stone-100 hover:border-brand-200 hover:bg-brand-50 transition-colors"
              >
                <CheckCircle className="w-5 h-5 text-brand-500 shrink-0" />
                <span className="font-body text-stone-700">{doc}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </SectionWrapper>

      {/* ─── INQUIRY FORM ─────────────────────────────────────────────────────── */}
      <SectionWrapper background="alternate" id="apply">
        <FloatingShape shape="blob" color="#E03131" size={200} className="absolute bottom-0 right-0" animationDelay="0.5s" />

        <div className="max-w-3xl mx-auto">
          <SectionHeader eyebrow="APPLY NOW" title="Start Your Application" />

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl p-12 text-center shadow-lg"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-emerald-500" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-stone-900 mb-2">Thank You!</h3>
              <p className="font-body text-stone-500 mb-6">
                Your inquiry has been submitted. We&apos;ll reach out within 2 business days.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 rounded-full bg-brand-500 text-white font-body font-semibold hover:bg-brand-600 transition-colors"
              >
                Submit Another Inquiry
              </button>
            </motion.div>
          ) : (
            <motion.form
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white rounded-2xl p-8 shadow-lg"
              noValidate
            >
              <div className="grid md:grid-cols-2 gap-5 mb-5">
                {/* Child Name */}
                <div>
                  <label className="block text-sm font-body font-semibold text-stone-700 mb-1.5">Child&apos;s Full Name *</label>
                  <input {...register("childName")} placeholder="e.g. Arjun Sharma"
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 font-body text-sm focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100 transition-all" />
                  {errors.childName && <p className="text-xs text-red-500 mt-1">{errors.childName.message}</p>}
                </div>
                {/* DOB */}
                <div>
                  <label className="block text-sm font-body font-semibold text-stone-700 mb-1.5">Date of Birth *</label>
                  <input type="date" {...register("dob")}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 font-body text-sm focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100 transition-all" />
                  {errors.dob && <p className="text-xs text-red-500 mt-1">{errors.dob.message}</p>}
                </div>
                {/* Grade */}
                <div>
                  <label className="block text-sm font-body font-semibold text-stone-700 mb-1.5">Class Applying For *</label>
                  <select {...register("grade")}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 font-body text-sm focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100 transition-all bg-white">
                    <option value="">Select class...</option>
                    {["Nursery", "LKG", "UKG", "1st Standard", "2nd Standard", "3rd Standard", "4th Standard", "5th Standard"].map((g) => (
                      <option key={g} value={g}>{g}</option>
                    ))}
                  </select>
                  {errors.grade && <p className="text-xs text-red-500 mt-1">{errors.grade.message}</p>}
                </div>
                {/* Parent Name */}
                <div>
                  <label className="block text-sm font-body font-semibold text-stone-700 mb-1.5">Parent / Guardian Name *</label>
                  <input {...register("parentName")} placeholder="e.g. Rajesh Sharma"
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 font-body text-sm focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100 transition-all" />
                  {errors.parentName && <p className="text-xs text-red-500 mt-1">{errors.parentName.message}</p>}
                </div>
                {/* Phone */}
                <div>
                  <label className="block text-sm font-body font-semibold text-stone-700 mb-1.5">Phone Number *</label>
                  <div className="flex">
                    <span className="px-3 py-2.5 rounded-l-xl border border-r-0 border-stone-200 bg-stone-50 text-sm font-body text-stone-500">+91</span>
                    <input {...register("phone")} placeholder="9812345678" type="tel"
                      className="flex-1 px-4 py-2.5 rounded-r-xl border border-stone-200 font-body text-sm focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100 transition-all" />
                  </div>
                  {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>}
                </div>
                {/* Email */}
                <div>
                  <label className="block text-sm font-body font-semibold text-stone-700 mb-1.5">Email Address *</label>
                  <input type="email" {...register("email")} placeholder="parent@email.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 font-body text-sm focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100 transition-all" />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
                </div>
              </div>

              {/* Address */}
              <div className="mb-5">
                <label className="block text-sm font-body font-semibold text-stone-700 mb-1.5">Home Address *</label>
                <textarea {...register("address")} rows={2} placeholder="Enter your residential address"
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-200 font-body text-sm focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100 transition-all resize-none" />
                {errors.address && <p className="text-xs text-red-500 mt-1">{errors.address.message}</p>}
              </div>

              {/* Message */}
              <div className="mb-7">
                <label className="block text-sm font-body font-semibold text-stone-700 mb-1.5">Message / Questions</label>
                <textarea {...register("message")} rows={3} placeholder="Any questions or additional information..."
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-200 font-body text-sm focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100 transition-all resize-none" />
              </div>

              <button type="submit" id="admissions-submit-btn"
                className="w-full sm:w-auto px-8 py-3 rounded-full bg-brand-500 text-white font-body font-bold hover:bg-brand-600 transition-all shadow-lg hover:-translate-y-0.5">
                Submit Inquiry →
              </button>
            </motion.form>
          )}
        </div>
      </SectionWrapper>

      {/* ─── FAQ ──────────────────────────────────────────────────────────────── */}
      <SectionWrapper background="white">
        <div className="max-w-2xl mx-auto">
          <SectionHeader eyebrow="QUESTIONS?" title="Frequently Asked Questions" />

          <div className="space-y-3">
            {admissions.faq.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                className="rounded-xl border border-stone-200 overflow-hidden"
              >
                <button
                  id={`faq-${i}`}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-stone-50 transition-colors"
                >
                  <span className="font-body font-semibold text-stone-800 text-sm">{item.q}</span>
                  {openFaq === i ? (
                    <ChevronUp className="w-4 h-4 text-stone-400 shrink-0 ml-3" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-stone-400 shrink-0 ml-3" />
                  )}
                </button>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-5 pb-4"
                  >
                    <p className="text-sm font-body text-stone-500 leading-relaxed">{item.a}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
