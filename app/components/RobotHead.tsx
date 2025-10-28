"use client";

import { useState, useEffect } from "react";

const RobotHead = () => {
  const [isClient, setIsClient] = useState(false);
  const [positions, setPositions] = useState<
    Array<{ left: number; top: number; delay: number }>
  >([]);

  useEffect(() => {
    setIsClient(true);
    // Generate positions once on client
    const pos = [...Array(15)].map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 2,
    }));
    setPositions(pos);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Neural Network Nodes */}
      <div className="absolute inset-0">
        {isClient &&
          positions.map((pos, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 rounded-full bg-primary animate-pulse-glow"
              style={{
                left: `${pos.left}%`,
                top: `${pos.top}%`,
                animationDelay: `${pos.delay}s`,
                boxShadow: "var(--glow-cyan)",
              }}
            />
          ))}
      </div>

      {/* Floating Code Snippets */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          "AI.learn()",
          "neural.process()",
          "model.train()",
          "data.analyze()",
        ].map((code, i) => (
          <div
            key={i}
            className="absolute text-primary font-mono text-sm opacity-60 animate-float-up"
            style={{
              left: `${20 + i * 20}%`,
              animationDelay: `${i * 3}s`,
            }}
          >
            {code}
          </div>
        ))}
      </div>

      {/* Robot Head */}
      <div className="relative z-10 animate-float">
        <div className="w-64 h-80 glass-card border-2 border-primary/50 rounded-3xl p-8 neon-glow">
          {/* Eyes */}
          <div className="flex justify-around mb-8 mt-16">
            <div className="w-12 h-12 rounded-full bg-primary animate-blink neon-glow-strong" />
            <div
              className="w-12 h-12 rounded-full bg-primary animate-blink neon-glow-strong"
              style={{ animationDelay: "0.1s" }}
            />
          </div>

          {/* Mouth - animated width */}
          <div
            className="mx-auto mt-12 h-2 bg-primary rounded-full transition-all duration-700"
            style={{ width: "60%", boxShadow: "var(--glow-cyan)" }}
          />

          {/* Antenna */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-1 h-8 bg-primary/50">
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary animate-pulse-glow neon-glow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RobotHead;
