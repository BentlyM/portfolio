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
    "Bently M — software engineer building trading systems in TypeScript and Rust: an algo-trading engine and GridNews, a financial news streaming platform.",
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
