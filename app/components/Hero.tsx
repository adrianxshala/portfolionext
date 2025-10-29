"use client";

import { ArrowRight, Mail } from "lucide-react";
import { Button } from "./ui/button";
import ProfilePhoto from "./ProfilePhoto";
import ThreeDBackground from "./ThreeDBackground";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const Hero = () => {
  const [isClient, setIsClient] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  const yPhoto = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const yElements = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacityElements = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.section
      ref={sectionRef}
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-24 sm:pt-28 pb-12 md:pt-20 md:pb-20 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* 3D Animated Background */}
      <ThreeDBackground />

      {/* Particle Flow Background */}
      {isClient && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Horizontal Data Streams */}
          {[...Array(5)].map((_, streamIndex) => {
            const startX = (streamIndex % 4) * 25 + 5;
            const pathDuration = 2.5 + streamIndex * 0.4;
            const isWave = streamIndex % 2 === 0;

            return (
              <div key={streamIndex}>
                {[...Array(20)].map((_, particleIndex) => {
                  return (
                    <motion.div
                      key={`horizontal-${streamIndex}-${particleIndex}`}
                      className="absolute w-1 h-1 bg-cyan-500/40 rounded-full"
                      style={{
                        left: `${startX}%`,
                        top: `-${particleIndex * 5}%`,
                      }}
                      animate={{
                        top: [
                          `${-particleIndex * 5 - 200}%`,
                          `${120 - particleIndex * 5}%`,
                        ],
                        x: isWave
                          ? [0, Math.sin(particleIndex * 0.8) * 40, 0]
                          : 0,
                        opacity: [0, 0.8, 0.8, 0],
                      }}
                      transition={{
                        duration: pathDuration,
                        repeat: Infinity,
                        delay: particleIndex * 0.1,
                        ease: "linear",
                      }}
                    />
                  );
                })}
              </div>
            );
          })}

          {/* Vertical Data Streams */}
          {[...Array(4)].map((_, streamIndex) => {
            const startX = (streamIndex % 4) * 25 + 10;
            const duration = 3 + streamIndex * 0.4;

            return (
              <div key={`vertical-${streamIndex}`}>
                {[...Array(15)].map((_, particleIndex) => {
                  return (
                    <motion.div
                      key={`vertical-${streamIndex}-${particleIndex}`}
                      className="absolute w-1 h-8 bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent"
                      style={{
                        left: `${startX}%`,
                        top: `-${particleIndex * 60}%`,
                      }}
                      animate={{
                        top: [
                          `${-particleIndex * 60 - 200}%`,
                          `${150 - particleIndex * 60}%`,
                        ],
                        opacity: [0, 0.5, 0],
                      }}
                      transition={{
                        duration,
                        repeat: Infinity,
                        delay: particleIndex * 0.2,
                        ease: "linear",
                      }}
                    />
                  );
                })}
              </div>
            );
          })}

          {/* Diagonal Flowing Particles */}
          {[...Array(3)].map((_, streamIndex) => {
            const duration = 4 + streamIndex * 0.5;

            return (
              <div key={`diagonal-${streamIndex}`}>
                {[...Array(18)].map((_, particleIndex) => {
                  return (
                    <motion.div
                      key={`diagonal-${streamIndex}-${particleIndex}`}
                      className="absolute w-1 h-1 bg-blue-500/30 rounded-full"
                      style={{
                        left: `${15 + streamIndex * 30}%`,
                        top: `-${particleIndex * 8}%`,
                      }}
                      animate={{
                        top: [
                          `${-particleIndex * 8 - 100}%`,
                          `${150 - particleIndex * 8}%`,
                        ],
                        left: [
                          `${15 + streamIndex * 30}%`,
                          `${25 + streamIndex * 30}%`,
                        ],
                        opacity: [0, 0.6, 0.6, 0],
                      }}
                      transition={{
                        duration,
                        repeat: Infinity,
                        delay: particleIndex * 0.2,
                        ease: "linear",
                      }}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      )}

      {/* Background Elements with Parallax */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Original Floating Geometric Shapes */}
        {isClient &&
          [...Array(15)].map((_, i) => {
            const seed = i * 0.1;
            const left = 10 + (Math.sin(seed) * 0.5 + 0.5) * 80;
            const top = 10 + (Math.cos(seed) * 0.5 + 0.5) * 80;
            const width = 4 + (Math.sin(seed * 2) * 0.5 + 0.5) * 8;
            const height = 4 + (Math.cos(seed * 2) * 0.5 + 0.5) * 8;
            const duration = 4 + (Math.sin(seed * 3) * 0.5 + 0.5) * 2;
            const delay = (Math.cos(seed * 4) * 0.5 + 0.5) * 2;

            return (
              <motion.div
                key={i}
                className="absolute border border-primary/30"
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                  width: `${width}px`,
                  height: `${height}px`,
                }}
                initial={{ opacity: 0, scale: 0, rotate: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1.2, 0],
                  rotate: [0, 360],
                  y: [-20, 20, -20],
                }}
                transition={{
                  duration,
                  repeat: Infinity,
                  delay,
                  ease: "easeInOut",
                }}
              />
            );
          })}

        {/* Original Floating Particles */}
        {isClient &&
          [...Array(25)].map((_, i) => {
            const seed = i * 0.15;
            const left = (Math.sin(seed) * 0.5 + 0.5) * 100;
            const top = (Math.cos(seed) * 0.5 + 0.5) * 100;
            const xOffset = (Math.sin(seed * 2) * 0.5 + 0.5) * 100 - 50;
            const yOffset = (Math.cos(seed * 2) * 0.5 + 0.5) * 100 - 50;
            const duration = 3 + (Math.sin(seed * 3) * 0.5 + 0.5) * 2;
            const delay = (Math.cos(seed * 4) * 0.5 + 0.5) * 3;

            return (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary rounded-full"
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                }}
                initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  x: [0, xOffset],
                  y: [0, yOffset],
                }}
                transition={{
                  duration,
                  repeat: Infinity,
                  delay,
                  ease: "easeInOut",
                }}
              />
            );
          })}

        {/* Data Stream Lines */}
        <motion.div
          className="absolute top-32 left-1/4 w-px h-32 bg-gradient-to-b from-primary/60 via-primary/30 to-transparent"
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        />
        <motion.div
          className="absolute bottom-32 right-1/4 w-px h-24 bg-gradient-to-t from-secondary/60 via-secondary/30 to-transparent"
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 left-10 w-24 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
        />

        {/* Circuit Pattern */}
        <motion.div
          className="absolute top-1/4 left-1/3 w-16 h-16 opacity-10"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, delay: 1 }}
        >
          <div className="w-full h-full border border-primary/20 rounded-lg relative">
            <motion.div
              className="absolute top-2 left-2 w-2 h-2 bg-primary/40 rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-2 right-2 w-2 h-2 bg-primary/40 rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 w-1 h-1 bg-primary/60 rounded-full transform -translate-x-1/2 -translate-y-1/2"
              animate={{ scale: [1, 2, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
          </div>
        </motion.div>

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

        {/* New Parallax Floating Elements */}
        <motion.div
          style={{ y: yElements, opacity: opacityElements }}
          className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/10 blur-2xl"
        />
        <motion.div
          style={{ y: yElements, opacity: opacityElements }}
          className="absolute bottom-32 right-20 w-40 h-40 rounded-full bg-secondary/10 blur-3xl"
        />
        <motion.div
          style={{
            y: useTransform(scrollYProgress, [0, 1], [0, -75]),
            opacity: opacityElements,
          }}
          className="absolute top-1/3 right-1/4 w-16 h-16 border-2 border-primary/20 rounded-lg"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          style={{
            y: useTransform(scrollYProgress, [0, 1], [0, -75]),
            opacity: opacityElements,
          }}
          className="absolute bottom-1/3 left-1/4 w-12 h-12 border-2 border-secondary/20 rotate-45"
          animate={{ rotate: [45, 225, 45] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          style={{
            y: useTransform(scrollYProgress, [0, 1], [0, -30]),
            opacity: opacityElements,
          }}
          className="absolute top-1/4 left-1/2 w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-xl"
        />
        <motion.div
          style={{
            y: useTransform(scrollYProgress, [0, 1], [0, -30]),
            opacity: opacityElements,
          }}
          className="absolute bottom-1/4 right-1/3 w-16 h-16 rounded-full bg-gradient-to-br from-secondary/20 to-transparent blur-xl"
        />
      </div>

      <div className="container mx-auto relative z-10 max-w-7xl">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Mobile: Profile Photo First, Desktop: Text First */}
          <motion.div
            style={{ y: yPhoto }}
            className="order-1 md:order-2 h-[280px] sm:h-[350px] md:h-[500px] lg:h-[600px] w-full"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <ProfilePhoto />
          </motion.div>

          {/* Mobile: Text Second, Desktop: Text First */}
          <motion.div
            className="order-2 md:order-1 space-y-4 sm:space-y-5 md:space-y-8 text-center md:text-left"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <motion.div
              className="inline-block mb-3 md:mb-4"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-primary/10 text-primary font-semibold text-xs sm:text-sm rounded-full border border-primary/30">
                Full Stack Developer
              </span>
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight sm:leading-tight"
              initial={{ y: 50, opacity: 0, filter: "blur(20px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              <span className="text-futuristic">
                {/* Mobile: Two lines */}
                <span className="md:hidden">
                  Ai Enhanced
                  <br />
                  Full Stack Developer
                </span>
                {/* Desktop: One line with separator */}
                <span className="hidden md:inline">
                  Ai Enhanced Full Stack Developer
                </span>
              </span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl text-foreground/80 leading-relaxed max-w-2xl mx-auto md:mx-0 px-4 sm:px-0"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
            >
              Specialized in the MERN Stack with expertise in AI-powered
              applications. I create intelligent, scalable solutions using
              Next.js, Vercel AI SDK, and modern technologies.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start px-4 sm:px-0"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.3 }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto"
              >
                <Button
                  onClick={() => scrollToSection("projects")}
                  className="bg-primary text-background font-semibold px-6 py-4 sm:px-8 sm:py-6 text-sm sm:text-base hover:bg-primary/90 transition-all duration-300 w-full sm:w-auto"
                >
                  View My Work{" "}
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 inline" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto"
              >
                <Button
                  onClick={() => scrollToSection("contact")}
                  variant="outline"
                  className="border-2 border-primary/30 text-foreground hover:bg-primary/5 hover:border-primary/50 font-semibold px-6 py-4 sm:px-8 sm:py-6 text-sm sm:text-base transition-all duration-300 w-full sm:w-auto"
                >
                  <Mail className="mr-2 w-4 h-4 sm:w-5 sm:h-5 inline" /> Get In
                  Touch
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
