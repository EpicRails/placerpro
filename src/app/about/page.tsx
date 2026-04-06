import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Target, Eye, Heart, ArrowRight } from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import TeamCard from "@/components/ui/TeamCard";
import CTASection from "@/components/sections/CTASection";
import CareersSection from "@/components/sections/CareersSection";
import { teamMembers } from "@/data/team";

export const metadata: Metadata = {
  title: "About Placer Protection Group | Roseville, CA Security Company",
  description:
    "Learn about Placer Protection Group — a locally owned private security company based in Roseville, CA serving the greater Sacramento region with professional, accountable security services.",
};

const values = [
  {
    icon: Target,
    title: "Accountability",
    description:
      "Every officer, every shift is held to a documented standard. Clients receive detailed reports because security without accountability is not security.",
  },
  {
    icon: Heart,
    title: "Community Focus",
    description:
      "We are local. We serve the communities we live in, and we take that responsibility seriously. Our reputation is built one client relationship at a time.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "We do not oversell. We assess your property honestly and recommend the coverage level that actually fits your situation — not our margins.",
  },
  {
    icon: CheckCircle2,
    title: "Professionalism",
    description:
      "Our officers represent your property as much as they represent us. Appearance, conduct, communication — all held to a professional standard.",
  },
];

export default function AboutPage() {
  return (
    <>
      <HeroSection
        badge="About Us"
        headline="A Roseville Security Company Built on Local Accountability"
        subheadline="Placer Protection Group was founded to serve the Sacramento region with a standard of professionalism and accountability that national security firms rarely deliver at the local level."
        ctaPrimary={{ label: "Get a Quote", href: "/contact" }}
        ctaSecondary={{ label: "Meet Our Team", href: "#team" }}
        variant="page"
      />

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="label-tag">Our Story</span>
              <h2 className="text-3xl font-bold text-slate-900 mb-5 tracking-tight">
                Built for the Sacramento Region, by People Who Know It
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Placer Protection Group was founded in Roseville with a straightforward
                  premise: the businesses, property managers, and communities in the Sacramento
                  region deserve a security company that is genuinely accountable to them —
                  not to a distant corporate office or a high-volume staffing model that treats
                  clients as accounts rather than partners.
                </p>
                <p>
                  We started by focusing on what we knew: local properties, local officers,
                  and a local management team that is available when clients call. From that
                  foundation, we have grown to serve apartment communities, retail centers,
                  construction sites, and commercial properties across Roseville, Rocklin,
                  Lincoln, and the broader Sacramento region.
                </p>
                <p>
                  Every part of how we operate — our reporting standards, our officer
                  selection, our willingness to walk a property before recommending a service
                  level — reflects a commitment to being the kind of security company we
                  would want if the property were ours.
                </p>
              </div>
            </div>

            {/* Stats panel */}
            <div
              className="rounded-3xl p-10"
              style={{
                background: "linear-gradient(135deg, #0d1b2a 0%, #1a2f4e 100%)",
              }}
            >
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "Roseville", label: "Headquartered", sub: "CA" },
                  { value: "24/7", label: "Dispatch", sub: "available" },
                  { value: "Licensed", label: "CA BSIS", sub: "compliant" },
                  { value: "Local", label: "Community", sub: "focused" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-3xl font-black text-white mb-1">
                      {stat.value}
                    </p>
                    <p className="text-amber-400 text-sm font-semibold">
                      {stat.label}
                    </p>
                    <p className="text-slate-500 text-xs">{stat.sub}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-slate-400 text-sm text-center leading-relaxed">
                  &ldquo;We built this company to be the security partner we would
                  want — honest, responsive, and locally accountable.&rdquo;
                </p>
                <p className="text-amber-400 text-xs text-center mt-2 font-medium">
                  — John Crocker, Founder
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8 border border-slate-100">
              <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center mb-5">
                <Target className="text-amber-600" size={20} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Our Mission
              </h3>
              <p className="text-slate-600 leading-relaxed">
                To provide Roseville and Sacramento-region property owners, managers, and
                communities with professional, accountable security coverage — delivered by
                trained officers who take their role seriously and backed by management that
                is genuinely accessible and responsive.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-slate-100">
              <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center mb-5">
                <Eye className="text-amber-600" size={20} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Our Vision
              </h3>
              <p className="text-slate-600 leading-relaxed">
                To be recognized as the most trusted private security company in Placer County
                — known for the consistency of our officers, the clarity of our reporting, and
                the integrity of our client relationships. Growth without the compromise of
                local accountability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="label-tag">Core Values</span>
            <h2 className="section-heading">What We Stand For</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="bg-slate-50 rounded-2xl p-6 text-center hover:bg-white hover:shadow-sm hover:border hover:border-slate-100 transition-all"
                >
                  <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-amber-600" size={22} />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{value.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="label-tag">Our Team</span>
            <h2 className="section-heading mb-4">
              Founded and Led Locally
            </h2>
            <p className="section-subheading max-w-2xl mx-auto">
              Placer Protection Group is owner-operated. When you work with us,
              you work with the person who built it.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            {teamMembers.map((member) => (
              <TeamCard
                key={member.id}
                name={member.name}
                title={member.title}
                bio={member.bio}
                initials={member.initials}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Looking Ahead */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="label-tag">Looking Ahead</span>
            <h2 className="section-heading mb-5">
              Growing to Serve the Region Better
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              As Roseville and the surrounding Sacramento region continue to grow, so does the
              demand for professional, locally accountable security. We are expanding our
              officer team, patrol capacity, and service area coverage to meet that demand —
              without compromising the quality and accountability that our clients depend on.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Our commitment remains the same: every client gets a security partner who
              picks up the phone, delivers thorough documentation, and takes their property
              seriously.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#0d1b2a] hover:bg-slate-800 text-white font-semibold px-7 py-3.5 rounded-lg transition-colors text-sm"
            >
              Work with Our Team <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Careers */}
      <CareersSection />

      <CTASection variant="dark" />
    </>
  );
}
