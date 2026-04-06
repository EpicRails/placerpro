"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  ClipboardList,
  Clock,
  UserCheck,
  Car,
  HeadphonesIcon,
} from "lucide-react";

const differentiators = [
  {
    icon: MapPin,
    title: "Locally Based in Roseville",
    description:
      "We are headquartered in Roseville and serve the local market directly. Fast response times, local knowledge, and real community accountability — no out-of-area management.",
  },
  {
    icon: UserCheck,
    title: "Professional, Vetted Officers",
    description:
      "All officers hold valid California BSIS Guard Cards and pass thorough background screening. We select for professionalism, communication, and reliability — not just a license.",
  },
  {
    icon: ClipboardList,
    title: "Detailed Reporting, Every Shift",
    description:
      "Every shift ends with a written activity report. Incidents are documented thoroughly. You have full visibility into what happens on your property, always.",
  },
  {
    icon: Clock,
    title: "Flexible Coverage Plans",
    description:
      "Post orders tailored to your property, schedule, and risk profile. We scale coverage up or down as your needs change — no rigid packages.",
  },
  {
    icon: Car,
    title: "Patrol Coverage for Larger Properties",
    description:
      "Marked patrol vehicles extend visible coverage across parking lots, perimeters, and multi-building properties where a single stationary post cannot reach.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Dispatch Support",
    description:
      "Our dispatch team is available around the clock. If you have an urgent need, a coverage question, or an incident that needs immediate attention, someone answers.",
  },
];

export default function ValueProps() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="label-tag">Why Placer Protection Group</span>
          <h2 className="section-heading mb-4">
            The Standard You Should Expect from a Security Partner
          </h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Not all security companies are the same. We built Placer Protection
            Group around the accountability, transparency, and responsiveness
            that local property managers deserve.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                className="flex gap-4 p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-100 transition-all duration-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon className="text-amber-600" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
