"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import BlogCard from "@/components/ui/BlogCard";
import { blogPosts } from "@/data/blog";
import { ArrowRight } from "lucide-react";

export default function BlogPreview() {
  const previewPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="label-tag">Insights</span>
            <h2 className="section-heading">
              Security Guidance for Property Managers
            </h2>
          </div>
          <Link
            href="/insights"
            className="flex items-center gap-2 text-amber-600 font-semibold text-sm hover:gap-3 transition-all flex-shrink-0"
          >
            View all articles <ArrowRight size={16} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {previewPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <BlogCard
                slug={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                category={post.category}
                publishedAt={post.publishedAt}
                readTime={post.readTime}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
