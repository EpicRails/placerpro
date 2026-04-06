import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Tag, ArrowRight } from "lucide-react";
import CTASection from "@/components/sections/CTASection";
import BlogCard from "@/components/ui/BlogCard";
import { blogPosts, getPostBySlug } from "@/data/blog";
import { formatDate } from "@/lib/utils";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.metaDescription,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.publishedAt,
    },
  };
}

// Very simple markdown-ish renderer for blog content
function renderContent(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="text-2xl font-bold text-slate-900 mt-10 mb-4">
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="text-xl font-bold text-slate-900 mt-8 mb-3">
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith("**") && line.endsWith("**")) {
      elements.push(
        <p key={i} className="font-semibold text-slate-900 mt-5 mb-2">
          {line.slice(2, -2)}
        </p>
      );
    } else if (line.startsWith("- ")) {
      // Collect list items
      const items: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("- ")) {
        items.push(lines[i].trim().slice(2));
        i++;
      }
      elements.push(
        <ul key={`list-${i}`} className="space-y-2 my-4 ml-4">
          {items.map((item, j) => (
            <li key={j} className="flex items-start gap-2.5 text-slate-600">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0 mt-2" />
              {item}
            </li>
          ))}
        </ul>
      );
      continue;
    } else if (line.length > 0) {
      // Regular paragraph — handle inline bold
      const parts = line.split(/\*\*([^*]+)\*\*/g);
      elements.push(
        <p key={i} className="text-slate-600 leading-relaxed my-4">
          {parts.map((part, j) =>
            j % 2 === 1 ? (
              <strong key={j} className="font-semibold text-slate-800">
                {part}
              </strong>
            ) : (
              part
            )
          )}
        </p>
      );
    }
    i++;
  }

  return elements;
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const relatedPosts = blogPosts
    .filter(
      (p) =>
        p.slug !== post.slug &&
        (p.category === post.category || p.tags.some((t) => post.tags.includes(t)))
    )
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.metaDescription,
    "datePublished": post.publishedAt,
    "publisher": {
      "@type": "Organization",
      "name": "Placer Protection Group",
      "url": "https://placerprotectiongroup.com",
    },
    "author": {
      "@type": "Organization",
      "name": post.author,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section
        className="pt-32 pb-16 lg:pt-40"
        style={{
          background:
            "linear-gradient(135deg, #0a1520 0%, #0d1b2a 40%, #1a2f4e 80%, #0d1b2a 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm mb-6 transition-colors"
          >
            <ArrowLeft size={14} />
            Back to Insights
          </Link>

          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-amber-400 bg-amber-600/15 border border-amber-600/25 px-3 py-1.5 rounded-full mb-4">
            {post.category}
          </span>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-5">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-slate-400 text-sm">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              {formatDate(post.publishedAt)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} />
              {post.readTime}
            </span>
            <span className="flex items-center gap-1.5">
              <Tag size={14} />
              {post.author}
            </span>
          </div>
        </div>
      </section>

      {/* Article */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Content */}
            <article className="lg:col-span-2 prose-sm max-w-none">
              <p className="text-lg text-slate-700 leading-relaxed font-medium border-l-4 border-amber-500 pl-5 mb-8">
                {post.excerpt}
              </p>
              {renderContent(post.content)}
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* CTA card */}
              <div
                className="rounded-2xl p-6 sticky top-24"
                style={{
                  background: "linear-gradient(135deg, #0d1b2a 0%, #1a2f4e 100%)",
                }}
              >
                <h3 className="text-white font-bold text-base mb-2">
                  Need security coverage in Roseville?
                </h3>
                <p className="text-slate-400 text-sm mb-5 leading-relaxed">
                  Our team is available 24/7. Contact us for a free site
                  assessment and security proposal.
                </p>
                <Link
                  href="/contact"
                  className="block w-full text-center bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 rounded-lg transition-colors text-sm mb-2"
                >
                  Get a Free Quote
                </Link>
                <a
                  href="tel:+19167757274"
                  className="block w-full text-center border border-white/20 text-white hover:bg-white/10 py-3 rounded-lg transition-colors text-sm"
                >
                  (916) 775-7274
                </a>
              </div>

              {/* Tags */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                <h4 className="text-slate-900 font-semibold text-sm mb-3">Topics</h4>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-white border border-slate-200 text-slate-600 px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="py-14 bg-slate-50 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-slate-900">
                Related Articles
              </h2>
              <Link
                href="/insights"
                className="text-amber-600 text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all"
              >
                View all <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((p) => (
                <BlogCard
                  key={p.slug}
                  slug={p.slug}
                  title={p.title}
                  excerpt={p.excerpt}
                  category={p.category}
                  publishedAt={p.publishedAt}
                  readTime={p.readTime}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection variant="dark" />
    </>
  );
}
