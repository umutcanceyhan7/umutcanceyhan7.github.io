"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  blogPosts,
  categories,
  formatDate,
  getCategoryColor,
  type BlogPost,
} from "@/data/blog";

interface BlogCardProps {
  post: typeof blogPosts[0];
  index: number;
}

function BlogCard({ post, index }: BlogCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const categoryColor = getCategoryColor(post.category);

  return (
    <Link href={`/blog/${post.slug}`}>
      <article
        className="relative rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer"
        style={{
          backgroundColor: "var(--cream)",
          border: "4px solid var(--dark-purple)",
          boxShadow: isHovered
            ? "8px 8px 0 var(--lavender)"
            : "4px 4px 0 var(--lavender)",
          transform: isHovered ? "translateY(-4px)" : "translateY(0)",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
      {/* Featured Image */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-300"
          style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
          sizes="(max-width: 768px) 100vw, 50vw"
          loading="lazy"
        />
        {/* Placeholder overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            background: `linear-gradient(135deg, ${categoryColor} 0%, var(--cream) 100%)`,
          }}
        >
          <span className="text-5xl">📝</span>
        </div>
        {/* Category badge */}
        <div
          className="absolute top-3 left-3 px-3 py-1 rounded-full font-body text-xs font-medium"
          style={{
            backgroundColor: categoryColor,
            color: "var(--dark-purple)",
            border: "2px solid var(--dark-purple)",
          }}
        >
          {categories.find((c) => c.id === post.category)?.label}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 lg:p-6">
        {/* Meta Info */}
        <div
          className="flex items-center gap-4 mb-3 font-body text-sm"
          style={{ color: "var(--dark-gray)" }}
        >
          <span>{formatDate(post.date)}</span>
          <span>•</span>
          <span>{post.readingTime} min read</span>
        </div>

        <h3
          className="font-heading text-lg lg:text-xl mb-3"
          style={{ color: "var(--dark-purple)" }}
        >
          {post.title}
        </h3>

        <p
          className="font-body text-sm mb-4 line-clamp-2"
          style={{ color: "var(--dark-gray)" }}
        >
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-full font-body text-xs"
              style={{
                backgroundColor: "var(--light-gray)",
                color: "var(--dark-purple)",
                border: "1px solid var(--soft-purple)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        </div>
      </article>
    </Link>
  );
}

function MemphisDivider({ index }: { index: number }) {
  const patterns = [
    // Zigzag pattern
    <svg key="zigzag" width="100%" height="24" viewBox="0 0 200 24" preserveAspectRatio="none">
      <path
        d="M0 12 L20 0 L40 12 L60 0 L80 12 L100 0 L120 12 L140 0 L160 12 L180 0 L200 12"
        stroke="var(--dusty-pink)"
        strokeWidth="3"
        fill="none"
        opacity="0.4"
      />
    </svg>,
    // Dots pattern
    <div key="dots" className="flex justify-center gap-6 py-2">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="w-3 h-3 rounded-full"
          style={{
            backgroundColor: i % 2 === 0 ? "var(--mint-green)" : "var(--peach)",
            opacity: 0.5,
          }}
        />
      ))}
    </div>,
    // Dashes pattern
    <div key="dashes" className="flex justify-center gap-4 py-2">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="w-8 h-2 rounded-full"
          style={{
            backgroundColor: "var(--soft-purple)",
            opacity: 0.4,
            transform: `rotate(${i % 2 === 0 ? -15 : 15}deg)`,
          }}
        />
      ))}
    </div>,
    // Triangle pattern
    <div key="triangles" className="flex justify-center gap-6 py-2">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="w-0 h-0"
          style={{
            borderLeft: "10px solid transparent",
            borderRight: "10px solid transparent",
            borderBottom: `17px solid ${i % 2 === 0 ? "var(--lavender)" : "var(--peach)"}`,
            opacity: 0.4,
          }}
        />
      ))}
    </div>,
  ];

  return (
    <div className="w-full py-4">
      {patterns[index % patterns.length]}
    </div>
  );
}

export default function BlogSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredPosts =
    activeCategory === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <section
      id="blog"
      className="relative py-20 lg:py-32 px-6 overflow-hidden"
      style={{ backgroundColor: "var(--cream)" }}
    >
      {/* Memphis Geometric Decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Circle */}
        <div
          className="absolute top-24 right-16 w-28 h-28 rounded-full opacity-15"
          style={{ backgroundColor: "var(--mint-green)" }}
        />
        {/* Square */}
        <div
          className="absolute bottom-32 left-12 w-20 h-20 opacity-15 rotate-12"
          style={{ backgroundColor: "var(--dusty-pink)" }}
        />
        {/* Triangle */}
        <div
          className="absolute top-1/2 right-8 w-0 h-0 opacity-15"
          style={{
            borderLeft: "40px solid transparent",
            borderRight: "40px solid transparent",
            borderBottom: "69px solid var(--peach)",
          }}
        />
        {/* Dots */}
        <div className="absolute bottom-16 right-24 grid grid-cols-4 gap-3 opacity-10">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: "var(--soft-purple)" }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Title */}
        <h2
          className="font-heading text-3xl lg:text-5xl text-center mb-4"
          style={{
            color: "var(--dark-purple)",
            textShadow: "2px 2px 0 var(--lavender)",
          }}
        >
          Blog
        </h2>
        <p
          className="font-body text-base lg:text-lg text-center mb-8 lg:mb-12 max-w-2xl mx-auto"
          style={{ color: "var(--dark-gray)" }}
        >
          Thoughts on design, development, and the nostalgic world of retro aesthetics.
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 lg:gap-3 mb-10 lg:mb-14">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className="px-4 py-2 rounded-full font-body text-sm lg:text-base font-medium transition-all duration-200"
              style={{
                backgroundColor:
                  activeCategory === category.id ? category.color : "var(--light-gray)",
                color: "var(--dark-purple)",
                border: `3px solid ${activeCategory === category.id ? "var(--dark-purple)" : "transparent"}`,
                boxShadow:
                  activeCategory === category.id
                    ? "0 3px 0 var(--dark-purple)"
                    : "none",
                transform:
                  activeCategory === category.id ? "translateY(-2px)" : "translateY(0)",
              }}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Blog Posts List */}
        <div className="space-y-6 lg:space-y-8">
          {filteredPosts.map((post, index) => (
            <div key={post.id}>
              <BlogCard post={post} index={index} />
              {/* Memphis divider between posts */}
              {index < filteredPosts.length - 1 && (
                <MemphisDivider index={index} />
              )}
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div
            className="text-center py-12 font-body"
            style={{ color: "var(--dark-gray)" }}
          >
            No posts found in this category.
          </div>
        )}
      </div>
    </section>
  );
}
