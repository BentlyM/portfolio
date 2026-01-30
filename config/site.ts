export type SiteConfig = {
  name: string;
  description: string;
  navItems: {
    label: string;
    href: string;
  }[];
  links: {
    github: string;
    linkedin: string;
    contact: string;
    resume: string;
  };
};

export const siteConfig: SiteConfig = {
  name: "Bently M | Portfolio",
  description:
    "Systems Engineer and Full Stack Developer focused on high-performance infrastructure, CLI tooling, and Unix-based systems. Portfolio of scalable, production-grade software.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Projects",
      href: "/projects",
    },
  ],
  links: {
    github: "https://github.com/bentlym",
    linkedin: "https://www.linkedin.com/in/bently-metayer-707364265",
    contact: "/contact",
    resume: "/Bently_Resume.pdf",
  },
};
