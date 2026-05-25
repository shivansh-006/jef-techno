"use client";

import React, { useState } from "react";
import Link from "next/link";

const ServiceItem = ({ icon, text, path, isVisible }) => (
  <div
    className={`flex gap-5 items-center mt-8 first:mt-10 min-h-[50px] transition-all duration-500 ease-in-out ${
      isVisible
        ? "opacity-100 translate-y-0 visible"
        : "opacity-0 translate-y-4 invisible"
    }`}
  >
    <div className="w-20 h-20 flex items-center justify-center shrink-0">
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="w-full h-full object-contain"
      />
    </div>

    <Link href={path}>
      <div className="text-xs uppercase tracking-[3.36px] font-medium hover:text-gray-400">
        {text}
      </div>
    </Link>
  </div>
);

const ServiceItem2 = ({ icon, text, path, isVisible }) => (
  <div
    className={`flex gap-5 items-center mt-8 first:mt-10 min-h-[50px] transition-all duration-500 ease-in-out ${
      isVisible
        ? "opacity-100 translate-y-0 visible"
        : "opacity-0 translate-y-4 invisible"
    }`}
  >
    <div className="w-20 h-20 flex items-center justify-center shrink-0">
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="w-full h-full object-contain"
      />
    </div>

    <Link href={path}>
      <div className="text-xs uppercase tracking-[3.36px] font-medium hover:text-gray-400">
        {text}
      </div>
    </Link>
  </div>
);

const ServicesComponent = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  const services = [
    { icon: "/nav-esa-icon3.png", text: "CLPS", path: "/clps-products" },
    { icon: "/nav-earthing-icon3.png", text: "EARTHING GROUNDING", path: "/earthing-studies" },
    { icon: "/nav-ese-icon2.png", text: "ESE", path: "/ese-lightning-protection" },
    { icon: "/nav-esa-icon3.png", text: "ESA LIGHTNING PROTECTION", path: "/lightning-protection-studies" },
    { icon: "/nav-lps-icon2.png", text: "JEF-SHIELD & E-BUILD", path: "/coming-soon" },
    { icon: "/nav-industrial-icon2.png", text: "SPD", path: "/coming-soon" },
  ];

  const services2 = [
    { icon: "/nav-esa-icon3.png", text: "EARTHING HEALTH ASSESSMENT", path: "/audit-services/earthing-health-assessment" },
    { icon: "/nav-audit-icon2.png", text: "ELECTRICAL & FIRE SAFETY", path: "/audit-services/electical-and-fire-safety-audit" },
    { icon: "/nav-istrumentation-icon2.png", text: "INSTRUMENTATION SYSTEM", path: "/audit-services/instrumentation-system" },
    { icon: "/nav-power-studies-icon2.png", text: "POWER QUALITY SYSTEM", path: "/audit-services/power-quality-studies-and-analysis-services" },
    { icon: "/nav-lps-icon2.png", text: "LPS ADEQUACY", path: "/audit-services/lightning-protection-sytem-adequacy-audit" },
  ];

  const services3 = [
    { icon: "/nav-industrial-icon2.png", text: "INDUSTRIAL", path: "/industrial" },
    {
      icon: "/nav-renewable-icon2.png",
      text: "RENEWABLE",
      path: "/renewable",
      subItems: [
        { text: "1. PSS", path: "/pss" },
        { text: "2. RSA", path: "/rsa" },
      ],
    },
  ];

  return (
    <section className="flex flex-col h-[82vh] pl-[11%] px-16 pt-5 bg-[#312D2D] max-md:px-5">
      <div className="ml-10 w-full max-w-[1016px] h-full">
        <div className="flex gap-5 h-full max-md:flex-col">
          <div className="flex flex-col justify-start w-2/5 max-md:w-full">
            <header className="flex gap-7 items-center mt-14">
              <div className="text-base font-medium text-red-700 tracking-[3.36px]">01</div>
              <div
                onMouseEnter={() => { setIsHovered(true); setIsHovered2(false); setIsHovered3(false); }}
                className="flex gap-5 cursor-pointer"
              >
                <h2 className="text-lg text-white hover:text-gray-400 tracking-[3.36px]">OUR PRODUCTS</h2>
                <div className="flex items-center">
                  <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2bb3117bb1e657fdbc997cd15e47263db3ce1251843c4a3543e9042a61e0fd2a" alt="" className="w-2" />
                </div>
              </div>
            </header>

            <header className="flex gap-7 items-center mt-14">
              <div className="text-base font-medium text-red-700 tracking-[3.36px]">02</div>
              <div
                onMouseEnter={() => { setIsHovered2(true); setIsHovered(false); setIsHovered3(false); }}
                className="flex gap-5 cursor-pointer"
              >
                <h2 className="text-lg text-white hover:text-gray-400 tracking-[3.36px]">AUDIT SERVICES</h2>
                <div className="flex items-center">
                  <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2bb3117bb1e657fdbc997cd15e47263db3ce1251843c4a3543e9042a61e0fd2a" alt="" className="w-2" />
                </div>
              </div>
            </header>

            <header className="flex gap-7 items-center mt-14">
              <div className="text-base font-medium text-red-700 tracking-[3.36px]">03</div>
              <div
                onMouseEnter={() => { setIsHovered3(true); setIsHovered(false); setIsHovered2(false); }}
                className="flex gap-5 cursor-pointer"
              >
                <h2 className="text-lg text-white hover:text-gray-400 tracking-[3.36px]">CONSULTING SERVICES</h2>
                <div className="flex items-center">
                  <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2bb3117bb1e657fdbc997cd15e47263db3ce1251843c4a3543e9042a61e0fd2a" alt="" className="w-2" />
                </div>
              </div>
            </header>
          </div>

          <div className="flex flex-col w-3/5 h-full text-white">
            <div className="flex h-full items-start gap-10">
              <div className="w-[1px] bg-neutral-700 h-[70%] mt-10" />
              <div className="relative flex-1 h-full flex items-start">
                <div className={`absolute inset-0 grid grid-cols-2 gap-x-20 gap-y-10 content-start transition-all duration-300 ${isHovered ? "opacity-100 z-10" : "opacity-0 pointer-events-none z-0"}`}>
                  {services.map((service, index) => (
                    <ServiceItem key={index} {...service} isVisible={isHovered} />
                  ))}
                </div>

                <div className={`absolute inset-0 grid grid-cols-2 gap-x-20 gap-y-10 content-start transition-all duration-300 ${isHovered2 ? "opacity-100 z-10" : "opacity-0 pointer-events-none z-0"}`}>
                  {services2.map((service2, index) => (
                    <ServiceItem2 key={index} {...service2} isVisible={isHovered2} />
                  ))}
                </div>

                <div className={`absolute inset-0 grid grid-cols-2 gap-x-20 gap-y-10 content-start transition-all duration-300 ${isHovered3 ? "opacity-100 z-10" : "opacity-0 pointer-events-none z-0"}`}>
                  {services3.map((service, index) => (
                    <div key={index} className="group">
                      <ServiceItem {...service} isVisible={isHovered3} />
                      {service.subItems && (
                        <div className="ml-10 mt-3 text-sm text-gray-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                          {service.subItems.map((sub, i) => (
                            <div key={i}>{sub.text}</div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesComponent;
