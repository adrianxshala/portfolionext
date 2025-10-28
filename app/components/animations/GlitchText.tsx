"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface GlitchTextProps {
  text: string;
  className?: string;
  glitchInterval?: number;
}

export const GlitchText = ({
  text,
  className = "",
  glitchInterval = 3000,
}: GlitchTextProps) => {
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 100);
    }, glitchInterval);

    return () => clearInterval(interval);
  }, [glitchInterval]);

  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.8 }}
    >
      <motion.span
        animate={glitch ? { x: [0, 2, -2, 0] } : {}}
        transition={{ duration: 0.1 }}
        className="relative z-10"
      >
        {text}
      </motion.span>
      {glitch && (
        <>
          <span
            className="absolute inset-0 text-primary opacity-80"
            style={{ clipPath: "inset(0 50% 0 0)" }}
          >
            {text}
          </span>
          <span
            className="absolute inset-0 text-secondary opacity-80"
            style={{ clipPath: "inset(0 0 0 50%)" }}
          >
            {text}
          </span>
        </>
      )}
    </motion.div>
  );
};
