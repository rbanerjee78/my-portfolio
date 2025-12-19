import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";


const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const links = ["work", "about", "skills", "contact"];

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);
 
  const scrollToSection = (id) => {
    const section = document.getElementById(id.replace(/\s+/g, "-"));
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "60px",
        background: "rgba(255, 255, 255, 0.15)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        zIndex: 1000,
        pointerEvents: "none", // prevent background interference
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 1rem",
          pointerEvents: "auto", // allow interactions inside nav
        }}
      >
        <div style={{ fontWeight: "bold", fontSize: "1.25rem" }}><HashLink smooth to="#home" style={{textDecoration:"none", color:"#000"}}>Rahul Banerjee Portfolio</HashLink></div>

        {isMobile ? (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "transparent",
              border: "none",
              fontSize: "1.5rem",
              cursor: "pointer",
              color: "#111",
            }}
          >
            ☰
          </button>
        ) : (
          <div style={{ display: "flex", gap: "2rem" }}>
            <a  className="nav-link"
 href="https://drive.google.com/file/d/1xxDcNpiFwfkYnAXY9wciB5BPvu-CUVk4/view?usp=drive_link" target="_blank">Download  Resume</a>

            {links.map((link) => (
              
              <a
                key={link}
                href={`#${link}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link);
                }}
                className="nav-link"

              >
                {link}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && isMobile && (
        <div
          style={{
            position: "absolute",
            top: "60px",
            left: 0,
            right: 0,
            background: "rgba(255,255,255,0.9)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",           
            padding: "1rem 0",
            pointerEvents: "auto",
            height: "calc(100vh - 60px)",
          }}
        >
          {links.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link);
              }}
              style={{
                display: "block",
                padding: "0.75rem 1.5rem",
                textAlign: "center",
                textDecoration: "none",
                color: "#111",
                fontWeight: 500,
                fontSize: "2rem",
                textTransform: "capitalize",
              }}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
