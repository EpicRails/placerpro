import Link from "next/link";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { formatDate } from "@/lib/utils";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readTime: string;
  compact?: boolean;
}

export default function BlogCard({
  slug,
  title,
  excerpt,
  category,
  publishedAt,
  readTime,
  compact = false,
}: BlogCardProps) {
  return (
    <article className="group bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-md transition-all duration-200 flex flex-col h-full">
      {/* Category band */}
      <div className="h-1.5 bg-amber-600" />

      <div className={compact ? "p-5 flex flex-col flex-1" : "p-6 flex flex-col flex-1"}>
        <span className="text-xs font-semibold uppercase tracking-widest text-amber-600 mb-3 block">
          {category}
        </span>

        <h3
          className={`font-bold text-slate-900 group-hover:text-amber-700 transition-colors leading-snug mb-3 ${
            compact ? "text-base" : "text-lg"
          }`}
        >
          <Link href={`/insights/${slug}`}>{title}</Link>
        </h3>

        {!compact && (
          <p className="text-slate-600 text-sm leading-relaxed mb-5 flex-1">
            {excerpt}
          </p>
        )}

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
          <div className="flex items-center gap-3 text-slate-400 text-xs">
            <span className="flex items-center gap-1">
              <Calendar size={12} />
              {formatDate(publishedAt)}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={12} />
              {readTime}
            </span>
          </div>
          <Link
            href={`/insights/${slug}`}
            className="text-amber-600 text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all"
          >
            Read more <ArrowRight size={12} />
          </Link>
        </div>
      </div>
    </article>
  );
}
