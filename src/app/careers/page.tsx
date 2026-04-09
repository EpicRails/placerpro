import type { Metadata } from "next";
import { CheckCircle2, Shield, Clock, TrendingUp, Users } from "lucide-react";
import ApplicationForm from "@/components/forms/ApplicationForm";

export const metadata: Metadata = {
  title: "Careers | Join Our Security Team in Roseville, CA",
  description:
    "Join the Placer Protection Group team. We're hiring security officers, patrol drivers, and site supervisors in Roseville, CA and the greater Sacramento region.",
};

const perks = [
  { icon: Clock, title: "Flexible Scheduling", description: "Full-time, part-time, and overnight shifts available across multiple properties." },
  { icon: TrendingUp, title: "Room to Advance", description: "We promote from within. Officers who demonstrate reliability and professionalism move up." },
  { icon: Shield, title: "Training Provided", description: "We support officers through BSIS licensing requirements. Prior experience helpful but not always required." },
  { icon: Users, title: "Supportive Team", description: "A locally operated company where you work alongside management — not for a faceless corporation." },
];

const openRoles = [
  {
    title: "Unarmed Security Officer",
    type: "Full-Time / Part-Time",
    description: "Provide uniformed security presence at commercial, residential, and retail properties. Responsibilities include access control, patrol, observation, and incident reporting.",
    requirements: ["CA BSIS Guard Card (or ability to obtain)", "Professional appearance and communication skills", "Reliable transportation", "Ability to pass background check"],
  },
  {
    title: "Vehicle Patrol Officer",
    type: "Full-Time / Overnight",
    description: "Conduct scheduled and randomized patrol routes across multiple client properties in a marked security vehicle. File patrol reports after each run.",
    requirements: ["Valid CA driver's license with clean record", "CA BSIS Guard Card (or ability to obtain)", "Comfortable working overnight and weekend shifts", "Ability to pass background check"],
  },
  {
    title: "Armed Security Officer",
    type: "Full-Time",
    description: "Provide armed security coverage at higher-risk or high-value properties. Requires current CA BSIS Guard Card and Firearm Permit.",
    requirements: ["Active CA BSIS Guard Card", "Active CA BSIS Firearm Permit", "Demonstrated professional conduct and de-escalation training", "Ability to pass thorough background check"],
  },
  {
    title: "Fire Watch Officer",
    type: "On-Call / As Needed",
    description: "Conduct documented fire watch patrols at commercial properties during system outages or hot work operations. Flexible scheduling, often short-notice deployments.",
    requirements: ["CA BSIS Guard Card (or ability to obtain)", "Detail-oriented with strong documentation skills", "Available for short-notice deployment", "Ability to pass background check"],
  },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-20 lg:pt-40 lg:pb-24"
        style={{
          background: "linear-gradient(135deg, #0a1520 0%, #0d1b2a 40%, #1a2f4e 80%, #0d1b2a 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-amber-400 bg-amber-600/15 border border-amber-600/25 px-3 py-1.5 rounded-full mb-6">
              Now Hiring
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-5">
              Join the Placer Protection Group Team
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              We're a locally owned security company based in Roseville, CA — and
              we're growing. We're looking for professional, reliable individuals
              who take their role seriously and want to build a career in private security.
            </p>
          </div>
        </div>
      </section>

      {/* Why work here */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="label-tag">Why Placer Protection Group</span>
            <h2 className="section-heading">A Company Worth Working For</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {perks.map((perk) => {
              const Icon = perk.icon;
              return (
                <div key={perk.title} className="bg-slate-50 rounded-2xl p-6 text-center">
                  <div className="w-11 h-11 bg-amber-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-amber-600" size={22} />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{perk.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{perk.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="label-tag">Open Positions</span>
            <h2 className="section-heading">Current Openings</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {openRoles.map((role) => (
              <div key={role.title} className="bg-white rounded-2xl p-6 border border-slate-100">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-bold text-slate-900 text-lg">{role.title}</h3>
                  <span className="text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-100 px-2.5 py-1 rounded-full whitespace-nowrap flex-shrink-0">
                    {role.type}
                  </span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{role.description}</p>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2">Requirements</p>
                  <ul className="space-y-1.5">
                    {role.requirements.map((req) => (
                      <li key={req} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle2 size={14} className="text-amber-500 flex-shrink-0 mt-0.5" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application form */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <span className="label-tag">Apply Now</span>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Submit Your Application
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Fill out the form and we'll review your application. We contact
                qualified candidates directly — no automated rejections.
              </p>
              <div
                className="rounded-2xl p-6"
                style={{ background: "linear-gradient(135deg, #0d1b2a 0%, #1a2f4e 100%)" }}
              >
                <p className="text-white font-semibold mb-2">Have questions first?</p>
                <p className="text-slate-400 text-sm mb-4">
                  Call us during office hours and ask to speak with someone about
                  open positions.
                </p>
                <a
                  href="tel:+19167757274"
                  className="block w-full text-center bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 rounded-lg transition-colors text-sm"
                >
                  (916) 775-7274
                </a>
                <p className="text-slate-500 text-xs text-center mt-2">Mon–Fri, 9:00 AM – 5:00 PM</p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm">
                <ApplicationForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
