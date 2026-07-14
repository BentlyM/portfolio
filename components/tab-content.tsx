"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TabButton } from "./tab-button";

const TAB_DATA = [
  {
    title: "About",
    id: "about",
    content: (
      <p>
        CS student at the University of Florida. I got into trading
        infrastructure by building GridNews, then kept going down the stack —
        from Next.js frontends to Rust backend services and automated
        execution against real brokerage APIs.
      </p>
    ),
  },
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="flex flex-wrap gap-2 list-none pl-0">
        {[
          "TypeScript",
          "Rust",
          "Python",
          "Next.js",
          "Node.js",
          "PostgreSQL",
          "Redis",
          "Docker",
        ].map((skill) => (
          <li
            key={skill}
            className="rounded-md border border-default-200 bg-default-100 px-3 py-1 font-mono text-sm"
          >
            {skill}
          </li>
        ))}
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="text-left list-none pl-0 space-y-2">
        <li className="border-l-2 border-primary pl-3">
          <h3 className="font-medium">B.S. in Computer Science (in progress)</h3>
          <p className="text-default-500 text-sm">
            University of Florida · Expected 2027
          </p>
        </li>
      </ul>
    ),
  },
  {
    title: "Interests",
    id: "interests",
    content: (
      <ul className="text-left list-none pl-0 space-y-2">
        <li className="border-l-2 border-primary pl-3">
          <h3 className="font-medium">Market infrastructure</h3>
          <p className="text-default-500 text-sm">
            Order routing and execution against Interactive Brokers
          </p>
        </li>
        <li className="border-l-2 border-primary pl-3">
          <h3 className="font-medium">Systems programming</h3>
          <p className="text-default-500 text-sm">
            Rust services for streaming and data-heavy backends
          </p>
        </li>
        <li className="border-l-2 border-primary pl-3">
          <h3 className="font-medium">Real-time networking</h3>
          <p className="text-default-500 text-sm">
            WebSocket streaming, multiplayer game state (Battleship)
          </p>
        </li>
      </ul>
    ),
  },
];

export const TabContent = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="w-full max-w-2xl">
      <div className="flex flex-row mb-4 border-b border-default-200">
        {TAB_DATA.map((tab) => (
          <TabButton
            key={tab.id}
            active={activeTab === tab.id}
            selectTabAction={() => setActiveTab(tab.id)}
          >
            {tab.title}
          </TabButton>
        ))}
      </div>
      <div className="min-h-[120px] text-default-600">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
          >
            {TAB_DATA.find((tab) => tab.id === activeTab)?.content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
