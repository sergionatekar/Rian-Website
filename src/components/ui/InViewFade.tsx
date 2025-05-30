'use client';

import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

interface InViewFadeProps {
  children: React.ReactNode;
  className?: string;
  amount?: number; // threshold for inView
  once?: boolean;
  style?: React.CSSProperties;
}

export const InViewFade = ({
  children,
  className = "",
  amount = 0.3,
  once = true,
  style,
}: InViewFadeProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, amount });

  const variants = {
    hidden: { opacity: 0, y: 32, filter: "blur(8px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { type: "spring", stiffness: 120, damping: 20 },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      variants={variants}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
    >
      {children}
    </motion.div>
  );
}; 