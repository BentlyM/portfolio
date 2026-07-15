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
        CS student at Broward College (aspiring University of Florida transfer).
        My focus is on low-latency systems and data-heavy applications. I enjoy working across the stack, but I&apos;m most interested in backend and systems architecture.
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
          "SQLite",
          "Redis",
          "Docker",
          "Ratatui",
          "WebSockets",
          "Turborepo",
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
          <h3 className="font-medium">A.S. / A.A. in Computer Science (in progress)</h3>
          <p className="text-default-500 text-sm">
            Broward College · Expected 2027 (Aspiring University of Florida transfer)
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
          <h3 className="font-medium">Systems & TUI programming</h3>
          <p className="text-default-500 text-sm">
            Rust services for streaming, data-heavy backends, and terminal tools (Ratatui)
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
  {
    title: "Contributions",
    id: "contributions",
    content: (
      <ul className="text-left list-none pl-0 space-y-3">
        <li className="border-l-2 border-primary pl-3">
          <h3 className="font-medium">
            <a
              href="https://github.com/public-apis/public-apis"
              target="_blank"
              rel="noreferrer noopener"
              className="hover:underline text-primary"
            >
              public-apis/public-apis
            </a>
          </h3>
          <p className="text-default-500 text-sm">
            Added the GridNews API to the curated list of free public APIs to promote open financial data.
          </p>
        </li>
        <li className="border-l-2 border-primary pl-3">
          <h3 className="font-medium">
            <a
              href="https://github.com/vinegarhq/sober"
              target="_blank"
              rel="noreferrer noopener"
              className="hover:underline text-primary"
            >
              vinegarhq/sober
            </a>
          </h3>
          <p className="text-default-500 text-sm">
            Troublesought and documented Linux Vulkan-specific crashes on NVIDIA driver setups.
          </p>
        </li>
        <li className="border-l-2 border-primary pl-3">
          <h3 className="font-medium">
            <a
              href="https://github.com/gorilla-devs/ferium"
              target="_blank"
              rel="noreferrer noopener"
              className="hover:underline text-primary"
            >
              gorilla-devs/ferium
            </a>
          </h3>
          <p className="text-default-500 text-sm">
            Participated in open-source discussions, issue reporting, and tracking for the CLI Minecraft mod manager written in Rust.
          </p>
        </li>
      </ul>
    ),
  },
];

export const TabContent = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="w-full max-w-2xl mx-auto text-left">
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
