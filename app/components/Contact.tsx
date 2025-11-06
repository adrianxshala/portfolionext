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
      href: "https://www.linkedin.com/in/adrian-shala-a80ba5198/",
      color: "hover:text-blue-400",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/adrianxshala",
      color: "hover:text-gray-300",
    },
    {
      icon: Mail,
      label: "Email",
      href: "adrianxshalax@gmail.com",
      color: "hover:text-red-400",
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
      {/* Futuristic Background Elements - Similar to Skills */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Hexagons */}
        {isClient &&
          [...Array(12)].map((_, i) => {
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

        {/* Data Stream Lines */}
        <motion.div
          className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
          animate={{ x: [-100, 100] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
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
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-futuristic mb-6"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            viewport={{ once: true }}
          >
            Let's Build Something Amazing
          </motion.h2>
          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-exo px-4"
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
            <div
              className="glass-card p-8 rounded-3xl relative overflow-hidden group transition-all duration-500 backdrop-blur-md shadow-lg"
              style={{
                backdropFilter: 'blur(20px) saturate(180%)',
                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              }}
            >

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
            <div
              className="glass-card p-8 rounded-3xl relative overflow-hidden group transition-all duration-500 backdrop-blur-md shadow-lg"
              style={{
                backdropFilter: 'blur(20px) saturate(180%)',
                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              }}
            >

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
                        adrianxshalax@gmail.com
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
            <div
              className="hidden md:block glass-card p-8 rounded-3xl relative overflow-hidden group transition-all duration-500 backdrop-blur-md shadow-lg"
              style={{
                backdropFilter: 'blur(20px) saturate(180%)',
                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              }}
            >

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
