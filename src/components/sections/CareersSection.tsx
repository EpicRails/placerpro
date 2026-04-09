"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

const perks = [
  "Competitive pay and flexible scheduling",
  "Consistent shifts across local properties",
  "Opportunities for advancement",
  "Professional uniform and training provided",
  "Supportive team environment",
];

export default function CareersSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Content side */}
            <div className="p-10 lg:p-14">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block text-xs font-semibold uppercase tracking-widest text-amber-400 mb-4">
                  Join Our Team
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
                  Build a Career in Professional Security
                </h2>
                <p className="text-slate-400 text-base leading-relaxed mb-8">
                  Placer Protection Group is growing. We are looking for
                  professional, reliable, and community-focused individuals to
                  join our security team serving Roseville and surrounding areas.
                  No prior security experience required for some positions —
                  training provided.
                </p>

                <ul className="space-y-3 mb-8">
                  {perks.map((perk) => (
                    <li
                      key={perk}
                      className="flex items-center gap-3 text-slate-300 text-sm"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-amber-500 flex-shrink-0"
                      />
                      {perk}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/careers"
                  className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
                >
                  Apply Now <ArrowRight size={16} />
                </Link>
              </motion.div>
            </div>

            {/* Decorative side */}
            <div
              className="relative min-h-[280px] lg:min-h-auto overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, #1a2f4e 0%, #0d1b2a 100%)",
              }}
            >
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center p-10">
                <div className="text-center">
                  <div className="text-6xl font-black text-white/5 mb-4 leading-none">
                    WE&apos;RE<br />HIRING
                  </div>
                  <div className="space-y-2">
                    {["Security Officers", "Patrol Drivers", "Site Supervisors"].map(
                      (role) => (
                        <div
                          key={role}
                          className="bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white font-medium text-sm"
                        >
                          {role}
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
