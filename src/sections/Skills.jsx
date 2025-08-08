// Keep your imports as they are
import React, { useEffect, useRef, useState } from "react";
import anime from "animejs/lib/anime.es.js";

import reactSVG from "../assets/react.svg";
import figmaSVG from "../assets/figma.svg";
import cssSVG from "../assets/css3.svg";
import htmlSVG from "../assets/html5.svg";
import jsSVG from "../assets/js.svg";
import gitSVG from "../assets/github.svg";
import xdSVG from "../assets/xd.svg";
import psSVG from "../assets/ps.svg";
import illSVG from "../assets/ill.svg";

const skills = [
  { name: "Figma", icon: figmaSVG },
  { name: "React", icon: reactSVG },
  { name: "CSS", icon: cssSVG },
  { name: "HTML", icon: htmlSVG },
  { name: "JavaScript", icon: jsSVG },
  { name: "Git", icon: gitSVG },
  { name: "Adobe XD", icon: xdSVG },
  { name: "Photoshop", icon: psSVG },
  { name: "Illustrator", icon: illSVG },
];

export default function Skills() {
  const cubesRef = useRef([]);
  const headingRef = useRef(null);
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Animate heading letters
  useEffect(() => {
    const letters = headingRef.current.querySelectorAll(".letter");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          anime({
            targets: letters,
            opacity: [0, 1],
            translateY: [40, 0],
            scale: [0.8, 1],
            duration: 800,
            easing: "easeOutExpo",
            delay: anime.stagger(80, { from: "center" }),
          });

          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (headingRef.current) observer.observe(headingRef.current);
    return () => observer.disconnect();
  }, []);

  // Animate skill cubes on enter viewport
  useEffect(() => {
    const animateCubes = () => {
      anime({
        targets: cubesRef.current,
        opacity: [0, 1],
        scale: [0.3, 1.2, 1],
        translateX: [0, 0],
        translateY: [10, 0],
        easing: "easeOutElastic(1, .6)",
        duration: 1800,
        delay: anime.stagger(200, { from: "center" }), 

      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateCubes();
          observer.disconnect(); // prevent repeat animation
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Handle mobile responsiveness
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  

  const headingText = "My Skills";

  return (
    <section
      id="skills"
      className="skills-section"
      ref={containerRef}
      style={{
        background: "linear-gradient(135deg, #f0fdf4, #dcfce7)",
        color: "#111",
        padding: "4rem 1.5rem",
        scrollSnapAlign: "start",
        minHeight: "100vh",
        position: "relative",
        zIndex: 1,
        
      }}
    >
      <h1
        ref={headingRef}
        style={{
          fontSize: "2.75rem",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "3rem",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {headingText.split("").map((char, i) => (
          <span
            key={i}
            className="letter"
            style={{
              display: "inline-block",
              opacity: 0,
              transform: "translateY(40px)",
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>

      <div
        className="cubes-container"
        
        style={{
          display: "grid",
          gridTemplateColumns: isMobile
            ? "repeat(2, 1fr)"
            : "repeat(auto-fit, minmax(140px, 1fr))",
          gap: "2rem",
          maxWidth: "900px",
          margin: "0 auto",
          padding: "0 1rem",
          position: "relative",
          zIndex: 2,
        }}
      >
        {skills.map((skill, i) => (
          <div
            key={i}
            ref={(el) => (cubesRef.current[i] = el)}
            className="skill-cube"
            style={{
              width: "clamp(120px, 20vw, 140px)",
              height: "clamp(140px, 22vw, 140px)",
              background: "#ffffff",
              borderRadius: 20,
              boxShadow: "0 8px 24px rgba(52,211,153,0.2)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              transition: "transform 0.4s ease, box-shadow 0.4s ease",
              cursor: "pointer",
              margin: "0 auto",
              transformStyle: "preserve-3d",
              willChange: "transform",
              textAlign: "center",
              padding: "0.5rem",
              opacity: 0, // for animation start
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform =
                "perspective(600px) rotateX(10deg) rotateY(10deg) scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 12px 36px rgba(52,211,153,0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform =
                "perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)";
              e.currentTarget.style.boxShadow =
                "0 8px 24px rgba(52,211,153,0.2)";
            }}
          >
            <img
              src={skill.icon}
              alt={skill.name}
              style={{
                width: "30%",
                height: "30%",
                objectFit: "contain",
                marginBottom: "0.5rem",
              }}
            />
            <p
              style={{
                fontSize: "0.9rem",
                fontWeight: 600,
                margin: 0,
              }}
            >
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
