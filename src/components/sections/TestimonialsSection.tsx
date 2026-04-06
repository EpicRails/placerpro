"use client";

import { motion } from "framer-motion";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
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
          <span className="label-tag">Client Stories</span>
          <h2 className="section-heading mb-4">
            Property Managers and Owners Across the Region Trust Us
          </h2>
          <p className="section-subheading max-w-2xl mx-auto">
            From apartment communities to construction sites to retail centers,
            our clients depend on consistent, accountable security coverage.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TestimonialCard
                name={t.name}
                title={t.title}
                company={t.company}
                location={t.location}
                quote={t.quote}
                service={t.service}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
