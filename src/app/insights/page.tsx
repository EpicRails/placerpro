import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import BlogCard from "@/components/ui/BlogCard";
import CTASection from "@/components/sections/CTASection";
import { blogPosts, categories } from "@/data/blog";

export const metadata: Metadata = {
  title: "Security Insights & Resources | Placer Protection Group",
  description:
    "Security guidance for property managers in Roseville and the Sacramento region — vehicle patrol, fire watch, construction site security, and more.",
};

export default function InsightsPage() {
  return (
    <>
      <HeroSection
        badge="Insights"
        headline="Security Guidance for Property Managers"
        subheadline="Practical articles on crime deterrence, property security strategy, and what to look for in a security partner — written for the Sacramento region."
        ctaPrimary={{ label: "Get a Quote", href: "/contact" }}
        ctaSecondary={{ label: "View Services", href: "/services" }}
        variant="page"
      />

      {/* Filter chips (visual only, could be made interactive) */}
      <section className="py-10 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-sm text-slate-500 font-medium">Topics:</span>
            <span className="text-sm bg-[#0d1b2a] text-white px-3 py-1.5 rounded-full font-medium">
              All
            </span>
            {categories.map((cat) => (
              <span
                key={cat}
                className="text-sm bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full font-medium hover:bg-slate-200 cursor-pointer transition-colors"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Articles grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <BlogCard
                key={post.slug}
                slug={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                category={post.category}
                publishedAt={post.publishedAt}
                readTime={post.readTime}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Have a Security Question?"
        subheading="Our team is available to discuss your property's specific situation. Contact us for a free, no-obligation consultation."
        variant="dark"
      />
    </>
  );
}
