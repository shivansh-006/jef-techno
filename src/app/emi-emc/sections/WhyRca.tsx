"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const cards = [
  {
    id: 1,
    image: "/EMIEMC/IDENTIFIES EMI ISSUES DURING DESIGN TO ENABLE ECONOMICAL MITIGATION.png",
    title: "SITE SURVEYS AND EMI/EMC ANALYSIS",
    description:
      "Comprehensive on-site surveys to identify sources of electromagnetic interference.\nDetailed analysis of interference levels affecting system performance.",
  },
  {
    id: 2,
    image: "/EMIEMC/IMPROVES THE RELIABILITY OF ELECTRICAL AND CONTROL SYSTEMS.png",
    title: "SHIELDING EFFECTIVENESS EVALUATION",
    description:
      "Assessment of shielding effectiveness in protecting sensitive areas from electromagnetic disturbances. Recommendations for improving shielding to ensure system reliability.",
  },
  {
    id: 3,
    image: "/EMIEMC/MINIMIZES NUISANCE TRIPPING AND UNPLANNED DOWNTIME.png",        
    title: "Grounding and Bonding Assessments",
    description:
      "Evaluation of grounding and bonding systems to minimize electromagnetic emissions. Design recommendations for improving system grounding, ensuring compatibility with sensitive devices.",
  },
  {
    id: 4,
    image: "/EMIEMC/REDUCES SYSTEM ERRORS AND COMMUNICATION DISTURBANCES.png",
    title: "EMC Compliance Testing",
    description:
      "Conducting tests to ensure equipment and systems comply with international EMC standards such as IEC 61000. Providing actionable insights for achieving regulatory compliance.",
  },
  {
    id: 5,
    image: "/EMIEMC/SUPPORTS COMPLIANCE WITH INTERNATIONAL EMC STANDARDS.png",
    title: "Mitigation Solutions",
    description:
      "Tailored solutions for mitigating EMI issues, including filtering, shielding, and redesigning system layouts. Implementation of advanced techniques to enhance electromagnetic compatibility.",
  },  
  {
    id: 6,
    image: "/EMIEMC/DELIVERS COMPLETE ENGINEERING SOLUTIONS FROM STUDY TO MITIGATION.png",
    title: "Simulation and Modelling",
    description:
      "Utilizing cutting-edge tools for simulating electromagnetic environments and analyzing interference patterns.Designing optimized layouts to minimize EMI risks.",
  },
];

export default function WhyRca() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardWidth = typeof window !== "undefined" && window.innerWidth >= 768 ? 460 : 300;
  const gap = typeof window !== "undefined" && window.innerWidth >= 768 ? 48 : 24;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  const offset = -(currentIndex * (cardWidth + gap));
  return (
    <section className="w-full bg-[#232427] py-16 md:py-[72px] overflow-hidden">
      <div className="section-container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <h2
            className="
              font-montserrat
              text-[24px]
              md:text-[32px]
              uppercase
              font-bold
              tracking-[2px]
              md:tracking-[4px]
              text-[#C02429]
            "
          >
            JEF'S EMI/EMC STUDY SERVICE
          </h2>

         
           
           {/* <p className=" text-white text-[14px] md:text-[16px] leading-[1.7]">
              JEF’s Root Cause Analysis services cater to a wide range of industries, providing customized solutions for:
            </p> */}
         
        </motion.div>

        {/* Manual Carousel */}
        <div className="mt-12 md:mt-20 relative">
          {/* Toggle Buttons */}
          <div className="flex gap-4 md:gap-6 mb-8 justify-center">
            <button
              onClick={handlePrev}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-white hover:bg-[#C02429] hover:border-[#C02429] transition-all flex items-center justify-center text-white "
              aria-label="Previous"
            >
              ←
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-white hover:bg-[#C02429] hover:border-[#C02429] transition-all flex items-center justify-center text-white"
              aria-label="Next"
            >
              →
            </button>
          </div>

          {/* Carousel Container */}
          <div className="overflow-hidden w-full">
            <motion.div
              className="flex gap-6 md:gap-12"
              animate={{ x: offset }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {cards.map((card, index) => (
              <div
                key={index}
                className="
                  w-[300px]
                  md:w-[460px]
                  min-w-[300px]
                  md:min-w-[460px]
                  flex
                  flex-col
                  gap-5
                  group
                "
              >
                {/* Image */}
                <div
                  className="
                    w-full
                    aspect-[463/239]
                    overflow-hidden
                   
                  "
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="
                      w-full
                      h-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3">
                  <h3
                    className="
                      text-white
                      uppercase
                      text-[14px]
                      md:text-[16px]
                      leading-[1.5]
                      font-medium
                    "
                  >
                    {card.title}
                  </h3>

                  <p
                    className="
                      text-[#D0D0D0]
                      text-[12px]
                      md:text-[14px]
                      leading-[1.7]
                      font-light
                    "
                  >
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
