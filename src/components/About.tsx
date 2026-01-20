"use client";

import Image from "next/image";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/yourusername",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "Medium",
    url: "https://medium.com/@yourusername",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
      </svg>
    ),
  },
];

const skills: string[] = [
  // "TypeScript",
  // "React",
  // "Next.js",
  // "Node.js",
  // ".NET Core",
  // "C#",
  // "Vue.js",
  // "Nuxt.js",
  // "PHP",
  // "PostgreSQL",
  // "MongoDB",
  // "Redis",
  // "Three.js",
  // "Tailwind CSS",
];

// Strength cards data
const strengths = [
  {
    title: "Technical Excellence",
    description: "Full-stack development expertise",
    icon: "⚡",
    color: "var(--mint-green)",
  },
  {
    title: "Team Leadership",
    description: "Scrum Master & mentor",
    icon: "👥",
    color: "var(--soft-purple)",
  },
  {
    title: "Innovation",
    description: "R&D and product development",
    icon: "💡",
    color: "var(--dusty-pink)",
  },
  {
    title: "Recognition",
    description: "Multiple first-place awards",
    icon: "🏆",
    color: "var(--peach)",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 lg:py-32 px-6 overflow-hidden"
      style={{ backgroundColor: "var(--cream)" }}
    >
      {/* Memphis Geometric Decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Triangle top-left */}
        <div
          className="absolute top-10 left-10 w-0 h-0 opacity-20"
          style={{
            borderLeft: "40px solid transparent",
            borderRight: "40px solid transparent",
            borderBottom: "70px solid var(--dusty-pink)",
          }}
        />
        {/* Circle top-right */}
        <div
          className="absolute top-20 right-16 w-16 h-16 rounded-full opacity-20"
          style={{ backgroundColor: "var(--mint-green)" }}
        />
        {/* Zigzag pattern */}
        <svg
          className="absolute bottom-20 left-8 opacity-15"
          width="100"
          height="40"
          viewBox="0 0 100 40"
        >
          <path
            d="M0 20 L20 0 L40 20 L60 0 L80 20 L100 0"
            stroke="var(--soft-purple)"
            strokeWidth="4"
            fill="none"
          />
        </svg>
        {/* Square bottom-right */}
        <div
          className="absolute bottom-32 right-20 w-12 h-12 rotate-12 opacity-20"
          style={{
            backgroundColor: "var(--peach)",
            border: "3px solid var(--coral)",
          }}
        />
        {/* Dots pattern */}
        <div className="absolute top-1/2 right-8 flex flex-col gap-3 opacity-20">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: "var(--soft-purple)" }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Title */}
        <h2
          className="font-heading text-3xl lg:text-5xl text-center mb-16"
          style={{
            color: "var(--dark-purple)",
            textShadow: "2px 2px 0 var(--lavender)",
          }}
        >
          About Me
        </h2>

        <div className="flex flex-col lg:flex-col gap-12 items-center">
          {/* Bio Content */}
          <div className="flex-1">
            <div
              className="p-8 rounded-2xl"
              style={{
                backgroundColor: "var(--butter-yellow)",
                border: "4px solid var(--dark-purple)",
                boxShadow: "6px 6px 0 var(--peach)",
              }}
            >
              <div
                className="font-body text-base lg:text-lg leading-relaxed space-y-4"
                style={{ color: "var(--dark-gray)" }}
              >
                <p>
                  I&apos;m a passionate <strong>Computer Engineer</strong> with extensive experience in delivering
                  cost-effective, scalable solutions across <strong>global-scale e-procurement platforms</strong>
                  and corporate innovation programs.
                </p>
                <p>
                  My expertise spans <strong>backend technologies</strong>, <strong>frontend frameworks</strong>, and modern architectural
                  patterns including <strong>Vertical Slice architecture</strong>, <strong>Domain-Driven Design (DDD)</strong>, <strong>CQRS</strong>, <strong>Microservices</strong>.
                </p>
                <p>
                  I thrive in collaborative environments, leading cross-functional teams and driving
                  innovation through <strong>Agile methodologies</strong> and <strong>Design Thinking</strong> approaches.
                </p>
              </div>

              {/* Skills Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full font-body text-sm"
                    style={{
                      backgroundColor: "var(--soft-purple)",
                      color: "white",
                      border: "2px solid var(--dark-purple)",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 flex gap-4 justify-center">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl transition-all"
                    style={{
                      backgroundColor: "var(--cream)",
                      border: "3px solid var(--dark-purple)",
                      boxShadow: "0 4px 0 var(--dark-purple)",
                      color: "var(--dark-purple)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = "0 6px 0 var(--dark-purple)";
                      e.currentTarget.style.backgroundColor = "var(--soft-purple)";
                      e.currentTarget.style.color = "white";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 4px 0 var(--dark-purple)";
                      e.currentTarget.style.backgroundColor = "var(--cream)";
                      e.currentTarget.style.color = "var(--dark-purple)";
                    }}
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Strength Cards */}
          {/* TODO: Strength cards will be edited later */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            {strengths.map((strength, index) => (
              <div
                key={strength.title}
                className="p-6 rounded-xl transition-all duration-300"
                style={{
                  backgroundColor: strength.color,
                  border: "4px solid var(--dark-purple)",
                  boxShadow: "4px 4px 0 var(--dark-purple)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "6px 6px 0 var(--dark-purple)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "4px 4px 0 var(--dark-purple)";
                }}
              >
                <div className="text-4xl mb-3">{strength.icon}</div>
                <h4
                  className="font-heading text-lg mb-2"
                  style={{ color: "var(--dark-purple)" }}
                >
                  {strength.title}
                </h4>
                <p
                  className="font-body text-sm"
                  style={{ color: "var(--dark-gray)" }}
                >
                  {strength.description}
                </p>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}
