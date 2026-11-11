"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const PETALS = [
  { id: 1, left: "8%", delay: 0, duration: 11, size: 12, color: "#E9C9C2" },
  { id: 2, left: "22%", delay: 2.5, duration: 13, size: 10, color: "#D9A86C" },
  { id: 3, left: "38%", delay: 1.2, duration: 10.5, size: 13, color: "#E9C9C2" },
  { id: 4, left: "56%", delay: 3.4, duration: 12.5, size: 11, color: "#C86D7C" },
  { id: 5, left: "72%", delay: 0.7, duration: 14, size: 12, color: "#E9C9C2" },
  { id: 6, left: "88%", delay: 2.1, duration: 11.5, size: 10, color: "#D9A86C" },
];

export function FloatingPetals({ className = "" }: { className?: string }) {
  const prefersReduced = useReducedMotion();
  if (prefersReduced) return null;

  return (
    <div
      className={`pointer-events-none overflow-hidden select-none ${className}`}
      aria-hidden="true"
    >
      {PETALS.map((petal) => (
        <motion.span
          key={petal.id}
          initial={{ y: -24, x: 0, opacity: 0, rotate: 0 }}
          animate={{
            y: ["0vh", "95vh"],
            x: [0, 18, -14, 10],
            opacity: [0, 0.75, 0.75, 0],
            rotate: [0, 120, 240, 340],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: -20,
            left: petal.left,
            width: petal.size,
            height: petal.size * 0.65,
            backgroundColor: petal.color,
            borderRadius: "80% 10% 80% 10%",
          }}
        />
      ))}
    </div>
  );
}
