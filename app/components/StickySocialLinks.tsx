"use client";

import { motion } from "framer-motion";
import { Linkedin, Github, Mail } from "lucide-react";

const StickySocialLinks = () => {
  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/adrian-shala-a80ba5198/",
      color: "hover:text-blue-400",
      bgColor: "hover:bg-blue-500/20",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/adrianxshala",
      color: "hover:text-gray-300",
      bgColor: "hover:bg-gray-500/20",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:adrianxshalax@gmail.com",
      color: "hover:text-red-400",
      bgColor: "hover:bg-red-500/20",
    },
  ];

  return (
    <motion.div
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <div
        className="flex items-center gap-2 px-2 py-2 rounded-full border border-white/20 shadow-lg neon-glow"
        style={{
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          backgroundColor: "rgba(255, 255, 255, 0.08)",
        }}
      >
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${social.bgColor} border border-primary/20 hover:border-primary/50`}
            style={{
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
            }}
            aria-label={social.label}
            whileHover={{ scale: 1.15, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
          >
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <social.icon
              className={`w-4 h-4 text-primary ${social.color} transition-colors duration-300 relative z-10`}
            />
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default StickySocialLinks;
