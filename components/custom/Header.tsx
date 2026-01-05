"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const navLinks = [
    { label: "For Employers", href: "employers" },
    { label: "For Candidates", href: "seekers" },
    { label: "Contact", href: "contact" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-border bg-background/90 px-4 md:px-10 py-3 md:py-4 backdrop-blur-sm">
        <div className="flex items-center gap-2 md:gap-4">
          <div className="flex items-center gap-2 md:gap-3 lg:flex-1">
            <Link href="#" className="flex items-center gap-2 group">
              <Image
                alt="RojMarg logo"
                height={40}
                width={40}
                className="h-8 w-8 md:h-10 md:w-10 object-cover rounded-full ring-1 ring-white/10"
                src="/logo.png"
              />
              <span className="font-semibold text-primary text-base md:text-lg tracking-tight group-hover:text-primary/40 transition-colors">
                RojMarg
              </span>
            </Link>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex flex-1 justify-end gap-8">
          <div className="flex items-center gap-6 lg:gap-9">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={`#${link.href}`}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm font-medium leading-normal text-foreground hover:text-primary transition-colors cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden flex items-center justify-center w-10 h-10 text-foreground"
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-2xl">
            {isMobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[57px] bg-background border-b border-border z-40 shadow-lg">
          <div className="flex flex-col p-4 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={`#${link.href}`}
                onClick={(e) => scrollToSection(e, link.href)}
                className="py-3 px-4 text-base font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
