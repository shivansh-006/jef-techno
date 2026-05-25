"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const pages = [
  {
    label: "LIGHTNING THREAT AND WHY PROTECTION",
    nav: "LIGHTNING THREAT\n& PROTECTION",
    title: "THE LIGHTNING THREAT AND WHY PROTECTION IS REQUIRED",
    content: (
      <>
        <p>
          Lightning is a high-energy electrical discharge between the
          atmosphere and the ground. The damage it causes to structures,
          equipment, and people falls into two broad categories. The first is
          direct physical damage. A lightning strike that terminates on a
          structure releases a large current — which may range from a few
          kiloamperes to several hundred kiloamperes depending on the severity
          of the event — into whatever path it finds to ground. If that path
          runs through the structural fabric of the building, through fuel or
          gas services, or through people in the vicinity, the consequences
          include fire, structural damage, explosion, and loss of life.
        </p>
        <p>
          The second is damage to electrical and electronic systems. Even when
          a strike does not contact a structure directly, the electromagnetic
          field associated with the lightning channel induces transient
          overvoltages onto cables and conductors within and around the
          building. These voltage spikes can destroy microelectronic
          components, corrupt data, cause equipment to fail in ways that are
          not immediately visible, and progressively shorten the service life
          of insulation systems and electronic assemblies.
        </p>
        <p>
          Modern industrial and commercial facilities are heavily dependent on
          electronic control systems, communications infrastructure, and data
          networks. The consequences of lightning damage to these systems
          extend well beyond the cost of the damaged equipment — they include
          production downtime, data loss, safety system unavailability, and
          regulatory non-compliance.
        </p>
        <p>
          A comprehensive lightning protection system addresses both
          categories of threat. The external system intercepts direct strikes
          and conducts their energy safely to ground. The internal system —
          equipotential bonding and surge protective devices — manages the
          overvoltages that would otherwise reach the electrical and
          electronic systems inside the building.
        </p>
      </>
    ),
    subsections: null,
  },
  {
    label: "IEC 62305:2024 STANDARD FRAMEWORK",
    nav: "IEC 62305:2024\nFRAMEWORK",
    title: "THE IEC 62305:2024 STANDARD FRAMEWORK",
    content: (
      <>
        <p>
          IEC 62305 is the internationally adopted standard series for
          protection against lightning. Published in four parts, it covers the
          complete scope of lightning protection — from the initial risk
          assessment that determines whether protection is required, through
          the physical design of the external system, to the protection of
          internal electrical and electronic installations.
        </p>
        <p>
          The 2024 edition is a full technical revision of the previous 2010
          edition, developed over an extended period by international
          technical committees. It introduces updated risk assessment methods,
          revised design requirements for the external system, clearer
          guidance on separation distances, and strengthened requirements for
          the protection of electronic systems and photovoltaic installations.
        </p>
      </>
    ),
    subsections: [
      {
        heading: "THE FOUR PARTS",
        tags: [
          "IEC 62305-1:2024 — General Principles",
          "IEC 62305-2:2024 — Risk Management",
          "IEC 62305-3:2024 — Physical Damage",
          "IEC 62305-4:2024 — Electrical & Electronic",
        ],
        tagDescriptions: [
          {
            title: "IEC 62305-1:2024 — General Principles",
            description:
              "Sets out the overall principles and structure of the standard series, including the nature of the lightning threat, the characteristics of lightning current, and the basis on which protection measures are selected. The 2024 edition introduces formal references to the IEC 62561 product testing series, creating an explicit link between system design requirements and the component performance standards that govern the products used to build those systems. Surge current parameters used for SPD selections are also more precisely defined.",
          },
          {
            title: "IEC 62305-2:2024 — Risk Management",
            description:
              "Provides the methodology for determining whether a structure requires lightning protection and to what level of protection. The 2024 revision consolidates separate risk categories — previously assessed independently — into a single total risk value, simplifying the assessment process. It replaces the previous lightning flash density parameter (Ng) with a ground strike-point density parameter (NSG), giving a more precise basis for estimating the number of hazardous events at a given location. The revised standard formally recognizes Thunderstorm Warning Systems as a tool that can reduce calculated risk in certain applications, and introduces frequency of damage to the assessment of impacts on the availability of critical internal systems.",
          },
          {
            title: "IEC 62305-3:2024 — Physical Damage to Structures and Life Hazard",
            description:
              "Defines the design, installation, inspection, and maintenance requirements for the external lightning protection system — the air termination, down conductors, and earthing. The 2024 revision introduces specified minimum thicknesses for metal sheet components used in air termination, addressing the risk that thin materials may be perforated or develop hot spots under lightning current. It provides more detailed treatment of air termination positioning methods for structures with complex geometries, including green roofs and projecting façade elements. It clarifies the two available approaches for separation distance calculation — a general method and a simplified method — LPS Products strengthens cross-referencing to the IEC 62561 component testing standards.",
          },
          {
            title: "IEC 62305-4:2024 — Electrical and Electronic Systems within Structures",
            description:
              "Covers the protection of internal electrical and electronic installations against the effects of lightning electromagnetic pulse (LEMP). The 2024 update aligns SPD selection requirements with the IEC 60364 series of electrical installation standards and introduces explicit references to IEC 61643-32 for the protection of photovoltaic systems. Requirements relating to SPD backup fuse dimensioning and status monitoring are also addressed.",
          },
        ],
      },
      {
        heading: "LIGHTNING PROTECTION LEVELS",
        body: "IEC 62305 defines four Lightning Protection Levels — LPL I through LPL IV. Each level corresponds to a defined set of design parameters, including the lightning current values used for component selection and the geometric parameters used for air termination design. The appropriate LPL for a given structure is determined through the risk assessment process under IEC 62305-2.",
        tags: ["LPL I", "LPL II", "LPL III", "LPL IV"],
        tagDescriptions: [
          {
            title: "LPL I",
            description:
              "Highest interception probability: 200 kA peak. Required for computer data centers, military applications, high rise hotels/hospitals, nuclear power stations, and airport essential services such as telecom.",
          },
          {
            title: "LPL II",
            description:
              "High interception probability: 150 kA peak. Required for low rise hotels/hospitals, ex zones in the industry and chemical sector, fuel retail outlets/gas stations/compressor stations and similar installations.",
          },
          {
            title: "LPL III",
            description:
              "Medium interception probability: 100 kA peak. Required for schools, banks, residential buildings, temples, churches, mosques, community halls etc.",
          },
          {
            title: "LPL IV",
            description:
              "Standard interception probability: 100 kA peak. Required for schools, banks, residential buildings, temples, churches, mosques, community halls etc.",
          },
        ],
      },
    ],
  },
  {
    label: "COMPREHENSIVE LIGHTNING PROTECTION SYSTEM",
    nav: "COMPREHENSIVE\nSYSTEM",
    title: "THE COMPREHENSIVE LIGHTNING PROTECTION SYSTEM",
    content: (
      <>
        <p>
          IEC 62305:2024 treats lightning protection as a system with two
          interdependent parts. Each addresses a distinct category of threat,
          and neither is adequate on its own.
        </p>
        <p>
          The external lightning protection system manages the direct
          lightning strike event. It intercepts the strike at the air
          termination, provides a defined current path down the structure
          through the down conductor system, and disperses the energy safely
          into the ground through the earth termination. Its primary function
          is to protect the structure from physical damage and fire, and to
          prevent dangerous touch and step voltages in the vicinity of the
          building.
        </p>
        <p>
          The internal lightning protection system manages the electrical
          consequences of a strike within the building. It uses equipotential
          bonding to eliminate dangerous potential differences between the LPS
          conductors and the metallic services, structural elements, and
          electrical systems inside the structure. Surge Protective Devices
          installed on all electrical and electronic lines limit the transient
          overvoltages that enter the building — whether from the strike event
          or from internal switching activity — to levels that connected
          equipment can safely withstand.
        </p>
        <p>
          IEC 62305-3 requires that both parts of the comprehensive lightning
          protection system be maintained and periodically inspected after
          installation, with inspection intervals determined by the LPL and
          the environmental conditions at the site.
        </p>
      </>
    ),
    subsections: [
      {
        heading: "EXTERNAL LIGHTNING PROTECTION",
        tags: [
          "Air Termination System",
          "Air Termination Positioning Methods",
          "Permitted Air Termination Types",
          "Down Conductor System",
          "Earth Termination System",
          "Equipotential Bonding",
        ],
        tagDescriptions: [
          {
            title: "Air Termination System",
            description:
              "The air termination system is positioned at the highest and most exposed points of the structure — the locations where a lightning leader is most likely to terminate. By placing conductors and rods at these positions and connecting them to the down conductor system, the air termination gives the strike a defined entry point into the protected system, rather than allowing it to contact uncontrolled elements of the structure such as cladding, roofing materials, or building services.",
          },
          {
            title: "Air Termination Positioning Methods (IEC 62305-3:2024)",
            description:
              "Three positioning methods are recognised under IEC 62305-3. The 2024 revision provides more detailed guidance on their application to complex and modern structures: Rolling Sphere Method, Mesh Method, and Protective Angle Method.",
          },
          {
            title: "Permitted Air Termination Types",
            description:
              "An air termination system may use vertical rods and masts, horizontal conductors, mesh conductors, catenary wires, or natural components (metallic elements permanently part of the structure). All elements must be interconnected to form a continuous network with down conductor connections made at regular intervals. Expansion connectors must be used where conductors cross structural expansion joints.",
          },
          {
            title: "Down Conductor System",
            description:
              "Down conductors carry the lightning current from the air termination network at roof level down to the earthing system. They are the vertical current-carrying spine of the external lightning protection system and must be designed to handle up to 200 kA (for LPL I) without creating arc-over hazards to adjacent metalwork or building services.",
          },
          {
            title: "Earth Termination System",
            description:
              "The earth termination system transfers electrical energy into the surrounding soil. Since lightning contains high-frequency content, performance is defined in terms of impulse impedance, not just DC resistance. An earthing system must be designed to disperse energy effectively without raising the structure's potential to dangerous levels.",
          },
          {
            title: "Equipotential Bonding",
            description:
              "Equipotential bonding prevents dangerous side flashes by connecting all conducting elements within the structure to the LPS. This ensures every conducting part rises to approximately the same potential simultaneously during a strike. Where a permanent metal connection cannot be made, a surge protective device (SPD) is used instead.",
          },
        ],
      },
    ],
  },
  {
    label: "JEF CLPS PRODUCTS",
    nav: "JEF CLPS\nPRODUCTS",
    title: "JEF CLPS PRODUCTS — TYPE-TESTED TO 200 KA / 10/350 MS",
    content: (
      <>
        <p>
          The CLPS range covers every component required for a comprehensive
          lightning protection system, from air termination to point-of-use
          surge protection. All components are type-tested to the IEC 62561
          series — the product testing companion to IEC 62305. The IEC 62561
          series defines the specific tests that LPS components must pass
          before they can be specified in a standards-compliant system.
        </p>
      </>
    ),
    subsections: [
      {
        heading: "TYPE TESTING — JEF'S 200 KA CREDENTIAL",
        body: "The IEC 62561 series specifies that external LPS components be type-tested to a 10/350 μs lightning impulse current. JEF type-tests its CLPS components at 200 kA on the 10/350 μs waveform — double the limit specified in the IEC standard series. This means that every JEF CLPS component has been verified to withstand twice the current magnitude that the standard requires, providing a margin of confidence that standard-minimum testing does not.\n\nType testing covers three sequential stages:",
        tags: ["Ageing Test", "Lightning Impulse Test", "Mechanical Test"],
        tagDescriptions: [
          {
            title: "Ageing Test",
            description:
              "The component is subjected to environmental exposure — humidity, salt mist, sulphur, and electrical impulse testing — to simulate long-term service conditions and verify that performance remains within acceptable limits after environmental ageing.",
          },
          {
            title: "Lightning Impulse Test — 10/350 µs Waveform",
            description:
              "The component is subjected to the specified lightning impulse current on the 10/350 µs waveform. JEF tests its CLPS components at up to 200 kA — double the IEC standard limit — verifying structural integrity without failure or unacceptable deformation.",
          },
          {
            title: "Mechanical Test",
            description:
              "The component is tested for mechanical strength and structural integrity under loading conditions expected during installation and service, including pull-out, bending, clamping, tightening torque, and dimensional verification.",
          },
        ],
        footer:
          "Type-test documentation is available for review. Certificates can be requested from JEF's engineering team.",
      },
    ],
  },
];

