"use client";

import { motion } from "framer-motion";
import {
  Code,
  Brain,
  Zap,
  Rocket,
  Sparkles,
  Target,
  Lightbulb,
} from "lucide-react";

const About = () => {
  const capabilities = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description:
        "Design and develop complete applications from scratch using modern technologies",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Brain,
      title: "AI Integration",
      description:
        "Integrate AI tools like LangChain, OpenAI API, and Supabase Functions",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Zap,
      title: "Workflow Automation",
      description:
        "Automate processes and create intelligent user interactions",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Rocket,
      title: "Modern Architecture",
      description:
        "Build scalable systems with clean code and modern UI patterns",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <motion.section
      id="about"
      className="py-20 md:py-32 px-4 md:px-6 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Enhanced AI-Style Floating Particles */}
        {[...Array(40)].map((_, i) => {
          const seed = i * 0.25;
          const left =
            Math.round((Math.sin(seed) * 0.5 + 0.5) * 100 * 10000) / 10000;
          const top =
            Math.round((Math.cos(seed) * 0.5 + 0.5) * 100 * 10000) / 10000;
          const size =
            Math.round((2 + (Math.sin(seed * 1.5) * 0.5 + 0.5) * 4) * 10000) /
            10000;
          const color =
            i % 3 === 0
              ? "bg-primary"
              : i % 3 === 1
              ? "bg-secondary"
              : "bg-accent";

          return (
            <motion.div
              key={i}
              className={`absolute ${color} rounded-full blur-[1px]`}
              style={{
                left: `${left}%`,
                top: `${top}%`,
                width: `${size}px`,
                height: `${size}px`,
              }}
              initial={{
                opacity: 0.25,
                scale: 1,
                x: 0,
                y: 0,
              }}
              animate={{
                opacity: [0.25, 0.5, 0.75, 0.5, 0.25],
                scale: [0.95, 1, 1.05, 1],
                x: [
                  0,
                  Math.round(Math.sin(seed * 2) * 80),
                  Math.round(-Math.sin(seed * 2) * 60),
                  0,
                ],
                y: [
                  0,
                  Math.round(-Math.cos(seed * 2) * 80),
                  Math.round(Math.cos(seed * 2) * 60),
                  0,
                ],
                rotate: [0, 20, 0],
              }}
              transition={{
                duration:
                  Math.round(
                    (10 + (Math.sin(seed * 3) * 0.5 + 0.5) * 6) * 100
                  ) / 100,
                repeat: Infinity,
                repeatType: "mirror",
                delay:
                  Math.round((Math.cos(seed * 4) * 0.5 + 0.5) * 3 * 100) / 100,
                ease: "easeInOut",
              }}
            />
          );
        })}

        {/* AI Neural Network Connections */}
        {[...Array(15)].map((_, i) => {
          const seed = i * 0.4;
          const startX =
            Math.round((Math.sin(seed) * 0.5 + 0.5) * 100 * 10000) / 10000;
          const startY =
            Math.round((Math.cos(seed) * 0.5 + 0.5) * 100 * 10000) / 10000;
          const lineWidth =
            Math.round((20 + (Math.sin(seed * 2) * 0.5 + 0.5) * 30) * 10000) /
            10000;
          const rotation = Math.round(Math.sin(seed) * 45 * 10000) / 10000;

          return (
            <motion.div
              key={`connection-${i}`}
              className="absolute w-px h-px bg-gradient-to-r from-primary/60 to-transparent pointer-events-none"
              style={{
                left: `${startX}%`,
                top: `${startY}%`,
                width: `${lineWidth}px`,
                height: "1px",
                transform: `rotate(${rotation}deg)`,
              }}
              animate={{
                opacity: [0.15, 0.5, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "mirror",
                delay: seed,
                ease: "easeInOut",
              }}
            />
          );
        })}

        {/* Enhanced Data Stream Lines with Glow */}
        <motion.div
          className="absolute top-20 left-1/4 w-px h-32 bg-gradient-to-b from-primary via-cyan-500 to-transparent blur-[2px]"
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{
            scaleY: [0.2, 1, 0.8, 0.2],
            opacity: [0.2, 0.7, 0.4, 0.2],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-1/4 w-px h-28 bg-gradient-to-t from-secondary via-purple-500 to-transparent blur-[2px]"
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{
            scaleY: [0.2, 1, 0.8, 0.2],
            opacity: [0.2, 0.7, 0.4, 0.2],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "mirror",
            delay: 0.5,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-px h-24 bg-gradient-to-b from-accent via-pink-500 to-transparent blur-[1.5px]"
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{
            scaleY: [0.2, 1, 0.7, 0.2],
            opacity: [0.2, 0.6, 0.35, 0.2],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatType: "mirror",
            delay: 1.2,
            ease: "easeInOut",
          }}
        />

        {/* Enhanced Holographic Grid with Pulse */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.03, 0.08, 0.05, 0.06, 0.03],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(hsl(187 100% 50% / 0.1) 1px, transparent 1px),
                linear-gradient(90deg, hsl(187 100% 50% / 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
            animate={{
              backgroundPosition: ["0px 0px", "40px 40px"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>

        {/* Floating Orbs */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, 30, -20, 10, 0],
            y: [0, -40, 20, -10, 0],
            scale: [1, 1.2, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-gradient-to-br from-secondary/20 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, -25, 15, -10, 0],
            y: [0, 35, -25, 15, 0],
            scale: [1, 0.85, 1.2, 0.95, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Modern Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-6"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.5,
              type: "spring",
              stiffness: 200,
            }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.3, 1],
              }}
              transition={{
                rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-primary" />
            </motion.div>
            <motion.span
              className="text-primary font-semibold text-base md:text-lg tracking-wider font-orbitron"
              animate={{
                textShadow: [
                  "0 0 10px currentColor",
                  "0 0 20px currentColor",
                  "0 0 10px currentColor",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              ABOUT
            </motion.span>
            <motion.div
              animate={{
                rotate: -360,
                scale: [1, 1.3, 1],
              }}
              transition={{
                rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                scale: {
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.3,
                  ease: "easeInOut",
                },
              }}
            >
              <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-primary" />
            </motion.div>
          </motion.div>
          <motion.h2
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-futuristic mb-6"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            viewport={{ once: true }}
          >
            The Developer Behind the Code
          </motion.h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            className="space-y-6 md:space-y-8"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="glass-card p-6 md:p-8 rounded-3xl neon-glow relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300 animate-glass-refract backdrop-blur-xl bg-white/5 border border-white/10"
              initial={{ y: 30, opacity: 0, rotateX: -10 }}
              whileInView={{ y: 0, opacity: 1, rotateX: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Liquid Morph Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-transparent rounded-3xl animate-liquid-morph opacity-50"
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              />
              <motion.div className="absolute inset-0 bg-gradient-to-tl from-cyan-500/10 via-purple-500/10 to-transparent rounded-3xl animate-liquid-gradient opacity-50" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/5 rounded-3xl"
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              />
              {/* Shimmer Sweep Effect */}
              <div className="absolute inset-0 animate-shimmer-sweep pointer-events-none opacity-30" />
              <div className="relative z-10">
                <motion.div
                  className="flex items-center gap-3 mb-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Target className="w-6 h-6 text-primary" />
                  </motion.div>
                  <h3 className="text-xl md:text-2xl font-bold text-primary font-orbitron">
                    Mission Statement
                  </h3>
                </motion.div>
                <p className="text-base md:text-lg leading-relaxed text-foreground/80 font-exo">
                  I'm a Full Stack Developer specialized in the MERN Stack with
                  a growing focus on AI-powered applications. I build modern,
                  data-driven web apps that combine the power of Next.js,
                  Supabase, and Vercel AI SDK to deliver smart and automated
                  user experiences.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="glass-card p-6 md:p-8 rounded-3xl neon-glow relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300 animate-glass-refract backdrop-blur-xl bg-white/5 border border-white/10"
              initial={{ y: 30, opacity: 0, rotateX: -10 }}
              whileInView={{ y: 0, opacity: 1, rotateX: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Liquid Morph Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-primary/10 to-transparent rounded-3xl animate-liquid-morph opacity-50"
                animate={{
                  backgroundPosition: ["100% 100%", "0% 0%"],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              />
              <motion.div className="absolute inset-0 bg-gradient-to-tl from-purple-500/10 via-cyan-500/10 to-transparent rounded-3xl animate-liquid-gradient opacity-50" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-primary/5 rounded-3xl"
                animate={{
                  backgroundPosition: ["100% 100%", "0% 0%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              />
              {/* Shimmer Sweep Effect */}
              <div className="absolute inset-0 animate-shimmer-sweep pointer-events-none opacity-30" />
              <div className="relative z-10">
                <motion.div
                  className="flex items-center gap-3 mb-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    animate={{
                      rotate: [0, -15, 15, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Lightbulb className="w-6 h-6 text-secondary" />
                  </motion.div>
                  <h3 className="text-xl md:text-2xl font-bold text-secondary font-orbitron">
                    My Approach
                  </h3>
                </motion.div>
                <p className="text-base md:text-lg leading-relaxed text-foreground/80 font-exo">
                  Even without corporate experience, I've built several personal
                  projects that showcase my ability to push web development
                  forward — combining clean architecture, modern UI, and real AI
                  functionality.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Capabilities */}
          <motion.div
            className="space-y-6"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-2xl md:text-3xl font-bold text-primary text-center mb-8 font-orbitron"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              viewport={{ once: true }}
            >
              Core Capabilities
            </motion.h3>

            <div className="grid gap-4 md:gap-6">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={capability.title}
                  className="glass-card p-4 md:p-6 rounded-2xl relative overflow-hidden group animate-glass-refract"
                  initial={{ y: 50, opacity: 0, scale: 0.9 }}
                  whileInView={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: 1.4 + index * 0.1,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.3, type: "spring" },
                  }}
                >
                  {/* AI Particle Pulse Effect */}
                  <motion.div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 rounded-2xl animate-ai-particle-pulse opacity-30" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 rounded-2xl"
                    animate={{
                      backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{
                      backgroundSize: "200% 200%",
                    }}
                  />
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 animate-shimmer-sweep pointer-events-none opacity-20" />

                  <div className="relative z-10 flex items-start gap-4">
                    <motion.div
                      className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${capability.color} flex items-center justify-center flex-shrink-0 shadow-lg animate-magnetic-pull`}
                      whileHover={{
                        rotate: [0, 5, -5, 0],
                        scale: 1.15,
                      }}
                      animate={{
                        boxShadow: [
                          "0 0 0px rgba(0,0,0,0)",
                          "0 0 20px currentColor",
                          "0 0 0px rgba(0,0,0,0)",
                        ],
                      }}
                      transition={{
                        boxShadow: {
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                      }}
                    >
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.6 }}
                        className="animate-micro-bounce"
                      >
                        <capability.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                      </motion.div>
                    </motion.div>

                    <div className="flex-1">
                      <motion.h4
                        className="text-lg md:text-xl font-bold text-primary mb-2 font-orbitron"
                        whileHover={{
                          scale: 1.05,
                          x: 5,
                        }}
                      >
                        {capability.title}
                      </motion.h4>
                      <p className="text-sm md:text-base text-foreground/70 leading-relaxed font-exo">
                        {capability.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
