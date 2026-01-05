"use client";

import React from "react";

const Footer: React.FC = () => {
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    if (sectionId === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const sitemapLinks = [
    { label: "Home", href: "top" },
    { label: "Services", href: "services" },
    { label: "Employers", href: "employers" },
    { label: "Contact", href: "contact" },
  ];

  return (
    <footer className="bg-linear-to-b from-primary to-primary/90 dark:from-primary/95 dark:to-primary/80 border-t border-primary-foreground/10 pt-10 sm:pt-12 md:pt-20 pb-5 sm:pb-6 md:pb-8 px-4 sm:px-6 md:px-10 lg:px-20 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 mb-10 sm:mb-12 md:mb-20">
          {/* Sitemap */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs md:text-sm mb-4 md:mb-6 text-primary-foreground/60">
              Sitemap
            </h4>
            <ul className="space-y-3 md:space-y-4 text-xs md:text-sm font-medium uppercase tracking-wide text-primary-foreground">
              {sitemapLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={`#${link.href}`}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="hover:text-primary-foreground/70 transition-colors cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs md:text-sm mb-4 md:mb-6 text-primary-foreground/60">
              Socials
            </h4>
            <ul className="space-y-3 md:space-y-4 text-xs md:text-sm font-medium uppercase tracking-wide text-primary-foreground">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-foreground/70 transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-foreground/70 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-foreground/70 transition-colors"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-foreground/70 transition-colors"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs md:text-sm mb-4 md:mb-6 text-primary-foreground/60">
              Legal
            </h4>
            <ul className="space-y-3 md:space-y-4 text-xs md:text-sm font-medium uppercase tracking-wide text-primary-foreground">
              <li>
                <a
                  href="#"
                  className="hover:text-primary-foreground/70 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-foreground/70 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-foreground/70 transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs md:text-sm mb-4 md:mb-6 text-primary-foreground/60">
              Contact
            </h4>
            <div className="space-y-2 text-xs md:text-sm text-primary-foreground/80">
              <p>India (HQ)</p>
              <p className="break-all">info@devbhoomiglobalservices.com</p>
              <p>+91 9084017662</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center text-[8px] md:text-[10px] uppercase tracking-widest text-primary-foreground/50 font-bold">
          <p>© 2025 RojMarg. All Rights Reserved.</p>
        </div>
      </div>

      {/* Large Brand Text */}
      <div className="flex justify-center mt-8 md:mt-12 select-none pointer-events-none opacity-10">
        <h1 className="text-[13vw] md:text-[15.5vw] leading-none font-black text-primary-foreground tracking-tighter uppercase">
          RojMarg
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
