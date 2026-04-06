import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

interface LocationCardProps {
  name: string;
  state: string;
  tagline: string;
  description: string;
  servicesOffered: string[];
  isPrimary?: boolean;
  slug: string;
}

export default function LocationCard({
  name,
  state,
  tagline,
  description,
  servicesOffered,
  isPrimary = false,
  slug,
}: LocationCardProps) {
  return (
    <div
      id={slug}
      className={`rounded-2xl border p-6 flex flex-col h-full ${
        isPrimary
          ? "bg-[#0d1b2a] border-amber-600/30 text-white"
          : "bg-white border-slate-100 hover:border-slate-200 hover:shadow-md transition-all"
      }`}
    >
      {isPrimary && (
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-amber-400 mb-3">
          Primary Service Area
        </span>
      )}

      <div className="flex items-center gap-2 mb-2">
        <MapPin
          size={16}
          className={isPrimary ? "text-amber-500" : "text-amber-600"}
        />
        <h3
          className={`font-bold text-lg ${
            isPrimary ? "text-white" : "text-slate-900"
          }`}
        >
          {name}, {state}
        </h3>
      </div>

      <p
        className={`text-sm font-medium mb-3 ${
          isPrimary ? "text-amber-300" : "text-amber-700"
        }`}
      >
        {tagline}
      </p>

      <p
        className={`text-sm leading-relaxed mb-5 flex-1 ${
          isPrimary ? "text-slate-400" : "text-slate-600"
        }`}
      >
        {description}
      </p>

      <div className="mb-5">
        <p
          className={`text-xs font-semibold uppercase tracking-widest mb-2 ${
            isPrimary ? "text-slate-500" : "text-slate-500"
          }`}
        >
          Services Available
        </p>
        <div className="flex flex-wrap gap-1.5">
          {servicesOffered.slice(0, 4).map((s) => (
            <span
              key={s}
              className={`text-xs px-2.5 py-1 rounded-full ${
                isPrimary
                  ? "bg-white/10 text-slate-300"
                  : "bg-slate-100 text-slate-600"
              }`}
            >
              {s}
            </span>
          ))}
          {servicesOffered.length > 4 && (
            <span
              className={`text-xs px-2.5 py-1 rounded-full ${
                isPrimary
                  ? "bg-white/10 text-slate-300"
                  : "bg-slate-100 text-slate-600"
              }`}
            >
              +{servicesOffered.length - 4} more
            </span>
          )}
        </div>
      </div>

      <Link
        href="/contact"
        className={`flex items-center gap-2 text-sm font-semibold transition-all group ${
          isPrimary
            ? "text-amber-400 hover:text-amber-300"
            : "text-amber-600 hover:text-amber-700"
        }`}
      >
        Get coverage in {name}
        <ArrowRight
          size={14}
          className="group-hover:translate-x-1 transition-transform"
        />
      </Link>
    </div>
  );
}
