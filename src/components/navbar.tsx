import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/navbar";
import { link as linkStyles } from "@heroui/theme";
import clsx from "clsx";

import { Logo } from "@/components/icons";
import { ThemeSwitch } from "@/components/theme-switch";
import { navbarItem } from "@/constants/navbar";
import { PhoneIcon } from "@heroicons/react/24/outline";
import { useCallback } from "react";
import { Popover } from "./Popover";
import { PopoverContent } from "./PopoverContent";

export const Navbar = () => {
  const renderLink = useCallback((label: string, href?: string) => {
    return (
      <Link
        className={clsx(
          linkStyles({ color: "foreground" }),
          "text-white hover:text-yellow-300 font-medium"
        )}
        href={href}
      >
        {label}
      </Link>
    );
  }, []);

  return (
    <HeroUINavbar
      maxWidth="xl"
      position="sticky"
      className="bg-blue-500 text-white"
    >
      {/* Brand Section */}
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <Link
            className="flex justify-start items-center gap-1"
            color="foreground"
            href="/"
          >
            <Logo />
            <p className="font-bold text-white">Kazano Tour</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Navigation Links */}
      <NavbarContent className="hidden lg:flex gap-4 justify-start ml-2">
        {navbarItem.map((item, index) => (
          <NavbarItem key={index}>
            {item.isNotLink ? (
              <Popover
                title={renderLink(item.label)}
                content={<PopoverContent />}
              />
            ) : (
              renderLink(item.label, item.href)
            )}
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Right Section */}
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem>
          <Link
            href="/contact"
            className="flex items-center gap-2 text-white hover:text-yellow-300"
          >
            <PhoneIcon className="w-5 h-5" />
            Contact Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem>
          <Button
            className="bg-yellow-400 text-blue-900 font-bold hover:bg-yellow-500"
            variant="flat"
          >
            Book Now
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {[
            { label: "Home", href: "/" },
            { label: "Destinations", href: "/destinations" },
            { label: "Tours", href: "/tours" },
            { label: "About Us", href: "/about" },
            { label: "Contact", href: "/contact" },
          ].map((item, index) => (
            <NavbarMenuItem key={`${item.label}-${index}`}>
              <Link
                href={item.href}
                className="text-lg text-blue-500 hover:text-yellow-500"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
