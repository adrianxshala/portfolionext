"use client";

import { ExternalLink, Github, Sparkles, Bot } from "lucide-react";
import { Button } from "./ui/button";
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
      "Voice assistant using react and openai api and voice recognition and text to speech",
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
      className="relative py-20 px-4 md:px-8 lg:px-16 overflow-hidden"
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
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-4"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="w-6 h-6 text-primary" />
            <span className="text-primary font-orbitron text-sm tracking-wider">
              PORTFOLIO
            </span>
            <Sparkles className="w-6 h-6 text-primary" />
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl font-extrabold text-futuristic mb-6"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-foreground/70 font-exo max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Showcasing innovative solutions built with cutting-edge technologies
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="relative p-5 rounded-xl bg-gradient-to-br from-background/80 to-background/50 backdrop-blur-xl border border-primary/30 hover:border-primary/60 transition-all duration-500 h-full shadow-lg hover:shadow-2xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
              >
                <div className="mb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg`}
                    >
                      <Bot className="text-white w-6 h-6" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-orbitron text-primary bg-primary/15 px-2 py-1 rounded-full border border-primary/20">
                        {project.category}
                      </span>
                      <span className="text-xs font-orbitron text-green-400 bg-green-400/15 px-2 py-1 rounded-full border border-green-400/20">
                        {project.status}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-foreground font-orbitron mb-2">
                    {project.title}
                  </h3>

                  <p className="text-sm text-foreground/80 font-exo leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex gap-2">
                  {project.demoUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 font-orbitron text-xs hover:bg-primary hover:text-background transition-all duration-300 border-primary/30 hover:border-primary"
                      onClick={() => window.open(project.demoUrl, "_blank")}
                    >
                      <ExternalLink className="w-3 h-3 mr-2" />
                      View Live
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 font-orbitron text-xs hover:bg-primary hover:text-background transition-all duration-300 border-primary/30 hover:border-primary"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github className="w-3 h-3 mr-2" />
                      Code
                    </Button>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
