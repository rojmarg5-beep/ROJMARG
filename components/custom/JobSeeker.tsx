"use client";

import React from "react";
import { Button } from "@/components/ui/button";

const JobSeeker: React.FC = () => {
  const features = [
    {
      icon: "rocket_launch",
      title: "Fast Application",
      description: "One-click apply to thousands of jobs.",
    },
    {
      icon: "domain",
      title: "Verified Companies",
      description: "Work with trusted, vetted employers.",
    },
    {
      icon: "psychology",
      title: "Skill Matching",
      description: "AI-driven recommendations for you.",
    },
    {
      icon: "trending_up",
      title: "Career Growth",
      description: "Resources to help you negotiate better.",
    },
  ];

  return (
    <section
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-muted text-foreground"
      id="seekers"
    >
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1 relative h-[200px] sm:h-[250px] md:h-[350px] lg:h-full lg:min-h-[400px] rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-xl">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBQEDJ-WgMrs1WKpq69_z8YzGR_teAg3c5h97F3iM31KoQOBKv0VZDOAEufq1tY_rvQajx1dnwjs7X_rsl5G6FfLLc0w2evsthaon0XkpOpNV5THg_QI-Ur-iyCEZukiyxy43wPu2_hMKqsDWCWQjud3Zk-9wH_WUHNmOYoTTquvu-zU6KguwRl1L6dm1mw-SSAHvxncF-LywiKLJ_WwIPPbKLfA2dxhKhVUP1b4664imRKcrQ6w4h46TbARjAAF0f-7BcLRAGoIsdN')",
              }}
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 flex flex-col gap-5 sm:gap-6 md:gap-8">
            <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
              <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-[9px] sm:text-[10px] md:text-xs text-primary">
                <span className="w-5 sm:w-6 md:w-8 h-[2px] bg-primary"></span>
                For Job Seekers
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black leading-tight tracking-tight text-foreground">
                Land Your Dream Role Faster
              </h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-muted-foreground">
                Stop endless searching. Create one profile and get matched with
                top companies looking for your specific skills.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-1 sm:gap-1.5 md:gap-2 p-2.5 sm:p-3 md:p-5 rounded-md sm:rounded-lg md:rounded-xl border border-border bg-card hover:shadow-md transition-shadow"
                >
                  <span className="material-symbols-outlined text-primary text-xl sm:text-2xl md:text-3xl">
                    {feature.icon}
                  </span>
                  <h3 className="font-bold text-xs sm:text-sm md:text-base text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-[10px] sm:text-xs md:text-sm hidden sm:block">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <Button
              variant="outline"
              className="w-fit mt-1 sm:mt-2 h-10 sm:h-11 md:h-12 px-4 sm:px-5 md:px-6 text-xs sm:text-sm md:text-base font-bold shadow-md bg-background text-primary hover:bg-primary/90 hover:text-background transition-colors duration-75"
            >
              Find a Job
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobSeeker;
