"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface AIScanTextProps {
  text: string;
  className?: string;
  scanColor?: string;
}

export const AIScanText = ({
  text,
  className = "",
  scanColor = "hsl(187 100% 50%)",
}: AIScanTextProps) => {
  const [displayText, setDisplayText] = useState("");
  const [showScan, setShowScan] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayText(text.substring(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => setShowScan(true), 200);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className="relative inline-block">
      <span className={className}>{displayText}</span>
      {showScan && displayText.length === text.length && (
        <motion.div
          className="absolute inset-0"
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 0.5 }}
          style={{
            background: `linear-gradient(90deg, transparent, ${scanColor}, transparent)`,
            mixBlendMode: "screen",
          }}
        />
      )}
      <motion.div
        className="absolute right-0 top-0 w-1 h-full bg-primary opacity-0"
        animate={
          displayText.length === text.length && showScan
            ? { opacity: 1 }
            : { opacity: 0 }
        }
        transition={{ duration: 0.5 }}
      />
    </div>
  );
};





