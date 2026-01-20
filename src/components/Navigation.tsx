"use client";

import { useState, useEffect } from "react";
import { useViewMode } from "@/contexts/ViewModeContext";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "technical-skills", label: "Technical Skills" },
  // { id: "experience", label: "Experience" },
  // { id: "accomplishments", label: "Accomplishments" },
  // { id: "projects", label: "Projects" },
  // { id: "blog", label: "Blog" },
  // { id: "media", label: "Media" },
  { id: "hobbies", label: "Hobbies" },
  { id: "contact", label: "Contact" },
];

export default function Navigation() {
  const { viewMode, setViewMode } = useViewMode();
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isMobile = window.innerWidth < 768; // md breakpoint

      // Scroll direction'ı belirle (sadece mobilde)
      if (isMobile) {
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
          // Aşağı scroll ediliyor - navbar arkaplanı göster
          setIsScrolled(true);
        } else if (currentScrollY < lastScrollY) {
          // Yukarı scroll ediliyor - navbar arkaplanını gizle
          setIsScrolled(false);
        }
      } else {
        // Desktop'ta normal davranış
        setIsScrolled(currentScrollY > 50);
      }

      lastScrollY = currentScrollY;

      // Active section'ı belirle
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = currentScrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Desktop & Mobile Navigation */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: isScrolled && !isMenuOpen ? "var(--cream)" : "transparent",
          boxShadow: isScrolled && !isMenuOpen ? "0 4px 0 var(--soft-purple)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="font-heading text-xl lg:text-2xl transition-all"
            style={{ color: "var(--dark-purple)" }}
          >
            <img src="/images/umutcan-ceyhan-logo.png" alt="Logo" width={50} height={50} />
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="px-4 py-2 rounded-lg font-heading text-sm uppercase tracking-wider transition-all"
                  style={{
                    backgroundColor:
                      activeSection === item.id
                        ? "var(--soft-purple)"
                        : "transparent",
                    color:
                      activeSection === item.id ? "white" : "var(--dark-purple)",
                    border:
                      activeSection === item.id
                        ? "2px solid var(--dark-purple)"
                        : "2px solid transparent",
                    boxShadow:
                      activeSection === item.id
                        ? "0 3px 0 var(--dark-purple)"
                        : "none",
                  }}
                  onMouseEnter={(e) => {
                    if (activeSection !== item.id) {
                      e.currentTarget.style.backgroundColor = "var(--lavender)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeSection !== item.id) {
                      e.currentTarget.style.backgroundColor = "transparent";
                    }
                  }}
                >
                  {item.label}
                </button>
              </li>
            ))}
            {/* 3D/2D Toggle Button */}
            <li>
              <div className="flex gap-2 p-1 rounded-xl mr-2" style={{ backgroundColor: "var(--cream)", border: "3px solid var(--dark-purple)", boxShadow: "4px 4px 0 var(--dark-purple)" }}>
                <button
                  onClick={() => setViewMode("2d")}
                  className="px-3 py-1.5 rounded-lg font-heading text-xs uppercase transition-all"
                  style={{
                    backgroundColor: viewMode === "2d" ? "var(--soft-purple)" : "transparent",
                    color: viewMode === "2d" ? "white" : "var(--dark-purple)",
                    border: viewMode === "2d" ? "2px solid var(--dark-purple)" : "2px solid transparent",
                  }}
                  onMouseEnter={(e) => {
                    if (viewMode !== "2d") {
                      e.currentTarget.style.backgroundColor = "var(--lavender)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (viewMode !== "2d") {
                      e.currentTarget.style.backgroundColor = "transparent";
                    }
                  }}
                >
                  2D
                </button>
                <button
                  onClick={() => setViewMode("3d")}
                  className="px-3 py-1.5 rounded-lg font-heading text-xs uppercase transition-all"
                  style={{
                    backgroundColor: viewMode === "3d" ? "var(--soft-purple)" : "transparent",
                    color: viewMode === "3d" ? "white" : "var(--dark-purple)",
                    border: viewMode === "3d" ? "2px solid var(--dark-purple)" : "2px solid transparent",
                  }}
                  onMouseEnter={(e) => {
                    if (viewMode !== "3d") {
                      e.currentTarget.style.backgroundColor = "var(--lavender)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (viewMode !== "3d") {
                      e.currentTarget.style.backgroundColor = "transparent";
                    }
                  }}
                >
                  3D
                </button>
              </div>
            </li>
          </ul>

          {/* Mobile: 3D/2D Toggle + Hamburger Button */}
          <div className="md:hidden flex items-center gap-2">
            {/* 3D/2D Toggle Button (Mobile) */}
            <div className="flex gap-1 p-0.5 rounded-lg" style={{ backgroundColor: "var(--cream)", border: "2px solid var(--dark-purple)", boxShadow: "2px 2px 0 var(--dark-purple)" }}>
              <button
                onClick={() => setViewMode("2d")}
                className="px-2 py-1 rounded text-xs font-heading uppercase transition-all"
                style={{
                  backgroundColor: viewMode === "2d" ? "var(--soft-purple)" : "transparent",
                  color: viewMode === "2d" ? "white" : "var(--dark-purple)",
                  border: viewMode === "2d" ? "1px solid var(--dark-purple)" : "1px solid transparent",
                  fontSize: "10px",
                }}
              >
                2D
              </button>
              <button
                onClick={() => setViewMode("3d")}
                className="px-2 py-1 rounded text-xs font-heading uppercase transition-all"
                style={{
                  backgroundColor: viewMode === "3d" ? "var(--soft-purple)" : "transparent",
                  color: viewMode === "3d" ? "white" : "var(--dark-purple)",
                  border: viewMode === "3d" ? "1px solid var(--dark-purple)" : "1px solid transparent",
                  fontSize: "10px",
                }}
              >
                3D
              </button>
            </div>

            {/* Hamburger Button */}
            <button
              className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg transition-all relative"
              style={{
                backgroundColor: "var(--soft-purple)",
                border: "2px solid var(--dark-purple)",
                boxShadow: "0 3px 0 var(--dark-purple)",
              }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <span
                className="block w-5 h-0.5 transition-all duration-300 absolute"
                style={{
                  backgroundColor: "white",
                  transform: isMenuOpen
                    ? "rotate(45deg) translateY(0)"
                    : "rotate(0) translateY(-6px)",
                }}
              />
              <span
                className="block w-5 h-0.5 transition-all duration-300"
                style={{
                  backgroundColor: "white",
                  opacity: isMenuOpen ? 0 : 1,
                }}
              />
              <span
                className="block w-5 h-0.5 transition-all duration-300 absolute"
                style={{
                  backgroundColor: "white",
                  transform: isMenuOpen
                    ? "rotate(-45deg) translateY(0)"
                    : "rotate(0) translateY(6px)",
                }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className="fixed inset-0 z-40 md:hidden transition-all duration-300 overflow-y-auto"
        style={{
          backgroundColor: "var(--cream)",
          opacity: isMenuOpen ? 1 : 0,
          pointerEvents: isMenuOpen ? "auto" : "none",
        }}
      >
        <div className="flex flex-col items-center justify-start min-h-full py-20 px-4 gap-3">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="px-6 py-3 rounded-xl font-heading text-lg uppercase tracking-wider transition-all w-full max-w-xs"
              style={{
                backgroundColor:
                  activeSection === item.id
                    ? "var(--soft-purple)"
                    : "var(--lavender)",
                color:
                  activeSection === item.id ? "white" : "var(--dark-purple)",
                border: "3px solid var(--dark-purple)",
                boxShadow: "0 4px 0 var(--dark-purple)",
                transform: isMenuOpen
                  ? "translateY(0)"
                  : `translateY(${20 + index * 10}px)`,
                opacity: isMenuOpen ? 1 : 0,
                transitionDelay: `${index * 50}ms`,
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
