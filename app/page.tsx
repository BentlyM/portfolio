import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title } from "@/components/primitives";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { TabContent } from "@/components/tab-content";
import { EmailCopy } from "@/components/email-copy";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-16 py-12 md:py-20 min-h-[80vh] text-center">
      <div className="flex flex-col items-center gap-6 max-w-2xl">
        <h1 className={title({ size: "lg" })}>Bently M</h1>

        <p className="text-lg text-default-600">
          Software engineer building distributed systems, trading infrastructure, and high-throughput data pipelines in Rust and TypeScript.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
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

        <div className="flex flex-wrap items-center justify-center gap-3 font-mono text-sm text-default-500">
          <span className="inline-flex items-center gap-2">
            <span className="status-dot inline-block h-2 w-2 rounded-full bg-primary animate-pulse" />
            open to new opportunities
          </span>
          <EmailCopy />
        </div>
      </div>

      <div className="w-full flex justify-center text-left">
        <TabContent />
      </div>
    </section>
  );
}
