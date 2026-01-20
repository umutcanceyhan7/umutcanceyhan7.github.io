"use client";

import { useState } from "react";
import Image from "next/image";

type MediaCategory = "all" | "films" | "series" | "music" | "other";

interface MediaItem {
  id: string;
  title: string;
  category: "films" | "series" | "music" | "other";
  image: string;
  comment: string;
  rating: number;
  externalLink?: string;
  linkLabel?: string;
}

const mediaItems: MediaItem[] = [
  {
    id: "1",
    title: "Blade Runner 2049",
    category: "films",
    image: "/images/media/film-1.jpg",
    comment: "A visual masterpiece that expands the original's universe beautifully.",
    rating: 5,
    externalLink: "https://www.imdb.com/title/tt1856101/",
    linkLabel: "IMDb",
  },
  {
    id: "2",
    title: "Interstellar",
    category: "films",
    image: "/images/media/film-2.jpg",
    comment: "Mind-bending sci-fi with incredible emotional depth.",
    rating: 5,
    externalLink: "https://www.imdb.com/title/tt0816692/",
    linkLabel: "IMDb",
  },
  {
    id: "3",
    title: "The Grand Budapest Hotel",
    category: "films",
    image: "/images/media/film-3.jpg",
    comment: "Wes Anderson's pastel aesthetic is pure visual poetry.",
    rating: 4,
    externalLink: "https://www.imdb.com/title/tt2278388/",
    linkLabel: "IMDb",
  },
  {
    id: "4",
    title: "Breaking Bad",
    category: "series",
    image: "/images/media/series-1.jpg",
    comment: "The best character study ever put on television.",
    rating: 5,
    externalLink: "https://www.imdb.com/title/tt0903747/",
    linkLabel: "IMDb",
  },
  {
    id: "5",
    title: "Twin Peaks",
    category: "series",
    image: "/images/media/series-2.jpg",
    comment: "Surreal, strange, and absolutely captivating.",
    rating: 4,
    externalLink: "https://www.imdb.com/title/tt0098936/",
    linkLabel: "IMDb",
  },
  {
    id: "6",
    title: "Severance",
    category: "series",
    image: "/images/media/series-3.jpg",
    comment: "A fresh take on corporate dystopia with retro aesthetics.",
    rating: 5,
    externalLink: "https://www.imdb.com/title/tt11280740/",
    linkLabel: "IMDb",
  },
  {
    id: "7",
    title: "Daft Punk - Random Access Memories",
    category: "music",
    image: "/images/media/music-1.jpg",
    comment: "Perfect blend of retro and futuristic sounds.",
    rating: 5,
    externalLink: "https://open.spotify.com/album/4m2880jivSbbyEGAKfITCa",
    linkLabel: "Spotify",
  },
  {
    id: "8",
    title: "The Midnight - Endless Summer",
    category: "music",
    image: "/images/media/music-2.jpg",
    comment: "Synthwave perfection for late-night coding sessions.",
    rating: 4,
    externalLink: "https://open.spotify.com/album/5ozY0koLd7nXZdP6lGxhBG",
    linkLabel: "Spotify",
  },
  {
    id: "9",
    title: "Tame Impala - Currents",
    category: "music",
    image: "/images/media/music-3.jpg",
    comment: "Psychedelic pop at its finest.",
    rating: 5,
    externalLink: "https://open.spotify.com/album/79dL7FLiJFOO0EoehUHQBv",
    linkLabel: "Spotify",
  },
  {
    id: "10",
    title: "Pixel Art Collection",
    category: "other",
    image: "/images/media/other-1.jpg",
    comment: "My favorite 8-bit and 16-bit art inspirations.",
    rating: 4,
  },
  {
    id: "11",
    title: "Retro Gaming Soundtracks",
    category: "other",
    image: "/images/media/other-2.jpg",
    comment: "Chiptune classics that never get old.",
    rating: 5,
    externalLink: "https://www.youtube.com/",
    linkLabel: "YouTube",
  },
  {
    id: "12",
    title: "Vaporwave Aesthetics",
    category: "other",
    image: "/images/media/other-3.jpg",
    comment: "The perfect blend of nostalgia and digital art.",
    rating: 4,
  },
];

const categories: { value: MediaCategory; label: string }[] = [
  { value: "all", label: "All" },
  { value: "films", label: "Films" },
  { value: "series", label: "Series" },
  { value: "music", label: "Music" },
  { value: "other", label: "Other" },
];

const categoryColors: Record<string, string> = {
  films: "var(--dusty-pink)",
  series: "var(--soft-purple)",
  music: "var(--mint-green)",
  other: "var(--peach)",
};

