import Image from "next/image";
import { GithubIcon } from "@/components/icons";

interface Project {
  ticker: string;
  title: string;
  description: string;
  /** Live or demo URL; omit for NDA / in-development projects */
  link?: string;
  /** GitHub repo URL; omit for private / proprietary projects */
  github?: string;
  /** Video demo URL (e.g. YouTube); shown as "Watch demo" when set */
  demoVideoUrl?: string;
  /** Omit for a ticker-tile placeholder (private / backend-only projects) */
  image?: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    ticker: "ARBT",
    title: "Arbiter Execution Engine",
    description:
      "Automated trading against Interactive Brokers: order management and Redis-locked execution workers in TypeScript, a Rust core for the trading engine, market-data and news ingestion, and a backtesting harness. Private repository — there's a video demo instead.",
    demoVideoUrl: "https://youtu.be/bHuXLNc-fPU",
    technologies: ["TypeScript", "Rust", "Redis", "Interactive Brokers API"],
  },
  {
    ticker: "GRID",
    title: "GridNews",
    description:
      "Financial news aggregation and streaming platform, live at gridnews.io. A Turborepo monorepo with four services — API, frontend, stream, worker — on a Rust backend, containerized with Docker.",
    link: "https://www.gridnews.io/",
    github: "https://github.com/gridnews",
    image: "projects/grid-news.png",
    technologies: ["Rust", "Next.js", "PostgreSQL", "Docker"],
  },
  {
    ticker: "RSTQ",
    title: "Rustiq (In Development)",
    description:
      "A fast, terminal-based stock screener built in Rust. Configured with an asynchronous Tokio runtime and Reqwest for low-latency market data ingestion, custom filters (like RSI and P/E ratios), SQLx with SQLite for persistent local caching, and a Ratatui-based CLI dashboard with Plotters charting.",
    github: "https://github.com/BentlyM/rustiq",
    technologies: ["Rust", "Tokio", "SQLx", "Ratatui", "Plotters"],
  },

  {
    ticker: "FOLIO",
    title: "This Site",
    description:
      "Statically exported Next.js on GitHub Pages — no backend, nothing to silently fail. The contact address is assembled client-side so scrapers can't lift it.",
    link: "https://bentlym.github.io/portfolio",
    github: "https://github.com/bentlym/portfolio",
    image: "projects/portfolio.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
];

export default function Projects() {
  return (
    <section className="flex flex-col items-center justify-center py-8 md:py-10">
      <div className="w-full px-4">
        <ul className="mt-8">
          {projects.map((project) => (
            <li key={project.ticker} className="mb-12">
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                {/* Hover background effect */}
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-default-100/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

                {/* Project image / ticker tile */}
                <div className="z-10 sm:order-1 sm:col-span-2 relative">
                  <div className="aspect-[16/9] w-full rounded-md border border-default-200 bg-default-100 overflow-hidden flex items-center justify-center">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={`${project.title} preview`}
                        width={200}
                        height={113}
                        className="w-full h-full object-cover"
                        unoptimized
                      />
                    ) : (
                      <div className="text-center font-mono">
                        <span className="block text-lg font-semibold tracking-widest text-primary">
                          {project.ticker}
                        </span>
                        <span className="text-xs text-default-400">
                          {project.github ? "open source" : "private / NDA"}
                        </span>
                      </div>
                    )}
                  </div>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="absolute bottom-3 right-3 p-2 rounded-md bg-background/80 border border-default-200 hover:border-primary transition-colors"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <GithubIcon size={20} />
                    </a>
                  )}
                </div>

                {/* Project details */}
                <div className="z-10 sm:order-2 sm:col-span-6 relative">
                  <p className="font-mono text-xs tracking-[0.2em] text-default-400">
                    {project.ticker}
                  </p>
                  <h3 className="mt-1">
                    {project.link ? (
                      <a
                        className="inline-flex items-baseline font-medium leading-tight group/link text-base"
                        href={project.link}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`${project.title} (opens in a new tab)`}
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>
                          {project.title}
                          <span className="inline-block">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </span>
                        </span>
                      </a>
                    ) : (
                      <span className="font-medium leading-tight text-base">
                        {project.title}
                      </span>
                    )}
                  </h3>

                  <p className="mt-2 text-sm leading-normal text-default-600">
                    {project.description}
                  </p>

                  {project.demoVideoUrl && (
                    <a
                      className="mt-2 inline-flex items-center gap-1.5 font-mono text-sm text-primary hover:underline underline-offset-4"
                      href={project.demoVideoUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M8 5v14l11-7z"></path>
                      </svg>
                      Watch demo
                    </a>
                  )}

                  <ul
                    className="mt-3 flex flex-wrap gap-2"
                    aria-label="Technologies used:"
                  >
                    {project.technologies.map((tech) => (
                      <li key={tech}>
                        <div className="rounded-md border border-default-200 bg-default-100 px-2.5 py-0.5 font-mono text-xs leading-5">
                          {tech}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
