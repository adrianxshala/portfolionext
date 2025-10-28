"use client";

import { motion } from "framer-motion";

interface BlurRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export const BlurReveal = ({
  text,
  className = "",
  delay = 0,
}: BlurRevealProps) => {
  return (
    <motion.div
      className={className}
      initial={{ filter: "blur(20px)", opacity: 0 }}
      animate={{ filter: "blur(0px)", opacity: 1 }}
      transition={{ duration: 1, delay, ease: "easeOut" }}
    >
      {text}
    </motion.div>
  );
};





