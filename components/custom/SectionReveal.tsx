"use client";

import { motion, Variants } from "framer-motion";
import React, { ReactNode } from "react";

interface SectionRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "fade";
  duration?: number;
  className?: string;
}

const getVariants = (direction: string): Variants => {
  const directions: Record<string, { x: number; y: number }> = {
    up: { x: 0, y: 40 },
    down: { x: 0, y: -40 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    fade: { x: 0, y: 0 },
  };

  const { x, y } = directions[direction] || directions.up;

  return {
    hidden: {
      opacity: 0,
      x,
      y,
      scale: direction === "fade" ? 0.95 : 1,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
    },
  };
};

const SectionReveal: React.FC<SectionRevealProps> = ({
  children,
  delay = 0,
  direction = "up",
  duration = 0.6,
  className = "",
}) => {
  const variants = getVariants(direction);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // Custom easeOutQuint for smooth reveal
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default SectionReveal;
