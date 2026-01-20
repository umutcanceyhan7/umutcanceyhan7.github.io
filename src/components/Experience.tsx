"use client";

import { experiences } from "@/data/experience";

export default function Experience() {
    return (
        <section
            id="experience"
            className="relative py-20 lg:py-32 px-6 overflow-hidden"
            style={{ backgroundColor: "var(--cream)" }}
        >
            {/* Memphis Geometric Decorations */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Circle top-left */}
                <div
                    className="absolute top-20 left-16 w-16 h-16 rounded-full opacity-20"
                    style={{ backgroundColor: "var(--mint-green)" }}
                />
                {/* Triangle top-right */}
                <div
                    className="absolute top-16 right-12 w-0 h-0 opacity-15"
                    style={{
                        borderLeft: "40px solid transparent",
                        borderRight: "40px solid transparent",
                        borderBottom: "70px solid var(--dusty-pink)",
                    }}
                />
                {/* Zigzag pattern */}
                <svg
                    className="absolute bottom-20 right-8 opacity-15"
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
                {/* Square bottom-left */}
                <div
                    className="absolute bottom-32 left-20 w-12 h-12 rotate-12 opacity-20"
                    style={{
                        backgroundColor: "var(--peach)",
                        border: "3px solid var(--coral)",
                    }}
                />
                {/* Dots pattern */}
                <div className="absolute top-1/2 left-8 flex flex-col gap-3 opacity-20">
                    {[...Array(4)].map((_, i) => (
                        <div
                            key={i}
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: "var(--soft-purple)" }}
                        />
                    ))}
                </div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Section Title */}
                <h2
                    className="font-heading text-3xl lg:text-5xl text-center mb-4"
                    style={{
                        color: "var(--dark-purple)",
                        textShadow: "2px 2px 0 var(--lavender)",
                    }}
                >
                    Experience Highlights
                </h2>
                <p
                    className="font-body text-base lg:text-lg text-center mb-12 lg:mb-16 max-w-2xl mx-auto"
                    style={{ color: "var(--dark-gray)" }}
                >
                    Key professional experiences that have shaped my career and expertise.
                </p>

                {/* Experience Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {experiences.map((experience) => (
                        <div
                            key={experience.id}
                            className="relative p-6 lg:p-8 rounded-2xl transition-all duration-300"
                            style={{
                                backgroundColor: experience.color,
                                border: "4px solid var(--dark-purple)",
                                boxShadow: "4px 4px 0 var(--dark-purple)",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "translateY(-4px) rotate(-1deg)";
                                e.currentTarget.style.boxShadow = "8px 8px 0 var(--dark-purple)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "translateY(0) rotate(0deg)";
                                e.currentTarget.style.boxShadow = "4px 4px 0 var(--dark-purple)";
                            }}
                        >
                            {/* Icon */}
                            <div className="text-5xl mb-4">{experience.icon}</div>

                            {/* Title */}
                            <h3
                                className="font-heading text-xl lg:text-2xl mb-4"
                                style={{ color: "var(--dark-purple)" }}
                            >
                                {experience.title}
                            </h3>

                            {/* Description */}
                            <p
                                className="font-body text-base lg:text-lg leading-relaxed"
                                style={{ color: "var(--dark-gray)" }}
                            >
                                {experience.description}
                            </p>

                            {/* Memphis decoration */}
                            <div
                                className="absolute -top-3 -right-3 w-10 h-10 rounded-full opacity-20"
                                style={{ backgroundColor: "var(--dark-purple)" }}
                            />
                            <div
                                className="absolute -bottom-2 -left-2 w-6 h-6 opacity-15"
                                style={{
                                    backgroundColor: "var(--dark-purple)",
                                    clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
