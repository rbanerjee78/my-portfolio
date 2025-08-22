import React, { useEffect, useRef } from "react";
import anime from "animejs";
import voltreumImg from "../assets/voltreum.webp";
import icanpeImg from "../assets/icanpe.webp";
import eventsImg from "../assets/events.webp";
import finantaImg from "../assets/finanta.webp";
import harteImg from "../assets/hartehanks.webp";
import homepointImg from "../assets/homepoint.webp";

export default function MyWork() {
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const heading = headingRef.current;
          const letters = heading.querySelectorAll("span");

          anime({
            targets: letters,
            opacity: [0, 1],
            translateY: ["1.5em", "0em"],
            delay: anime.stagger(50),
            duration: 600,
            easing: "easeOutCubic",
          });

          anime({
            targets: heading,
            translateY: -20,
            delay: 1000,
            duration: 700,
            easing: "easeOutExpo",
          });

          anime({
            targets: cardsRef.current,
            translateY: [40, 0],
            opacity: [0, 1],
            delay: anime.stagger(100, { start: 1300 }),
            duration: 700,
            easing: "easeOutCubic",
          });

          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (headingRef.current) observer.observe(headingRef.current);
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Voltreum MDMS",
      description:
        "A modern MDMS platform for decentralized energy management.",
      image: voltreumImg,
      link: "https://www.behance.net/gallery/230023527/Voltreum-P2P-Energy-Sharing-Platform",
    },
    {
      title: "ICanpe Debt Recovery Platform",
      description:
        "A platform to automate, track, and manage debt recovery campaigns.",
      image: icanpeImg,
      link: "https://www.behance.net/gallery/203027155/ICanPe-Campaign-Manager",
    },
    {
      title: "Finanta Lending Platform",
      description: "Secure and scalable digital lending workflow automation.",
      image: finantaImg,
      link: "https://www.behance.net/gallery/210152559/Finanta-Fintech-UXUI-Design",
    },
    {
      title: "Harte Hanks Website",
      description:
        "Corporate web revamp with a sleek, modern marketing-first approach.",
      image: harteImg,
      link: "https://www.hartehanks.com/",
    },
    {
      title: "Homepoint Pricing Engine",
      description:
        "Designed and developed a responsive pricing portal for Homepoint mortgage officers to simulate loan rates and compare real-time offers. ",
      image: homepointImg,
      link: "https://www.behance.net/gallery/107122111/Pricing-Engine-Project",
    },
    {
      title: "Event Listing App",
      description:
        "Built a React-based web application to list and manage local events with search, filter, and bookmarking features. ",
      image: eventsImg,
      link: "https://www.behance.net/gallery/211052877/Events-App-Concept",
    },
  ];

  return (
    <section
      id="work"
      style={{
        position: "relative",
        minHeight: "100vh", // changed from height
        paddingTop: "4rem",
        scrollSnapAlign: "start",
       background: "linear-gradient(135deg, #e2e8f0, #cbd5e1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "4rem 1.5rem 6rem", // added bottom padding
        overflow: "hidden",
        scrollPadding: "10rem",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: -1,
          background:
            "linear-gradient(135deg, #fefce8, #ecfdf5, #e0f2fe, #fce7f3)",
          backgroundSize: "400% 400%",
          animation: "gradientFlow 18s ease infinite",
        }}
      />
      <style>{`
        @keyframes gradientFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      <h1
        ref={headingRef}
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          color: "#1f2937",
          marginBottom: "2rem",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "4px",
        }}
      >
       {"My Work".split(" ").map((word, wi) => (
  <span key={wi} style={{ display: "inline-block", marginRight: "0.5rem" }}>
    {word.split("").map((char, i) => (
      <span
        key={i}
        style={{
          opacity: 0,
          display: "inline-block",
          margin: "0 1px",
        }}
      >
        {char}
      </span>
    ))}
  </span>
))}

      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2rem",
          width: "100%",
          maxWidth: "1100px",
        }}
      >
        {projects.map((project, index) => (
          <a
  key={index}
  href={project.link}
  target="_blank"
  rel="noopener noreferrer"
  ref={(el) => (cardsRef.current[index] = el)}
  style={{
    textDecoration: "none",
    opacity: 0,
    transform: "translateY(40px)",
    background: "white",
    borderRadius: "1rem",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    overflow: "hidden",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-10px)";
    e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.15)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.1)";
  }}
>
  <img
    src={project.image}
    alt={project.title}
    style={{
      width: "100%",
      height: "280px",
      objectFit: "cover",
    }}
  />
  <div style={{ padding: "1.2rem", flexGrow: 1 }}>
    <h3
      style={{
        margin: "0 0 0.5rem",
        fontSize: "1.2rem",
        color: "#111827",
      }}
    >
      {project.title}
    </h3>
    <p style={{ color: "#4b5563", fontSize: "0.95rem", marginBottom: "1rem" }}>
      {project.description}
    </p>
    <div
      style={{
        marginTop: "auto",
        textAlign: "right",
      }}
    >
      <span
        style={{
          fontSize: "0.9rem",
          color: "#2563eb",
          fontWeight: "600",
        }}
      >
        View on Behance →
      </span>
    </div>
  </div>
</a>

        ))}
      </div>
    </section>
  );
}
