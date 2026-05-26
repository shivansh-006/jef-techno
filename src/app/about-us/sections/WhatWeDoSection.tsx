"use client";

import { useState, useEffect } from "react";

export default function AboutUsServicesSection() {
  const [activeCard, setActiveCard] = useState(0);

  const [background, setBackground] = useState(
    "/HomePageImg/WhatWeDoSection/Solution-1.png"
  );

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const services = [
    {
      id: 0,
      title: "CONSULTING SERVICES",
      heading: "CONSULTING SERVICES",
      description:
        "Power System Studies using ETAP, PSCAD/EMTDC, PSS/E, DIgSILENT, SKM, and DSA Tools; and EMI/EMC Studies including AC interference analysis for pipelines.",
      background: "/HomePageImg/WhatWeDoSection/Solution-1.png",
      x: 200,
      y: 470,
      xmob: 110,
      ymob: 200,
      labelLeft: "-100px",
      labelTop: "-35px",
      labelWidth: "120px",
      mobileLabelLeft: "-55px",
      mobileLabelTop: "-22px",
      mobileLabelWidth: "90px",
    },

    {
      id: 1,
      title: "AUDIT SERVICES",
      heading: "AUDIT SERVICES",
      description:
        "Electrical and Fire Safety Audit powered by JEF Safety Audit Tool, Earthing Health Assessment of live installations and Instrumentation Earthing Audit for I&C systems.",
      background: "/HomePageImg/WhatWeDoSection/Solution-2.png",
      x: 320,
      y: 360,
      xmob: 250,
      ymob: 250,
      labelLeft: "0px",
      labelTop: "60px",
      labelWidth: "150px",
      mobileLabelLeft: "20px",
      mobileLabelTop: "20px",
      mobileLabelWidth: "130px",
    },

    {
      id: 2,
      title: "PRODUCTS",
      heading: "PRODUCTS",
      description:
        "Type-tested lightning protection components and systems, earthing and grounding system solutions, surge protective devices, and lightning risk assessment tools.",
      background: "/HomePageImg/WhatWeDoSection/Solution-5.png",
      x: 450,
      y: 240,
      xmob: 410,
      ymob: 300,
      labelLeft: "-20px",
      labelTop: "30px",
      labelWidth: "120px",
      mobileLabelLeft: "0px",
      mobileLabelTop: "25px",
      mobileLabelWidth: "90px",
    },
  ];

  const handleCardClick = (service) => {
    setActiveCard(service.id);
    setBackground(service.background);
  };

  return (
    <section className="relative w-full min-h-[1200px] lg:min-h-[1000px] overflow-hidden bg-black">
      {/* Background */}
      <img
        src={background}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover transition-all duration-1000"
      />

      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Main layout */}
      <div
        className="
          relative z-30
          flex flex-col
          lg:flex-row
          items-center
          lg:items-start
          justify-between
          w-full
          h-full
          px-6 sm:px-10 lg:px-20
          pt-12 lg:pt-20
          gap-14 lg:gap-8
        "
      >
        {/* LEFT HEADING */}
        <div className="w-full lg:w-[20%]">
          <h2
            className="
            lg:mt-40
              text-white
              font-lg
              uppercase
              tracking-[4px]
              text-[24px]
              md:text-[32px]
              lg:text-[30px]
              whitespace-nowrap
              
            "
          >
            WHAT WE DO
          </h2>
        </div>

        {/* CENTER J + dots */}
        <div
          className="
            relative
            w-full
            lg:w-[40%]
            h-[520px]
            md:h-[580px]
            lg:h-[650px]
            flex
            items-center
            justify-center
          "
        >
          <img
            src="/HomePageImg/J.png"
            alt="J"
            className="
              absolute
              hidden
              lg:block
              w-[220px]
              md:w-[280px]
              lg:w-[380px]
              opacity-90
            "
          />

          {services.map((service) => {
            const isActive = activeCard === service.id;

            return (
              <div
                key={service.id}
                className="absolute z-20 group cursor-pointer "
                style={{
                  top: isMobile ? `${service.ymob}px` : `${service.y}px`,
                  left: isMobile ? `${service.xmob}px` : `${service.x}px`,
                }}
                onMouseEnter={() => handleCardClick(service)}
                onClick={() => handleCardClick(service)}
              >
                <div
                  className={`absolute text-[10px] md:text-[11px] uppercase tracking-[2px] transition-all duration-300 ${
                    isActive ? "text-white" : "text-white/70"
                  }`}
                  style={{
                    left: isMobile
                      ? service.mobileLabelLeft
                      : service.labelLeft,
                    top: isMobile
                      ? service.mobileLabelTop
                      : service.labelTop,
                    width: isMobile
                      ? service.mobileLabelWidth
                      : service.labelWidth,
                  }}
                >
                  {service.title}
                </div>

                <button className="relative flex items-center justify-center">
                  <span
                    className={`absolute rounded-full border w-8 h-8 md:w-10 md:h-10 transition-all ${
                      isActive
                        ? "border-white scale-110"
                        : "border-white/40"
                    }`}
                  />

                  <span
                    className={`rounded-full w-4 h-4 md:w-5 md:h-5 transition-all ${
                      isActive
                        ? "bg-white"
                        : "bg-[#C61F26]"
                    }`}
                  />
                </button>
              </div>
            );
          })}
        </div>

        {/* RIGHT CONTENT */}
        <div
          className="
            w-full
            lg:w-[35%]
            max-w-[520px]
            lg:mt-40
          "
        >
          <div className="w-full h-[2px] bg-[#C61F26] mb-8" />

          <h3
            className="
              text-white
              uppercase
              tracking-[4px]
              text-[22px]
              md:text-[26px]
              lg:text-[30px]
              mb-6
            "
          >
            {services[activeCard].heading}
          </h3>

          <p
            className="
              text-white/90
              leading-[1.8]
              text-[15px]
              md:text-[18px]
              lg:text-[20px]
            "
          >
            {services[activeCard].description}
          </p>
        </div>
      </div>
    </section>
  );
}