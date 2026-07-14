import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title } from "@/components/primitives";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { TabContent } from "@/components/tab-content";
import { EmailCopy } from "@/components/email-copy";
import { QuoteBoard } from "@/components/quote-board";

export default function Home() {
  return (
    <section className="flex flex-col justify-center gap-12 py-8 md:py-14 min-h-[80vh]">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        {/* Left: who + what */}
        <div className="flex flex-col gap-5">
          <p className="font-mono text-xs tracking-[0.2em] text-default-500">
            SOFTWARE ENGINEER — TYPESCRIPT / RUST
          </p>

          <h1 className={title({ size: "lg" })}>Hi, I&apos;m Bently.</h1>

          <p className="max-w-xl text-lg text-default-600">
            I build trading systems and the infrastructure around them: an
            algo-trading engine on Interactive Brokers and GridNews — a
            financial news streaming platform with a Rust backend.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              className={buttonStyles({ color: "primary", radius: "sm" })}
              href="/projects"
            >
              View My Work
            </Link>
            <Link
              isExternal
              className={buttonStyles({ variant: "bordered", radius: "sm" })}
              href={siteConfig.links.github}
            >
              <GithubIcon size={20} />
              GitHub
            </Link>
            <Link
              isExternal
              className={buttonStyles({ variant: "bordered", radius: "sm" })}
              href={siteConfig.links.linkedin}
            >
              <LinkedinIcon size={20} />
              LinkedIn
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-3 font-mono text-sm text-default-500">
            <span className="inline-flex items-center gap-2">
              <span className="status-dot inline-block h-2 w-2 rounded-full bg-primary" />
              open to new opportunities
            </span>
            <EmailCopy />
          </div>
        </div>

        {/* Right: the board */}
        <div className="flex justify-center lg:justify-end">
          <QuoteBoard />
        </div>
      </div>

      <TabContent />
    </section>
  );
}
