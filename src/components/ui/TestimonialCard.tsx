import { Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  title: string;
  company: string;
  location: string;
  quote: string;
  service: string;
}

export default function TestimonialCard({
  name,
  title,
  company,
  location,
  quote,
  service,
}: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-7 shadow-sm border border-slate-100 flex flex-col h-full">
      <Quote className="text-amber-200 mb-4 flex-shrink-0" size={28} />
      <p className="text-slate-700 leading-relaxed text-sm flex-1 mb-6">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="flex items-center gap-3 pt-5 border-t border-slate-100">
        <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-slate-600 font-semibold text-sm">
            {name.split(" ").map((n) => n[0]).join("")}
          </span>
        </div>
        <div>
          <p className="text-slate-900 font-semibold text-sm">{name}</p>
          <p className="text-slate-500 text-xs">
            {title}, {company}
          </p>
          <p className="text-amber-600 text-xs font-medium mt-0.5">{service}</p>
        </div>
      </div>
    </div>
  );
}
