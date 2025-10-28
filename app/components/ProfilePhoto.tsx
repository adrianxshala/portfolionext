"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const ProfilePhoto = () => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [isClient, setIsClient] = useState(false);
  const [binaryBits, setBinaryBits] = useState<string[]>([]);
  const [hexCode, setHexCode] = useState("");

  useEffect(() => {
    setIsClient(true);
    // Generate random values only on client
    setBinaryBits([...Array(15)].map(() => (Math.random() > 0.5 ? "1" : "0")));
    setHexCode(
      [...Array(12)]
        .map(() => "0123456789ABCDEF"[Math.floor(Math.random() * 16)])
        .join("")
    );
  }, []);

  const rotateX = useTransform(y, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) / rect.width);
    y.set((e.clientY - centerY) / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden border border-cyan-500/10">
      {/* Photo Container */}
      <div className="relative z-10 h-full flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12">
        <motion.div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative w-48 h-64 sm:w-56 sm:h-72 md:w-72 md:h-96 lg:w-80 lg:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
        >
          {/* Photo with futuristic effects */}
          <div className="relative w-full h-full group">
            {/* Glitch Scan Lines */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent pointer-events-none z-20 opacity-0 group-hover:opacity-100"
              animate={{
                y: ["-100%", "100%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Random Glitch Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-red-500/30 via-green-500/30 to-blue-500/30 pointer-events-none z-30 opacity-0"
              animate={{
                opacity: [0, 0.3, 0],
                x: [0, 2, -2, 0],
              }}
              transition={{
                duration: 0.15,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            />

            {/* Photo with interactive opacity */}
            <motion.img
              src="/profile-photo.jpg"
              alt="Profile"
              className="relative w-full h-full object-cover object-center rounded-3xl opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              whileHover={{
                scale: 1.05,
                filter: "brightness(1.1) contrast(1.05)",
              }}
            />

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

            {/* Pulsing Border Glow */}
            <motion.div
              className="absolute inset-0 rounded-3xl border-2 border-cyan-500/30"
              animate={{
                borderColor: [
                  "rgba(6, 182, 212, 0.3)",
                  "rgba(6, 182, 212, 0.6)",
                  "rgba(6, 182, 212, 0.3)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Floating particles on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-cyan-400/40 rounded-full"
                  style={{
                    left: `${20 + i * 10}%`,
                    top: `${10 + (i % 3) * 30}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    scale: [0.5, 1.5, 0.5],
                    opacity: [0, 0.8, 0],
                  }}
                  transition={{
                    duration: 2 + i * 0.2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Programming Numbers Watermark Overlay */}
          <div className="absolute inset-0 bg-transparent pointer-events-none">
            {/* Code-like numbers */}
            <div className="absolute inset-0 flex flex-wrap items-center justify-center gap-2 p-4">
              {Array.from({ length: 24 }).map((_, i) => {
                const numbers = [
                  "0x7A4",
                  "0xFFF",
                  "0x001",
                  "0x2B1",
                  "0xA3C",
                  "0x5D2",
                  "0x9F6",
                  "0x1E8",
                  "0x4C7",
                  "0xB05",
                  "0x8D3",
                  "0x6F1",
                  "0x2A4",
                  "0xC9B",
                  "0x3E6",
                  "0x7D2",
                  "0xF01",
                  "0x4A8",
                  "0xB3C",
                  "0x6E5",
                  "0x9F2",
                  "0x1D8",
                  "0x7C4",
                  "0xA3F",
                ];
                return (
                  <motion.div
                    key={i}
                    className="text-cyan-500/30 font-mono text-xs md:text-sm font-bold"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 0.3 }}
                    transition={{ delay: 0.5 + i * 0.02 }}
                  >
                    {numbers[i % numbers.length]}
                  </motion.div>
                );
              })}
            </div>

            {/* Binary code overlay */}
            {isClient && (
              <div className="absolute top-0 left-0 w-full p-4">
                <div className="flex flex-wrap gap-2">
                  {binaryBits.map((bit, i) => (
                    <span
                      key={i}
                      className="text-cyan-500/20 font-mono text-[8px] md:text-[10px]"
                    >
                      {bit}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Hex code bottom */}
            {isClient && (
              <div className="absolute bottom-0 right-0 p-4">
                <span className="text-cyan-500/20 font-mono text-[8px] md:text-[10px]">
                  {hexCode}
                </span>
              </div>
            )}

            {/* Corner lines like code editor */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-500/40" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-500/40" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-500/40" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-500/40" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfilePhoto;
