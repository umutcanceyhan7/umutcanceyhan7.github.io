"use client";

import { useState } from "react";
import Image from "next/image";
import { accomplishments } from "@/data/accomplishments";

export default function Accomplishments() {
    const [selectedPhoto, setSelectedPhoto] = useState<{ accomplishmentId: string; photoId: string } | null>(null);

    return (
        <section
            id="accomplishments"
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
                    Key Accomplishments
                </h2>
                <p
                    className="font-body text-base lg:text-lg text-center mb-12 lg:mb-16 max-w-2xl mx-auto"
                    style={{ color: "var(--dark-gray)" }}
                >
                    Notable achievements and recognitions throughout my career.
                </p>

                {/* Accomplishments Grid */}
                <div className="space-y-12 lg:space-y-16">
                    {accomplishments.map((accomplishment) => (
                        <div
                            key={accomplishment.id}
                            className="relative"
                        >
                            {/* Accomplishment Card */}
                            <div
                                className="p-6 lg:p-8 rounded-2xl transition-all duration-300"
                                style={{
                                    backgroundColor: accomplishment.color,
                                    border: "4px solid var(--dark-purple)",
                                    boxShadow: "4px 4px 0 var(--dark-purple)",
                                }}
                            >
                                {/* Title and Description */}
                                <div className="mb-6">
                                    <h3
                                        className="font-heading text-2xl lg:text-3xl mb-4"
                                        style={{ color: "var(--dark-purple)" }}
                                    >
                                        {accomplishment.title}
                                    </h3>
                                    <p
                                        className="font-body text-base lg:text-lg leading-relaxed"
                                        style={{ color: "var(--dark-gray)" }}
                                    >
                                        {accomplishment.description}
                                    </p>
                                </div>

                                {/* Photo Gallery */}
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    {accomplishment.photos.map((photo) => (
                                        <div
                                            key={photo.id}
                                            className="relative aspect-square rounded-xl overflow-hidden cursor-pointer transition-all duration-300"
                                            style={{
                                                border: "3px solid var(--dark-purple)",
                                                boxShadow: "3px 3px 0 rgba(107, 91, 149, 0.3)",
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.transform = "translateY(-4px)";
                                                e.currentTarget.style.boxShadow = "5px 5px 0 rgba(107, 91, 149, 0.5)";
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.transform = "translateY(0)";
                                                e.currentTarget.style.boxShadow = "3px 3px 0 rgba(107, 91, 149, 0.3)";
                                            }}
                                            onClick={() => setSelectedPhoto({ accomplishmentId: accomplishment.id, photoId: photo.id })}
                                        >
                                            <Image
                                                src={photo.src}
                                                alt={photo.alt}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 640px) 100vw, 33vw"
                                                loading="lazy"
                                                onError={(e) => {
                                                    const target = e.target as HTMLImageElement;
                                                    target.style.display = "none";
                                                }}
                                            />
                                            {/* Placeholder overlay */}
                                            <div
                                                className="absolute inset-0 flex items-center justify-center"
                                                style={{
                                                    background: `linear-gradient(135deg, ${accomplishment.color} 0%, var(--cream) 100%)`,
                                                }}
                                            >
                                                <span className="text-4xl opacity-50">📸</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Memphis decoration */}
                                <div
                                    className="absolute -top-3 -right-3 w-10 h-10 rounded-full opacity-20"
                                    style={{ backgroundColor: "var(--dark-purple)" }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Photo Modal (optional - can be enhanced later) */}
            {selectedPhoto && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    style={{ backgroundColor: "rgba(107, 91, 149, 0.9)" }}
                    onClick={() => setSelectedPhoto(null)}
                >
                    <div className="relative max-w-4xl w-full">
                        <button
                            onClick={() => setSelectedPhoto(null)}
                            className="absolute -top-12 right-0 text-white font-heading text-2xl"
                            style={{ color: "var(--cream)" }}
                        >
                            ✕ Close
                        </button>
                        {/* Modal content can be enhanced here */}
                    </div>
                </div>
            )}
        </section>
    );
}
