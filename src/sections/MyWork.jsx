import React, { useEffect, useRef, useState } from "react";
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
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
  const images = [voltreumImg, icanpeImg, eventsImg, finantaImg, harteImg, homepointImg];

  images.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
}, []);


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

  
  const openModal = (project) => {
  setSelectedProject(project);
};

  const closeModal = () => {
  setSelectedProject(null);
};


  const projects = [
  {
    title: "Voltreum MDMS",
    description:
      "A modern MDMS platform for decentralized energy management.",
    image: voltreumImg,
    link: "https://www.behance.net/gallery/230023527/Voltreum-P2P-Energy-Sharing-Platform",

    painPoints: [
      "Users struggled to understand distributed energy flow across nodes.",
      "Lack of actionable insights for consumption vs generation balance.",
      "Legacy MDMS dashboards were too technical and cluttered."
    ],

    motivations: [
      "Create an easier way to monitor energy sharing across communities.",
      "Bring clarity to complex distributed energy models.",
      "Improve trust by visualising transparent transaction data."
    ],

    research: [
      "Interviewed 8 grid operators to identify workflow bottlenecks.",
      "Reviewed 6 global energy-management platforms.",
      "Mapped end-to-end meter data lifecycle to identify UX gaps."
    ],
  },

  {
    title: "ICanpe Debt Recovery Platform",
    description:
      "A platform to automate, track, and manage debt recovery campaigns.",
    image: icanpeImg,
    link: "https://www.behance.net/gallery/203027155/ICanPe-Campaign-Manager",

    painPoints: [
      "Agents had no unified place to track borrower responses.",
      "Campaign performance lacked real-time visibility.",
      "Manual Excel uploads caused delays and mismatches."
    ],

    motivations: [
      "Make recovery teams faster via automation.",
      "Improve borrower segmentation for higher recovery rates.",
      "Reduce dependency on third-party CRM tools."
    ],

    research: [
      "Shadowed 4 collection teams to study call workflows.",
      "Analyzed data around borrower behavior patterns.",
      "Benchmarked leading loan recovery tools in India."
    ],
  },

  {
    title: "Finanta Lending Platform",
    description:
      "Secure and scalable digital lending workflow automation.",
    image: finantaImg,
    link: "https://www.behance.net/gallery/210152559/Finanta-Fintech-UXUI-Design",

    painPoints: [
      "Loan officers struggled with fragmented KYC workflows.",
      "Underwriting steps were unclear, causing delays.",
      "Borrowers had difficulty understanding approval stages."
    ],

    motivations: [
      "Build a transparent multi-step lending journey.",
      "Improve decision-making speed with a cleaner UI.",
      "Introduce dashboards to reduce ops workload."
    ],

    research: [
      "Mapped the entire loan lifecycle from application to disbursal.",
      "Interviewed stakeholders from underwriting and credit teams.",
      "Analyzed RBI compliance flows to align UI with regulations."
    ],
  },

  {
    title: "Harte Hanks Website",
    description:
      "Corporate web revamp with a sleek, modern marketing-first approach.",
    image: harteImg,
    link: "https://www.hartehanks.com/",

    painPoints: [
      "Visitors struggled to understand service offerings quickly.",
      "Navigation hierarchy was confusing with too many pages.",
      "Brand identity looked outdated and inconsistent."
    ],

    motivations: [
      "Position Harte Hanks as a modern marketing leader.",
      "Simplify navigation into clear, outcome-driven content clusters.",
      "Improve conversion for key services through better CTAs."
    ],

    research: [
      "Conducted a sitemap audit of 120+ pages.",
      "Analyzed competitor websites in the enterprise marketing domain.",
      "Used heatmap insights to restructure hero content."
    ],
  },

  {
    title: "Homepoint Pricing Engine",
    description:
      "Designed and developed a responsive pricing portal for mortgage officers to simulate loan rates and compare real-time offers.",
    image: homepointImg,
    link: "https://www.behance.net/gallery/107122111/Pricing-Engine-Project",

    painPoints: [
      "Loan officers needed faster rate comparison on the go.",
      "Legacy system required multiple logins and manual calculations.",
      " borrowers did not understand how rates changed with parameters."
    ],

    motivations: [
      "Give officers a real-time, mobile-friendly pricing engine.",
      "Enable one-click comparison and PDF generation.",
      "Reduce time-to-quote drastically."
    ],

    research: [
      "Interviewed US-based mortgage officers.",
      "Analyzed loan pricing APIs and rate adjustment rules.",
      "Mapped common scenarios like refinancing, purchase, and FHA loans."
    ],
  },

  {
    title: "Event Listing App",
    description:
      "Built a React-based app to list and manage local events with search, filter, and bookmarking features.",
    image: eventsImg,
    link: "https://www.behance.net/gallery/211052877/Events-App-Concept",

    painPoints: [
      "Users found it hard to discover local events quickly.",
      "Most apps lacked good filtering and category clustering.",
      "Saving and managing bookmarked events was confusing."
    ],

    motivations: [
      "Make event discovery instant through powerful search.",
      "Build a clean UI for browsing by category or popularity.",
      "Improve user control with bookmarking and reminders."
    ],

    research: [
      "Surveyed 50+ users about event discovery habits.",
      "Competitive analysis of Eventbrite, BookMyShow, Fever.",
      "Created usability tests for search + filter flow."
    ],
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

   

{selectedProject && (
  <div
    onClick={() => setSelectedProject(null)}
    style={{
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.65)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000,
      padding: "1rem",
    }}
  >
    <div
      onClick={(e) => e.stopPropagation()}
      style={{
        background: "white",
        borderRadius: "1rem",
        width: "95%",
        maxWidth: "1100px",
        padding: "1.5rem",
        boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
        display: "flex",
        gap: "2rem",
        flexWrap: "wrap",
      }}
    >

      {/* LEFT SIDE — Primary Project */}
      <div style={{ flex: "1 1 55%", minWidth: "280px" }}>
        <img
          src={selectedProject.image}
          alt={selectedProject.title}
          style={{
            width: "auto",
            borderRadius: "0.75rem",
            marginBottom: "1rem",
          }}
        />

        <h2 style={{ marginBottom: "0.5rem", fontSize: "1.4rem" }}>
          {selectedProject.title}
        </h2>

        <p style={{ color: "#4b5563", marginBottom: "1.2rem", lineHeight: "1.55" }}>
          {selectedProject.description}
        </p>

        <a
          href={selectedProject.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            padding: "10px 16px",
            background: "#2563eb",
            color: "white",
            borderRadius: "0.5rem",
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          View on Behance →
        </a>

        <button
          onClick={() => setSelectedProject(null)}
          style={{
            marginLeft: "1rem",
            padding: "10px 16px",
            borderRadius: "0.5rem",
            background: "#e5e7eb",
            border: "none",
            cursor: "pointer",
          }}
        >
          Close
        </button>
      </div>

      {/* RIGHT — UX Insights Panel */}
      <div
        style={{
          flex: "1 1 35%",
          minWidth: "260px",
          borderLeft: "1px solid #e5e7eb",
          paddingLeft: "1.5rem",
          maxHeight: "70vh",
          overflowY: "auto",
        }}
      >
        {/* Pain Points */}
        <h3 style={{ marginBottom: "0.5rem", fontSize: "1.2rem" }}>🔍 Pain Points</h3>
        <ul style={{ marginBottom: "1.5rem", color: "#4b5563", lineHeight: "1.55" }}>
          {selectedProject.painPoints?.map((item, i) => (
            <li key={i} style={{ marginBottom: "0.4rem" }}>{item}</li>
          ))}
        </ul>

        {/* Motivations */}
        <h3 style={{ marginBottom: "0.5rem", fontSize: "1.2rem" }}>🎯 Motivations</h3>
        <ul style={{ marginBottom: "1.5rem", color: "#4b5563", lineHeight: "1.55" }}>
          {selectedProject.motivations?.map((item, i) => (
            <li key={i} style={{ marginBottom: "0.4rem" }}>{item}</li>
          ))}
        </ul>

        {/* Research */}
        <h3 style={{ marginBottom: "0.5rem", fontSize: "1.2rem" }}>🧪 Research</h3>
        <ul style={{ color: "#4b5563", lineHeight: "1.55" }}>
          {selectedProject.research?.map((item, i) => (
            <li key={i} style={{ marginBottom: "0.4rem" }}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
)}



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
  <div
    key={index}
    onClick={() => setSelectedProject(project)}
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
      <div style={{ marginTop: "auto", textAlign: "right" }}>
        <span
          style={{
            fontSize: "0.9rem",
            color: "#2563eb",
            fontWeight: "600",
          }}
        >
          View Details →
        </span>
      </div>
    </div>
  </div>
))}

      </div>
    </section>
  );
}
