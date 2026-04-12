import Link from "next/link";
import { GraduationCap, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react";
import { schoolData } from "@/lib/data";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Faculty", href: "/faculty" },
  { label: "Gallery", href: "/gallery" },
  { label: "Admissions", href: "/admissions" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const { contact, name, tagline } = schoolData;

  return (
    <footer className="bg-stone-900 text-stone-300">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-brand-500 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-lg font-display font-bold text-white block leading-none">
                  SKVM
                </span>
                <span className="text-xs font-body text-stone-500">
                  Dharwad
                </span>
              </div>
            </div>
            <p className="text-sm font-body text-stone-400 leading-relaxed mb-4">
              {tagline}
            </p>
            <p className="text-xs font-body text-stone-500">
              Est. 1986 · English Medium · Nursery to 5th Std
            </p>

            <div className="flex items-center gap-3 mt-6">
              <a
                href={contact.social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-stone-800 flex items-center justify-center text-stone-400 hover:text-pink-400 hover:bg-stone-700 transition-all"
                aria-label="Follow on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={contact.social.youtube.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-stone-800 flex items-center justify-center text-stone-400 hover:text-red-400 hover:bg-stone-700 transition-all"
                aria-label="Subscribe on YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-body font-semibold text-white uppercase tracking-widest mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-body text-stone-400 hover:text-brand-400 transition-colors hover:translate-x-1 inline-block transition-transform"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-sm font-body font-semibold text-white uppercase tracking-widest mb-5">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-400 mt-0.5 shrink-0" />
                <span className="text-sm font-body text-stone-400 leading-relaxed">
                  {contact.address.line1},<br />
                  {contact.address.line2},<br />
                  {contact.address.city}, {contact.address.state}{" "}
                  {contact.address.pincode}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-400 shrink-0" />
                <a
                  href={`tel:${contact.phone}`}
                  className="text-sm font-body text-stone-400 hover:text-white transition-colors"
                >
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-400 shrink-0" />
                <a
                  href={`mailto:${contact.email}`}
                  className="text-sm font-body text-stone-400 hover:text-white transition-colors break-all"
                >
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Admissions CTA */}
          <div>
            <h3 className="text-sm font-body font-semibold text-white uppercase tracking-widest mb-5">
              Admissions 2027-28
            </h3>
            <div className="bg-stone-800 rounded-2xl p-5">
              <p className="text-sm font-body text-stone-300 mb-4 leading-relaxed">
                Admissions are now open for the academic year 2027-28. Limited
                seats available.
              </p>
              <Link
                href="/admissions"
                className="block w-full text-center px-4 py-2.5 rounded-full bg-brand-500 text-white text-sm font-body font-semibold hover:bg-brand-600 transition-colors"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs font-body text-stone-500">
            © {year} {name}. All rights reserved.
          </p>
          <p className="text-xs font-body text-stone-600">
            Building Leaders With Heart & Soul since 1986
          </p>
        </div>
      </div>
    </footer>
  );
}
