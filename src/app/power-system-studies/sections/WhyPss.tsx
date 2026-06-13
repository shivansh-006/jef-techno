"use client";


import { motion } from "framer-motion";

const cards = [
  {
    id: 1,
    image: "/RCA/1.png",
    title: "FULL STUDY RANGE, SINGLE ACCOUNTABLE TEAM",
    description:
      "From ETAP-based steady-state studies to PSCAD electromagnetic transient analysis, we deliver the complete study programme end-to-end — with one team responsible for both the analysis and the engineering outcomes.",
  },
  {
    id: 2,
    image: "/RCA/2.png",
    title: "SOFTWARE INDEPENDENCE",
    description:
      "ETAP, PSCAD/EMTDC, PSS/E, DIgSILENT, SKM, and DSA Tools — no software constraint on what we can offer or how we work.",
  },
  {
    id: 3,
    image: "/RCA/3.png",
    title: "OIL AND GAS SECTOR DEPTH",
    description:
      "Offshore platforms, subsea cables, high-voltage GIS, complex multi-source networks. We know the operating environment and the standards that govern it.",
  },
  {
    id: 4,
    image: "/RCA/4.png",
    title: "STANDARDS-REFERENCED DELIVERABLES",
    description:
      "Every finding traceable to the specific standard clause that defines the requirement.",
  },
  {
    id: 5,
    image: "/RCA/5.png",
    title: "METHODOLOGY BEYOND THE MINIMUM",
    description:
      "We identify constraints and failure modes beyond standard studies, providing the project team with a complete picture before decisions become irreversible.",
  },
];
const duplicatedCards = [...cards, ...cards];

export default function WhyPss() {
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
            WHY JEF
          </h2>

         
           
           <p className="
              text-white
              text-[14px]
              md:text-[16px]
              leading-[1.7]
            ">
  As a pioneer in Earthing integrity testing services, we at JEF have over two decades of experience covering 300,000 riser connections <br/> spread across 18 countries, 400 substations ranging from 33kV to 765kV process plants and other critical installations. With several patents <br/> in this field, our level of expertise is unmatched even as we keep innovating further.
</p>
         
        </motion.div>

        {/* Infinite Slider */}
        <div className="mt-12 md:mt-20 relative overflow-hidden w-full">
          <motion.div
            className="flex gap-6 md:gap-12 w-max"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 45,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {duplicatedCards.map((card, index) => (
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
    </section>
  );
}
