"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

const servicesDropdown = [
  { label: "Armed Security", href: "/services/armed-security" },
  { label: "Unarmed Security", href: "/services/unarmed-security" },
  { label: "Vehicle Patrol", href: "/services/vehicle-patrol" },
  { label: "Fire Watch", href: "/services/fire-watch" },
  { label: "Construction Security", href: "/services/construction-site-security" },
  { label: "Retail Security", href: "/services/retail-security" },
  { label: "Apartment & HOA Security", href: "/services/apartment-hoa-security" },
  { label: "View All Services →", href: "/services" },
];

const companyDropdown = [
  { label: "About Us", href: "/about" },
  { label: "Careers", href: "/careers" },
];

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  { label: "Services", href: "/services", children: servicesDropdown },
  { label: "Company", href: "/about", children: companyDropdown },
  { label: "Locations", href: "/locations" },
  { label: "Insights", href: "/insights" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-[#0d1b2a] shadow-xl"
            : "bg-[#0d1b2a]/95 backdrop-blur-sm"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group flex-shrink-0"
            >
              <div className="w-8 h-8 bg-amber-600 rounded flex items-center justify-center flex-shrink-0">
                <Shield className="w-4.5 h-4.5 text-white" size={18} />
              </div>
              <div className="leading-tight">
                <span className="block text-white font-bold text-sm tracking-wide">
                  Placer Protection
                </span>
                <span className="block text-amber-400 text-xs font-medium tracking-widest uppercase">
                  Group
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-md transition-colors duration-150",
                      pathname.startsWith(item.href) && item.href !== "/"
                        ? "text-amber-400"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    )}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown
                        size={14}
                        className={cn(
                          "transition-transform duration-200",
                          openDropdown === item.label ? "rotate-180" : ""
                        )}
                      />
                    )}
                  </Link>

                  {/* Dropdown */}
                  {item.children && openDropdown === item.label && (
                    <div className="absolute top-full left-0 pt-2">
                      <div className="bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden min-w-[220px] py-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-amber-700 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+19167757274"
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
                (916) 775-7274
              </a>
              <Link
                href="/contact"
                className="bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors duration-200 shadow"
              >
                Get a Quote
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 text-slate-300 hover:text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute top-16 left-0 right-0 bottom-0 bg-[#0d1b2a] overflow-y-auto">
            <nav className="p-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      className="flex-1 py-3 px-2 text-white font-medium text-base"
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <button
                        className="p-2 text-slate-400"
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === item.label ? null : item.label
                          )
                        }
                      >
                        <ChevronDown
                          size={16}
                          className={cn(
                            "transition-transform",
                            openDropdown === item.label ? "rotate-180" : ""
                          )}
                        />
                      </button>
                    )}
                  </div>
                  {item.children && openDropdown === item.label && (
                    <div className="ml-4 border-l border-slate-700 pl-4 pb-2 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block py-2 text-sm text-slate-400 hover:text-amber-400"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-4 mt-4 border-t border-slate-700 space-y-3">
                <a
                  href="tel:+19167757274"
                  className="block py-3 px-2 text-slate-400 text-sm"
                >
                  (916) 775-7274
                </a>
                <Link
                  href="/contact"
                  className="block w-full text-center bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
                >
                  Get a Quote
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
