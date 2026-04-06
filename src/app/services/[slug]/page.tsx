import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Shield, UserCheck, Car, Flame, HardHat, ShoppingBag,
  Home, Cross, Users, Camera, CheckCircle2, ArrowRight,
} from "lucide-react";
import FAQAccordion from "@/components/ui/FAQAccordion";
import ServiceCard from "@/components/ui/ServiceCard";
import CTASection from "@/components/sections/CTASection";
import { services, getServiceBySlug, getRelatedServices } from "@/data/services";

const iconMap: Record<string, React.ElementType> = {
  Shield, UserCheck, Car, Flame, HardHat, ShoppingBag,
  Home, Cross, Users, Camera,
};

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  return {
    title: `${service.title} in Roseville, CA`,
    description: service.metaDescription,
  };
}

export default function ServicePage({ params }: Props) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const Icon = iconMap[service.icon] ?? Shield;
  const related = getRelatedServices(service.relatedSlugs);

  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Placer Protection Group",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Roseville",
        "addressRegion": "CA",
        "postalCode": "95747",
        "addressCountry": "US",
      },
      "telephone": "+19167757274",
    },
    "areaServed": "Roseville, CA and Sacramento Region",
    "description": service.metaDescription,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section
        className="pt-32 pb-20 lg:pt-40 lg:pb-24"
        style={{
          background:
            "linear-gradient(135deg, #0a1520 0%, #0d1b2a 40%, #1a2f4e 80%, #0d1b2a 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-amber-600/20 rounded-xl flex items-center justify-center">
                <Icon className="text-amber-400" size={20} />
              </div>
              <Link
                href="/services"
                className="text-slate-400 hover:text-slate-200 text-sm transition-colors"
              >
                ← All Services
              </Link>
            </div>

            <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
              {service.category === "personnel"
                ? "Security Personnel"
                : service.category === "patrol"
                ? "Patrol & Monitoring"
                : "Specialty Services"}
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
              {service.title}
            </h1>
            <p className="text-xl text-amber-300 font-medium mb-5">
              {service.tagline}
            </p>
            <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-2xl">
              {service.summary}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-7 py-3.5 rounded-lg transition-colors text-sm shadow-lg"
              >
                Get a Quote <ArrowRight size={16} />
              </Link>
              <a
                href="tel:+19167757274"
                className="inline-flex items-center gap-2 bg-white/8 hover:bg-white/14 text-white font-semibold px-7 py-3.5 rounded-lg border border-white/20 transition-colors text-sm"
              >
                Call (916) 775-7274
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main content */}
            <div className="lg:col-span-2">
              <span className="label-tag">Overview</span>
              <h2 className="text-2xl font-bold text-slate-900 mb-5">
                What Our {service.shortTitle} Service Includes
              </h2>
              <p className="text-slate-600 leading-relaxed text-base">
                {service.overview}
              </p>
            </div>

            {/* Benefits sidebar */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 h-fit">
              <h3 className="font-bold text-slate-900 mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2.5">
                    <CheckCircle2
                      size={16}
                      className="text-amber-600 flex-shrink-0 mt-0.5"
                    />
                    <span className="text-slate-600 text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-5 border-t border-slate-200">
                <Link
                  href="/contact"
                  className="block w-full text-center bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors text-sm"
                >
                  Get a Quote
                </Link>
                <a
                  href="tel:+19167757274"
                  className="block w-full text-center mt-2 border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold py-3 px-4 rounded-lg transition-colors text-sm"
                >
                  (916) 775-7274
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="label-tag">Service Details</span>
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            How We Deliver {service.shortTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-6 border border-slate-100"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-amber-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-amber-600 font-bold text-sm">
                      {index + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="label-tag">Industries Served</span>
              <h2 className="text-2xl font-bold text-slate-900 mb-5">
                Properties That Benefit from {service.shortTitle}
              </h2>
              <ul className="space-y-2.5">
                {service.industries.map((industry) => (
                  <li key={industry} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                    <span className="text-slate-600 text-sm">{industry}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA panel */}
            <div
              className="rounded-2xl p-8"
              style={{
                background:
                  "linear-gradient(135deg, #0d1b2a 0%, #1a2f4e 100%)",
              }}
            >
              <h3 className="text-white font-bold text-xl mb-3">
                Not sure which service is right for your property?
              </h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                Our team will assess your property&apos;s needs and recommend the
                right coverage level — honestly, without overselling. Contact us
                for a free consultation.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-5 py-3 rounded-lg transition-colors text-sm"
              >
                Get a Free Consultation <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {service.faqs.length > 0 && (
        <section className="py-16 bg-slate-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="label-tag">FAQ</span>
            <h2 className="text-2xl font-bold text-slate-900 mb-8">
              Frequently Asked Questions
            </h2>
            <FAQAccordion items={service.faqs} />
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": service.faqs.map((faq) => ({
                  "@type": "Question",
                  "name": faq.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer,
                  },
                })),
              }),
            }}
          />
        </section>
      )}

      {/* Related services */}
      {related.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="label-tag">Related Services</span>
            <h2 className="text-2xl font-bold text-slate-900 mb-8">
              Frequently Combined With
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {related.map((s) => (
                <ServiceCard
                  key={s.slug}
                  slug={s.slug}
                  title={s.title}
                  summary={s.summary}
                  icon={s.icon}
                  variant="light"
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
