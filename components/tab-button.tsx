"use client";
import { motion } from "framer-motion";

interface TabButtonProps {
  active: boolean;
  selectTabAction: () => void;
  children: React.ReactNode;
}

export const TabButton = ({
  active,
  selectTabAction,
  children,
}: TabButtonProps) => {
  return (
    <button onClick={selectTabAction} className="relative pb-2 mr-6">
      <span
        className={`cursor-pointer font-mono text-sm transition-colors duration-200 ${
          active ? "text-primary" : "text-default-500 hover:text-default-700"
        }`}
      >
        {children}
      </span>
      <motion.div
        initial={{ width: active ? "100%" : 0 }}
        animate={{ width: active ? "100%" : 0 }}
        className="absolute bottom-0 left-0 h-0.5 bg-primary"
      />
    </button>
  );
};
