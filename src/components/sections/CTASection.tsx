"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

interface CTASectionProps {
  heading?: string;
  subheading?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  variant?: "dark" | "amber" | "light";
  showPhone?: boolean;
}

export default function CTASection({
  heading = "Ready to Improve Security at Your Property?",
  subheading = "Contact us for a free site assessment and customized security proposal. Our team serves Roseville, CA and the greater Sacramento region.",
  primaryCta = { label: "Get a Free Quote", href: "/contact" },
  secondaryCta = { label: "View All Services", href: "/services" },
  variant = "dark",
  showPhone = true,
}: CTASectionProps) {
  const isDark = variant === "dark";
  const isAmber = variant === "amber";

  const bg = isDark
    ? "bg-[#0d1b2a]"
    : isAmber
    ? "bg-amber-600"
    : "bg-slate-50";

  const headingClass = isDark || isAmber ? "text-white" : "text-slate-900";
  const subClass = isDark
    ? "text-slate-400"
    : isAmber
    ? "text-amber-100"
    : "text-slate-600";

  const primaryBtnClass = isDark
    ? "bg-amber-600 hover:bg-amber-700 text-white"
    : isAmber
    ? "bg-white text-amber-700 hover:bg-amber-50"
    : "bg-[#0d1b2a] hover:bg-slate-800 text-white";

  const secondaryBtnClass = isDark
    ? "border border-white/20 text-white hover:bg-white/10"
    : isAmber
    ? "border border-white/30 text-white hover:bg-white/10"
    : "border border-slate-300 text-slate-700 hover:bg-white";

  return (
    <section className={`${bg} py-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={`text-3xl md:text-4xl font-bold tracking-tight mb-4 ${headingClass}`}>
            {heading}
          </h2>
          <p className={`text-lg max-w-2xl mx-auto mb-8 leading-relaxed ${subClass}`}>
            {subheading}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href={primaryCta.href}
              className={`inline-flex items-center gap-2 font-semibold px-8 py-3.5 rounded-lg transition-all duration-200 text-sm shadow-md ${primaryBtnClass}`}
            >
              {primaryCta.label}
              <ArrowRight size={16} />
            </Link>
            <Link
              href={secondaryCta.href}
              className={`inline-flex items-center gap-2 font-semibold px-8 py-3.5 rounded-lg transition-all duration-200 text-sm ${secondaryBtnClass}`}
            >
              {secondaryCta.label}
            </Link>
          </div>

          {showPhone && (
            <p className={`mt-6 text-sm flex items-center justify-center gap-2 ${isDark ? "text-slate-500" : isAmber ? "text-amber-200" : "text-slate-500"}`}>
              <Phone size={14} />
              Or call us directly:{" "}
              <a
                href="tel:+19167757274"
                className={`font-semibold hover:underline ${isDark ? "text-slate-300" : isAmber ? "text-white" : "text-slate-700"}`}
              >
                (916) 775-7274
              </a>
              &nbsp;— available 24/7
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
