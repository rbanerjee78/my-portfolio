import React, { useEffect, useRef, useState } from "react";
import anime from "animejs";
import voltreumImg from "../assets/voltreum.webp";
import icanpeImg from "../assets/icanpe.webp";
import eventsImg from "../assets/events.webp";
import finantaImg from "../assets/finanta.webp";
import harteImg from "../assets/hartehanks.webp";
import homepointImg from "../assets/homepoint.webp";
import crmImg from "../assets/crm.webp";
import recuitImg from "../assets/recruit.svg";

export default function MyWork() {
  const headingRef = useRef(null);
  const cardsRef = useRef([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const images = [
      recuitImg,
      crmImg,
      voltreumImg,
      icanpeImg,
      eventsImg,
      finantaImg,
      harteImg,
      homepointImg,
    ];

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

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const projects = [
    {
      title: "CRM Dashboard",
      description:
        "A comprehensive CRM dashboard enabling real-time visualization of customer data, sales pipelines, and performance analytics.",
      image: crmImg,
      link: "https://www.behance.net/gallery/240760129/CRM-Dashboard-UI",


      techStack: [
        "React.js",
        "Tailwind CSS",
        "Recharts",
        "Redux Toolkit",
        "Node.js"
      ],

      features: [
        "Interactive data visualization with real-time updates using Recharts.",
        "Role-based authentication and secure API endpoints.",
        "Drag-and-drop kanban board for deal management.",
      ],

      challenges: [
        "Optimizing rendering performance for large datasets in the data grid.",
        "Implementing seamless synchronization between local state and the backend.",
        " Designing a responsive layout that works across various screen sizes.",
      ],
    },

    {
      title: "SaaS B2C Job Portal",
      description:
        "A full-stack job portal connecting candidates with employers, featuring advanced search filtering and application tracking.",
      image: recuitImg,
      link: "https://www.behance.net/gallery/240759113/Saas-B2C-Job-Portal",


      techStack: [
        "Next.js",
        "MongoDB",
        "Express",
        "AWS S3",
        "Framer Motion"
      ],

      features: [
        "Server-side rendering for SEO-optimized job listings.",
        "Advanced filtering algorithm with debounce for instant search.",
        "File upload integration with AWS S3 for resume storage.",
      ],

      challenges: [
        "Handling complex database relationship queries for job matching efficiency.",
        "Ensuring low latency for search results with millions of records.",
        "Building a scalable real-time notification system."
      ],
    },

    {
      title: "Voltreum MDMS",
      description:
        "A decentralized application (dApp) for peer-to-peer energy trading and monitoring using blockchain technology.",
      image: voltreumImg,
      link: "https://www.behance.net/gallery/230023527/Voltreum-P2P-Energy-Sharing-Platform",


      techStack: [
        "React.js",
        "Web3.js",
        "Solidity",
        "Ethereum Testnet",
        "D3.js"
      ],

      features: [
        "Smart contract integration for secure energy transactions.",
        "Real-time grid data visualization using D3.js.",
        "Wallet connection and transaction signing flows.",
      ],

      challenges: [
        "Managing state consistency between the blockchain and the frontend UI.",
        "Optimizing gas fees for frequent transaction updates.",
        "Visualizing complex P2P energy flow graphs intuitively."
      ],
    },

    {
      title: "ICanpe Debt Recovery Platform",
      description:
        "An enterprise-grade platform automating debt recovery workflows with bulk processing and campaign management.",
      image: icanpeImg,
      link: "https://www.behance.net/gallery/203027155/ICanPe-Campaign-Manager",


      techStack: [
        "Vue.js",
        "Python Django",
        "PostgreSQL",
        "Redis",
        "Docker"
      ],

      features: [
        "Automated campaign scheduler with SMS/Email integration.",
        "High-performance data table handling 100k+ rows.",
        "Real-time analytics dashboard for recovery rates.",
      ],

      challenges: [
        "Ensuring data security and compliance with financial regulations.",
        "Handling concurrent bulk upload operations without server timeout.",
        "Implementing a dynamic rule engine for customized recovery strategies."
      ],
    },

    {
      title: "Finanta Lending Platform",
      description: "A secure fintech application streamlining the digital lending process with automated KYC and credit underwriting.",
      image: finantaImg,
      link: "https://www.behance.net/gallery/210152559/Finanta-Fintech-UXUI-Design",


      techStack: [
        "Angular",
        "RxJS",
        "Spring Boot",
        "Oracle DB",
        "Keycloak"
      ],

      features: [
        "Multi-step application wizard with state persistence.",
        "Integrated document verification via third-party APIs.",
        "Role-based dashboards for applicants and loan officers.",
      ],

      challenges: [
        "Orchestrating complex asynchronous API calls with RxJS.",
        "Implementing strict form validation and error handling logic.",
        "Securing sensitive financial data during transit and storage."
      ],
    },

    {
      title: "Harte Hanks Website",
      description:
        "A high-performance corporate website re-platformed to improve SEO, load speeds, and content management capability.",
      image: harteImg,
      link: "https://www.hartehanks.com/",


      techStack: [
        "Wordpress Headless",
        "Gatsby",
        "GraphQL",
        "Styled Components",
        "Netlify"
      ],

      features: [
        "Static site generation (SSG) for blazing fast load times.",
        "Dynamic content fetching via GraphQL from Headless CMS.",
        "Custom reusable component library for marketing landing pages.",
      ],

      challenges: [
        "Migrating thousands of pages of legacy content to the new structure.",
        "Optimizing images and assets to achieve high Lighthouse scores.",
        "Implementing complex routing logic for internationalization (i18n)."
      ],
    },

    {
      title: "Homepoint Pricing Engine",
      description:
        "A complex financial calculation engine for real-time mortgage rate simulation and offer generation.",
      image: homepointImg,
      link: "https://www.behance.net/gallery/107122111/Pricing-Engine-Project",


      techStack: [
        "React.js",
        "TypeScript",
        "C# .NET Core",
        "SQL Server",
        "Azure"
      ],

      features: [
        "Instant rate calculation based on user-input parameters.",
        "PDF generation of custom quote offers on the client side.",
        "Real-time integration with market rate APIs.",
      ],

      challenges: [
        "Ensuring floating-point precision in financial calculations.",
        "Managing complex local state with many interdependent variables.",
        "Reducing API latency for a smooth 'instant quote' experience."
      ],
    },

    {
      title: "Event Listing App",
      description:
        "A progressive web app (PWA) for discovering local events with geolocation support and offline capabilities.",
      image: eventsImg,
      link: "https://www.behance.net/gallery/211052877/Events-App-Concept",


      techStack: [
        "React Native",
        "Firebase",
        "Google Maps API",
        "Expo"
      ],

      features: [
        "Geolocation-based event recommendations.",
        "Real-time push notifications for bookmarked events.",
        "Offline mode support for viewing saved tickets.",
      ],

      challenges: [
        "Optimizing map rendering performance on mobile devices.",
        "Handling location permission flows gracefully across platforms.",
        "Synchronizing offline data when connectivity is restored."
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
          <span
            key={wi}
            style={{ display: "inline-block", marginRight: "0.5rem" }}
          >
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
                  width: "100%",
                  borderRadius: "0.75rem",
                  marginBottom: "1rem",
                  maxHeight: "350px",
                  objectFit: "cover"
                }}
              />

              <h2 style={{ marginBottom: "0.5rem", fontSize: "1.4rem" }}>
                {selectedProject.title}
              </h2>

              <p
                style={{
                  color: "#4b5563",
                  marginBottom: "1.2rem",
                  lineHeight: "1.55",
                }}
              >
                {selectedProject.description}
              </p>

              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
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
                  View Design →
                </a>



                <button
                  onClick={() => setSelectedProject(null)}
                  style={{
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
            </div>

            {/* RIGHT — Technical Details Panel */}
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
              {/* Tech Stack */}
              <h3 style={{ marginBottom: "0.5rem", fontSize: "1.2rem", display: 'flex', alignItems: 'center', gap: '8px' }}>
                🛠️ Tech Stack
              </h3>
              <div
                style={{
                  marginBottom: "1.5rem",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                }}
              >
                {selectedProject.techStack?.map((item, i) => (
                  <span key={i} style={{ 
                      background: "#eff6ff",
                      color: "#1d4ed8",
                      padding: "4px 12px",
                      borderRadius: "9999px",
                      fontSize: "0.85rem",
                      fontWeight: "500"
                  }}>
                    {item}
                  </span>
                ))}
              </div>

              {/* Key Features */}
              <h3 style={{ marginBottom: "0.5rem", fontSize: "1.2rem", display: 'flex', alignItems: 'center', gap: '8px' }}>
                🚀 Key Features
              </h3>
              <ul
                style={{
                  marginBottom: "1.5rem",
                  color: "#4b5563",
                  lineHeight: "1.55",
                  paddingLeft: "1.2rem"
                }}
              >
                {selectedProject.features?.map((item, i) => (
                  <li key={i} style={{ marginBottom: "0.4rem" }}>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Technical Challenges */}
              <h3 style={{ marginBottom: "0.5rem", fontSize: "1.2rem", display: 'flex', alignItems: 'center', gap: '8px' }}>
                ⚡ Challenges & Solutions
              </h3>
              <ul style={{ 
                  color: "#4b5563", 
                  lineHeight: "1.55",
                  paddingLeft: "1.2rem"
              }}>
                {selectedProject.challenges?.map((item, i) => (
                  <li key={i} style={{ marginBottom: "0.4rem" }}>
                    {item}
                  </li>
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
              <p
                style={{
                  color: "#4b5563",
                  fontSize: "0.95rem",
                  marginBottom: "1rem",
                }}
              >
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
