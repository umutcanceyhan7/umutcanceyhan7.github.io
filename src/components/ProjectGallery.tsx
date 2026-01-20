"use client";

import Image from "next/image";
import { useState } from "react";

const pastelColors = [
  { bg: "var(--mint-green)", shadow: "var(--soft-blue)" },
  { bg: "var(--dusty-pink)", shadow: "var(--coral)" },
  { bg: "var(--peach)", shadow: "var(--butter-yellow)" },
  { bg: "var(--lavender)", shadow: "var(--soft-purple)" },
];

const projects = [
  {
    id: 1,
    title: "Retro Game Engine",
    description: "A lightweight 2D game engine with pixel-perfect rendering and PS1-style graphics support.",
    technologies: ["TypeScript", "WebGL", "Canvas API"],
    image: "/images/project-1.webp",
    demoUrl: "https://example.com/demo1",
    repoUrl: "https://github.com/yourusername/retro-engine",
  },
  {
    id: 2,
    title: "Synthwave Music Player",
    description: "A web-based music player with retro visualizer and playlist management features.",
    technologies: ["React", "Web Audio API", "Three.js"],
    image: "/images/project-2.webp",
    demoUrl: "https://example.com/demo2",
    repoUrl: "https://github.com/yourusername/synthwave-player",
  },
  {
    id: 3,
    title: "Pixel Art Generator",
    description: "Convert any image to pixel art with customizable palettes and dithering options.",
    technologies: ["Next.js", "Canvas", "WASM"],
    image: "/images/project-3.webp",
    demoUrl: "https://example.com/demo3",
    repoUrl: "https://github.com/yourusername/pixel-art-gen",
  },
  {
    id: 4,
    title: "Vaporwave Dashboard",
    description: "A nostalgic admin dashboard template with 80s aesthetics and modern functionality.",
    technologies: ["React", "Tailwind CSS", "Chart.js"],
    image: "/images/project-4.webp",
    demoUrl: "https://example.com/demo4",
    repoUrl: "https://github.com/yourusername/vapor-dash",
  },
  {
    id: 5,
    title: "Retro Portfolio CMS",
    description: "A headless CMS specifically designed for portfolio websites with retro themes.",
    technologies: ["Node.js", "PostgreSQL", "GraphQL"],
    image: "/images/project-5.webp",
    demoUrl: "https://example.com/demo5",
    repoUrl: "https://github.com/yourusername/retro-cms",
  },
  {
    id: 6,
    title: "Low-Poly 3D Editor",
    description: "Browser-based 3D modeling tool for creating PS1-style low-poly models and scenes.",
    technologies: ["Three.js", "React", "WebGL"],
    image: "/images/project-6.webp",
    demoUrl: "https://example.com/demo6",
    repoUrl: "https://github.com/yourusername/lowpoly-editor",
  },
];

interface ProjectCardProps {
  project: typeof projects[0];
  colorIndex: number;
}

function ProjectCard({ project, colorIndex }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const color = pastelColors[colorIndex % pastelColors.length];

  return (
    <article
      className="relative rounded-2xl overflow-hidden transition-all duration-300"
      style={{
        backgroundColor: color.bg,
        border: "4px solid var(--dark-purple)",
        boxShadow: isHovered
          ? `8px 8px 0 ${color.shadow}`
          : `4px 4px 0 ${color.shadow}`,
        transform: isHovered ? "translateY(-4px)" : "translateY(0)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300"
          style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          loading="lazy"
        />
        {/* Placeholder overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            background: `linear-gradient(135deg, ${color.bg} 0%, var(--cream) 100%)`,
          }}
        >
          <span className="text-5xl">🎮</span>
        </div>
        {/* Hover overlay */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center p-4 transition-opacity duration-300"
          style={{
            backgroundColor: "rgba(107, 91, 149, 0.9)",
            opacity: isHovered ? 1 : 0,
          }}
        >
          <h3
            className="font-heading text-lg lg:text-xl text-center mb-2"
            style={{ color: "var(--cream)" }}
          >
            {project.title}
          </h3>
          <p
            className="font-body text-sm text-center mb-4"
            style={{ color: "var(--lavender)" }}
          >
            {project.description}
          </p>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 lg:p-5">
        <h3
          className="font-heading text-lg lg:text-xl mb-2"
          style={{ color: "var(--dark-purple)" }}
        >
          {project.title}
        </h3>
        <p
          className="font-body text-sm mb-4 line-clamp-2"
          style={{ color: "var(--dark-gray)" }}
        >
          {project.description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-full font-body text-xs"
              style={{
                backgroundColor: "var(--cream)",
                color: "var(--dark-purple)",
                border: "1px solid var(--soft-purple)",
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 rounded-lg font-heading text-sm transition-all"
          style={{
            backgroundColor: "var(--soft-purple)",
            color: "white",
            border: "2px solid var(--dark-purple)",
            boxShadow: "0 3px 0 var(--dark-purple)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 5px 0 var(--dark-purple)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 3px 0 var(--dark-purple)";
          }}
        >
          View Project
        </a>
      </div>
    </article>
  );
}

export default function ProjectGallery() {
  return (
    <section
      id="projects"
      className="relative py-20 lg:py-32 px-6 overflow-hidden"
      style={{ backgroundColor: "var(--light-gray)" }}
    >
      {/* Memphis Geometric Decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Triangle */}
        <div
          className="absolute top-16 right-12 w-0 h-0 opacity-15"
          style={{
            borderLeft: "50px solid transparent",
            borderRight: "50px solid transparent",
            borderBottom: "86px solid var(--soft-purple)",
          }}
        />
        {/* Circle */}
        <div
          className="absolute bottom-24 left-8 w-20 h-20 rounded-full opacity-20"
          style={{ backgroundColor: "var(--dusty-pink)" }}
        />
        {/* Dots grid */}
        <div className="absolute top-1/3 left-12 grid grid-cols-3 gap-2 opacity-15">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: "var(--peach)" }}
            />
          ))}
        </div>
        {/* Zigzag */}
        <svg
          className="absolute bottom-16 right-8 opacity-15"
          width="120"
          height="50"
          viewBox="0 0 120 50"
        >
          <path
            d="M0 25 L24 0 L48 25 L72 0 L96 25 L120 0"
            stroke="var(--mint-green)"
            strokeWidth="4"
            fill="none"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <h2
          className="font-heading text-3xl lg:text-5xl text-center mb-4"
          style={{
            color: "var(--dark-purple)",
            textShadow: "2px 2px 0 var(--lavender)",
          }}
        >
          Projects
        </h2>
        <p
          className="font-body text-base lg:text-lg text-center mb-12 lg:mb-16 max-w-2xl mx-auto"
          style={{ color: "var(--dark-gray)" }}
        >
          A collection of my recent work, featuring retro-inspired designs and modern technologies.
        </p>

        {/* Project Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} colorIndex={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
