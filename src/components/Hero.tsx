"use client";

import dynamic from "next/dynamic";
import FloatingShapes from "./FloatingShapes";
import ImageCharacterScene from "./three/ImageCharacterScene";
import { useViewMode } from "@/contexts/ViewModeContext";

const Scene = dynamic(() => import("./three/Scene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[300px] lg:h-[400px] flex items-center justify-center">
      <div className="text-[var(--dark-purple)] font-body animate-pulse">
        Loading 3D...
      </div>
    </div>
  ),
});

export default function Hero() {
  const { viewMode } = useViewMode();
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, var(--cream) 0%, var(--lavender) 50%, var(--mint-green) 100%)",
      }}
    >
      <FloatingShapes />

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* 3D/2D Avatar */}
        <div className="w-full max-w-md h-[350px] lg:h-[400px] mb-8">
          {viewMode === "2d" ? <ImageCharacterScene /> : <Scene />}
        </div>
        {/* Name */}
        <h1
          className="font-heading text-4xl lg:text-6xl xl:text-7xl mb-4"
          style={{
            color: "var(--dark-purple)",
            textShadow: "3px 3px 0 var(--soft-purple)",
          }}
        >
          Umutcan Ceyhan
        </h1>
        {/* Profession */}
        <h3
          className="font-heading text-2xl lg:text-4xl xl:text-5xl mb-4"
          style={{
            color: "var(--dark-purple)",
            textShadow: "3px 3px 0 var(--soft-purple)",
          }}
        >
          Computer Engineer
        </h3>

        {/* Professional Tagline */}
        <p
          className="font-body text-lg lg:text-xl max-w-xl mb-8"
          style={{ color: "var(--dark-gray)" }}
        >
          Delivering scalable, user-centric solutions with 3+ years of hands-on experience in global e-procurement platforms and corporate innovation programs.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <a
            href="/cv.pdf"
            download
            className="inline-block px-8 py-4 rounded-xl font-heading uppercase tracking-wider transition-all text-center"
            style={{
              backgroundColor: "var(--mint-green)",
              color: "var(--dark-purple)",
              border: "3px solid var(--dark-purple)",
              boxShadow: "0 4px 0 var(--dark-purple)",
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 6px 0 var(--dark-purple)";
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 0 var(--dark-purple)";
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.transform = "translateY(2px)";
              e.currentTarget.style.boxShadow = "0 2px 0 var(--dark-purple)";
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 6px 0 var(--dark-purple)";
            }}
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="inline-block px-8 py-4 rounded-xl font-heading text-white uppercase tracking-wider transition-all text-center"
            style={{
              backgroundColor: "var(--soft-purple)",
              border: "3px solid var(--dark-purple)",
              boxShadow: "0 4px 0 var(--dark-purple)",
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 6px 0 var(--dark-purple)";
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 0 var(--dark-purple)";
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.transform = "translateY(2px)";
              e.currentTarget.style.boxShadow = "0 2px 0 var(--dark-purple)";
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 6px 0 var(--dark-purple)";
            }}
          >
            Contact Me
          </a>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-10 right-4 md:right-10 md:transform md:-translate-x-1/2 flex flex-col items-center animate-bounce"
        style={{ color: "var(--dark-purple)" }}
      >
        <span className="font-body text-sm mb-2">Scroll</span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
