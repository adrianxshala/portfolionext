"use client";

import { motion } from "framer-motion";

interface WaveTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export const WaveText = ({
  text,
  className = "",
  delay = 0,
}: WaveTextProps) => {
  const chars = text.split("");

  return (
    <span className={className}>
      {chars.map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: delay + i * 0.05,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};





