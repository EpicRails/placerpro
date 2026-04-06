"use client";

import { motion } from "framer-motion";
import {
  ShoppingBag,
  Home,
  Building2,
  HardHat,
  Car,
  Cross,
  GraduationCap,
  Warehouse,
} from "lucide-react";

const industries = [
  {
    icon: ShoppingBag,
    label: "Shopping Centers & Strip Malls",
  },
  {
    icon: Home,
    label: "Apartment Communities",
  },
  {
    icon: Building2,
    label: "HOAs & Gated Communities",
  },
  {
    icon: HardHat,
    label: "Construction Sites",
  },
  {
    icon: Car,
    label: "Parking Lots & Garages",
  },
  {
    icon: Cross,
    label: "Medical Facilities & Clinics",
  },
  {
    icon: GraduationCap,
    label: "Schools, Churches & Community Properties",
  },
  {
    icon: Warehouse,
    label: "Industrial & Warehouse Facilities",
  },
  {
    icon: Building2,
    label: "Corporate Office Parks",
  },
];

export default function IndustriesGrid() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="label-tag">Properties We Serve</span>
          <h2 className="section-heading mb-4">
            Trusted Across Property Types in the Sacramento Region
          </h2>
          <p className="section-subheading max-w-2xl mx-auto">
            From retail centers to residential communities to active construction
            sites, we have the experience and post-order flexibility to protect
            what matters at your specific property.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.label}
                className="bg-white rounded-2xl p-5 flex items-center gap-3 border border-slate-100 hover:border-amber-200 hover:shadow-sm transition-all duration-200 group"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
              >
                <div className="w-9 h-9 bg-amber-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-amber-100 transition-colors">
                  <Icon className="text-amber-600" size={18} />
                </div>
                <span className="text-slate-700 text-sm font-medium leading-snug">
                  {industry.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
