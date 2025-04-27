import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { FlippingTitle } from "@/components/flipping-title";

export default function Home() {
  const roleTitles = [
    "Full Stack Developer",
    "Software Engineer",
    "Aspiring Quant",
    "Hobbyist Programmer",
    "Tech Enthusiast",
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className="text-3xl font-bold">Welcome to my Portfolio</h1>
        <FlippingTitle titles={roleTitles} className="my-4" />

        <div className={subtitle({ class: "mt-4" })}>
          Crafting elegant solutions with modern web technologies
        </div>
      </div>

      <div className="flex gap-3">
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
