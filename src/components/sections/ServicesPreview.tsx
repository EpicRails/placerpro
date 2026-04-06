"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/data/services";
import { ArrowRight } from "lucide-react";

const featuredSlugs = ["armed-security", "unarmed-security", "vehicle-patrol"];

export default function ServicesPreview() {
  const featuredServices = services.filter((s) =>
    featuredSlugs.includes(s.slug)
  );

  return (
    <section className="py-20 bg-[#0d1b2a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-amber-400 mb-3">
              Core Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              Professional Security Solutions
            </h2>
          </div>
          <Link
            href="/services"
            className="flex items-center gap-2 text-amber-400 font-semibold text-sm hover:gap-3 transition-all flex-shrink-0"
          >
            View all services <ArrowRight size={16} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard
                slug={service.slug}
                title={service.title}
                summary={service.summary}
                icon={service.icon}
                variant="dark"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
