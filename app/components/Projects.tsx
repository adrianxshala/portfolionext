"use client";

import {
  ExternalLink,
  Github,
  Sparkles,
  Bot,
  ArrowUpRight,
  Rocket,
} from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Adrian Assistant AI",
    description:
      "Adrian AI Assistant is a smart, personalized AI tool designed to help users automate tasks, answer questions, and streamline workflows using natural language",
    tags: ["Next.js", "OpenAI", "TypeScript"],
    category: "AI/ML",
    status: "Live",
    gradient: "from-blue-500 to-purple-600",
    githubUrl: "https://github.com/adrianxshala/Ai-Assitent",
    demoUrl: "https://ai-assitent.vercel.app/",
  },
  {
    title: "Ai Voice Assistant",
    description:
      "Voice assistant using next js, superbase and vercel ai sdk and voice recognition and text to speech",
    tags: ["React", "AI", "Vector DB", "NLP"],
    category: "AI/ML",
    status: "Live",
    gradient: "from-green-500 to-blue-600",
    githubUrl: "https://github.com/adrianxshala/Ai-voice",
    demoUrl: "https://voice-roan-eta.vercel.app/",
  },
  {
    title: "Futuristic Website",
    description:
      "A futuristic website with a modern design and a smooth user experience.",
    tags: ["Next.js", "MongoDB", "AI", "D3.js"],
    category: "Data Science",
    status: "Live",
    gradient: "from-purple-500 to-pink-600",
    githubUrl: "https://github.com/adrianxshala/Futuristic-Website",
    demoUrl: "https://robo-palette-folio.vercel.app/",
  },
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="relative py-12 md:py-20 px-4 sm:px-6 md:px-8 lg:px-16 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Circuit Pattern */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 opacity-10"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
            <rect
              x="10"
              y="10"
              width="80"
              height="80"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              opacity="0.3"
            />
            <circle cx="50" cy="30" r="2" fill="currentColor" opacity="0.5" />
            <circle cx="50" cy="70" r="2" fill="currentColor" opacity="0.5" />
            <line
              x1="50"
              y1="30"
              x2="50"
              y2="70"
              stroke="currentColor"
              strokeWidth="0.5"
              opacity="0.3"
            />
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-20 right-10 w-24 h-24 opacity-10"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
            <rect
              x="10"
              y="10"
              width="80"
              height="80"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              opacity="0.3"
            />
            <circle cx="30" cy="30" r="2" fill="currentColor" opacity="0.5" />
            <circle cx="30" cy="70" r="2" fill="currentColor" opacity="0.5" />
            <circle cx="70" cy="50" r="2" fill="currentColor" opacity="0.5" />
          </svg>
        </motion.div>

        {/* Horizontal Data Stream Line */}
        <motion.div
          className="absolute top-1/2 left-0 w-full h-px bg-linear-to-r from-transparent via-primary/30 to-transparent"
          animate={{ x: [-100, 100] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />

        {/* Data Stream Lines */}
        <motion.div
          className="absolute top-40 left-1/4 w-px h-32 bg-gradient-to-b from-primary/60 to-transparent"
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        />
        <motion.div
          className="absolute bottom-40 right-1/4 w-px h-28 bg-gradient-to-t from-secondary/60 to-transparent"
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 left-20 w-32 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
        />

        {/* Holographic Grid */}
        <motion.div
          className="absolute inset-0 opacity-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 2 }}
        >
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(hsl(187 100% 50% / 0.1) 1px, transparent 1px),
                linear-gradient(90deg, hsl(187 100% 50% / 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
          />
        </motion.div>

        {/* Floating Orbs */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, 30, -20, 10, 0],
            y: [0, -40, 20, -10, 0],
            scale: [1, 1.3, 0.8, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-gradient-to-br from-secondary/10 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, -25, 15, -10, 0],
            y: [0, 35, -25, 15, 0],
            scale: [1, 0.7, 1.5, 0.9, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 px-4">
          <div className="inline-flex items-center gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-primary font-orbitron text-sm tracking-wider">
              PORTFOLIO
            </span>
            <Sparkles className="w-5 h-5 text-primary" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-futuristic mb-3">
            Featured Projects
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-foreground/70 font-exo max-w-2xl mx-auto">
            Showcasing innovative solutions built with cutting-edge technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto px-4 sm:px-0">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative p-5 md:p-6 rounded-2xl bg-gradient-to-br from-background/70 to-background/40 backdrop-blur-xl border border-primary/20 hover:border-primary/50 transition-all duration-300 h-full shadow-lg hover:shadow-xl hover:shadow-primary/10 cursor-pointer overflow-hidden"
              onClick={() =>
                project.demoUrl && window.open(project.demoUrl, "_blank")
              }
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Animated Background Gradient */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear",
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              />

              {/* Floating Icon */}
              <div className="flex flex-col h-full relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <motion.div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg relative overflow-hidden`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
                    />
                    <Bot className="text-white w-7 h-7 relative z-10" />
                  </motion.div>

                  {/* Animated Arrow Icon */}
                  <motion.div
                    className="text-primary/60 group-hover:text-primary"
                    whileHover={{ scale: 1.2, rotate: 45 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </motion.div>
                </div>

                {/* Title with Animation */}
                <motion.h3
                  className="text-lg md:text-xl font-bold text-foreground font-orbitron mb-3 group-hover:text-primary transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  {project.title}
                </motion.h3>

                {/* Description */}
                <p className="text-sm text-foreground/70 font-exo leading-relaxed mb-4 flex-1 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags with Hover Animation */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      className="text-xs font-exo text-foreground/50 bg-background/50 px-2 py-0.5 rounded-md border border-primary/10"
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "rgba(0, 255, 255, 0.1)",
                      }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* Interactive Icons Row */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-primary/10">
                  <div className="flex items-center gap-3">
                    {project.demoUrl && (
                      <motion.a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-primary/60 hover:text-primary"
                        whileHover={{ scale: 1.2, rotate: -15 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                    )}
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-primary/60 hover:text-primary"
                        whileHover={{ scale: 1.2, rotate: 15 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github className="w-4 h-4" />
                      </motion.a>
                    )}
                  </div>

                  {/* Animated Rocket Icon */}
                  <motion.div
                    className="text-primary/40"
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Rocket className="w-4 h-4" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
