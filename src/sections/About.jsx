import React, { useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es.js";

const timelineData = [
  {
    type: "experience",
    title: "UI UX Designer",
    company: "411Locals",
    duration: "Sep 2024 – June 2025",
    description:
      "Created Landing Pages, optimized them for conversion. Created React Based Websites, and improved user experience across multiple projects.",
  },
  {
    type: "experience",
    title: "UI UX Developer",
    company: "Voltreum",
    duration: "Jan 2023 – Aug 2024",
    description:
      "Created user facing features for MDMS, a platform for managing smart meters. Developed user interfaces for various web applications, focusing on usability and performance.",
  },
  {
    type: "experience",
    title: "Senior UI/UX Designer",
    company: "ICanPe Pvt Ltd",
    duration: "Oct 2021 – Dec 2022",
    description:
      "Led end-to-end design for a debt recovery platform, introduced campaign tracking, and improved borrower engagement.",
  },
  {
    type: "experience",
    title: "UI/UX Design Freelancer",
    company: "Rankiteo",
    duration: "Oct 2020 – Oct 2021",
    description:
      "Created interfaces for cybersecurity products, focusing on user-friendly designs and enhancing user experience.",
  },
  {
    type: "experience",
    title: "Senior UI/UX Designer",
    company: "Assimilate Solutions",
    duration: "Feb 2019 – Sep 2020",
    description:
      "Created interfaces for cybersecurity products, focusing on user-friendly designs and enhancing user experience.",
  },
    {
    type: "experience",
    title: "Senior UI/UX Developer",
    company: "Walker Digital",
    duration: "Jan 2017 – Sep 2018",
    description:
      "Created interfaces for casino management software, concentrating on user-friendly designs and enhancing user experience.",
  },
   {
    type: "experience",
    title: "Senior UI/UX Developer",
    company: "WebVirtue Technology",
    duration: "Jan 2016 – Sep 2016",
    description:
      "Created interfaces for ecommerce catalog management software, focusing on user-friendly designs and enhancing user experience.",
  },
   {
    type: "experience",
    title: "Senior UI/UX Designer",
    company: "TrilaSoft Solutions",
    duration: "Nov 2008 – Dec 2016",
    description:
      "Created interfaces for Logistics and Supply Chain Management software, focusing on user-friendly designs and enhancing user experience.",
  },
  {
    type: "education",
    title: "GNIIT PG Diplma",
    company: "NIIT Delhi",
    duration: "1997 – 2000",
    description:
      "Global curriculum in software engineering, covering programming languages, database management, and web development.",
  },
   {
    type: "education",
    title: "Human Computer Interaction",
    company: "Interaction Design Foundation (IDF), Denmark",
    duration: "2022 – 2023",
    description:
      "Comprehensive course on user-centered design principles, usability testing, and interaction design methodologies.",
  },
  {
    type: "education",
    title: "React Specialization Certification",
    company: "Hong Kong University of Science and Technology",
    duration: "2022 – 2023",
    description:
      "React specialization course covering advanced React concepts, state management, and performance optimization.",
  },
];

export default function AboutMe() {
  const timelineRef = useRef([]);
  const headingRef = useRef(null);

  useEffect(() => {
    const heading = headingRef.current;
    const timelineEls = timelineRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (heading) {
            const letters = heading.querySelectorAll("span span");
            anime({
              targets: letters,
              opacity: [0, 1],
              translateY: ["1.5em", "0em"],
              delay: anime.stagger(50),
              duration: 600,
              easing: "easeOutCubic",
            });
          }

          if (timelineEls.length > 0) {
            anime({
              targets: timelineEls,
              opacity: [0, 1],
              translateY: [40, 0],
              delay: anime.stagger(150),
              duration: 700,
              easing: "easeOutExpo",
            });
          }

          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (heading) observer.observe(heading);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
       background: "linear-gradient(135deg, #fefce8, #fef9c3)",
        padding: "4rem 1.5rem",
        scrollSnapAlign: "start",
        scrollPadding: "4rem",
        flexDirection: "column",
      }}
    >
      <h1
        ref={headingRef}
        style={{
          textAlign: "center",
          fontSize: "2.5rem",
          marginBottom: "3rem",
          fontWeight: "bold",
          color: "#111827",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "4px",
        }}
      >
        {"About Me".split(" ").map((word, wi) => (
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

      {/* Responsive Container */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "row",
          gap: "3rem",
          flexWrap: "wrap",
        }}
      >
        {/* BIO SECTION */}
        <div
          style={{
            flex: "1 1 300px",
            fontSize: "1.1rem",
            color: "#374151",
            lineHeight: 1.6,
          }}
        >
          <p>
            I'm a passionate UI/UX Designer and Developer with over 16 years of experience in building
            intuitive, beautiful, and scalable user interfaces. I specialize in crafting digital experiences
            that bridge design with code.
          </p>
          <p>
            From building complex enterprise dashboards to responsive marketing sites, I focus on creating
            seamless, human-centered products that are not only functional but delightful.
          </p>
          <p>
            I bring creativity, attention to detail, and cross-functional collaboration to every project —
            always pushing boundaries to improve user journeys.
          </p>
        </div>

        {/* TIMELINE SECTION */}
        <div
          style={{
            flex: "2 1 600px",
            paddingLeft: "1rem",
          }}
        >
          {timelineData.map((item, index) => (
            <div
              key={index}
              ref={(el) => (timelineRef.current[index] = el)}
              style={{
                opacity: 0,
                transform: "translateY(40px)",
                position: "relative",
                marginBottom: "2.5rem",
                paddingLeft: "2rem",
                borderLeft: "3px solid #cbd5e1",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: "-10px",
                  top: "0",
                  width: "16px",
                  height: "16px",
                  backgroundColor: item.type === "education" ? "#facc15" : "#3b82f6",
                  borderRadius: "50%",
                  border: "2px solid white",
                }}
              ></div>

              <h3 style={{ margin: 0, fontSize: "1.25rem", fontWeight: 600 }}>
                {item.title} @ {item.company}
              </h3>
              <span style={{ fontSize: "0.9rem", color: "#6b7280" }}>{item.duration}</span>
              <p style={{ fontSize: "1rem", marginTop: "0.5rem", color: "#374151" }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
