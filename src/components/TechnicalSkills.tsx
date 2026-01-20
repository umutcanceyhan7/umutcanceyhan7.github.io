"use client";

import { technicalSkills } from "@/data/technicalSkills";

export default function TechnicalSkills() {
    return (
        <section
            id="technical-skills"
            className="relative py-20 lg:py-32 px-6 overflow-hidden"
            style={{ backgroundColor: "var(--light-gray)" }}
        >
            {/* Memphis Geometric Decorations */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Triangle */}
                <div
                    className="absolute top-16 left-12 w-0 h-0 opacity-15"
                    style={{
                        borderLeft: "50px solid transparent",
                        borderRight: "50px solid transparent",
                        borderBottom: "86px solid var(--soft-purple)",
                    }}
                />
                {/* Circle */}
                <div
                    className="absolute bottom-24 right-8 w-20 h-20 rounded-full opacity-20"
                    style={{ backgroundColor: "var(--dusty-pink)" }}
                />
                {/* Dots grid */}
                <div className="absolute top-1/3 right-12 grid grid-cols-3 gap-2 opacity-15">
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
                    className="absolute bottom-16 left-8 opacity-15"
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
                    Technical Skills
                </h2>
                <p
                    className="font-body text-base lg:text-lg text-center mb-12 lg:mb-16 max-w-2xl mx-auto"
                    style={{ color: "var(--dark-gray)" }}
                >
                    A comprehensive overview of my technical expertise across different domains.
                </p>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {technicalSkills.map((category, index) => (
                        <div
                            key={category.id}
                            className="relative p-6 lg:p-8 rounded-2xl transition-all duration-300"
                            style={{
                                backgroundColor: category.color,
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
                            {/* Category Title */}
                            <h3
                                className="font-heading text-xl lg:text-2xl mb-6"
                                style={{ color: "var(--dark-purple)" }}
                            >
                                {category.title}
                            </h3>

                            {/* Skills List */}
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 rounded-lg font-body text-sm"
                                        style={{
                                            backgroundColor: "var(--cream)",
                                            color: "var(--dark-purple)",
                                            border: "2px solid var(--dark-purple)",
                                            boxShadow: "2px 2px 0 rgba(107, 91, 149, 0.3)",
                                        }}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            {/* Memphis decoration */}
                            <div
                                className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full opacity-20"
                                style={{ backgroundColor: "var(--dark-purple)" }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
