"use client";

import { useState, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot: string; // Spam protection
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "E-mail is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid e-mail address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Honeypot check - if filled, it's likely a bot
    if (formData.honeypot) {
      setSubmitStatus("success"); // Fake success for bots
      return;
    }

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Using Formspree - replace YOUR_FORM_ID with actual ID
      const response = await fetch("https://formspree.io/f/xlggwzyq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "", honeypot: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/umutcanceyhan7",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: "Medium",
      url: "https://medium.com/@umutcanceyhan",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="contact"
      className="py-16 md:py-24 relative overflow-hidden"
      style={{ backgroundColor: "var(--cream)" }}
    >
      {/* Memphis Geometric Decorations */}
      <div
        className="absolute top-20 left-10 w-16 h-16 rotate-45 opacity-20"
        style={{ backgroundColor: "var(--dusty-pink)" }}
      />
      <div
        className="absolute top-40 right-20 w-12 h-12 rounded-full opacity-15"
        style={{ backgroundColor: "var(--mint-green)" }}
      />
      <div
        className="absolute bottom-32 left-1/4 w-20 h-20 opacity-10"
        style={{
          borderLeft: "20px solid var(--peach)",
          borderBottom: "20px solid transparent",
        }}
      />
      <div
        className="absolute bottom-20 right-10 w-24 h-4 opacity-20"
        style={{
          background: "repeating-linear-gradient(90deg, var(--soft-purple), var(--soft-purple) 8px, transparent 8px, transparent 16px)",
        }}
      />

      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <h2
          className="font-heading text-4xl md:text-5xl lg:text-6xl text-center mb-4"
          style={{ color: "var(--dark-purple)" }}
        >
          CONTACT
        </h2>
        <p
          className="font-body text-center mb-12 max-w-2xl mx-auto"
          style={{ color: "var(--dark-gray)" }}
        >
          Have a project idea? Want to ask a question? Don&apos;t hesitate to contact me!
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div
            className="p-6 md:p-8 rounded-xl"
            style={{
              backgroundColor: "white",
              border: "4px solid var(--soft-purple)",
              boxShadow: "8px 8px 0 var(--lavender)",
            }}
          >
            <h3
              className="font-heading text-2xl mb-6"
              style={{ color: "var(--dark-purple)" }}
            >
              SEND MESSAGE
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Honeypot field - hidden from users */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={(e) => handleChange("honeypot", e.target.value)}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="font-body text-sm font-medium block mb-2"
                  style={{ color: "var(--dark-gray)" }}
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="w-full px-4 py-3 font-body rounded-lg transition-all duration-200"
                  style={{
                    backgroundColor: "var(--cream)",
                    border: errors.name ? "2px solid var(--coral)" : "2px solid var(--soft-purple)",
                    color: "var(--dark-gray)",
                    outline: "none",
                  }}
                  placeholder="Your Name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm font-body" style={{ color: "var(--coral)" }}>
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="font-body text-sm font-medium block mb-2"
                  style={{ color: "var(--dark-gray)" }}
                >
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="w-full px-4 py-3 font-body rounded-lg transition-all duration-200"
                  style={{
                    backgroundColor: "var(--cream)",
                    border: errors.email ? "2px solid var(--coral)" : "2px solid var(--soft-purple)",
                    color: "var(--dark-gray)",
                    outline: "none",
                  }}
                  placeholder="example@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm font-body" style={{ color: "var(--coral)" }}>
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Subject Field */}
              <div>
                <label
                  htmlFor="subject"
                  className="font-body text-sm font-medium block mb-2"
                  style={{ color: "var(--dark-gray)" }}
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => handleChange("subject", e.target.value)}
                  className="w-full px-4 py-3 font-body rounded-lg transition-all duration-200"
                  style={{
                    backgroundColor: "var(--cream)",
                    border: errors.subject ? "2px solid var(--coral)" : "2px solid var(--soft-purple)",
                    color: "var(--dark-gray)",
                    outline: "none",
                  }}
                  placeholder="Subject of your message"
                />
                {errors.subject && (
                  <p className="mt-1 text-sm font-body" style={{ color: "var(--coral)" }}>
                    {errors.subject}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="font-body text-sm font-medium block mb-2"
                  style={{ color: "var(--dark-gray)" }}
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  rows={5}
                  className="w-full px-4 py-3 font-body rounded-lg transition-all duration-200 resize-none"
                  style={{
                    backgroundColor: "var(--cream)",
                    border: errors.message ? "2px solid var(--coral)" : "2px solid var(--soft-purple)",
                    color: "var(--dark-gray)",
                    outline: "none",
                  }}
                  placeholder="Write your message here..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm font-body" style={{ color: "var(--coral)" }}>
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full font-heading text-lg py-4 rounded-lg transition-all duration-200 uppercase tracking-wide"
                style={{
                  backgroundColor: isSubmitting ? "var(--lavender)" : "var(--soft-purple)",
                  color: "white",
                  border: "3px solid var(--dark-purple)",
                  boxShadow: "0 4px 0 var(--dark-purple)",
                  transform: isSubmitting ? "translateY(2px)" : "translateY(0)",
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 6px 0 var(--dark-purple)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 0 var(--dark-purple)";
                  }
                }}
              >
                {isSubmitting ? "Sending..." : "Send"}
              </button>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div
                  className="p-4 rounded-lg font-body text-center"
                  style={{
                    backgroundColor: "var(--mint-green)",
                    color: "var(--dark-gray)",
                    border: "2px solid #7BC9A8",
                  }}
                >
                  ✓ Your message has been sent successfully! I will get back to you as soon as possible.
                </div>
              )}

              {submitStatus === "error" && (
                <div
                  className="p-4 rounded-lg font-body text-center"
                  style={{
                    backgroundColor: "#FFE5E5",
                    color: "var(--coral)",
                    border: "2px solid var(--coral)",
                  }}
                >
                  ✗ An error occurred. Please try again or send an email directly.
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-start space-y-8">
            {/* Email Card */}
            <div
              className="p-6 rounded-xl"
              style={{
                backgroundColor: "white",
                border: "4px solid var(--mint-green)",
                boxShadow: "6px 6px 0 var(--soft-blue)",
              }}
            >
              <h3
                className="font-heading text-xl mb-3"
                style={{ color: "var(--dark-purple)" }}
              >
                E-MAIL
              </h3>
              <a
                href="mailto:me@umutcanceyhan.com"
                className="font-body text-lg inline-flex items-center gap-2 transition-colors duration-200"
                style={{ color: "var(--dark-gray)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--soft-purple)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--dark-gray)")}
              >
                <span className="text-2xl">✉️</span>
                me@umutcanceyhan.com
              </a>
            </div>

            {/* Social Links Card */}
            <div
              className="p-6 rounded-xl"
              style={{
                backgroundColor: "white",
                border: "4px solid var(--dusty-pink)",
                boxShadow: "6px 6px 0 var(--peach)",
              }}
            >
              <h3
                className="font-heading text-xl mb-4"
                style={{ color: "var(--dark-purple)" }}
              >
                SOCIAL MEDIA
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg transition-all duration-200"
                    style={{
                      backgroundColor: "var(--cream)",
                      border: "3px solid var(--soft-purple)",
                      color: "var(--dark-purple)",
                      boxShadow: "0 3px 0 var(--dark-purple)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = "0 5px 0 var(--dark-purple)";
                      e.currentTarget.style.backgroundColor = "var(--soft-purple)";
                      e.currentTarget.style.color = "white";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 3px 0 var(--dark-purple)";
                      e.currentTarget.style.backgroundColor = "var(--cream)";
                      e.currentTarget.style.color = "var(--dark-purple)";
                    }}
                    title={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Fun Message */}
            <div
              className="p-5 rounded-xl text-center"
              style={{
                backgroundColor: "var(--butter-yellow)",
                border: "4px solid var(--peach)",
              }}
            >
              <p className="font-body" style={{ color: "var(--dark-gray)" }}>
                Ready to collaborate on your next project or discuss opportunities? I&apos;d love to hear from you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
