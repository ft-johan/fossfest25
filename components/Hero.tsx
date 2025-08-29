"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import Prism from "./ui/Prism";
 
export function Hero() {
  const navItems = [
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "Pricing",
      link: "#pricing",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];
 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
 
  return (
    <div className="relative w-full h-[100svh] overflow-hidden">
      {/* Prism Background */}
      <div className="fixed inset-0 w-full h-auto -z-10">
        <Prism
          animationType="hover"
          timeScale={0.5}
          height={2.5}
          baseWidth={4.2}
          scale={2.5}
          hueShift={0}
          colorFrequency={1}
          noise={0}
          glow={1}
        />
      </div>
      <Navbar className="absolute top-0 left-0 w-full z-10 pt-2">
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton variant="secondary">Login</NavbarButton>
            <NavbarButton variant="primary">Book a call</NavbarButton>
          </div>
        </NavBody>
 
        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>
 
          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Login
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Book a call
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
     
 
        {/* Hero Content */}
  <div className="flex flex-col items-center justify-center h-full px-4 text-center">
          <h1 className="text-4xl md:text-7xl  font-bold mb-4">Foss Fest 25</h1>
          <p className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-300 mb-6">Unlocking the Code: A Festival of Freedom</p>
          <p className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-300 mb-6">27th September 2025 . Krunagappally</p>

          <button className="px-6 py-2 rounded bg-black text-white dark:bg-white dark:text-black font-medium text-base md:text-lg transition hover:scale-105">Get Started</button>
        </div>
    </div>
  );
}
 