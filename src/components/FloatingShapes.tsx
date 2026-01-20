"use client";

export default function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Triangle - Top Left */}
      <div
        className="absolute animate-float"
        style={{
          top: "10%",
          left: "5%",
          width: 0,
          height: 0,
          borderLeft: "30px solid transparent",
          borderRight: "30px solid transparent",
          borderBottom: "52px solid var(--dusty-pink)",
          opacity: 0.6,
          animationDelay: "0s",
        }}
      />

      {/* Circle - Top Right */}
      <div
        className="absolute animate-float-delayed"
        style={{
          top: "15%",
          right: "10%",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          backgroundColor: "var(--mint-green)",
          opacity: 0.5,
          animationDelay: "0.5s",
        }}
      />

      {/* Square - Bottom Left */}
      <div
        className="absolute animate-float"
        style={{
          bottom: "20%",
          left: "8%",
          width: "40px",
          height: "40px",
          backgroundColor: "var(--peach)",
          opacity: 0.5,
          transform: "rotate(15deg)",
          animationDelay: "1s",
        }}
      />

      {/* Diamond - Right Middle */}
      <div
        className="absolute animate-float-delayed"
        style={{
          top: "50%",
          right: "5%",
          width: "50px",
          height: "50px",
          backgroundColor: "var(--lavender)",
          opacity: 0.5,
          transform: "rotate(45deg)",
          animationDelay: "1.5s",
        }}
      />

      {/* Small Circle - Bottom Right */}
      <div
        className="absolute animate-pulse-slow"
        style={{
          bottom: "15%",
          right: "15%",
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          backgroundColor: "var(--soft-purple)",
          opacity: 0.6,
          animationDelay: "2s",
        }}
      />

      {/* Triangle - Middle Left */}
      <div
        className="absolute animate-float-delayed"
        style={{
          top: "40%",
          left: "3%",
          width: 0,
          height: 0,
          borderLeft: "20px solid transparent",
          borderRight: "20px solid transparent",
          borderBottom: "35px solid var(--soft-blue)",
          opacity: 0.5,
          animationDelay: "0.8s",
        }}
      />

      {/* Zigzag - Top Center */}
      <svg
        className="absolute animate-float"
        style={{
          top: "8%",
          left: "40%",
          width: "80px",
          height: "40px",
          opacity: 0.4,
          animationDelay: "1.2s",
        }}
        viewBox="0 0 80 40"
      >
        <polyline
          points="0,20 20,10 40,30 60,10 80,20"
          fill="none"
          stroke="var(--coral)"
          strokeWidth="4"
        />
      </svg>
    </div>
  );
}
