import Link from "next/link";
import { Shield, Phone, Mail, MapPin } from "lucide-react";

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Team", href: "/about#team" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Armed Security", href: "/services/armed-security" },
  { label: "Unarmed Security", href: "/services/unarmed-security" },
  { label: "Vehicle Patrol", href: "/services/vehicle-patrol" },
  { label: "Fire Watch", href: "/services/fire-watch" },
  { label: "Construction Security", href: "/services/construction-site-security" },
  { label: "Retail Security", href: "/services/retail-security" },
  { label: "Apartment & HOA Security", href: "/services/apartment-hoa-security" },
  { label: "Event Security", href: "/services/event-security" },
];

const resourceLinks = [
  { label: "Insights & Blog", href: "/insights" },
  { label: "Service Areas", href: "/locations" },
  { label: "Get a Quote", href: "/contact" },
];

const serviceAreaLinks = [
  { label: "Roseville, CA", href: "/locations#roseville" },
  { label: "Rocklin, CA", href: "/locations#rocklin" },
  { label: "Lincoln, CA", href: "/locations#lincoln" },
  { label: "Granite Bay, CA", href: "/locations#granite-bay" },
  { label: "Citrus Heights, CA", href: "/locations#citrus-heights" },
  { label: "Antelope, CA", href: "/locations#antelope" },
  { label: "Auburn, CA", href: "/locations#auburn" },
  { label: "Greater Sacramento", href: "/locations#sacramento" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a1520] text-slate-400">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 bg-amber-600 rounded flex items-center justify-center flex-shrink-0">
                <Shield className="text-white" size={18} />
              </div>
              <div className="leading-tight">
                <span className="block text-white font-bold text-sm">
                  Placer Protection
                </span>
                <span className="block text-amber-500 text-xs font-medium tracking-widest uppercase">
                  Group
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-500 mb-5">
              Professional private security services for properties across
              Roseville, CA and the greater Sacramento region.
            </p>
            <div className="space-y-2.5 text-sm">
              <a
                href="tel:+19167757274"
                className="flex items-center gap-2.5 hover:text-amber-400 transition-colors"
              >
                <Phone size={14} className="text-amber-600 flex-shrink-0" />
                (916) 775-7274
              </a>
              <a
                href="mailto:hello@placerprotection.net"
                className="flex items-center gap-2.5 hover:text-amber-400 transition-colors"
              >
                <Mail size={14} className="text-amber-600 flex-shrink-0" />
                hello@placerprotection.net
              </a>
              <div className="flex items-start gap-2.5">
                <MapPin size={14} className="text-amber-600 flex-shrink-0 mt-0.5" />
                <span>Roseville, CA 95747</span>
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Resources
            </h4>
            <ul className="space-y-2.5">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 mt-8">
              Office Hours
            </h4>
            <p className="text-sm leading-relaxed text-slate-500">
              <span className="text-white font-medium">Mon–Fri, 9:00 AM – 5:00 PM</span><br />
              Closed Saturday &amp; Sunday.
            </p>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Service Areas
            </h4>
            <ul className="space-y-2.5">
              {serviceAreaLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Placer Protection Group. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xs text-slate-600">
            <Link href="/privacy" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-400 transition-colors">
              Terms of Service
            </Link>
            <span>Licensed · Insured · CA PPO #119876</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
