"use client";

import Link from "next/link";
import {
  Shield, UserCheck, Car, Flame, HardHat, ShoppingBag,
  Home, Cross, Users, Camera, ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Shield,
  UserCheck,
  Car,
  Flame,
  HardHat,
  ShoppingBag,
  Home,
  Cross,
  Users,
  Camera,
};

interface ServiceCardProps {
  slug: string;
  title: string;
  summary: string;
  icon: string;
  variant?: "light" | "dark";
  compact?: boolean;
}

export default function ServiceCard({
  slug,
  title,
  summary,
  icon,
  variant = "light",
  compact = false,
}: ServiceCardProps) {
  const Icon = iconMap[icon] ?? Shield;

  if (variant === "dark") {
    return (
      <Link href={`/services/${slug}`} className="group block">
        <div className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-500/30 rounded-2xl p-6 h-full transition-all duration-200">
          <div className="w-10 h-10 bg-amber-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-600/30 transition-colors">
            <Icon className="text-amber-400" size={20} />
          </div>
          <h3 className="text-white font-semibold text-base mb-2 group-hover:text-amber-300 transition-colors">
            {title}
          </h3>
          {!compact && (
            <p className="text-slate-400 text-sm leading-relaxed mb-4">{summary}</p>
          )}
          <span className="text-amber-500 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
            Learn more <ArrowRight size={14} />
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/services/${slug}`} className="group block">
      <div
        className={cn(
          "bg-white hover:bg-slate-50 border border-slate-100 hover:border-slate-200 rounded-2xl h-full transition-all duration-200 hover:shadow-md",
          compact ? "p-5" : "p-6"
        )}
      >
        <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-100 transition-colors">
          <Icon className="text-amber-600" size={20} />
        </div>
        <h3 className="text-slate-900 font-semibold text-base mb-2 group-hover:text-amber-700 transition-colors">
          {title}
        </h3>
        {!compact && (
          <p className="text-slate-600 text-sm leading-relaxed mb-4">{summary}</p>
        )}
        <span className="text-amber-600 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
          Learn more <ArrowRight size={14} />
        </span>
      </div>
    </Link>
  );
}
