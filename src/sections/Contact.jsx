import { useEffect, useRef } from "react";
import anime from "animejs";

export default function Contact() {
  const containerRef = useRef(null);
  const elementsRef = useRef([]);

  useEffect(() => {
    if (elementsRef.current.length) {
      anime({
        targets: elementsRef.current,
        translateY: [40, 0],
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 800,
        delay: anime.stagger(150),
      });
    }
  }, []);

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
          ref={(el) => (elementsRef.current[0] = el)}
          style={{ fontSize: "2.5rem", marginBottom: "20px" }}
        >
          Contact Me
        </h1>

        <p
          ref={(el) => (elementsRef.current[1] = el)}
          style={{ fontSize: "1.1rem", marginBottom: "10px" }}
        >
          Feel free to reach out for collaborations, freelance work, or just to say hello!
        </p>

        <div
          style={{ marginTop: "30px", lineHeight: "2" }}
          ref={(el) => (elementsRef.current[2] = el)}
        >
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:rahulorama@gmail.com">rahulorama@gmail.com</a>
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+918920965371">+91 89209 65371</a>
          </p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://linkedin.com/in/uidevx"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/uidevx
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
