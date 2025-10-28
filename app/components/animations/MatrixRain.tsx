"use client";

import { useState, useEffect } from "react";

interface MatrixRainProps {
  className?: string;
  count?: number;
}

export const MatrixRain = ({ className = "", count = 50 }: MatrixRainProps) => {
  const [chars, setChars] = useState<
    Array<{ id: number; left: string; delay: number; speed: number }>
  >([]);

  useEffect(() => {
    const newChars = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 3,
      speed: 2 + Math.random() * 3,
    }));
    setChars(newChars);
  }, [count]);

  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
    >
      {chars.map((char) => (
        <div
          key={char.id}
          className="absolute text-xs font-mono text-primary/30"
          style={{
            left: char.left,
            animation: `matrix-rain ${char.speed}s linear ${char.delay}s infinite`,
          }}
        >
          {Math.random() > 0.5 ? "1" : "0"}
        </div>
      ))}
    </div>
  );
};





