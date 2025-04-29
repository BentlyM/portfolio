import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title } from "@/components/primitives";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { FlippingTitle } from "@/components/flipping-title";
import { TabContent } from "@/components/tab-content";

export default function Home() {
  const roleTitles = [
    "Full Stack Developer",
    "Software Engineer",
    "Hobbyist Programmer",
    "Tech Enthusiast",
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 min-h-[80vh]">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Hi, I&apos;m Bently, a</h1>

        <div className="flex justify-center items-center gap-2 my-4">
          <FlippingTitle titles={roleTitles} />
        </div>
      </div>

      <TabContent />

      <div className="flex gap-3 mt-4 flex-wrap justify-center">
        <Link
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href="/projects"
        >
          View My Work
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.linkedin}
        >
          <LinkedinIcon size={20} />
          LinkedIn
        </Link>
      </div>

      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Currently open to <Code color="primary">new opportunities</Code>
          </span>
        </Snippet>
      </div>
    </section>
  );
}
