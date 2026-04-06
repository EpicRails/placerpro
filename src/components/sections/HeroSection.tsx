"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

interface HeroSectionProps {
  headline: string;
  subheadline: string;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  badge?: string;
  variant?: "home" | "page";
}

export default function HeroSection({
  headline,
  subheadline,
  ctaPrimary = { label: "Get a Quote", href: "/contact" },
  ctaSecondary = { label: "View Services", href: "/services" },
  badge,
  variant = "home",
}: HeroSectionProps) {
  const isHome = variant === "home";

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0a1520 0%, #0d1b2a 40%, #1a2f4e 80%, #0d1b2a 100%)",
      }}
    >
      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Amber glow orb */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[500px] opacity-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 80% 20%, #d97706 0%, transparent 70%)",
        }}
      />

      <div
        className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${
          isHome ? "pt-32 pb-24 lg:pt-40 lg:pb-32" : "pt-28 pb-16 lg:pt-36 lg:pb-20"
        }`}
      >
        <div className={isHome ? "max-w-3xl" : "max-w-2xl"}>
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-amber-400 bg-amber-600/15 border border-amber-600/25 px-3 py-1.5 rounded-full mb-6">
                {badge}
              </span>
            </motion.div>
          )}

          <motion.h1
            className={`font-bold tracking-tight text-white leading-tight mb-5 ${
              isHome
                ? "text-4xl md:text-5xl lg:text-6xl"
                : "text-3xl md:text-4xl lg:text-5xl"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {headline}
          </motion.h1>

          <motion.p
            className={`text-slate-400 leading-relaxed mb-8 ${
              isHome ? "text-lg md:text-xl max-w-2xl" : "text-lg max-w-xl"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {subheadline}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href={ctaPrimary.href}
              className="inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-7 py-3.5 rounded-lg transition-all duration-200 shadow-lg hover:shadow-amber-900/30 text-sm"
            >
              {ctaPrimary.label}
              <ArrowRight size={16} />
            </Link>
            <Link
              href={ctaSecondary.href}
              className="inline-flex items-center justify-center gap-2 bg-white/8 hover:bg-white/14 text-white font-semibold px-7 py-3.5 rounded-lg border border-white/20 transition-all duration-200 text-sm"
            >
              {ctaSecondary.label}
            </Link>
          </motion.div>

          {isHome && (
            <motion.div
              className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {[
                { value: "24/7", label: "Dispatch available" },
                { value: "Licensed", label: "CA BSIS certified" },
                { value: "Local", label: "Roseville-based" },
              ].map((stat) => (
                <div key={stat.value} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-600/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-amber-500" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-base leading-none mb-0.5">
                      {stat.value}
                    </p>
                    <p className="text-slate-500 text-xs">{stat.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
