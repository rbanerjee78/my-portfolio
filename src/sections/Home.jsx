import { useEffect, useRef, useState } from "react";
import headshotImg from "../assets/headshot.webp";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min.js";

export default function Home() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  // Animation trigger state
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer to trigger animation on every scroll into view
  useEffect(() => {
    let timeout;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(false); // Reset
          clearTimeout(timeout);
          timeout = setTimeout(() => setAnimate(true), 10); // Restart animation
        } else {
          setAnimate(false); // Reset when out of view so it can re-trigger
        }
      },
      { threshold: 0.5 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 0.5,
          points: 6.0,
          maxDistance: 20.0,
          spacing: 20.0,
          color: 0x222222,      // Dark grey line color
          color2: 0x222222,     // Dark grey dot color
          backgroundAlpha: 0,   // Transparent background
          backgroundColor: 0xffedd5 // Required, but alpha hides it
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <section
      id="home"
      ref={sectionRef}
      style={{
        height: "100vh",
        scrollSnapAlign: "start",
        background: "linear-gradient(135deg, #ffedd5, #fecaca)",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "0 16px",
      }}
    >
      {/* Canvas Background */}
      <div
        ref={vantaRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      />
      {/* Foreground Content */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <img
          src={headshotImg}
          alt="Rahul"
          style={{
            width: "120px",
            height: "120px",
            marginTop: "1rem",
            borderRadius: "50%",
            objectFit: "cover",
            boxShadow: "0 6px 18px rgba(0, 0, 0, 0.15)",
            marginBottom: "24px",
            animation: "float 6s ease-in-out infinite",
          }}
        />

        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            background:
              "linear-gradient(270deg, #ff6a00, #2c1919ff, #ff8c00ff, #2c1919ff)",
            backgroundSize: "800% 800%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: animate
              ? "gradientMove 15s ease infinite, fadeSlideIn 1.5s ease forwards"
              : "none",
            marginBottom: "1.5rem",
            opacity: animate ? 0 : 0,
            transform: animate ? "translateY(20px)" : "translateY(20px)",
          }}
        >
          Hi, I'm Rahul — Product Designer & Developer
        </h1>

        <p
          style={{
            animation: animate
              ? "fadeSlideIn 1.5s ease forwards"
              : "none",
            animationDelay: animate ? "0.8s" : "0s",
            opacity: animate ? 0 : 0,
            transform: animate ? "translateY(20px)" : "translateY(20px)",
          }}
        >
          <i>I build thoughtful solutions to real-world problems.</i>
        </p>

        <style>
          {`
            @keyframes gradientMove {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }

            @keyframes fadeSlideIn {
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}
        </style>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
            marginTop: "2rem",
          }}
        >
          <a
            href="#work"
            style={{
              padding: "12px 28px",
              background: "#111",
              color: "#fff",
              borderRadius: "30px",
              textDecoration: "none",
              fontWeight: "600",
              boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
              transition: "all 1.5s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            onClick={(e) => {
              e.preventDefault();
              const section = document.getElementById("work");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            View My Work
          </a>

          <a
            href="#contact"
            style={{
              padding: "12px 28px",
              background: "transparent",
              color: "#111",
              border: "2px solid #111",
              borderRadius: "30px",
              textDecoration: "none",
              fontWeight: "600",
              boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
              transition: "all 1.5s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            onClick={(e) => {
              e.preventDefault();
              const section = document.getElementById("contact");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