const PROGRESS_DURATION = 6000;
const PROGRESS_INTERVAL = 50;

const DetailedContent = () => {
  const [activePage, setActivePage] = useState(0);
  const [activeTags, setActiveTags] = useState({}); // format: { [si]: ti }
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);
  const startTimeRef = useRef(null);

  useEffect(() => {
    if (isPaused) {
      clearInterval(intervalRef.current);
      return;
    }

    if (startTimeRef.current === null) {
      startTimeRef.current = Date.now();
    } else {
      startTimeRef.current = Date.now() - (PROGRESS_DURATION * (progress / 100));
    }

    intervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const pct = Math.min((elapsed / PROGRESS_DURATION) * 100, 100);
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(intervalRef.current);
        const next = (activePage + 1) % pages.length;
        setActivePage(next);
        setActiveTags({});
        setProgress(0);
        startTimeRef.current = Date.now();
      }
    }, PROGRESS_INTERVAL);

    return () => clearInterval(intervalRef.current);
  }, [activePage, isPaused, progress]);

  const handleTabClick = (index) => {
    setActivePage(index);
    setActiveTags({});
    setProgress(0);
    startTimeRef.current = Date.now();
  };

  const page = pages[activePage];

  return (
    <section className="bg-[#232427] min-h-[700px] md:min-h-[980px] font-montserrat py-10 md:py-16 overflow-hidden">
      <div className="max-w-[1389px] mx-auto px-6 md:px-10 flex flex-col gap-10">
        {/* Heading */}
        <motion.h2
          key={`title-${activePage}`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[#C02429] text-[20px] md:text-[26px] font-bold tracking-[1px] md:tracking-[1.49px] leading-[1.4] md:line-height-[60px] uppercase"
        >
          {page.title}
        </motion.h2>

        {/* Content Area */}
        <div className="w-full relative z-20">
          {/* TOP SECTION: Page Intro OR Sub 0 Tag Description */}
          <div className="min-h-[100px]">
            <AnimatePresence mode="wait">
              {activeTags[0] !== undefined && page.subsections?.[0]?.tagDescriptions?.[activeTags[0]] ? (
                <motion.div
                  key={`tag-desc-0-${activeTags[0]}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col gap-4"
                >
                  <h3 className="text-[#C02429] text-[18px] md:text-[20px] font-bold tracking-[1px] leading-[1.4] uppercase">
                    {page.subsections[0].tagDescriptions[activeTags[0]].title}
                  </h3>
                  <p className="text-[16px] md:text-[20px] font-normal leading-[1.5] text-white">
                    {page.subsections[0].tagDescriptions[activeTags[0]].description}
                  </p>
                  <button
                    onClick={() => setActiveTags(prev => ({ ...prev, 0: undefined }))}
                    className="text-[#C02429] text-[14px] uppercase font-bold hover:underline w-fit"
                  >
                    ← Back to overview
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key={`page-intro-${activePage}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col gap-6"
                >
                  {React.Children.map(page.content.props.children, (child, i) => {
                    if (child.type === "p") {
                      return (
                        <p key={i} className="text-[16px] md:text-[20px] font-normal leading-[1.5] text-white">
                          {child.props.children}
                        </p>
                      );
                    }
                    return child;
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* SUBSECTIONS LOOP */}
          {page.subsections && page.subsections.map((sub, si) => (
            <div key={si} className="mt-10">
              {/* If si === 0, tags are ABOVE the heading */}
              {si === 0 && sub.tags && (
                <div className="flex flex-wrap gap-3 mb-6">
                  {sub.tags.map((tag, ti) => {
                    const isActive = activeTags[si] === ti;
                    return (
                      <button
                        key={ti}
                        onClick={() => setActiveTags(prev => ({ ...prev, [si]: isActive ? undefined : ti }))}
                        className={`border-[1.5px] border-[#c8c4bc] rounded-full px-5 py-2 text-[12px] md:text-[14px] font-normal transition-all duration-300 ${
                          isActive ? "bg-[#C02429] text-white border-[#C02429]" : "bg-transparent text-white hover:border-white"
                        }`}
                      >
                        {tag}
                      </button>
                    );
                  })}
                </div>
              )}

              <h3 className="text-[#C02429] text-[18px] md:text-[20px] font-bold tracking-[1px] leading-[1.4] uppercase mb-4">
                {sub.heading}
              </h3>

              {/* If si > 0, we have a swappable body area */}
              {si > 0 && (
                <div className="min-h-[50px]">
                  <AnimatePresence mode="wait">
                    {activeTags[si] !== undefined && sub.tagDescriptions?.[activeTags[si]] ? (
                      <motion.div
                        key={`tag-desc-${si}-${activeTags[si]}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4 }}
                        className="flex flex-col gap-4 mb-4"
                      >
                        <h4 className="text-white text-[16px] md:text-[18px] font-bold uppercase">
                          {sub.tagDescriptions[activeTags[si]].title}
                        </h4>
                        <p className="text-[16px] md:text-[20px] font-normal leading-[1.5] text-white">
                          {sub.tagDescriptions[activeTags[si]].description}
                        </p>
                        <button
                          onClick={() => setActiveTags(prev => ({ ...prev, [si]: undefined }))}
                          className="text-[#C02429] text-[14px] uppercase font-bold hover:underline w-fit"
                        >
                          ← Back to overview
                        </button>
                      </motion.div>
                    ) : (
                      <motion.div
                        key={`sub-body-${si}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4 }}
                      >
                        {sub.body && sub.body.split("\n\n").map((para, pi) => (
                          <p key={pi} className="text-[16px] md:text-[20px] font-normal leading-[1.5] text-white/80 mb-4">
                            {para}
                          </p>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}

              {/* If si > 0, tags are BELOW the body area */}
              {si > 0 && sub.tags && (
                <div className="flex flex-wrap gap-3 mt-6">
                  {sub.tags.map((tag, ti) => {
                    const isActive = activeTags[si] === ti;
                    return (
                      <button
                        key={ti}
                        onClick={() => setActiveTags(prev => ({ ...prev, [si]: isActive ? undefined : ti }))}
                        className={`border-[1.5px] border-[#c8c4bc] rounded-full px-5 py-2 text-[12px] md:text-[14px] font-normal transition-all duration-300 ${
                          isActive ? "bg-[#C02429] text-white border-[#C02429]" : "bg-transparent text-white hover:border-white"
                        }`}
                      >
                        {tag}
                      </button>
                    );
                  })}
                </div>
              )}

              {sub.footer && !activeTags[si] && (
                <p className="text-[16px] md:text-[20px] font-normal leading-[1.5] mt-6 text-white italic opacity-80">
                  {sub.footer}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Navigation */}
        <div className="mt-10 md:mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {pages.map((tab, index) => (
              <button
                key={index}
                onClick={() => handleTabClick(index)}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className="bg-none border-none cursor-pointer flex flex-col items-start w-full group"
              >
                {/* Progress bar */}
                <div className="w-full h-[2px] bg-[#d4d0c8] mb-3 relative z-10">
                  <motion.div
                    className="absolute top-0 left-0 h-full bg-[#C02429]"
                    initial={{ width: 0 }}
                    animate={{ width: activePage === index ? `${progress}%` : "0%" }}
                    transition={{ ease: "linear" }}
                  />
                </div>

                {/* Label */}
                <span
                  className={`text-[11px] md:text-[12px] tracking-[1px] md:tracking-[1.49px] uppercase leading-[1.3] text-left transition-colors duration-300 h-[2.6em] line-clamp-2 overflow-hidden ${
                    activePage === index ? "text-white font-bold" : "text-[#888] font-normal group-hover:text-white/60"
                  }`}
                  style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}
                >
                  {tab.nav}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailedContent;
