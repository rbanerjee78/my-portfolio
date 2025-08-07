import { useEffect } from "react";
import headshotImg from "../assets/headshot.png";

export default function Home() {
  useEffect(() => {
  const scene = document.getElementById("scene");
  if (!scene) return;

  const numWords = 60;
  const depthSpacing = 200;
  const maxDepth = numWords * depthSpacing;
  let zOffset = 0;
  let rotateX = 5;
  let rotateY = 0;

  const uiWords = [
    "Button", "Slider", "Flexbox", "Grid", "Card", "Input", "Modal", "Dropdown",
    "Tooltip", "Navbar", "Avatar", "Toast", "Component", "Spacing", "Z-Index", "Padding",
    "Hover", "Shadow", "Framer Motion", "Tailwind", "Styled Components", "Theme", "Responsive",
    "Layout", "Transition", "Z-Stack", "Rem", "Chakra UI", "Figma", "UI Kit", "Scroll",
    "Sticky", "UX", "Breakpoint", "State", "Props", "Ref", "Hook", "Context"
  ];

  const words = [];

  for (let i = 0; i < numWords; i++) {
    const el = document.createElement("div");
    el.classList.add("word");
    el.textContent = uiWords[Math.floor(Math.random() * uiWords.length)];

    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const z = -i * depthSpacing;

    Object.assign(el.style, {
      position: "absolute",
      color: "rgba(57, 57, 57, 0.3)",
      fontWeight: "600",
      fontSize: "14px",
      whiteSpace: "nowrap",
      transform: `translate3d(${x}px, ${y}px, ${z}px)`,
      transition: "transform 0.2s ease-out",
      filter: "blur(1px)",
    });

    scene.appendChild(el);
    words.push({ element: el, x, y, z });
  }

  document.addEventListener("mousemove", (e) => {
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    rotateY = (dx / cx) * 10;
    rotateX = -(dy / cy) * 10;
  });

  function animate() {
    zOffset += 2;
    scene.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    words.forEach((word) => {
      let newZ = word.z + zOffset;

      if (newZ > 100) {
        word.z -= maxDepth;
        newZ = word.z + zOffset;
        word.x = Math.random() * window.innerWidth;
        word.y = Math.random() * window.innerHeight;
        word.element.textContent =
          uiWords[Math.floor(Math.random() * uiWords.length)];
      }

      word.element.style.transform = `translate3d(${word.x}px, ${word.y}px, ${newZ}px)`;
    });

    requestAnimationFrame(animate);
  }

  animate();
}, []);


  return (
    <section
      id="home"
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
      <div
        id="scene"
        style={{
          width: "100%",
          height: "100%",
          perspective: "1000px",
          transformStyle: "preserve-3d",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

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


        <h1 style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          color: "#111",
          
          marginBottom: "1.5rem",
          animation: "float 3s ease-in-out infinite"
        }}>
         Hi, I'm Rahul — Product Designer & Developer

        </h1>
        <p> <i>I build thoughtful solutions to real-world problems.</i></p>

        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "2rem",
        }}>
          <a href="#work" style={{
            padding: "12px 28px",
            background: "#111",
            color: "#fff",
            borderRadius: "30px",
            textDecoration: "none",
            fontWeight: "600",
            boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
            transition: "all 1.5s ease",
          }}
            onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
            onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
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

          <a href="#contact" style={{
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
            onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
            onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
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
