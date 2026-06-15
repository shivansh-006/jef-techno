"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const PROGRESS_DURATION = 6000;
const PROGRESS_INTERVAL = 50;
const VISIBLE_TABS = 2;

const pages = [
  {
    label: "WHY DO YOU NEED\nLPS ADEQUACY\nAUDIT?",
    title: "WHY DO YOU NEED LPS ADEQUACY AUDIT?",
    content: (
      <ul className="list-disc space-y-3 pl-5 text-[16px] md:text-[18px] lg:text-[20px] font-medium leading-relaxed text-white">
        <li>To measure lightning risk to the structure and its contents.</li>
        <li>Identify structures which require protection and determine the level of protection required as per latest standards.</li>
        <li>To assess the condition and integrity of the existing LPS.</li>
        <li>To determine whether adequate lightning protection is in place to mitigate risk from radiated and conducted surges.</li>
        <li>Identify gaps in the present System with respect to latest and relevant standards.</li>
        <li>Compliance to latest and relevant standards.</li>
        <li>Recommendations for Corrective Action with BOQ & Drawings to ensure adequate protection.</li>
        <li>Design risk mitigation/management measures to enhance safety.</li>
      </ul>
    ),
  },
  {
    label: "APPLICATION AREA",
    title: "APPLICATION AREA",
    content: (
      <>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[1.5] text-white text-justify">
          Commercial & Cultural Heritage Buildings, Public Service Structures &
          Utilities, IT/ITES Facilities, Hospitals, Hotels, Retails outlets &
          shopping malls, Factories, Industries, Manufacturing plants, Oil & Gas,
          Metro rail, Process plants, Wind & Solar Plants, Tank farms, Critical
          structures like communication towers, power plants, substations and
          more
        </p>

        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[1.5] text-white text-justify">Get your risk assessment report, concept design drawings & bill of materials.</p>

        <button onClick={() => { window.location.href = "/Products/JEF-shield" }} className="w-fit rounded-full bg-black border-2 border-[#C02429] px-6 py-2 text-[#C02429] text-[14px] font-bold uppercase hover:underline">
          JEF Shield
        </button>
      </>
    ),
  },
];

export default function DetailedContent() {
  const [activePage, setActivePage] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setProgress((prev) =>
        prev >= 100 ? 100 : prev + (PROGRESS_INTERVAL / PROGRESS_DURATION) * 100
      );
    }, PROGRESS_INTERVAL);

    return () => clearInterval(interval);
  }, [activePage, isPaused]);

  useEffect(() => {
    if (progress >= 100) {
      setActivePage((prev) => (prev + 1) % pages.length);
      setProgress(0);
    }
  }, [progress]);

  const page = pages[activePage];

  return (
    <section 
      onClick={() => setIsPaused(!isPaused)}
      className="min-h-[760px] bg-[#161414] py-14 md:py-20 font-montserrat text-white overflow-hidden cursor-pointer"
    >
      <div className="section-container flex min-h-[650px] flex-col px-5 md:px-0">
        <motion.h2
          key={`title-${activePage}`}
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-9 text-[#C02429] text-[20px] md:text-[26px] font-bold uppercase tracking-[1px] md:tracking-[1.49px] leading-[1.4]"
        >
          {page.title}
        </motion.h2>

        <motion.div
          key={`content-${activePage}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="flex-1"
        >
          <div className="flex max-w-[1500px] flex-col gap-6">{page.content}</div>
        </motion.div>

        <div className="mt-12 md:mt-20 overflow-hidden">
         <div className="flex gap-4 md:gap-8">
            {pages.map((tab, index) => {
              const isCurrent = activePage === index;

              return (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActivePage(index);
                    setProgress(0);
                    setIsPaused(true);
                  }}
                className="group flex flex-col items-start text-left shrink-0"
                >
                  <div className="relative mb-3 h-[2px] w-60 bg-[#d4d0c8]/80">
                    <motion.div
                      className="absolute left-0 top-0 h-full bg-[#C02429]"
                      animate={{ width: isCurrent ? `${progress}%` : "0%" }}
                      transition={{ ease: "linear" }}
                    />
                  </div>

                  <span
                    className={`whitespace-pre-line text-[12px] md:text-[18px] uppercase tracking-[1px] md:tracking-[2.5px] font-medium leading-[1.35] transition-all ${
                      isCurrent
                        ? "text-[#C02429]"
                        : "text-[#d4d0c8] group-hover:text-white"
                    }`}
                  >
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
