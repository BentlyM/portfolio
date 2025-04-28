import Link from "next/link";
import Image from "next/image";
import { title } from "@/components/primitives";

interface Project {
  title: string;
  description: string;
  link: string;
  github: string;
  stars: number;
  image: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website built with Next.js and Tailwind CSS. Features a clean design, dark mode support, and interactive elements.",
    link: "https://bentlym.github.io/portfolio",
    github: "https://github.com/bentlym/portfolio",
    stars: 12,
    image: "/projects/portfolio.png",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "Task Manager",
    description:
      "A full-stack task management application with user authentication, task creation, editing, and filtering capabilities. Includes drag-and-drop functionality and priority settings.",
    link: "https://task-manager-demo.vercel.app",
    github: "https://github.com/bentlym/task-manager",
    stars: 45,
    image: "/projects/task-manager.png",
    technologies: ["React", "Node.js", "MongoDB", "Express", "JWT"],
  },
  {
    title: "Weather Dashboard",
    description:
      "An interactive weather dashboard that displays current weather conditions and forecasts for any location. Features include geolocation, search history, and detailed weather metrics.",
    link: "https://weather-app-demo.vercel.app",
    github: "https://github.com/bentlym/weather-app",
    stars: 28,
    image: "/projects/weather-app.png",
    technologies: ["JavaScript", "OpenWeather API", "Chart.js", "CSS3"],
  },
  {
    title: "E-commerce Platform",
    description:
      "A fully functional e-commerce platform with product listings, shopping cart, checkout process, and user accounts. Includes admin dashboard for product management.",
    link: "https://ecommerce-demo.vercel.app",
    github: "https://github.com/bentlym/ecommerce-platform",
    stars: 67,
    image: "/projects/ecommerce.png",
    technologies: ["React", "Redux", "Node.js", "Stripe API", "MongoDB"],
  },
];

export default function Projects() {
  return (
    <section className="flex flex-col items-center justify-center py-8 md:py-10">
      <div className="w-full max-w-5xl px-4">
        <h1 className={`${title()} mb-12 text-center`}>Projects</h1>

        <ul className="mt-8">
          {projects.map((project, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                {/* Hover background effect */}
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-default-100/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

                {/* Project image */}
                <div className="z-10 sm:order-1 sm:col-span-2">
                  <div className="aspect-[16/9] w-full rounded-lg bg-default-200/50 overflow-hidden">
                    {project.image && (
                      <Image
                        src={project.image}
                        alt={`${project.title} preview`}
                        width={200}
                        height={113}
                        className="w-full h-full object-cover"
                        unoptimized
                      />
                    )}
                  </div>
                </div>

                {/* Project details */}
                <div className="z-10 sm:order-2 sm:col-span-6">
                  <h3>
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
                  </h3>

                  <p className="mt-2 text-sm leading-normal">
                    {project.description}
                  </p>

                  <a
                    className="relative mt-2 inline-flex items-center text-sm font-medium"
                    href={project.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`${project.stars} stars on GitHub (opens in a new tab)`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="mr-1 h-3 w-3"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>{project.stars}</span>
                  </a>

                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used:"
                  >
                    {project.technologies.map((tech, techIndex) => (
                      <li key={techIndex} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-default-100/50 px-3 py-1 text-xs font-medium leading-5">
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
