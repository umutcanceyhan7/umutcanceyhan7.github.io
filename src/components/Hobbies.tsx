"use client";

import { useState } from "react";

interface Hobby {
  id: string;
  name: string;
  icon: string;
  description: string;
  color: string;
  borderColor: string;
}

const hobbies: Hobby[] = [
  {
    id: "1",
    name: "Table Tennis",
    icon: "🏓",
    description:
      "Playing table tennis is fun and challenging. I play table tennis with my friends and family since high school.",
    color: "var(--soft-purple)",
    borderColor: "var(--dark-purple)",
  },
  {
    id: "2",
    name: "Theatre",
    icon: "🎭",
    description:
      "I love being a member of the Sahne Tozu Theatre. Acting is great for expressing myself and my feelings.",
    color: "var(--mint-green)",
    borderColor: "var(--dark-purple)",
  },
  {
    id: "3",
    name: "Guitar & Vocal",
    icon: "🎸",
    description:
      "I love playing guitar and singing. I have been playing guitar for 10 years and singing for 5 years.",
    color: "var(--dusty-pink)",
    borderColor: "var(--dark-purple)",
  },
  {
    id: "4",
    name: "Running",
    icon: "🏃",
    description:
      "Started running in 2024 and loved it. Right now I do not have time to do it, but planning to get back into it soon.",
    color: "var(--peach)",
    borderColor: "var(--dark-purple)",
  },
  {
    id: "5",
    name: "Board Games",
    icon: "🎲",
    description:
      "My niece hobby is board games. Hosting game nights with friends. From strategy games to party games, I love playing them.",
    color: "var(--lavender)",
    borderColor: "var(--dark-purple)",
  },
  {
    id: "6",
    name: "Coffee",
    icon: "☕",
    description:
      "Exploring different brewing methods (V60, Chemex) and single-origin beans. I am still a beginner but I love to explore new tastes.",
    color: "var(--butter-yellow)",
    borderColor: "var(--dark-purple)",
  },
];

export default function Hobbies() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      id="hobbies"
      className="py-16 md:py-24 relative overflow-hidden"
      style={{ background: "var(--cream)" }}
    >
      {/* Memphis geometric decorations */}
      <div
        className="absolute top-16 right-16 w-20 h-20 opacity-20"
        style={{
          background: "var(--soft-purple)",
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
        }}
      />
      <div
        className="absolute top-32 left-12 w-16 h-16 rounded-full opacity-15"
        style={{ background: "var(--dusty-pink)" }}
      />
      <div
        className="absolute bottom-40 right-1/4 w-14 h-14 opacity-20"
        style={{ background: "var(--mint-green)" }}
      />
      <div
        className="absolute bottom-24 left-16 w-24 h-6 opacity-15"
        style={{
          background: `repeating-linear-gradient(
            45deg,
            var(--peach),
            var(--peach) 4px,
            transparent 4px,
            transparent 8px
          )`,
        }}
      />
      <div
        className="absolute top-1/2 right-8 w-8 h-8 opacity-20"
        style={{
          background: "var(--lavender)",
          transform: "rotate(45deg)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            className="font-heading text-4xl md:text-5xl mb-4"
            style={{ color: "var(--dark-purple)" }}
          >
            Hobbies
          </h2>
          <p
            className="font-body text-lg max-w-2xl mx-auto"
            style={{ color: "var(--dark-gray)" }}
          >
            Beyond coding, here are the things that keep me inspired and
            creative.
          </p>
        </div>

        {/* Hobbies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {hobbies.map((hobby) => (
            <div
              key={hobby.id}
              className="relative transition-all duration-300 cursor-pointer"
              style={{
                transform:
                  hoveredId === hobby.id
                    ? "translateY(-8px) rotate(-1deg)"
                    : "none",
              }}
              onMouseEnter={() => setHoveredId(hobby.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Memphis Card */}
              <div
                className="p-6 rounded-xl relative overflow-hidden"
                style={{
                  background: hobby.color,
                  border: `4px solid ${hobby.borderColor}`,
                  boxShadow:
                    hoveredId === hobby.id
                      ? `8px 8px 0 ${hobby.borderColor}`
                      : `4px 4px 0 ${hobby.borderColor}`,
                }}
              >
                {/* Memphis decoration inside card */}
                <div
                  className="absolute -top-4 -right-4 w-16 h-16 opacity-20 rounded-full"
                  style={{ background: "white" }}
                />
                <div
                  className="absolute bottom-4 right-8 w-8 h-8 opacity-15"
                  style={{
                    background: "white",
                    clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                  }}
                />

                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-lg flex items-center justify-center mb-4 relative"
                  style={{
                    background: "rgba(255, 255, 255, 0.6)",
                    border: `3px solid ${hobby.borderColor}`,
                    boxShadow: `3px 3px 0 ${hobby.borderColor}`,
                  }}
                >
                  <span className="text-3xl">{hobby.icon}</span>
                </div>

                {/* Content */}
                <h3
                  className="font-heading text-xl md:text-2xl mb-3"
                  style={{ color: "var(--dark-purple)" }}
                >
                  {hobby.name}
                </h3>
                <p
                  className="font-body text-sm md:text-base leading-relaxed"
                  style={{ color: "var(--dark-gray)" }}
                >
                  {hobby.description}
                </p>

                {/* Zigzag decoration */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-2 opacity-20"
                  style={{
                    background: `repeating-linear-gradient(
                      90deg,
                      var(--dark-purple),
                      var(--dark-purple) 8px,
                      transparent 8px,
                      transparent 16px
                    )`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
