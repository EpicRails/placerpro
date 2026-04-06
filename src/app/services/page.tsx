import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ServiceCard from "@/components/ui/ServiceCard";
import IndustriesGrid from "@/components/sections/IndustriesGrid";
import CTASection from "@/components/sections/CTASection";
import { services, servicesByCategory } from "@/data/services";

export const metadata: Metadata = {
  title: "Security Services in Roseville, CA",
  description:
    "Full-service private security in Roseville, CA — armed and unarmed officers, vehicle patrol, fire watch, construction site security, and more for the Sacramento region.",
};

const categoryLabels: Record<string, string> = {
  personnel: "Security Personnel",
  patrol: "Patrol & Monitoring",
  specialty: "Specialty Services",
};

export default function ServicesPage() {
  return (
    <>
      <HeroSection
        badge="Our Services"
        headline="Security Services Tailored to Your Property"
        subheadline="From uniformed guard posts to mobile vehicle patrol and specialty fire watch coverage — Placer Protection Group provides the right solution for your specific property, risk level, and budget."
        ctaPrimary={{ label: "Get a Quote", href: "/contact" }}
        ctaSecondary={{ label: "View Service Areas", href: "/locations" }}
        variant="page"
      />

      {/* Intro */}
      <section className="py-14 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Professional Security for the Sacramento Region
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Placer Protection Group provides licensed, trained security professionals across a
              full spectrum of service types. Whether your property needs a full-time
              stationary guard, after-hours vehicle patrol, temporary fire watch coverage,
              or specialized construction site security, we design a coverage plan that fits
              your operation.
            </p>
            <p className="text-slate-600 leading-relaxed">
              All services are delivered by California BSIS-licensed officers with professional
              training and clear post orders tailored to your property. We operate from
              Roseville and serve clients throughout Placer County and the greater Sacramento area.
            </p>
          </div>
        </div>
      </section>

      {/* Services by category */}
      {(["personnel", "patrol", "specialty"] as const).map((category) => (
        <section key={category} className="py-16 even:bg-slate-50 odd:bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <span className="label-tag">{categoryLabels[category]}</span>
              <h2 className="text-2xl font-bold text-slate-900">
                {category === "personnel"
                  ? "Uniformed Officer Services"
                  : category === "patrol"
                  ? "Mobile Patrol & Remote Coverage"
                  : "Specialty & Compliance Services"}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {servicesByCategory[category].map((service) => (
                <ServiceCard
                  key={service.slug}
                  slug={service.slug}
                  title={service.title}
                  summary={service.summary}
                  icon={service.icon}
                  variant="light"
                />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Industries */}
      <IndustriesGrid />

      {/* CTA */}
      <CTASection />
    </>
  );
}
