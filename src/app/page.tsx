import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/sections/HeroSection";
import ServicesPreview from "@/components/sections/ServicesPreview";
import ValueProps from "@/components/sections/ValueProps";
import IndustriesGrid from "@/components/sections/IndustriesGrid";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import BlogPreview from "@/components/sections/BlogPreview";
import CareersSection from "@/components/sections/CareersSection";
import CTASection from "@/components/sections/CTASection";
import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Professional Security Services in Roseville, CA | Placer Protection Group",
  description:
    "Placer Protection Group provides armed guards, unarmed security officers, vehicle patrol, fire watch, and construction site security for properties across Roseville and the Sacramento region.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection
        badge="Serving Roseville, CA & Surrounding Areas"
        headline="Professional Security Services for Roseville, CA"
        subheadline="Reliable guards, vehicle patrol, and fire watch for properties that need real protection. Locally based, fully licensed, and accountable — every shift."
        ctaPrimary={{ label: "Get a Free Quote", href: "/contact" }}
        ctaSecondary={{ label: "View Services", href: "/services" }}
        variant="home"
      />

      {/* Featured services */}
      <ServicesPreview />

      {/* Full services grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="label-tag">All Services</span>
            <h2 className="section-heading mb-4">
              Comprehensive Security Coverage for Every Property Type
            </h2>
            <p className="section-subheading max-w-2xl mx-auto">
              Whether you need a stationary guard post, mobile patrol, or
              specialty coverage like fire watch, we have the right solution for
              your property and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                slug={service.slug}
                title={service.shortTitle}
                summary={service.summary}
                icon={service.icon}
                variant="light"
                compact={false}
              />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border-2 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white font-semibold px-7 py-3 rounded-lg transition-all duration-200 text-sm"
            >
              View Full Services Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <ValueProps />

      {/* Industries */}
      <IndustriesGrid />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Blog preview */}
      <BlogPreview />

      {/* Careers */}
      <CareersSection />

      {/* Final CTA */}
      <CTASection
        heading="Ready to Improve Security at Your Property?"
        subheading="Contact our team for a free site assessment and security proposal tailored to your property. We serve Roseville, CA and the greater Sacramento region."
        variant="dark"
      />
    </>
  );
}
