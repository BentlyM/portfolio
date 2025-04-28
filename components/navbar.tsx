"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { link as linkStyles } from "@heroui/theme";
import { useState } from "react";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";
import { Logo } from "@/components/icons";
import { ResumeModal } from "@/components/resume-modal";

export const Navbar = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const openResumeModal = () => {
    setIsResumeModalOpen(true);
  };

  const closeResumeModal = () => {
    setIsResumeModalOpen(false);
  };

  return (
    <>
      <NextUINavbar
        maxWidth="xl"
        position="sticky"
        className="bg-background/60 backdrop-blur-lg"
      >
        <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
          <NavbarBrand as="li" className="gap-3 max-w-fit">
            <NextLink
              className="flex justify-start items-center gap-2"
              href="https://github.com/BentlyM"
            >
              <Logo className="rounded-md" />
              <p className="font-bold text-inherit">Bently M</p>
            </NextLink>
          </NavbarBrand>
          <ul className="hidden sm:flex gap-4 justify-start ml-2">
            {siteConfig.navItems.map((item) => (
              <NavbarItem key={item.href}>
                <NextLink
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "data-[active=true]:text-primary data-[active=true]:font-medium"
                  )}
                  color="foreground"
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              </NavbarItem>
            ))}
          </ul>
        </NavbarContent>

        <NavbarContent
          className="hidden sm:flex basis-1/5 sm:basis-full"
          justify="end"
        >
          <NavbarItem className="hidden sm:flex gap-2">
            <ThemeSwitch />
          </NavbarItem>
          <NavbarItem className="hidden md:flex">
            <Button
              className="text-sm font-normal text-default-600 bg-default-100"
              variant="flat"
              onPress={openResumeModal}
            >
              Resume
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button
              as={Link}
              color="primary"
              href={siteConfig.links.contact}
              variant="flat"
            >
              Contact Me
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
          <ThemeSwitch />
          <NavbarMenuToggle />
        </NavbarContent>

        <NavbarMenu>
          <div className="mx-4 mt-2 flex flex-col gap-2">
            {siteConfig.navItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link color="foreground" href={item.href} size="lg">
                  {item.label}
                </Link>
              </NavbarMenuItem>
            ))}
            <NavbarMenuItem>
              <Link
                color="primary"
                onClick={openResumeModal}
                size="lg"
                className="cursor-pointer"
              >
                Resume
              </Link>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <Link color="primary" href={siteConfig.links.contact} size="lg">
                Contact Me
              </Link>
            </NavbarMenuItem>
          </div>
        </NavbarMenu>
      </NextUINavbar>

      <ResumeModal
        isOpen={isResumeModalOpen}
        onCloseAction={closeResumeModal}
      />
    </>
  );
};
