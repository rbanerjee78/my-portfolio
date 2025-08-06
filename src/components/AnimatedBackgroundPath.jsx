import React, { useMemo } from "react";

function getRandomPath(width = 800, height = 200, segments = 4) {
  const step = width / segments;
  let path = `M 0,${height / 2}`;
  for (let i = 1; i <= segments; i++) {
    const cx = step * i - step / 2;
    const cy = Math.random() * height;
    const x = step * i;
    const y = Math.random() * height;
    path += ` Q ${cx},${cy} ${x},${y}`;
  }
  return path;
}

export default function AnimatedBackgroundPath() {
  const pathD = useMemo(() => getRandomPath(800, 200, 6), []);

  return (
    <svg
      viewBox="0 0 800 200"
      preserveAspectRatio="none"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <path
        d={pathD}
        fill="none"
        stroke="#10b981"
        strokeWidth="3"
        strokeDasharray="1000"
        strokeDashoffset="1000"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="1000"
          to="0"
          dur="5s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );
}
