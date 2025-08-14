import { useEffect, useRef } from "react";
import anime from "animejs";
import { Mail, Phone, Linkedin } from "lucide-react"; // Icons

export default function Contact() {
  const containerRef = useRef(null);
  const elementsRef = useRef([]);
  const hasAnimated = useRef(false);

  const animateContact = () => {
    anime({
      targets: elementsRef.current,
      opacity: [0, 1],
      scale: [
        { value: 0.3, easing: "easeOutSine", duration: 200 },
        { value: 1, easing: "easeOutElastic(1, .6)", duration: 800 },
      ],
      translateY: [40, 0],
      delay: anime.stagger(100, { from: "center" }),
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateContact();
          hasAnimated.current = true;

          setTimeout(() => {
            elementsRef.current.forEach((el) => {
              if (el) {
                el.style.opacity = 1;
              }
            });
            hasAnimated.current = false;
          }, 2000);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const title = "Contact Me";
  const titleSpans = title.split("").map((char, i) => (
    <span
      key={i}
      ref={(el) => (elementsRef.current[i] = el)}
      style={{ display: "inline-block", opacity: 0 }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));

  const paragraphIndex = title.length;
  const contactBlockIndex = title.length + 1;

  return (
    <section
      id="contact"
      ref={containerRef}
      style={{
        background: "linear-gradient(135deg, #fefce8, #fef9c3)",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "0.1em",
          }}
        >
          {titleSpans}
        </h1>

        <p
          ref={(el) => (elementsRef.current[paragraphIndex] = el)}
          style={{
            fontSize: "1.1rem",
            marginBottom: "10px",
            opacity: 0,
          }}
        >
          Feel free to reach out for collaborations, freelance work, or just to say hello!
        </p>
<div
  ref={(el) => (elementsRef.current[contactBlockIndex] = el)}
  style={{
    marginTop: "30px",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "30px",
    opacity: 0,
  }}
>
  {[
    { icon: <Mail size={20} />, text: "rahulorama@gmail.com", link: "mailto:rahulorama@gmail.com" },
    { icon: <Phone size={20} />, text: "+91 89209 65371", link: "tel:+918920965371" },
    { icon: <Linkedin size={20} />, text: "linkedin.com/in/uidevx", link: "https://linkedin.com/in/uidevx" },
  ].map((item, index) => (
    <div key={index} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      {item.icon}
      <a
        href={item.link}
        target={item.link.startsWith("http") ? "_blank" : undefined}
        rel="noopener noreferrer"
        style={{
          color: "#000",
          position: "relative",
          textDecoration: "none",
          fontWeight: 500,
        }}
        onMouseEnter={(e) => {
          e.target.style.setProperty("--underline-width", "100%");
        }}
        onMouseLeave={(e) => {
          e.target.style.setProperty("--underline-width", "0%");
        }}
      >
        <span
          style={{
            position: "relative",
            display: "inline-block",
            "--underline-width": "0%",
            transition: "--underline-width 0.3s ease",
          }}
        >
          {item.text}
          <span
            style={{
              position: "absolute",
              left: 0,
              bottom: "-2px",
              height: "1.5px",
              width: "var(--underline-width)",
              backgroundColor: "#7c0000ff",
              transition: "width 0.3s ease",
            }}
          ></span>
        </span>
      </a>
    </div>
  ))}
</div>




      </div>
    </section>
  );
}
