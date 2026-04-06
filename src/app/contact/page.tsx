import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/forms/ContactForm";
import { locations } from "@/data/locations";

export const metadata: Metadata = {
  title: "Contact Us | Get a Security Quote in Roseville, CA",
  description:
    "Contact Placer Protection Group for a free security assessment and quote. We serve Roseville, CA and the greater Sacramento region. Available 24/7.",
};

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "(916) 775-7274",
    href: "tel:+19167757274",
    sub: "Available 24 hours a day, 7 days a week",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@placerprotection.net",
    href: "mailto:hello@placerprotection.net",
    sub: "We respond within one business day",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Roseville, CA 95747",
    href: null,
    sub: "Serving Placer County and greater Sacramento",
  },
  {
    icon: Clock,
    label: "Dispatch Hours",
    value: "24 / 7 / 365",
    href: null,
    sub: "Including holidays and weekends",
  },
];

export default function ContactPage() {
  // JSON-LD LocalBusiness schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://placerprotectiongroup.com",
    "name": "Placer Protection Group",
    "description":
      "Professional private security services in Roseville, CA — armed guards, unarmed officers, vehicle patrol, fire watch, and construction site security.",
    "url": "https://placerprotectiongroup.com",
    "telephone": "+19167757274",
    "email": "hello@placerprotection.net",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Roseville",
      "addressRegion": "CA",
      "postalCode": "95747",
      "addressCountry": "US",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "38.7521",
      "longitude": "-121.2880",
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      "opens": "00:00",
      "closes": "23:59",
    },
    "areaServed": [
      "Roseville, CA",
      "Rocklin, CA",
      "Lincoln, CA",
      "Granite Bay, CA",
      "Citrus Heights, CA",
      "Antelope, CA",
      "Auburn, CA",
    ],
    "serviceType": "Private Security Services",
    "priceRange": "$$",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section
        className="pt-32 pb-16 lg:pt-40 lg:pb-20"
        style={{
          background:
            "linear-gradient(135deg, #0a1520 0%, #0d1b2a 40%, #1a2f4e 80%, #0d1b2a 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-amber-400 bg-amber-600/15 border border-amber-600/25 px-3 py-1.5 rounded-full mb-5">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Request a Security Assessment
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Tell us about your property and security needs. We&apos;ll respond
            within one business day with a tailored proposal.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact details */}
            <div className="lg:col-span-1 space-y-5">
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-1">
                  Contact Details
                </h2>
                <p className="text-slate-500 text-sm">
                  Reach our team by phone, email, or the form.
                </p>
              </div>

              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="bg-white rounded-2xl p-5 border border-slate-100"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 bg-amber-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="text-amber-600" size={18} />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-0.5">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-slate-900 font-semibold text-sm hover:text-amber-600 transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-slate-900 font-semibold text-sm">
                            {item.value}
                          </p>
                        )}
                        <p className="text-slate-500 text-xs mt-0.5">{item.sub}</p>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Service areas */}
              <div className="bg-[#0d1b2a] rounded-2xl p-5">
                <h3 className="text-white font-semibold mb-3">
                  Service Areas
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {locations.map((loc) => (
                    <span
                      key={loc.slug}
                      className="text-xs bg-white/10 text-slate-300 px-2.5 py-1 rounded-full"
                    >
                      {loc.name}
                      {loc.state !== "CA" ? `, ${loc.state}` : ", CA"}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm">
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-slate-900 mb-1">
                    Send Us a Request
                  </h2>
                  <p className="text-slate-500 text-sm">
                    All fields marked with * are required. We will contact you
                    within one business day.
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA strip */}
      <section className="py-12 bg-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-white font-bold text-xl mb-2">
            Urgent security need? Call us directly.
          </h3>
          <p className="text-amber-100 text-sm mb-4">
            Our dispatch team is available 24 hours a day, 7 days a week.
          </p>
          <a
            href="tel:+19167757274"
            className="inline-flex items-center gap-2 bg-white text-amber-700 hover:bg-amber-50 font-bold px-7 py-3 rounded-lg transition-colors text-sm shadow"
          >
            <Phone size={16} />
            (916) 775-7274
          </a>
        </div>
      </section>
    </>
  );
}
