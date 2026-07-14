"use client";

import { useEffect, useState } from "react";

// Public contact alias (not a personal address). Assembled on the client
// after mount so it never appears in the statically exported HTML, where
// scrapers would pick it up.
const USER = "support";
const DOMAIN = ["gridnews", "io"].join(".");

interface EmailCopyProps {
  className?: string;
  showMailto?: boolean;
}

export const EmailCopy = ({
  className = "",
  showMailto = false,
}: EmailCopyProps) => {
  const [email, setEmail] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setEmail(`${USER}@${DOMAIN}`);
  }, []);

  const copyEmail = async () => {
    if (!email) return;
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable; the address is visible to select manually.
    }
  };

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <button
        type="button"
        onClick={copyEmail}
        title="Copy email to clipboard"
        className="group inline-flex items-center gap-2 rounded-md border border-default-200 px-3 py-1.5 transition-colors hover:border-primary hover:bg-default-100"
      >
        <span className="font-mono text-sm min-w-[19ch] text-left">
          {email || " "}
        </span>
        {copied ? (
          <span className="inline-flex items-center gap-1 text-xs text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            Copied
          </span>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-default-400 transition-colors group-hover:text-primary"
          >
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
        )}
      </button>
      {showMailto && email && (
        <a
          href={`mailto:${email}`}
          className="text-sm text-default-500 underline-offset-4 hover:text-primary hover:underline"
        >
          or open in your mail app
        </a>
      )}
    </div>
  );
};
