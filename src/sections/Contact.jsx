import { useEffect, useRef } from "react";
import anime from "animejs";

export default function Contact() {
  const containerRef = useRef(null);
  const elementsRef = useRef([]);
  const hasAnimated = useRef(false); // To prevent re-triggering instantly again

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

          // Reset animation after a delay to allow re-triggering
          setTimeout(() => {
            elementsRef.current.forEach((el) => {
              if (el) {
                el.style.opacity = 1;
               // el.style.transform = "scale(0.3) translateY(40px)";
              }
            });
            hasAnimated.current = false;
          }, 2000); // Retrigger cooldown (optional)
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
            lineHeight: "2",
            opacity: 0,
          }}
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
