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
        I&apos;m a software engineer with a passion for building scalable and
        efficient systems.
      </p>
    ),
  },
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="flex flex-wrap gap-2 text-left list-none pl-0">
        <li className="bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded-md text-sm">JavaScript</li>
        <li className="bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded-md text-sm">TypeScript</li>
        <li className="bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded-md text-sm">React.js</li>
        <li className="bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded-md text-sm">Next.js</li>
        <li className="bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded-md text-sm">Node.js</li>
        <li className="bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded-md text-sm">MUI</li>
        <li className="bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded-md text-sm">SQL</li>
        <li className="bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded-md text-sm">
          TailwindCSS
        </li>
        <li className="bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded-md text-sm">Git</li>
        <li className="bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded-md text-sm">Rust</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="text-left list-none pl-0 space-y-2">
        <li className="border-l-2 border-purple-300 pl-3">
          <h3 className="font-medium">
            Bachelor of Science in Computer Science
          </h3>
          <p className="text-gray-400 text-sm">
            University Name, Graduation Year
          </p>
        </li>
      </ul>
    ),
  },
  {
    title: "Certification",
    id: "certification",
    content: (
      <ul className="text-left list-none pl-0 space-y-2">
        <li className="border-l-2 border-purple-300 pl-3">
          <h3 className="font-medium">AWS Certified Developer</h3>
          <p className="text-gray-400 text-sm">Issued 2023</p>
        </li>
        <li className="border-l-2 border-purple-300 pl-3">
          <h3 className="font-medium">Google Cloud Professional</h3>
          <p className="text-gray-400 text-sm">Issued 2022</p>
        </li>
        <li className="border-l-2 border-purple-300 pl-3">
          <h3 className="font-medium">Meta Frontend Developer</h3>
          <p className="text-gray-400 text-sm">Issued 2021</p>
        </li>
      </ul>
    ),
  },
];

export const TabContent = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div>
      <div className="flex flex-row justify-center mb-4">
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
      <div className="mt-4 max-w-[500px] max-h-[64px] min-h-[64px] overflow-y-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="text-center"
          >
            {TAB_DATA.find((tab) => tab.id === activeTab)?.content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
