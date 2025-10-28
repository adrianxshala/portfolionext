"use client";

import { useState, useEffect } from "react";
import {
  Globe,
  Cpu,
  Layers,
  Database,
  Brain,
  Code,
  Sparkles,
  Star,
  CircuitBoard,
  Network,
} from "lucide-react";
import { motion } from "framer-motion";
import { WaveText } from "./animations";

const skills = [
  {
    icon: "⚛️",
    name: "React",
    category: "Frontend",
    color: "from-blue-400 to-cyan-400",
    iconComponent: Globe,
    description: "Building dynamic user interfaces",
    years: "3+ years",
  },
  {
    icon: "🟢",
    name: "Node.js",
    category: "Backend",
    color: "from-green-400 to-emerald-400",
    iconComponent: Cpu,
    description: "Server-side JavaScript runtime",
    years: "2+ years",
  },
  {
    icon: "▲",
    name: "Next.js",
    category: "Framework",
    color: "from-gray-400 to-gray-600",
    iconComponent: Layers,
    description: "Full-stack React framework",
    years: "2+ years",
  },
  {
    icon: "🍃",
    name: "MongoDB",
    category: "Database",
    color: "from-green-500 to-green-600",
    iconComponent: Database,
    description: "NoSQL document database",
    years: "2+ years",
  },
  {
    icon: "⚡",
    name: "Supabase",
    category: "Backend",
    color: "from-emerald-400 to-green-500",
    iconComponent: Database,
    description: "Open source Firebase alternative",
    years: "1+ years",
  },
  {
    icon: "🤖",
    name: "OpenAI",
    category: "AI/ML",
    color: "from-purple-400 to-pink-400",
    iconComponent: Brain,
    description: "AI integration and automation",
    years: "1+ years",
  },
  {
    icon: "🔗",
    name: "LangChain",
    category: "AI/ML",
    color: "from-orange-400 to-red-400",
    iconComponent: Code,
    description: "LLM application framework",
    years: "1+ years",
  },
  {
    icon: "🎨",
    name: "Tailwind CSS",
    category: "Styling",
    color: "from-cyan-400 to-blue-500",
    iconComponent: Sparkles,
    description: "Utility-first CSS framework",
    years: "3+ years",
  },
];

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const categories = [
    { name: "All", icon: CircuitBoard, color: "from-cyan-400 to-blue-500" },
    { name: "Frontend", icon: Globe, color: "from-blue-400 to-cyan-400" },
    { name: "Backend", icon: Cpu, color: "from-green-400 to-emerald-400" },
    { name: "AI/ML", icon: Brain, color: "from-purple-400 to-pink-400" },
    {
      name: "Database",
      icon: Database,
      color: "from-emerald-400 to-green-500",
    },
    { name: "Styling", icon: Sparkles, color: "from-cyan-400 to-blue-500" },
  ];

  const filteredSkills = selectedCategory
    ? skills.filter((skill) => skill.category === selectedCategory)
    : skills;

  return (
    <motion.section
      id="skills"
      className="relative min-h-screen py-20 px-4 md:px-8 lg:px-16 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Hexagons */}
        {isClient &&
          [...Array(12)].map((_, i) => {
            // Use deterministic values based on index to prevent hydration mismatch
            const seed = i * 0.3;
            const left = (Math.sin(seed) * 0.5 + 0.5) * 100;
            const top = (Math.cos(seed) * 0.5 + 0.5) * 100;
            const duration = 4 + (Math.sin(seed * 2) * 0.5 + 0.5) * 2;
            const delay = (Math.cos(seed * 3) * 0.5 + 0.5) * 2;

            return (
              <motion.div
                key={i}
                className="absolute w-4 h-4 border border-primary/20 rotate-45"
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  rotate: [45, 225, 45],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration,
                  repeat: Infinity,
                  delay,
                }}
              />
            );
          })}

        {/* Circuit Pattern */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 opacity-10"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <CircuitBoard className="w-full h-full text-primary" />
        </motion.div>

        <motion.div
          className="absolute bottom-20 right-10 w-24 h-24 opacity-10"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          <Network className="w-full h-full text-primary" />
        </motion.div>

        {/* Data Stream Lines */}
        <motion.div
          className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
          animate={{ x: [-100, 100] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
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
              TECH ARSENAL
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
            Skills & Expertise
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-foreground/70 font-exo max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Mastering cutting-edge technologies to build the future of web
            development
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.name}
              onClick={() =>
                setSelectedCategory(
                  category.name === "All" ? null : category.name
                )
              }
              className={`px-6 py-3 rounded-full font-orbitron text-sm transition-all duration-300 ${
                selectedCategory === category.name ||
                (category.name === "All" && !selectedCategory)
                  ? "bg-primary text-background shadow-lg shadow-primary/30"
                  : "bg-background/50 text-foreground/70 hover:text-primary hover:bg-primary/10 border border-primary/20"
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <category.icon className="w-4 h-4 inline mr-2" />
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <motion.div
                className="relative p-6 rounded-2xl bg-gradient-to-br from-background/60 to-background/30 backdrop-blur-2xl border border-primary/30 hover:border-primary/60 transition-all duration-500 h-full overflow-hidden"
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: "0 20px 40px rgba(0, 255, 255, 0.15)",
                }}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Gradient Morph Effect */}
                <motion.div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 animate-liquid-gradient opacity-50" />

                {/* AI Particle Pulse Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent animate-ai-particle-pulse opacity-30" />

                {/* Shimmer on Hover */}
                <div className="absolute inset-0 animate-shimmer-sweep pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Skill Icon */}
                <motion.div
                  className="relative mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-2xl mb-3 shadow-lg animate-magnetic-pull`}
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    whileHover={{
                      scale: 1.15,
                      rotate: [0, 5, -5, 0],
                    }}
                  >
                    <motion.div
                      whileHover={{ rotate: [0, 360], scale: 1.1 }}
                      transition={{ duration: 0.8 }}
                    >
                      <skill.iconComponent className="w-8 h-8 text-white" />
                    </motion.div>
                  </motion.div>

                  {/* Floating Elements */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center"
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  >
                    <Star className="w-3 h-3 text-primary" />
                  </motion.div>
                </motion.div>

                {/* Skill Info */}
                <div className="space-y-3">
                  <div>
                    <h3 className="text-xl font-bold text-foreground font-orbitron mb-1">
                      <WaveText text={skill.name} delay={index * 0.05} />
                    </h3>
                    <p className="text-sm text-foreground/60 font-exo">
                      {skill.description}
                    </p>
                  </div>

                  {/* Experience */}
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-foreground/60 font-exo">
                      Experience
                    </span>
                    <span className="text-primary font-orbitron font-bold">
                      {skill.years}
                    </span>
                  </div>
                </div>

                {/* Hover Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />

                {/* Corner Glow */}
                <motion.div
                  className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-2xl"
                  animate={{ opacity: [0.3, 0.8, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
