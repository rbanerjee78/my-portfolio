// Keep your imports as they are
import React, { useEffect, useRef } from "react";
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

  useEffect(() => {
  anime({
      targets: cubesRef.current,
      opacity: [0, 1],
      scale: [0.3, 1.2, 1],
      rotateX: [90, 0],
      rotateZ: [-45, 0],
      translateY: [100, 0],
      easing: "easeOutElastic(1, .6)",
      duration: 1800,
      delay: anime.stagger(200, { from: "center" }),
    });

  }, []);

  const headingText = "My Skills";

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

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => observer.disconnect();
  }, []);

   useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateCubes();
        }
      },
      { threshold: 0.3 }
    );

    const target = document.querySelector(".cubes-container");
    if (target) observer.observe(target);

    return () => observer.disconnect();
  }, []);


  const [isMobile, setIsMobile] = React.useState(false);

useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  handleResize(); // set on mount
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);


  return (
    <section
      id="skills"
      className="skills-section"
      style={{
       backgroundImage: "linear-gradient(to top, #ab2aef, #9f45f5, #9457f8, #8a66fa, #8272fb, #8c81fc, #9790fc, #a29efb, #bcb5fc, #d3cdfe, #eae6ff, #ffffff)",
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
    gridTemplateColumns: isMobile ? "2fr" : "repeat(auto-fit, minmax(140px, 1fr))",
    gap: "3.2rem",
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
              width: "clamp(120px, 20vw, 180px)",
              height: "clamp(140px, 22vw, 200px)", // a little taller to fit text
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
              padding: "1rem",
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
                width: "60%",
                height: "60%",
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
