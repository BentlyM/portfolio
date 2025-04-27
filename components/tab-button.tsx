"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface TabButtonProps {
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode;
}

export const TabButton = ({ active, selectTab, children }: TabButtonProps) => {
  return (
    <button onClick={selectTab}>
      <p
        className={`mr-3 cursor-pointer border-b-0 font-semibold transition-all duration-200 hover:text-white ${
          active ? "text-white" : "text-[#ADB7BE]"
        }`}
      >
        {children}
      </p>
      <motion.div
        initial={{ width: active ? "calc(100% - 0.75rem)" : 0 }}
        animate={{ width: active ? "calc(100% - 0.75rem)" : 0 }}
        className="mr-3 mt-1 h-1 bg-purple-300 transition-all"
      />
    </button>
  );
};