"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { title } from "./primitives";

interface FlippingTitleProps {
  titles: string[];
  interval?: number;
  className?: string;
}

export const FlippingTitle: React.FC<FlippingTitleProps> = ({
  titles,
  interval = 3000,
  className = "",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, interval);

    return () => clearInterval(timer);
  }, [interval, titles.length]);

  return (
    <div className={`relative h-[40px] ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="absolute w-full text-center"
        >
          <h2 className={title({ color: "violet" })}>{titles[currentIndex]}</h2>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}; 