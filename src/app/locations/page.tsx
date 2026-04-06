import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import LocationCard from "@/components/ui/LocationCard";
import CTASection from "@/components/sections/CTASection";
import { locations, primaryLocation, serviceAreas } from "@/data/locations";

export const metadata: Metadata = {
  title: "Service Areas | Security Services Across the Sacramento Region",
  description:
    "Placer Protection Group serves Roseville, Rocklin, Lincoln, Granite Bay, Citrus Heights, Antelope, Auburn, and the greater Sacramento area with professional private security services.",
};

export default function LocationsPage() {
  return (
    <>
      <HeroSection
        badge="Service Areas"
        headline="Protecting Communities Across the Sacramento Region"
        subheadline="Based in Roseville, CA — we provide professional security coverage throughout Placer County and the greater Sacramento metro area."
        ctaPrimary={{ label: "Get a Quote", href: "/contact" }}
        ctaSecondary={{ label: "View Services", href: "/services" }}
        variant="page"
      />

      {/* Intro */}
      <section className="py-14 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Local Security. Regional Reach.
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Placer Protection Group is headquartered in Roseville, CA and serves properties
              throughout Placer County and the greater Sacramento region. Our management team and
              dispatch operation are based here — so when you call, you reach someone who
              knows the area and can respond quickly.
            </p>
            <p className="text-slate-600 leading-relaxed">
              We currently provide active coverage in the communities below. If your property
              is in a nearby area not listed, contact us — we may still be able to help.
            </p>
          </div>
        </div>
      </section>

      {/* Primary location */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="label-tag">Primary Service Area</span>
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            Roseville, CA — Our Home Market
          </h2>
          <div className="max-w-2xl">
            <LocationCard
              name={primaryLocation.name}
              state={primaryLocation.state}
              tagline={primaryLocation.tagline}
              description={primaryLocation.description}
              servicesOffered={primaryLocation.servicesOffered}
              isPrimary={true}
              slug={primaryLocation.slug}
            />
          </div>
        </div>
      </section>

      {/* Service areas grid */}
      <section className="py-14 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="label-tag">Extended Coverage</span>
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            Surrounding Communities We Serve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {serviceAreas.map((location) => (
              <LocationCard
                key={location.slug}
                name={location.name}
                state={location.state}
                tagline={location.tagline}
                description={location.description}
                servicesOffered={location.servicesOffered}
                isPrimary={false}
                slug={location.slug}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Coverage map placeholder */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="label-tag">Coverage Area</span>
            <h2 className="section-heading mb-4">
              Serving the Entire I-80 Corridor and Beyond
            </h2>
            <p className="section-subheading max-w-2xl mx-auto">
              Our service area spans from the Sacramento valley foothills through the
              greater Sacramento metro. If your property is in or near Placer County,
              we likely serve your area.
            </p>
          </div>

          {/* Map placeholder */}
          <div
            className="rounded-2xl overflow-hidden h-72 lg:h-96 flex items-center justify-center border border-slate-100"
            style={{
              background: "linear-gradient(135deg, #0d1b2a 0%, #1a2f4e 100%)",
            }}
          >
            <div className="text-center px-6">
              <MapPin className="text-amber-500 mx-auto mb-3" size={36} />
              <p className="text-white font-semibold text-lg mb-1">
                Roseville, CA — Service Hub
              </p>
              <p className="text-slate-400 text-sm mb-4">
                Covering Placer County and greater Sacramento
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {locations.map((loc) => (
                  <span
                    key={loc.slug}
                    className="text-xs bg-white/10 text-slate-300 px-2.5 py-1 rounded-full"
                  >
                    {loc.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Not in list? */}
      <section className="py-12 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-slate-900 font-bold text-xl mb-2">
            Don&apos;t see your area?
          </h3>
          <p className="text-slate-600 text-sm mb-5 max-w-lg mx-auto">
            Our coverage area is expanding. If your property is in or near the
            Sacramento region and is not listed above, contact us — we may
            still be able to accommodate your location.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#0d1b2a] hover:bg-slate-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
          >
            Ask About Your Area <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <CTASection
        heading="Ready for Security Coverage in Your Area?"
        subheading="Contact us for a free site assessment and security proposal for your property."
        variant="dark"
      />
    </>
  );
}
