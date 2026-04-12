"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Vision & Mission", href: "/vision-mission" },
  { label: "Academics", href: "/academics" },
  { label: "Faculty", href: "/faculty" },
  { label: "Gallery", href: "/gallery" },
  { label: "Admissions", href: "/admissions" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md"
            : "bg-white/90 backdrop-blur-sm"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group"
              onClick={() => setMobileOpen(false)}
            >
              <div className="w-10 h-10 rounded-xl bg-brand-500 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-lg font-display font-bold text-stone-900 leading-none block">
                  SKVM
                </span>
                <span className="text-xs font-body text-stone-500 leading-none">
                  Dharwad
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm font-body font-medium text-stone-600 hover:text-brand-500 hover:bg-brand-50 rounded-lg transition-all duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/admissions"
                className="inline-flex items-center px-4 py-2 rounded-full bg-brand-500 text-white text-sm font-body font-semibold hover:bg-brand-600 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Apply Now
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 rounded-lg text-stone-700 hover:bg-stone-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <div
          className={cn(
            "lg:hidden fixed inset-y-0 right-0 w-72 bg-white shadow-2xl transform transition-transform duration-300 z-50 pt-20",
            mobileOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <nav className="flex flex-col px-4 py-6 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-base font-body font-medium text-stone-700 hover:text-brand-500 hover:bg-brand-50 rounded-xl transition-all"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-stone-200">
              <Link
                href="/admissions"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center px-4 py-3 rounded-full bg-brand-500 text-white font-body font-semibold hover:bg-brand-600 transition-colors"
              >
                Apply Now 2027-28
              </Link>
            </div>
            <div className="mt-4 flex justify-center gap-4">
              <a
                href="https://www.instagram.com/skvm_dharwad/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-body text-stone-500 hover:text-pink-500 transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://www.youtube.com/@SheelaKoppikarVidyaMandira"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-body text-stone-500 hover:text-red-500 transition-colors"
              >
                YouTube
              </a>
            </div>
          </nav>
        </div>

        {/* Overlay */}
        {mobileOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black/40 z-40"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </header>
      {/* Spacer */}
      <div className="h-16 lg:h-20" aria-hidden />
    </>
  );
}
