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
    resume: string;
    contact: string;
  };
};

export const siteConfig: SiteConfig = {
  name: "Bently M | Portfolio",
  description: "Professional portfolio showcasing my projects and skills in web development.",
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
    resume: "/resume.pdf",
    contact: "/contact",
  },
};
