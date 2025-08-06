import React, { useMemo, useRef, useEffect, useState } from "react";

const generateNodes = (count, width, height) => {
  return Array.from({ length: count }).map(() => ({
    x: Math.random() * width,
    y: Math.random() * height,
    color: `hsl(${Math.floor(Math.random() * 360)}, 80%, 70%)`,
  }));
};

export default function BlurredNetworkBackground() {
  const width = 1000;
  const height = 400;
  const wrapperRef = useRef(null);
  const nodes = useMemo(() => generateNodes(14, width, height), []);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  const connections = useMemo(() => {
    const lines = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (Math.random() > 0.7) {
          lines.push([nodes[i], nodes[j]]);
        }
      }
    }
    return lines;
  }, [nodes]);

  // Mouse-based offset
  useEffect(() => {
    const section = wrapperRef.current?.parentElement;
    if (!section) return;

    const handleMouseMove = (e) => {
      const rect = section.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      setMouseOffset({ x: x * 20, y: y * 20 });
    };

    section.addEventListener("mousemove", handleMouseMove);
    return () => section.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Self-moving idle animation
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    let frame = 0;
    const animate = () => {
      const idleX = Math.sin(frame / 100) * 40;
      const idleY = Math.cos(frame / 120) * 40;
      const combinedX = mouseOffset.x + idleX;
      const combinedY = mouseOffset.y + idleY;

      wrapper.style.transform = `translate(${combinedX}px, ${combinedY}px)`;
      frame++;
      requestAnimationFrame(animate);
    };
    animate();
  }, [mouseOffset]);

  return (
    <div
      ref={wrapperRef}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <svg
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
        style={{
          width: "100%",
          height: "70%",
          filter: "blur(2px)",
          opacity: 0.8,
        }}
      >
        {/* Lines */}
        {connections.map(([a, b], idx) => (
          <line
            key={`line-${idx}`}
            x1={a.x}
            y1={a.y}
            x2={b.x}
            y2={b.y}
            stroke={a.color}
            strokeWidth="0.5"
            strokeOpacity="1"
          />
        ))}
        {/* Dots */}
        {nodes.map((n, i) => (
          <circle
            key={`node-${i}`}
            cx={n.x}
            cy={n.y}
            r="8"
            fill={n.color}
            opacity="1"
          />
        ))}
      </svg>
    </div>
  );
}
