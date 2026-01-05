"use client";

import React from "react";
import { Button } from "@/components/ui/button";

const Employers: React.FC = () => {
  const features = [
    {
      icon: "verified",
      title: "Qualified Talent",
      description:
        "Access a pre-vetted pool of candidates ready to contribute from day one.",
    },
    {
      icon: "support",
      title: "Recruitment Support",
      description:
        "Dedicated account managers to guide you through sourcing and interviewing.",
    },
    {
      icon: "handshake",
      title: "Outsource Hiring",
      description:
        "Let us handle the entire recruitment lifecycle so you can focus on business.",
    },
  ];

  return (
    <section
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background text-foreground"
      id="employers"
    >
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="flex flex-col gap-5 sm:gap-6 md:gap-8">
            <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
              <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-[9px] sm:text-[10px] md:text-xs text-primary">
                <span className="w-5 sm:w-6 md:w-8 h-[2px] bg-primary"></span>
                For Employers
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black leading-tight tracking-tight text-foreground">
                Build Your Dream Team with Confidence
              </h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-muted-foreground">
                Streamline your hiring process with our enterprise-grade
                solutions. We provide the tools and talent pool you need to
                scale effectively.
              </p>
            </div>

            <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-2.5 sm:gap-3 md:gap-4 p-2.5 sm:p-3 md:p-4 rounded-md sm:rounded-lg border border-border bg-card shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="mt-0.5 text-primary">
                    <span className="material-symbols-outlined text-lg sm:text-xl md:text-2xl">
                      {feature.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm sm:text-base md:text-lg text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-[10px] sm:text-xs md:text-sm mt-0.5 sm:mt-1 text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button className="w-fit mt-1 sm:mt-2 h-10 sm:h-11 md:h-12 px-4 sm:px-5 md:px-6 text-xs sm:text-sm md:text-base font-bold shadow-md">
              Start Hiring Now
            </Button>
          </div>

          {/* Image */}
          <div className="relative h-[200px] sm:h-[250px] md:h-[350px] lg:h-full lg:min-h-[400px] rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-xl order-first lg:order-last">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDuckBqNkTfuKJqOsw8O9nscM-u0hvAanlm7QN5-KFWOl55Cj5Ry0Mn8G6gXS9UpivRCOdqi7-EUm4GCuzT3tFV7C1CrttTKzZlpeLsyu7GIP0GfCsVRkAGn2muYoEvqwBkksOIgfsKa92erekWLGjmk1bo2UP8F5bxnB1_Fq_aCsTXgrT34wt_U19Xgxp4TKrQpxvJZLwd-vm3Sy1cFSufcO-8dVP4HlrO11E9W4RddGSjQqJRDVdLbVM2Jg6rJI8nR2nsKelBKhcc')",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Employers;
