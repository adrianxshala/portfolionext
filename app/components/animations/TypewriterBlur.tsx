"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface TypewriterBlurProps {
  text: string;
  className?: string;
  speed?: number;
}

export const TypewriterBlur = ({
  text,
  className = "",
  speed = 30,
}: TypewriterBlurProps) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <motion.div
      className={className}
      initial={{ filter: "blur(10px)" }}
      animate={{
        filter: currentIndex === text.length ? "blur(0px)" : "blur(2px)",
      }}
      transition={{ duration: 0.3 }}
    >
      {displayText}
      <motion.span
        className="inline-block w-0.5 h-full bg-primary ml-1"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      />
    </motion.div>
  );
};