function EightBitStars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          style={{
            fontSize: "16px",
            fontFamily: "monospace",
            color: star <= rating ? "var(--coral)" : "var(--light-gray)",
            textShadow: star <= rating ? "1px 1px 0 var(--dark-purple)" : "none",
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function MediaGallery() {
  const [activeCategory, setActiveCategory] = useState<MediaCategory>("all");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const filteredItems =
    activeCategory === "all"
      ? mediaItems
      : mediaItems.filter((item) => item.category === activeCategory);

  return (
    <section
      id="media"
      className="py-16 md:py-24 relative overflow-hidden"
      style={{ background: "var(--cream)" }}
    >
      {/* Memphis geometric decorations */}
      <div
        className="absolute top-20 left-10 w-16 h-16 opacity-20"
        style={{
          background: "var(--dusty-pink)",
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
        }}
      />
      <div
        className="absolute top-40 right-20 w-20 h-20 rounded-full opacity-15"
        style={{ background: "var(--soft-purple)" }}
      />
      <div
        className="absolute bottom-32 left-1/4 w-12 h-12 opacity-20"
        style={{ background: "var(--mint-green)" }}
      />
      <div
        className="absolute bottom-20 right-10 w-24 h-6 opacity-15"
        style={{
          background: `repeating-linear-gradient(
            90deg,
            var(--peach),
            var(--peach) 4px,
            transparent 4px,
            transparent 8px
          )`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            className="font-heading text-4xl md:text-5xl mb-4"
            style={{ color: "var(--dark-purple)" }}
          >
            Media Gallery
          </h2>
          <p
            className="font-body text-lg max-w-2xl mx-auto"
            style={{ color: "var(--dark-gray)" }}
          >
            A curated collection of films, series, music, and other media that
            inspire my creative work.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className="font-body px-5 py-2 rounded-full transition-all duration-200"
              style={{
                background:
                  activeCategory === cat.value
                    ? "var(--soft-purple)"
                    : "var(--light-gray)",
                color:
                  activeCategory === cat.value ? "white" : "var(--dark-gray)",
                border: `2px solid ${
                  activeCategory === cat.value
                    ? "var(--dark-purple)"
                    : "var(--light-gray)"
                }`,
                boxShadow:
                  activeCategory === cat.value
                    ? "0 3px 0 var(--dark-purple)"
                    : "none",
                transform:
                  activeCategory === cat.value ? "translateY(-2px)" : "none",
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="relative transition-all duration-300"
              style={{
                transform:
                  hoveredItem === item.id
                    ? "translateY(-8px) rotate(-1deg)"
                    : "none",
              }}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Polaroid Frame */}
              <div
                className="p-3 pb-16 rounded-sm relative"
                style={{
                  background: "#FFFEF9",
                  boxShadow:
                    hoveredItem === item.id
                      ? `8px 8px 0 ${categoryColors[item.category]}`
                      : `4px 4px 0 ${categoryColors[item.category]}`,
                  border: "1px solid #E8E4D9",
                }}
              >
                {/* Image Container */}
                <div
                  className="relative aspect-square overflow-hidden"
                  style={{ background: "var(--light-gray)" }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                    }}
                  />
                  {/* Placeholder overlay */}
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{
                      background: categoryColors[item.category],
                      opacity: 0.3,
                    }}
                  >
                    <span
                      className="font-heading text-2xl"
                      style={{ color: "var(--dark-purple)", opacity: 0.5 }}
                    >
                      {item.category === "films" && "🎬"}
                      {item.category === "series" && "📺"}
                      {item.category === "music" && "🎵"}
                      {item.category === "other" && "✨"}
                    </span>
                  </div>
                </div>

                {/* Polaroid Caption Area */}
                <div className="absolute bottom-2 left-3 right-3">
                  <h3
                    className="font-heading text-sm md:text-base truncate mb-1"
                    style={{ color: "var(--dark-purple)" }}
                  >
                    {item.title}
                  </h3>
                  <EightBitStars rating={item.rating} />
                </div>
              </div>

              {/* Hover Card with Comment */}
              {hoveredItem === item.id && (
                <div
                  className="absolute top-full left-0 right-0 mt-2 p-4 rounded-lg z-10 animate-fade-in"
                  style={{
                    background: "white",
                    border: `2px solid ${categoryColors[item.category]}`,
                    boxShadow: `4px 4px 0 ${categoryColors[item.category]}`,
                  }}
                >
                  <p
                    className="font-body text-sm mb-3"
                    style={{ color: "var(--dark-gray)" }}
                  >
                    {item.comment}
                  </p>
                  {item.externalLink && (
                    <a
                      href={item.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-sm inline-flex items-center gap-2 px-3 py-1 rounded transition-all duration-200"
                      style={{
                        background: categoryColors[item.category],
                        color: "var(--dark-purple)",
                        border: "2px solid var(--dark-purple)",
                      }}
                    >
                      {item.linkLabel || "View"} →
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
