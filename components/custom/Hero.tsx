"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import bgImage from "@/assests/bg-2.png";

const Hero: React.FC = () => {
  return (
    <section className="relative lg:py-0 overflow-hidden bg-background text-foreground">
      {/* Grid container - full width for image to extend to edge */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center">
        {/* Left content - contained */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 md:gap-8 px-4 md:px-8 lg:pl-12 xl:pl-20 2xl:pl-32 py-8 lg:py-12 max-w-2xl lg:max-w-none"
        >
          {/* Badge */}
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 md:px-4 py-1 md:py-1.5 text-[10px] md:text-xs font-semibold text-primary">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            #1 Recruitment Platform in India
          </div>

          {/* Headline */}
          <div className="flex flex-col gap-4 md:gap-6">
            <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] md:leading-[1.05] tracking-tight text-foreground">
              Your <span className="text-primary">Next Hire</span>
              <br />
              Is One Click Away
            </h1>
            <p className="text-base md:text-lg lg:text-xl leading-relaxed max-w-lg text-muted-foreground">
              Connect with verified talent across India. From startups to
              enterprises, we power recruitment that works.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-3 md:flex-row md:gap-4">
            <Button
              size="lg"
              className="h-12 md:h-14 px-6 md:px-8 text-sm md:text-base font-bold rounded-xl shadow-lg shadow-primary/20"
            >
              <span className="material-symbols-outlined mr-2 text-lg md:text-xl">
                work
              </span>
              Hire Talent
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 md:h-14 px-6 md:px-8 text-sm md:text-base font-bold rounded-xl"
            >
              <span className="material-symbols-outlined mr-2 text-lg md:text-xl">
                search
              </span>
              Find Jobs
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 md:gap-8 pt-4">
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-black text-foreground">
                50K+
              </span>
              <span className="text-xs md:text-sm text-muted-foreground">
                Active Jobs
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-black text-foreground">
                10K+
              </span>
              <span className="text-xs md:text-sm text-muted-foreground">
                Companies
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-black text-foreground">
                98%
              </span>
              <span className="text-xs md:text-sm text-muted-foreground">
                Success Rate
              </span>
            </div>
          </div>

          {/* Trust logos */}
          <div className="pt-4 md:pt-6 border-t border-border">
            <p className="text-[10px] md:text-xs uppercase tracking-widest mb-3 md:mb-4 text-muted-foreground">
              Trusted by leading companies
            </p>
            <div className="flex flex-wrap items-center gap-4 md:gap-6 opacity-50">
              {[
                "change_history",
                "all_inclusive",
                "bolt",
                "diamond",
                "spa",
              ].map((icon, i) => (
                <span
                  key={i}
                  className="material-symbols-outlined text-2xl md:text-3xl text-foreground"
                >
                  {icon}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Hero Image - Desktop only, extends to right edge */}
        <motion.div
          initial={{ opacity: 0, x: 30, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative hidden lg:flex items-center justify-end h-full"
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2">
            <Image
              src={bgImage}
              alt="Team collaboration and recruitment network"
              width={700}
              height={700}
              className="w-auto h-screen max-h-[750px] object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
