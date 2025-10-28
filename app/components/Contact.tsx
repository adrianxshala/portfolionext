"use client";

import { useState, useEffect } from "react";
import {
  Mail,
  Linkedin,
  Github,
  Twitter,
  Send,
  Sparkles,
  Zap,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent! 🚀",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "#",
      color: "hover:text-blue-400",
    },
    { icon: Github, label: "GitHub", href: "#", color: "hover:text-gray-300" },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:contact@example.com",
      color: "hover:text-red-400",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "#",
      color: "hover:text-blue-300",
    },
  ];

  return (
    <motion.section
      id="contact"
      className="py-32 px-6 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Particles */}
        {isClient &&
          [...Array(20)].map((_, i) => {
            // Use deterministic values based on index to prevent hydration mismatch
            const seed = i * 0.25;
            const left = (Math.sin(seed) * 0.5 + 0.5) * 100;
            const top = (Math.cos(seed) * 0.5 + 0.5) * 100;
            const xOffset = (Math.sin(seed * 2) * 0.5 + 0.5) * 100 - 50;
            const yOffset = (Math.cos(seed * 2) * 0.5 + 0.5) * 100 - 50;
            const duration = 4 + (Math.sin(seed * 3) * 0.5 + 0.5) * 2;
            const delay = (Math.cos(seed * 4) * 0.5 + 0.5) * 3;

            return (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-primary rounded-full opacity-30"
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                }}
                initial={{
                  opacity: 0,
                  scale: 0,
                  x: 0,
                  y: 0,
                }}
                animate={{
                  opacity: [0, 0.3, 0],
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
          className="absolute top-20 left-1/4 w-px h-20 bg-gradient-to-b from-primary/60 to-transparent"
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        />
        <motion.div
          className="absolute bottom-20 right-1/4 w-px h-16 bg-gradient-to-t from-secondary/60 to-transparent"
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
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
              backgroundSize: "40px 40px",
            }}
          />
        </motion.div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Modern Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-8 h-8 text-primary" />
            </motion.div>
            <span className="text-primary font-semibold text-lg tracking-wider font-orbitron">
              CONNECT
            </span>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-8 h-8 text-primary" />
            </motion.div>
          </motion.div>
          <motion.h2
            className="text-5xl md:text-6xl font-bold text-futuristic mb-6"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            viewport={{ once: true }}
          >
            Let's Build Something Amazing
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-exo"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            viewport={{ once: true }}
          >
            Ready to transform your ideas into reality? Let's collaborate and
            create something extraordinary together.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="relative">
            <div className="glass-card p-8 neon-glow rounded-3xl relative overflow-hidden group hover:scale-105 transition-all duration-500 bg-gradient-to-br from-background/60 to-background/30 backdrop-blur-2xl border border-primary/30 hover:border-primary/60">
              {/* Liquid Morph Effect */}
              <motion.div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 rounded-3xl animate-liquid-morph" />

              {/* AI Particle Pulse */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent animate-ai-particle-pulse opacity-30" />

              {/* Shimmer Sweep */}
              <div className="absolute inset-0 animate-shimmer-sweep pointer-events-none opacity-20" />

              {/* Holographic Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-3xl animate-hologram" />

              {/* Form Header */}
              <div className="relative z-10 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-6 h-6 text-primary animate-pulse" />
                  <h3 className="text-2xl font-bold text-primary">
                    Send Message
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  Fill out the form below and I'll get back to you within 24
                  hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="space-y-2">
                  <label className="block text-primary font-semibold text-sm tracking-wide">
                    Full Name
                  </label>
                  <div className="relative group">
                    <Input
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="bg-input/50 border-primary/30 focus:border-primary focus:neon-glow text-foreground h-12 rounded-xl transition-all duration-300 group-hover:border-primary/50"
                      placeholder="Enter your full name"
                      required
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-primary font-semibold text-sm tracking-wide">
                    Email Address
                  </label>
                  <div className="relative group">
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="bg-input/50 border-primary/30 focus:border-primary focus:neon-glow text-foreground h-12 rounded-xl transition-all duration-300 group-hover:border-primary/50"
                      placeholder="your.email@example.com"
                      required
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-primary font-semibold text-sm tracking-wide">
                    Message
                  </label>
                  <div className="relative group">
                    <Textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="bg-input/50 border-primary/30 focus:border-primary focus:neon-glow text-foreground min-h-[140px] rounded-xl transition-all duration-300 group-hover:border-primary/50 resize-none"
                      placeholder="Tell me about your project, ideas, or just say hello..."
                      required
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-background font-bold py-4 text-lg rounded-xl neon-glow hover:neon-glow-strong hover:-translate-y-1 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 border-2 border-background border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-3">
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      <span>Send Message</span>
                    </div>
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info & Social Links */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="glass-card p-8 neon-glow rounded-3xl relative overflow-hidden group hover:scale-105 transition-all duration-500 bg-gradient-to-br from-background/60 to-background/30 backdrop-blur-2xl border border-primary/30 hover:border-primary/60">
              {/* Liquid Morph */}
              <motion.div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-primary/5 to-transparent rounded-3xl animate-liquid-gradient" />

              {/* Shimmer */}
              <div className="absolute inset-0 animate-shimmer-sweep pointer-events-none opacity-20" />

              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5 rounded-3xl animate-hologram" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <Mail className="w-6 h-6 text-primary animate-pulse" />
                  <h3 className="text-2xl font-bold text-primary">
                    Get In Touch
                  </h3>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Email
                      </h4>
                      <p className="text-muted-foreground">
                        contact@example.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Response Time
                      </h4>
                      <p className="text-muted-foreground">Within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card p-8 neon-glow rounded-3xl relative overflow-hidden group hover:scale-105 transition-all duration-500 bg-gradient-to-br from-background/60 to-background/30 backdrop-blur-2xl border border-primary/30 hover:border-primary/60">
              {/* Liquid Morph */}
              <motion.div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent rounded-3xl animate-liquid-gradient" />

              {/* AI Particles */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent animate-ai-particle-pulse opacity-20" />

              {/* Shimmer */}
              <div className="absolute inset-0 animate-shimmer-sweep pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-3xl animate-hologram" />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-primary mb-6">
                  Follow Me
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="group flex items-center gap-3 p-4 rounded-xl border border-primary/20 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:scale-105"
                      aria-label={social.label}
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                        <social.icon
                          className={`w-5 h-5 text-primary ${social.color} transition-colors duration-300`}
                        />
                      </div>
                      <span className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                        {social.label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
