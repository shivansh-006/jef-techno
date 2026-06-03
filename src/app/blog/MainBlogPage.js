'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const blogData = {
  'blog1': {
    category: "BLOG",
    title: "EARTHING AND LIGHTNING PROTECTION FOR RELIGIOUS STRUCTURES",
    date: "",
    imageUrl: "/BlogImg/blog-1.png",
    metaTags: {
      title: "Earthing & Lightning Protection for Religious Structures | JEF Techno",
      description: "Learn the importance of earthing and lightning protection for temples, churches, mosques, and religious structures. Protect people, assets, and heritage buildings from lightning-related risks.",
      keywords: "earthing system, lightning protection system, temple lightning protection, church grounding, mosque earthing, lightning safety, surge protection, grounding solutions, electrical safety, JEF Techno",
      robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      canonical: "https://www.jeftechno.com/blog/earthing-lightning-protection-for-religious-structures",
    },
    content: (
      <div className="flex flex-col gap-8 text-white/80 font-light leading-relaxed">
        <p>
          Lightning / Thunder Strikes can pose a consequential risk to human life, and conventional protection measures can mitigate this danger. Like any other building, religious structures are at risk of Thunder strikes. Therefore, installing earthing and lightning protection systems is essential.
        </p>

        <p>There are several reasons why religious structures should have earthing and LPS.</p>

        <div>
          <h3 className="text-white font-bold mb-2 uppercase">Safety of Worshipers:</h3>
          <p>
            These systems ensure the safety of worshipers who gather in religious structures. Earthing and lightning protection systems help dissipate the electrical charge safely into the ground, reducing the risk of damage to the building's infrastructure and, more importantly, keeping people safe.
          </p>
        </div>

        <div>
          <h3 className="text-white font-bold mb-2 uppercase">Preservation of Cultural and Historical Heritage:</h3>
          <p>
            Many religious structures hold significant cultural and historical value. By Lightning Risk management, these structures can be preserved from damage caused by lightning strikes, thereby safeguarding cultural heritage.
          </p>
        </div>

        <div>
          <h3 className="text-white font-bold mb-2 uppercase">Protection of Religious Artifacts:</h3>
          <p>
            Religious structures often hold symbolic significance for their respective communities. It has valuable artefacts, artwork, and religious symbols. Lightning strikes can damage or destroy these items, but Lightning Risk Management can help minimize such risks, ensuring the preservation of religious artefacts.
          </p>
        </div>

        <div>
          <h3 className="text-white font-bold mb-2 uppercase">Continuity of Religious Practices:</h3>
          <p>
            Ensuring the safety and integrity of religious structures through Comprehensive earthing and LPS allows for the uninterrupted continuation of religious practices and ceremonies without the threat of disruptions caused by lightning strikes or structural damage.
          </p>
        </div>

        <div>
          <h3 className="text-white font-bold mb-2 uppercase">Community Center:</h3>
          <p>
            Many religious structures serve as community centres and gathering places beyond religious activities. Protecting these buildings from thunder strikes enhances community safety and well-being, fostering a sense of security among the congregants and residents.
          </p>
        </div>

        <div>
          <h3 className="text-white font-bold mb-2 uppercase">Regulatory Compliance:</h3>
          <p>
            In many regions, there are building codes and regulations that mandate the installation of earthing and lightning protection systems for public buildings, including religious structures. Compliance with these regulations ensures that the religious structures meet safety standards. As per standard designed LPS (Lightning Protection System) can greatly reduce risk of damage.
          </p>
        </div>

        <div>
          <h3 className="text-white font-bold mb-2 uppercase">Lightning Risk Management:</h3>
          <p>
            It is to keep the risks at manageable/tolerable levels. IS/IEC 63205-2, provides a detailed procedure for lightning risk assessment and it presents a tolerable limit of risk. By determining the actual risk to be evaluated the protection methods required to reduce the actual risk to be equal or lower than the tolerable risk.
          </p>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4 uppercase">We Offer Comprehensive Lightning Protection Systems/Solutions:</h3>
          <ul className="list-disc pl-5 flex flex-col gap-2">
            <li>Site Survey (If required)</li>
            <li>Risk Assessment</li>
            <li>LPS Air Terminal Positioning Design</li>
            <li>Down Conductor Design</li>
            <li>Structural Earthing Design</li>
            <li>Basement Earthing Equipotential Bonding Design</li>
            <li>Surge Protection Devices (SPDs)</li>
            <li>Supply of all LPS components</li>
            <li>Supervision and Commissioning Services</li>
            <li>LPS Adequacy Study and Recommendation for Existing Structures</li>
          </ul>
        </div>

        <p>Please let us know if you need further assistance or have any requirements: marketing@jeftechno.com</p>
      </div>
    )
  },

  'blog2': {
    category: "BLOG",
    title: "MEASUREMENT, SIMULATION, VALIDATION – THE 3 KEY STEPS OF POWER SYSTEM STUDIES",
    date: "",
    imageUrl: "/BlogImg/blog-5.png",
    metaTags: {
      title: "3 Key Steps of Power System Studies | Measurement, Simulation & Validation | JEF Techno",
      description: "Discover the 3 key steps of power system studies—measurement, simulation, and validation. Learn how these processes improve electrical system safety, reliability, efficiency, compliance, and operational performance.",
      keywords: "Power System Studies, Measurement Simulation Validation, Load Flow Study, Short Circuit Analysis, Arc Flash Study, Harmonic Analysis, Electrical Power System Design, Power System Engineering, Electrical Safety, Power System Reliability, ETAP Analysis, Power Quality Study, Relay Coordination Study, Electrical Grid Analysis, Power System Simulation",
      robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      canonical: "https://www.jeftechno.com/blog/3-key-steps-of-power-system-studies",
    },
    content: (
      <div className="flex flex-col gap-8 text-white/80 font-light leading-relaxed">
        <p>
          Power system studies are essential for the development, design, and analysis of electric power systems. They help ensure the safety and reliability of power systems while also minimizing environmental impact. They are used to investigate the behaviour of power systems under normal and abnormal conditions and to identify and quantify the associated risks.
        </p>

        <div>
          <h3 className="text-white font-bold mb-4 uppercase">Various types of power studies include:</h3>

          <div className="flex flex-col gap-4">
            <div>
              <h4 className="text-white font-semibold mb-1">Harmonic Study and Analysis</h4>
              <p>This study aims to assess the area's harmonic footprint and, in accordance, offer remedial actions to reduce harmonic distortions, promote power conservation, and assure standard compliance.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1">Transient Stability studies</h4>
              <p>A power system transient study uses industry-accepted mitigation techniques to reduce the negative impacts of regularly occurring transients in a power system to increase system dependability. Such power system stability studies cover rotor angle stability and voltage stability.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1">Arc Flash Study</h4>
              <p>With the use of IEEE or NFPA equations, Arc Flash Hazard Analysis assists in determining the incidence energy levels in the event of an arc fault. This typically includes all the major power systems studies that are required for any power systems facility.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1">Load Flow Analysis</h4>
              <p>A load flow study is done to configure the system with known loads and ascertain how the system's current, power factor, and voltage are impacted. This investigation is crucial for figuring out whether power factor adjustment is required and how to go about doing it.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1">Breaker Coordination Study</h4>
              <p>The tripping timings for the sequence of overcurrent devices being compared are examined using this study, typically from the source through the biggest branch circuit device.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1">Voltage Drop Study</h4>
              <p>Voltage drop study and analysis are done for overvoltage study and voltage drops in the electrical circuit and network during normal and emergency processes.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4 uppercase">Key steps in power system studies</h3>
          <ul className="list-disc pl-5 flex flex-col gap-4">
            <li>
              <strong>Measurement</strong> is the first step in any power system study. Measurement is the process of collecting data about the system. It is important to accurately measure key parameters such as voltage, current, power, and energy to properly assess the system status. This data can come from sensors, meters, and other sources. In any power system, be it a distribution network, a transmission network, or even a microgrid, these studies collect data about the current state of a power system issues which is needed to understand its behavior. This data can be used to validate models and simulations, or it can be analyzed directly to assess risk. Many different types of measurements can be taken in a power system such as voltage, power, and circuit measurements, and each type of measurement will provide valuable information about the system.
            </li>
            <li>
              <strong>Simulation</strong> is another important tool that is often used in conjunction with measurement in power system studies. Simulations allow for the testing of different scenarios without having to physically modify the system, which can save time and money. They also allow for a greater level of control over experimentation, as it is possible to change variables and test different combinations of conditions more easily than would be possible in the real world. These studies use computer models to simulate the behaviour of power systems under different conditions. This allows for the power system studies software to analyze a wider range of scenarios than is possible with measurements alone.
            </li>
            <li>
              <strong>Validation</strong> is the process of comparing the predictions made by the model to actual measurements made on the system. This comparison can be used to assess the accuracy of the model and improve it if necessary. Validation ensures that the results of the simulation accurately represent reality. There are many different ways to validate power system models. One common method is to compare the results of the model to actual measurements from the power system. This can be done by comparing voltage and current measurements from sensors in the power system to the corresponding values predicted by the model. If there is a good agreement between the two, then it can be said that the model is accurate. By comparing the results of multiple simulations, it is possible to get a more accurate picture of what is happening in the power system. In general, validation is an important step in any scientific study.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-2 uppercase">Importance of Power System Analysis</h3>
          <p>
            A Power system analysis and design ensure a reliable and robust electrical system that performs in all operating conditions. It is also required to plan for the future development of the current systems and analyze systems under different fault conditions and based on different scenarios. The system studies also aid in designing protection devices and investigating the system's ability to handle minor and major interruptions or errors.
          </p>
          <p className="mt-4">
            The future and purpose of power system studies are likely to focus on improving the efficiency of existing power systems and developing new, more efficient systems. As the world progresses and technology advances, the electricity demand also increases.
          </p>
        </div>

        <div>
          <h3 className="text-white font-bold mb-2 uppercase">JEF Techno – Your Trusted Partner in Power System Studies</h3>
          <p>
            We at JEF Techno, are pioneers in power system study. Our expert power system consultants conduct an advanced study based on the latest Indian and international standards to ensure human and equipment safety. We provide detailed reports with findings, recommendations for corrective action, load flow analysis, short circuit analysis, breaker coordination study, and arc flash incident energy labels.
          </p>
          <p className="mt-4">
            Our risk assessment reports go a step further by including Equipment Labels, establishing arch flash boundary zones, identifying safe working distances, and using suitable PPE Categories to be used for each piece of equipment.
          </p>
        </div>
      </div>
    )
  },

  'blog3': {
    category: "BLOG",
    title: "WHAT ARE THE CHALLENGES FOR ELECTRICAL SYSTEM DESIGN AND ENGINEERING IN GREENFIELD PROJECTS",
    date: "",
    imageUrl: "/BlogImg/blog-3.png",
    metaTags: {
      title: "Electrical Safety for Greenfield Projects | Challenges, Design & Risk Management | JEF Techno",
      description: "Learn the importance of electrical safety in greenfield projects. Discover challenges, electrical system design considerations, grounding, lightning protection, power quality studies, renewable energy integration, and safety compliance strategies.",
      keywords: "Electrical Safety for Greenfield Projects, Greenfield Project Electrical Design, Electrical Safety Engineering, Grounding Systems, Earthing Design, Lightning Protection System, Power Quality Analysis, Electrical Load Analysis, Electrical Infrastructure Design, Renewable Energy Integration, Electrical Risk Assessment, Electrical Safety Audit, Industrial Electrical Safety, Electrical Engineering Services, Power System Studies",
      robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      canonical: "https://www.jeftechno.com/blog/electrical-safety-for-greenfield-projects",
    },
    content: (
      <div className="flex flex-col gap-8 text-white/80 font-light leading-relaxed">
        <div>
          <h3 className="text-white font-bold mb-2 uppercase">Ensuring Electrical Safety in Greenfield Projects</h3>
          <p>
            Greenfield projects refer to construction projects on land where no previous development has taken place. These projects present unique challenges when it comes to electrical safety. The construction site is often remote and the installation of electrical systems is often complex. Additionally, the lack of existing infrastructure can make it difficult to implement safety measures that are standard on established sites.
          </p>
          <p className="mt-4">
            This blog will look at the importance of electrical safety in greenfield projects in India. We will look at the difficulties encountered during electrical safety implementation, such as the installation of Lightning Protection Systems (LPS) and earthing, electrical load analysis, intricate electrical design, identifying potential power system issues, and the critical factors to consider for efficient electrical system design and engineering.
          </p>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4 uppercase">Factors to Consider for Efficient Electrical System Design and Engineering in Greenfield Projects:</h3>
          <ul className="list-disc pl-5 flex flex-col gap-4">
            <li><strong>Project plan:</strong> The project plan is a vital aspect of any business. Apart from the project timeline, milestones, and deliverables, it must include a risk assessment plan identifying potential risk and how to mitigate them. This is extremely important, especially in greenfield projects.</li>
            <li><strong>Efficient electrical system:</strong> Designing an electrical system for a greenfield project is complex. It requires a thorough understanding of the project's requirements and a comprehensive knowledge of the latest electrical technologies, electrical construction, and installation. It should also include an extensive electrical load analysis to ensure the electrical infrastructure meets the required power demand while optimizing energy efficiency.</li>
            <li><strong>Compliance with local regulations and codes:</strong> Compliance with local regulations and codes is essential for any construction project, and greenfield projects are no exception. Electrical installations must comply with various regulations and codes, which vary depending on the location.</li>
            <li><strong>Selection, installation, and testing of electrical equipment:</strong> The selection of electrical equipment is critical for the performance and reliability of the electrical system. The installation and testing of electrical equipment should be carried out by qualified and experienced personnel with the necessary skills and knowledge to ensure that the equipment is installed and functioning properly. Before the electrical system is put into operation, electrical system testing and commissioning should be carried out thoroughly. This also includes testing all electrical components and systems, including the power supply, distribution, and control systems.</li>
            <li><strong>Grounding systems:</strong> The design and installation of grounding systems are imperative for ensuring the safety and reliability of the electrical system. However, installing grounding systems can be challenging in greenfield projects, as the soil conditions and other environmental factors may vary.</li>
            <li><strong>Lightning protection:</strong> Lightning strikes can cause significant damage to a process plant, including equipment damage, fires, and even explosions. Lightning protection services can help protect the plant and its employees by ensuring that the electrical systems are adequately grounded and that any lightning strikes are safely directed away from the facility.</li>
            <li><strong>Power Quality:</strong> Power quality is another significant consideration in greenfield projects. Power quality issues can lead to equipment damage, downtime, and even safety hazards. It is important to carry out power system studies to evaluate power quality, identify potential power system issues, and offer recommendations for power system improvements. These studies can help ensure the plant's electrical systems are reliable, efficient, and safe for employees.</li>
            <li><strong>Renewable Energy Integration:</strong> In any greenfield project, renewable energy integration should be a priority. Wind and solar plant projects along with other forms of renewable energy should be considered during the electrical design phase to help offset the energy demand and reduce the carbon footprint of the project. The location and orientation of the renewable energy sources should also be considered to maximize energy generation.</li>
            <li><strong>Energy Management System:</strong> An energy management system should be considered during a greenfield project's electrical construction and installation phase. This system can be used to monitor and control energy consumption and production within the project. An effective energy management system helps optimize energy efficiency, reduce energy waste, and improve the project's overall sustainability.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-2 uppercase">The Importance of Electrical Safety in Greenfield Projects</h3>
          <p>
            Electrical safety is paramount on any construction site. This is especially true in greenfield projects where the installation of electrical systems is often complex and requires careful planning and execution. Failure to adhere to safety guidelines can result in serious injuries, fatalities, and damage to equipment and property.
          </p>
          <p className="mt-4">
            Electrical safety measures are designed to protect workers and equipment from electrical hazards. These hazards can include electrical shock, burns, fires, and explosions. To mitigate these risks, safety measures must be implemented at all stages of the construction process. This includes the design phase, the installation phase, and the operation phase.
          </p>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4 uppercase">Challenges Faced While Implementing Electrical Safety</h3>
          <p>Greenfield projects face several challenges when it comes to implementing electrical safety measures. Some of the key challenges include:</p>
          <ul className="list-disc pl-5 flex flex-col gap-2 mt-4">
            <li><strong>Lack of infrastructure:</strong> Greenfield projects are often located in remote areas where there is no existing infrastructure. This can make it difficult to implement safety measures that are standard on established sites, such as access to power, water, and telecommunications.</li>
            <li><strong>Limited access to skilled labor:</strong> Greenfield projects require specialized skills and expertise to install and maintain electrical systems. This can make it difficult to find skilled labor in remote locations.</li>
            <li><strong>Complex installation:</strong> The installation of electrical systems in greenfield projects is often complex and requires careful planning and execution. This can make it difficult to ensure that safety measures are implemented at all stages of the installation process.</li>
            <li><strong>Extreme weather conditions:</strong> Greenfield projects are often located in areas with extreme weather conditions. This can make it difficult to ensure that electrical systems are installed and maintained safely and reliably.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-2 uppercase">How can we help?</h3>
          <p>
            At JEF Techno, we offer project management and support services, which can help streamline the construction and installation process. Our team of professionals can work closely with contractors and project managers to ensure the project is completed on time, within budget, and to the highest quality standards.
          </p>
          <p className="mt-4">
            We provide engineering solutions for power distribution, lighting systems, HVAC control, and building automation systems, among others. Our experienced engineers can conduct required electrical safety inspections and audits and develop electrical designs that are energy-efficient, reliable, and cost-effective, ensuring that the project is built with the most advanced technology and industry standards. Being pioneers in offering grounding and lightning protection solutions for over 28 years, we are a trusted name in risk management and reliability across the globe. At JEF, we enable holistic energy efficiency and sustainability consulting that keeps sustainability and wellness at the center stage of the estate.
          </p>
        </div>
      </div>
    )
  },

  'blog4': {
    category: "BLOG",
    title: "WHY ELECTRICAL SAFETY IS CRITICAL FOR CHEMICAL AND PHARMA INDUSTRIES: BEST PRACTICES FOR PREVENTING WORKPLACE ACCIDENTS",
    date: "",
    imageUrl: "/BlogImg/blog-4.png",
    metaTags: {
      title: "Importance of Electrical Safety in Chemical and Pharma Industries | Workplace Safety & Risk Prevention | JEF Techno",
      description: "Learn why electrical safety is critical in chemical and pharmaceutical industries. Explore best practices for preventing workplace accidents, electrical hazards, explosions, fires, equipment failures, and ensuring regulatory compliance.",
      keywords: "Electrical Safety in Chemical Industry, Pharmaceutical Industry Electrical Safety, Chemical Plant Safety, Electrical Hazard Prevention, Explosion Proof Equipment, Lockout Tagout LOTO, Electrical Safety Audit, Workplace Electrical Safety, Electrical Risk Assessment, Industrial Electrical Safety, Fire and Explosion Prevention, Hazardous Area Classification, Electrical Equipment Maintenance, Arc Flash Protection, Electrical Compliance Standards",
      robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      canonical: "https://www.jeftechno.com/blog/importance-of-electrical-safety-in-chemical-and-pharma-industries",
    },
    content: (
      <div className="flex flex-col gap-8 text-white/80 font-light leading-relaxed">
        <p>
          Electrical safety is essential to workplace safety in the chemical and pharmaceutical industries. These industries involve complex machinery and equipment, including electrical systems, which, if not handled properly, can lead to dangerous accidents. The risk of electrical hazards in these industries is heightened due to highly reactive chemicals, flammable substances, humidity, and aggressive chemicals that can ignite and cause fires and explosions.
        </p>
        <p>
          The consequences of an electrical accident can be devastating, leading to injuries, fatalities, property damage, and financial loss. Moreover, these incidents can cause significant disruptions to operations, affect production timelines, and damage the organization's reputation. Therefore, chemical and pharmaceutical industries must prioritize electrical safety and implement best practices to prevent workplace accidents and failure of electronic components.
        </p>
        <p>
          One of the critical steps to ensuring electrical safety for chemical plants and pharmaceuticals is to develop and implement a comprehensive electrical safety program that outlines the procedures and protocols for identifying, mitigating, and managing electrical hazards. This program should cover all aspects of electrical safety, including equipment selection and maintenance, worker training and qualification, hazard identification and assessment, and emergency response procedures. Few other initiatives that organizations must follow include:
        </p>

        <ul className="list-disc pl-5 flex flex-col gap-4">
          <li><strong>Regular electrical safety inspections:</strong> Regular inspections of electrical equipment, wiring, and systems can identify potential hazards and prevent accidents and chemical accidents from electric power outages before they can cause an accident. Safety audits for the pharmaceutical industry and electrical safety audits should be conducted according to manufacturer guidelines, industry standards, and regulatory requirements for thorough risk assessment.</li>
          <li><strong>Proper training:</strong> Training employees about electrical safety is the first and most crucial step in preventing workplace accidents. Employees must receive adequate training on safely using electrical equipment, handling hazardous materials, and emergency response procedures. Regular training should be provided to the entire workforce, including operators, maintenance personnel, and management. The electrical safety training should be comprehensive and cover the potential hazards associated with electrical equipment, safe work practices, chemical accidents, power system failures, electrical power distribution systems, short circuits, and emergency procedures.</li>
          <li><strong>Appropriate personal protective equipment (PPE):</strong> Personal protective equipment should be used when working with electrical equipment. Employees should wear PPE, such as safety glasses, gloves, and fire-resistant clothing when working with hazardous materials and electrical equipment. PPE provides additional protection and can help prevent injuries in an accident. In 2022, the market for electrical safety PPE was estimated to be USD 18 billion. This is anticipated to expand further at a rate of around 5% CAGR from 2023 to 2032, driven by the growing emphasis on worker safety.</li>
          <li><strong>Lockout/tag-out (LOTO) system:</strong> While the importance of LOTO is widely known, it was the sixth most common occupational violation according to Occupational Safety and Health Administration (OSHA), with more than 2065 citations in 2020. LOTO is a safety procedure that involves locking or tagging equipment and disconnecting it from its power source before maintenance or repair work begins. This procedure helps prevent accidental electrical shocks and electrocution.</li>
          <li><strong>Explosion-proof equipment:</strong> According to a research of 2020, explosions were associated with 71% of incidents, which resulted in 89% of fatalities in the pharmaceutical industry across 2018 and 2019. In hazardous areas, explosion-proof electrical equipment, such as switches, lights, and wiring, should be used to prevent sparks that could ignite flammable substances.</li>
          <li><strong>Emergency response planning:</strong> A fire safety plan should be in place to prevent and respond to fires. This plan should include fire extinguishers, emergency exits, evacuation routes, and employee training. Additionally, chemical and pharmaceutical industries should conduct regular emergency drills and simulations to test their emergency response procedures. The aim is to ensure that workers are adequately trained and prepared to handle electrical accidents and are well aware of all electrical safety protocols. These drills should cover all aspects of electrical safety, including power outages, electrical fires, and electrocution.</li>
          <li><strong>Electrical equipment maintenance:</strong> Chemical and pharmaceutical industries should conduct regular inspections and audits of their electrical systems and equipment to identify and rectify potential hazards, faulty equipment, and improper installation before they result in accidents. Electrical equipment, including motors, switches, and cables, should be routinely maintained, repaired, and replaced, as necessary, to prevent malfunctions and reduce the risk of electrical fires and explosions.</li>
          <li><strong>Compliance with industry standards and regulations:</strong> Chemical and pharmaceutical industries must comply with electrical safety regulations and guidelines set by government agencies and industry standards organizations such as the Occupational Safety and Health Administration (OSHA), National Fire Protection Association (NFPA), and International Electrotechnical Commission (IEC). Compliance with these standards helps to prevent accidents and ensure that equipment is maintained and inspected according to recommended procedures. These codes and standards outline the minimum requirements for the safe design, installation, and operation of electrical systems and equipment.</li>
          <li><strong>Clean and organized workplace:</strong> Keeping the workplace clean and organized can help prevent accidents caused by electrical hazards. Electrical equipment should be kept clean and debris-free, and the workplace should be organized to avoid tripping risks. Moreover, all electrical equipment, wiring, and hazards should be labelled to ensure that employees are aware of potential dangers.</li>
          <li><strong>Reporting near-misses and incidents:</strong> Encouraging employees to report near-misses and incidents can help identify potential hazards and prevent accidents. Near misses could have resulted in an accident but were avoided due to timely intervention. Reporting of such incidents should be encouraged and followed up to prevent similar incidents from occurring in the future.</li>
        </ul>

        <p>
          By implementing these additional steps, chemical and pharmaceutical industries can further improve their electrical safety measures and prevent workplace accidents. It is essential to continually assess and improve safety practices to ensure a safe working environment for all employees.
        </p>

        <p>For any query: marketing@jeftechno.com</p>
      </div>
    )
  },

  'blog5': {
    category: "BLOG",
    title: "PROTECTING LIVES: PRIORITIZING LIGHTNING SAFETY WITH JEF LIGHTNING PROTECTION",
    date: "",
    imageUrl: "/BlogImg/blog-2.png",
    metaTags: {
      title: "Prioritizing Lightning Safety in India | Lightning Protection Systems & Risk Assessment | JEF Techno",
      description: "Learn why lightning safety is critical in India. Discover lightning protection systems, earthing solutions, surge protection devices, risk assessment methods, safety guidelines, and compliance with IS/IEC 62305 standards.",
      keywords: "Lightning Safety India, Lightning Protection System India, Lightning Risk Assessment, Lightning Protection Solutions, Earthing and Lightning Protection, Surge Protection Device, Lightning Arrestor, IS IEC 62305, Electrical Safety India, Lightning Hazard Prevention, Industrial Lightning Protection, Building Lightning Protection, Lightning Safety Standards, External Lightning Protection System, Lightning Safety Audit",
      robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      canonical: "https://www.jeftechno.com/blog/prioritizing-lightning-safety-in-india",
    },
    content: (
      <div className="flex flex-col gap-8 text-white/80 font-light leading-relaxed">
        <p>
          As the seasons change and thunderstorms become more frequent, the threat of lightning strikes looms large. In recent weeks, communities worldwide have been socked by devastating lightning-related tragedies, claiming numerous lives and leaving behind a trail of destruction. These events serve as stark reminders of the urgent need for comprehensive lightning protection measures to safeguard both lives and property.
        </p>
        <p>
          The indiscriminate nature of lightning strikes underscores the importance of proactive safety measures. Whether indoors or outdoors, electrical discharge poses a significant risk, and its consequences can be catastrophic.
        </p>
        <p>
          In the face of these sobering realities, it becomes imperative for individuals and organizations alike to prioritize lightning safety. One such avenue for bolstering protection is through the adoption of advanced lightning and earthing solutions. Among the forefront of these technologies is JEF Lightning and Earthing Protection products, engineered to mitigate the risks posed by bolt of lightning.
        </p>
        <p>
          JEF Lightning and Earthing Protection products offer a comprehensive solution against lightning-protection. By conduct lightning risk assessment and determine the level of protection required to the structure/facility as per the latest relevant standards, these products provide peace of mind for homeowners, businesses, and communities at large.
        </p>
        <p>
          For residential settings, implementing JEF Lightning and Earthing Protection products can safeguard families against the unpredictable wrath of lightning. From lightning arrestor to surge protection systems, these solutions are designed to intercept and redirect thunderbolt strikes away from vulnerable structures, reducing the likelihood of damage and injury.
        </p>
        <p>
          Similarly, for commercial buildings and infrastructure, investing in JEF Lightning and Earthing Protection products is a prudent decision. Not only do these measures protect assets and critical infrastructure, but they also ensure the safety of employees and patrons, thereby fostering a secure and resilient environment.
        </p>
        <p>
          In addition to technological solutions, it's essential to raise awareness about lightning safety practices within our communities. Simple yet effective measures such as seeking shelter indoors during thunderstorms, avoiding open spaces, and unplugging electrical appliances can significantly reduce the risk of lightning-related incidents.
        </p>
        <p>
          As we confront the realities of an increasingly volatile climate, the need for robust lightning protection measures has never been more pressing. By embracing innovative solutions like JEF Lightning and Earthing Protection products and promoting a culture of safety consciousness, we can mitigate the devastating impact of thunder strikes and protect our loved ones and livelihoods.
        </p>
        <p>
          Let us not wait for tragedy to strike before taking action. Together, let's prioritize lightning safety and embrace the tools and technologies that can safeguard lives and property in the face of nature's fury.
        </p>
      </div>
    )
  },

  'blog6': {
    category: "PRESS RELEASE",
    title: "ENHANCE RELIABILITY, EFFICIENCY AND COMPLIANCE OF YOUR ELECTRICAL GRID THROUGH POWER SYSTEM STUDIES",
    date: "April 2026",
    imageUrl: "/BlogImg/blog-6.png",
    metaTags: {
      title: "Ensuring Electrical Safety and Reliability in Renewable Energy Projects | Best Practices & Grid Compliance | JEF Techno",
      description: "Discover how electrical safety, reliability, earthing systems, lightning protection, power quality studies, and grid compliance help renewable energy projects achieve long-term performance, safety, and operational excellence.",
      keywords: "Renewable Energy Projects, Electrical Safety in Renewable Energy, Renewable Energy Reliability, Solar Power Safety, Wind Farm Electrical Safety, Earthing System for Renewable Energy, Lightning Protection for Solar Plants, Grid Compliance Studies, Power Quality Studies, Renewable Energy Grid Integration, Electrical Safety Audit, Renewable Energy Infrastructure, Power System Studies, Renewable Energy Reliability Engineering, Sustainable Energy Projects",
      robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      canonical: "https://www.jeftechno.com/blog/reliability-in-renewable-energy-project",
    },
    content: (
      <div className="flex flex-col gap-8 text-white/80 font-light leading-relaxed">
        <p>
          In the Middle Eastern region, where the energy sector is rapidly evolving, the performance of an electrical system is directly linked to the interplay of its connected equipment and operating conditions. Proper simulation design and analysis are vital for an electrical system to perform at optimal levels. Power system studies play a pivotal role in ensuring the smooth and reliable operation of electrical systems, resulting in fewer unexpected outages and disruptions, while identifying potential safety hazards to ensure a safe working environment.
        </p>

        <div>
          <h3 className="text-white font-bold mb-4 uppercase">Power System Studies Help:</h3>
          <ul className="list-disc pl-5 flex flex-col gap-2">
            <li>Enhance System Resilience, Reliability, and Efficiency.</li>
            <li>Improve Safety.</li>
            <li>Support Capacity Planning, Expansion, and Upgradation Decisions.</li>
            <li>Reduce Downtime and Shutdowns.</li>
            <li>Reduce Energy Consumption.</li>
            <li>Ensure Compliance with Industry-Specific Standards and Regulations.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-2 uppercase">Our Offerings</h3>
          <p>
            JEF offers Power System Studies for: Substations | Wind Farms | Pooling Substations | Solar Photovoltaic Power Plants | Gas Turbine Power Plants | Hydropower Stations | Distribution Stations – LV Side | Oil & Gas | Water Treatment Plants | Data Centres | Process Plants | Steel Plants | Petrochemical Plants
          </p>
        </div>

        <div>
          <h3 className="text-white font-bold mb-2 uppercase">Our Approach</h3>
          <p>
            Structured Processes for Guaranteed Results. Our experts, with vast experience across varied applications, recommend the most optimal configuration and design for your electrical system to ensure safe and reliable operations using reputed tools like PSSE, ETAP, DIgSILENT, PSCAD, and more. Our unique value proposition of measure-simulate-validate offers a 360-degree perspective and foolproof solution under actual operating conditions.
          </p>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4 uppercase">Various Studies Conducted Under Power System Studies for Renewable Energy</h3>
          <ul className="list-disc pl-5 flex flex-col gap-3">
            <li><strong>Load Flow Analysis:</strong> Essential for proper planning, design, and operation of generation, transmission, and distribution networks. Provides detailed insights into steady-state performance under different operating conditions.</li>
            <li><strong>Short Circuit Studies:</strong> Determines the short-time rating of equipment and assesses the breaking, making, and braking capabilities of interrupting equipment.</li>
            <li><strong>Relay Coordination Studies:</strong> Ensures proper settings for protection devices to achieve coordination and logical Time-Current Characteristic curve selectivity analysis.</li>
            <li><strong>Harmonic Analysis:</strong> Assesses Voltage Total Harmonic Distortion (VTHD), Current Total Harmonic Distortion (ITHD), and Total Demand Distortion (TDD) to ensure harmonic levels are within permissible limits.</li>
            <li><strong>Transient Stability Analysis:</strong> Evaluates system stability under transient events and computes critical clearing times.</li>
            <li><strong>Motor Acceleration Studies:</strong> Calculates motor acceleration time and analyzes the impact of motor starting under various conditions.</li>
            <li><strong>Arc Flash Studies:</strong> Identifies and analyzes arc flash hazards to determine the incident energy at electrical devices during live maintenance.</li>
            <li><strong>Grid Impact Study:</strong> Provides analytical background for decisions about interconnecting different sources of electricity.</li>
            <li><strong>Cable Thermal Analysis:</strong> Helps design cable systems to operate at maximum potential while ensuring secure and reliable operation.</li>
            <li><strong>Reliability Studies:</strong> Offers advanced distribution reliability assessment to estimate power system performance and identify areas for improvement.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4 uppercase">FAQ'S</h3>
          <ul className="list-disc pl-5 flex flex-col gap-3">
            <li><strong>Why are Power System Studies needed and important?</strong> Power System Studies are crucial for the stable and reliable operation of the power system under both steady-state and dynamic scenarios. They help engineers understand the performance of an electrical system and provide solutions for unexpected events or faults.</li>
            <li><strong>How do we help our customers?</strong> We provide detailed reports and findings, educate customers on operating their systems reliably, and identify safety concerns to avoid harm or injuries to personnel.</li>
            <li><strong>Why perform Load Flow Analysis?</strong> To obtain voltages, real and reactive power at various buses, assess equipment loading, and ensure reactive power compensation and power factor maintenance.</li>
            <li><strong>Why perform a Short Circuit Study?</strong> To design an electrical system that minimizes the impact of faults, isolates faulty parts, and maintains service to the healthy parts of the system.</li>
            <li><strong>What is the purpose of a Protection Coordination Study?</strong> To verify that all protective equipment is properly coordinated, preventing unnecessary downtime and equipment breakdowns.</li>
            <li><strong>Why conduct an Arc Flash Study?</strong> To identify arc flash hazards, estimate the likelihood and severity of injuries or damage, and determine if additional protective measures are required.</li>
          </ul>
        </div>

        <p>For more information about our power system study services, please contact our team of experts today: marketing@jeftechno.com</p>
      </div>
    )
  },

  'blog7': {
    category: "BLOG",
    title: "PROTECTING YOUR BUSINESS FROM LIGHTNING STRIKES: THE IMPORTANCE OF LIGHTNING PROTECTION SYSTEMS",
    date: "",
    imageUrl: "/BlogImg/blog-9.png",
    metaTags: {
      title: "Protecting Your Business from Lightning Strikes | Lightning Protection Systems & Surge Protection | JEF Techno",
      description: "Protect your business from lightning strikes with comprehensive lightning protection systems, surge protection devices, earthing solutions, and risk assessments. Learn how to safeguard people, assets, and critical infrastructure from lightning-related damage.",
      keywords: "Protecting Business from Lightning, Lightning Protection System, Business Lightning Protection, Lightning Risk Assessment, Surge Protection Devices, Earthing System Design, Lightning Safety for Businesses, Commercial Lightning Protection, Industrial Lightning Protection, Lightning Arrestor, Lightning Protection Audit, IS IEC 62305, Electrical Surge Protection, Lightning Safety Solutions, Facility Protection from Lightning",
      robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      canonical: "https://www.jeftechno.com/blog/protecting-your-business-from-lightning",
    },
    content: (
      <div className="flex flex-col gap-8 text-white/80 font-light leading-relaxed">
        <p>
          Lightning occurs when huge amounts of static electricity stored in wet clouds are released. The positive charges in the ground attract the negative charges in the wet clouds, and lightning strikes the path of least resistance, such as tall structures. As an act of nature, there is no known way of preventing lightning from occurring, and with the rapidly changing climate, the number of lightning strikes has been increasing in recent years.
        </p>
        <p>
          Being uncontrollable and unpredictable, lightning strikes can cause significant damage to people, homes, and businesses. The only way to protect people and property from severe damage is to be prepared beforehand.
        </p>
        <p>
          According to a study conducted on Lightning Fires and Lightning Strikes between 2007–2011, lightning fires cause $451 million in property damage each year in the USA alone, before the impact of global warming. It is easy to imagine that the extent of damage that can be caused by lightning is huge.
        </p>

        <div>
          <h3 className="text-white font-bold mb-2 uppercase">Preparation is Key</h3>
          <p>
            Preparation is where lightning protection systems play a huge role. Earthing, or grounding, i.e., creating a connection between an earth electrode made of highly resistant material and electrical equipment, serves as a protector against lightning strikes. The earthing and grounding systems provide an alternate route for the current to flow, thereby absorbing the shock to mitigate the damage.
          </p>
          <p className="mt-4">There is a three-pronged approach to ensuring that your facility is well-protected against a hit:</p>
          <ul className="list-disc pl-5 flex flex-col gap-2 mt-2">
            <li>There is an earth ground plan in the facility.</li>
            <li>All the instruments and electrical components are properly grounded.</li>
            <li>Surge protection is taken care of.</li>
          </ul>
          <p className="mt-4">Another important point to consider is to ensure that the plan is meticulous, and the equipment is of the best quality.</p>
        </div>

        <div>
          <h3 className="text-white font-bold mb-2 uppercase">Why Choose JEF Lightning Protection Solutions Portfolio</h3>
          <p>
            IEC 62305 sets the standards for lightning protection worldwide. According to this standard, lightning protection is not only required to protect the structure and the people around it but also the electrical and electronic equipment inside the structure from the surge caused by such strikes. This can be done by using SPD and radiated surges using Faraday cage-type LPS. A risk assessment methodology is needed to determine the level of protection required for any structure and the electronics it holds.
          </p>
          <p className="mt-4">
            JEF Techno adheres to the IS/IEC 62305-2010 and offers comprehensive Lightning Protection systems after conducting a detailed Lightning Protection Assessment Study. Our end-to-end solutions cover the entire process from risk assessment through AI-powered advanced software, creating the design best suited for your facility, and supplying superior quality materials for the implementation of the design. We also perform testing and commissioning to ensure that the project performance meets the high-quality standards of project delivery that we set for ourselves.
          </p>
          <p className="mt-4">Additionally, we also offer value-added services because it is important for us not just to meet but to exceed our clients' expectations.</p>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4 uppercase">The lightning protection solutions from JEF Techno are:</h3>
          <ul className="list-disc pl-5 flex flex-col gap-2">
            <li>Focused on being cost-effective for our clients to derive maximum value from the implementation of the system.</li>
            <li>Reliable, so that large structures are well-protected against surges caused by lightning.</li>
            <li>Customized to suit every need that the lightning risk assessment of clients reveals.</li>
            <li>Designed to ensure the safety of people as well as equipment.</li>
            <li>Inclusive of the complete range of Type tested LPS components as per IEC 62561(62305). Our solutions are Sequentially type tested on Ageing, (10/350µs) 100kA Lightning impulse, and undergo Mechanical testing as well.</li>
            <li>Effective for protection against lightning and switching transients as we offer a wide range of SPDs, including Power, Signal, Instrumentation, Ethernet, and Telecom lines.</li>
            <li>Verified as the SPDs all undergo testing as per IS/IEC 61643-11 for Power and IS/IEC 61643-21 for data and signal.</li>
            <li>A complete package including JEF SHIELD which is an Automated Risk Assessment Tool adhering to IS/IEC 62305.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4 uppercase">Designed to cater to:</h3>
          <ul className="list-disc pl-5 flex flex-col gap-2">
            <li>LPS for new and existing structures</li>
            <li>Technical Services for Adequacy Study for existing structures</li>
            <li>Installation Services for External LPS and SPD</li>
          </ul>
        </div>

        <p>
          We have been working with AIS and GIS substations, commercial buildings, retail outlets, warehouses, data centers, factories, manufacturing plants, oil and gas companies, metro rail projects, process plants, wind and solar plants, tank farms, critical structures like communication towers, power plants and more.
        </p>

        <p>To know more about how we can protect your facility with our lightning protection solution suite, please write to marketing@jeftechno.com or visit our website.</p>
      </div>
    )
  },

  'blog8': {
    category: "BLOG",
    title: "ENSURING SAFETY IN THE OIL AND GAS INDUSTRY",
    date: "",
    imageUrl: "/BlogImg/blog-10.png",
    metaTags: {
      title: "Ensuring Safety in the Oil and Gas Industry | Electrical Safety, Risk Management & Compliance | JEF Techno",
      description: "Learn how to ensure safety in the oil and gas industry through electrical safety audits, risk assessments, grounding systems, lightning protection, power system studies, compliance standards, and proactive safety management strategies.",
      keywords: "Oil and Gas Industry Safety, Electrical Safety in Oil and Gas, Oil and Gas Risk Management, Oil and Gas Safety Audit, Hazardous Area Safety, Electrical Safety Audit, Grounding Systems Oil and Gas, Lightning Protection Oil and Gas, Power System Studies, Arc Flash Analysis, EMI EMC Study, Pipeline Safety, Refinery Safety, Industrial Safety Compliance, Oil and Gas Safety Standards",
      robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      canonical: "https://www.jeftechno.com/blog/ensuring-safety-in-the-oil-and-gas-industry",
    },
    content: (
      <div className="flex flex-col gap-8 text-white/80 font-light leading-relaxed">
        <p>
          The Oil & Gas industry is essential to the global economy and plays a pivotal role in many industries. However, it inherits dangers that must not be underestimated.
        </p>
        <p>
          National Disaster Management Authority (NDMA) has reported a staggering 130 documented chemical accidents, resulting in 259 deaths and 563 people with major injuries in the last decade.
        </p>

        <div>
          <h3 className="text-white font-bold mb-2 uppercase">Key Challenges</h3>
          <p>
            The key challenges in the oil and gas segment range from security system malfunction, equipment malfunction, foundation, and structural failures. The common electrical safety challenges in the oil and gas industry are hazardous environments due to the presence of hazardous flammable gas and liquids.
          </p>
          <p className="mt-4">
            Lightning strikes are another weather condition that can cause transients and surges that can damage electrical equipment and result in system outages. Electromagnetic Interference can disrupt the proper functioning of electronic and control systems and affect sensitive communication systems, compromising safety measures.
          </p>
          <p className="mt-4">
            Mitigating such environments and conditions makes the upgrading and maintenance of electrical infrastructure a crucial part of ensuring the safety of the oil and gas segment.
          </p>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4 uppercase">Ensuring Safety Measures</h3>
          <p>Mitigating safety challenges in the oil and gas industry is an ongoing process and needs a very comprehensive and proactive approach. Staying up with industry regulations and compliance and following the best industry practices is the only way to ensure the safety of people and assets.</p>
          <ul className="list-disc pl-5 flex flex-col gap-2 mt-4">
            <li>The first and most essential step is education and training of manpower in oil and gas safety management. Employees should be well-trained to identify and respond to such potential risks.</li>
            <li>It is imperative to implement Safety Management Systems (SMS) that identify potential hazards, implement and establish control to mitigate them, and constantly monitor & improve safety measures. Rigorous hazard assessments, including classification of hazardous areas, are essential.</li>
            <li>Constant monitoring of the integrity of assets and equipment. Aging of equipment makes it mandatory to conduct risk assessments on a time-to-time basis in compliance with safety management systems and standard safety regulations.</li>
            <li>A robust design and engineering are mandatory for oil and gas projects. Regular maintenance and installation of proper environmental control system will help in regulating the temperature and humidity.</li>
            <li>Proper grounding and shielding systems will help in mitigating electromagnetic interference, and regular electromagnetic compatibility studies will ensure the early identification of such threats.</li>
            <li>An Effective Lightning Protection System is crucial for protecting personnel and equipment. Regular audits and risk assessments are needed to ensure safety against lightning.</li>
          </ul>
        </div>

        <p>Oil and Gas is a diverse segment and comprises the following sub-industries and segments. Explaining the common challenges faced in each of the industries:</p>

        <div>
          <h3 className="text-white font-bold mb-2 uppercase">1. Offshore and Onshore Platforms:</h3>
          <p>
            These platforms comprise complex extraction and production processes and are exposed to harsh environmental conditions. Robust engineering and implementation of safety protocols are mandatory for ensuring the safety of personnel and reliability of equipment. Similarly, onshore platforms consist of drilling rigs and processing facilities. It is important to follow safety and compliance regulations.
          </p>
        </div>

        <div>
          <h3 className="text-white font-bold mb-2 uppercase">2. Oil and Gas Pipelines:</h3>
          <p>
            Electromagnetic Interference can disrupt the operation as they comprise critical electronic systems and equipment. Ensuring the safety and reliability of such systems becomes crucial for uninterrupted operation. Electromagnetic Compatibility (EMI EMC) studies comprising AC/DC interference studies, DC Stray current Analysis, EM Zoning, Matrix & evaluation, shielding, etc., are important for in-depth risk analysis and implementation of mitigation measures.
          </p>
        </div>

        <div>
          <h3 className="text-white font-bold mb-2 uppercase">3. Refineries and Petrochemical Plants:</h3>
          <p>
            Major challenges in such industries include meeting stringent environmental regulations, reducing the emission of pollutants, and ensuring electrical safety. Maintenance of complex machinery and equipment is vital to prevent downtime and spurious tripping. Power quality studies and harmonic analysis are crucial studies to mitigate power quality issues and distortions.
          </p>
        </div>

        <p>
          Oil and gas industry as a whole comprises complex processes, equipment, and faces a range of challenges. Addressing these challenges requires expertise and technical experience of finding the core issues and then mitigating them. We at JEF Techno Solutions offer technical and specialized engineering services for ensuring the safeguard of personnel and improving overall operational efficiency.
        </p>
      </div>
    )
  },

  'blog9': {
    category: "BLOG",
    title: "AUTOMATED LIGHTNING RISK ASSESSMENT AND TOOL",
    date: "",
    imageUrl: "/BlogImg/blog-7.png",
    metaTags: {
      title: "Automated Lightning Risk Assessment Tool | Lightning Protection Risk Analysis & IS/IEC 62305 Compliance | JEF Techno",
      description: "Discover automated lightning risk assessment tools for accurate lightning protection design, risk analysis, BOQ generation, and compliance with IS/IEC 62305 standards. Learn how JEF Shield simplifies lightning risk management and protection planning.",
      keywords: "Automated Lightning Risk Assessment, Lightning Risk Assessment Tool, JEF Shield, Lightning Protection System Design, IS IEC 62305 Risk Assessment, Lightning Risk Analysis, Lightning Protection Software, Lightning Safety Audit, Lightning Protection Design Tool, Surge Protection Assessment, Earthing Design Software, Lightning Protection Compliance, Automated Risk Assessment Tool, Lightning Hazard Evaluation, Lightning Safety Solutions",
      robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      canonical: "https://www.jeftechno.com/blog/automated-lightning-risk",
    },
    content: (
      <div className="flex flex-col gap-8 text-white/80 font-light leading-relaxed">
        <p>
          Lightning discharges are of very high energy and can have devastating effects depending on the path of its discharge. Lightning strike is not predictable and is a random phenomenon both from the aspect of its occurrence and intensity or the energy discharge.
        </p>
        <p>
          Assessing the risk caused by lightning is a complex process because the likelihood that your facility will be facing a lightning strike depends on several factors.
        </p>
        <p>
          In addition, we all know that lightning can cause severe damages to human lives, historical monuments, industrial buildings/structures, and whatnot! There is a high possibility that the electrical/electronic equipment inside these buildings/structures might also be at risk. The only way to find that out, to do a LIGHTNING RISK ASSESSMENT for your building/structure! For any household or business structure, use our free lightning risk assessment calculator. The lightning risk calculator is used to estimate the cost of installations in power systems and lightning applications.
        </p>
        <p>
          To perform all the calculations manually and to arrive at the risk level might be a tedious task. You will need an expert to perform the task and you will have to invest both your time and money for the same. To make this task incredibly easy for you, we, at JEF, have come up with an automated tool to perform your RISK ASSESSMENT within seconds.
        </p>

        <div>
          <h3 className="text-white font-bold mb-2 uppercase">JEF SHIELD – Lightning Protection Risk Assessment, Concept Design Drawings & Bill of Materials Tool</h3>
          <p>
            JEF Shield is a unique automated user-friendly tool for Lightning Protection Risk Assessment as per IS/IEC 62305. This tool helps you to carry out a comprehensive risk assessment with the required data about the structure & equipment that needs protection. JEF Shield is a "ONE STOP SOLUTION" to assess the overall risk of lightning and propose a conceptual design & tentative bill of materials for any green field project.
          </p>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4 uppercase">How It Works</h3>
          <p>First and foremost thing to do is REGISTER yourself with your mobile number! Follow the 3 simple steps to register:</p>
          <ul className="list-disc pl-5 flex flex-col gap-2 mt-2">
            <li>Go to www.jeftechno.com</li>
            <li>Click on "JEF SHIELD"</li>
            <li>Enter your mobile number, verify with the OTP (One-time Password)</li>
            <li>Next part would be feeding the input data of the building/structure for which you need to evaluate the risk. Accurate data helps in arriving at an accurate level of protection, which in-turn results in cost optimization. A unique dashboard is created for your registered mobile number. All the risk assessment reports you generate will be saved in the dashboard.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4 uppercase">Why Do You Need JEF Shield Tool?</h3>
          <ul className="list-disc pl-5 flex flex-col gap-2">
            <li>Lightning Protection risk assessment as per IS/IEC 62305-2</li>
            <li>Concept, Design and BOQ generation as per IS/IEC 62305-3</li>
            <li>Guides you to select the appropriate and optimized protection</li>
            <li>Easy to Use</li>
            <li>Complete Risk Assessment with a few clicks</li>
            <li>3D Model</li>
            <li>BOQ Generation</li>
            <li>Cost Estimate for tendering and budgetary purposes</li>
            <li>Not only limited to this, also provision for uploading the drawings, to get the Detailed LPS Design Drawings</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4 uppercase">Additional Benefits of JEF Shield Tool:</h3>
          <div className="flex flex-col gap-4">
            <div>
              <h4 className="text-white font-semibold mb-1">1. Reliable</h4>
              <p>It is reliable – Data Safety, password protected & OTP credentials on the registered mobile number. Easy to review – Unique dashboard available for each user. Revise – Data Updation and modification possible.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1">2. Speed</h4>
              <p>Lightning Risk assessment along with BOQ and tentative design will be available in &lt; 99 seconds of providing the inputs.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1">3. Accuracy</h4>
              <p>Automatically determines the optimized level of protection. The software helps in arriving at the most optimal techno-economical solution which is extremely difficult and time consuming when using manual computation methods.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1">4. Easy to Assess</h4>
              <p>Simply register using the procedures above, and you will be able to generate all of the necessary reports in PDF format, which you can download to your local machine.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4 uppercase">How Do You Know if the Level of Protection Shown in the Report is Correct?</h3>
          <ul className="list-disc pl-5 flex flex-col gap-3">
            <li><strong>Lightning Hazard Evaluation</strong> – This is the first step to evaluate the severity of lightning. The severity of lightning differs from region to region, but it is not sufficient to consider the frequency of cloud-to-ground lightning of the area. Other factors such as Building Dimensions, Risk of Fire, Fire protection measures, Number of Functional Hours, Type of Building, Total number of People in the structure and so on should be considered.</li>
            <li><strong>Lightning Risk Assessment</strong> – This is a process to assess the lightning risk from the loss of damage caused by lightning and its occurrence frequency under a given lightning hazard. The risk R is defined as the product of occurrence frequency of damage caused by lightning and loss by the damage.</li>
            <li><strong>Lightning Risk Management</strong> – This is a process to determine the best risk management policy considering the lightning risk, the loss of the damage and cost of protection.</li>
            <li><strong>Designing of Lightning Protection System</strong> – We have developed a novel lightning risk assessment & Design Tool, using this tool, we can evaluate lightning hazard level and lightning risk based on the lightning data, facility data and topographical data.</li>
            <li><strong>Bill Of Materials</strong> – This is the final step wherein automated bill of materials with the consolidated cost will be generated. This can be used as tentative cost estimation for tendering and budgetary purposes.</li>
          </ul>
        </div>

        <p>Contact us for more information on Lightning Risk Assessment and Lightning Protection System for your facility today.</p>
        <p><strong>NOTE – THE USAGE OF JEF SHIELD IS FREE OF COST FOR ALL CONSULTANTS. HOWEVER, THE RIGHT OF USE WILL BE STRICTLY AT THE DISCRETION OF JEF TECHNO SOLUTIONS PRIVATE LIMITED.</strong></p>
        <p>For more information, contact us at marketing@jeftechno.com</p>
      </div>
    )
  },

  'blog10': {
    category: "BLOG",
    title: "ELECTRICAL FIRE IN COVID-19 HOSPITALS – A PREVENTABLE EMERGENCY",
    date: "",
    imageUrl: "/BlogImg/blog-11.png",
    metaTags: {
      title: "Electrical Fire Causes and Prevention | Electrical Fire Safety, Risk Assessment & Protection Solutions | JEF Techno",
      description: "Learn the major causes of electrical fires and how to prevent them through electrical safety audits, thermography, power quality analysis, earthing systems, protection devices, and proactive maintenance strategies.",
      keywords: "Electrical Fire Prevention, Electrical Fire Safety, Causes of Electrical Fires, Electrical Safety Audit, Electrical Fire Risk Assessment, Electrical Thermography, Power Quality Analysis, Earthing System Audit, Arc Flash Protection, Electrical Hazard Prevention, Electrical Maintenance Safety, Fire Prevention in Buildings, Electrical System Reliability, Industrial Fire Safety, Electrical Safety Solutions",
      robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      canonical: "https://www.jeftechno.com/blog/electrical-fire",
    },
    content: (
      <div className="flex flex-col gap-8 text-white/80 font-light leading-relaxed">
        <p>
          Power Systems in hospital facilities are particularly vulnerable given the sudden increase in nonlinear electronic loads comprising of ventilators, diagnostic imaging equipment, Patient monitors and many bio medical devices – a crucial defense aid in fighting COVID. With improper electrical systems, further marred by non-compliance to electrical standards and poor workmanship, hospitals are staring at the high risk of overheating their electrical installation that could provoke fire.
        </p>

        <div>
          <h3 className="text-white font-bold mb-2 uppercase">Fire Causes:</h3>
          <p>
            Faulty electrical outlets and old, outdated equipment are the leading causes of electrical fires. Never use a device with a broken or damaged cable because it can cause a fire by sending heat to flammable surfaces including floors, drapes, and carpets.
          </p>
        </div>

        <div>
          <h3 className="text-white font-bold mb-2 uppercase">Fire prevention:</h3>
          <p>
            Around a socket, light switch, or light fixture, there may be burn marks or discoloration. When you touch an appliance, an outlet, or a power wire, it feels warm. When an object is plugged in or in operation, it emits a burning odor. When you plug in a gadget, electrical sparks appear. Each time you plug in a gadget, you get an electric jolt.
          </p>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4 uppercase">Reason: Electrical fires causes and prevention</h3>
          <div className="flex flex-col gap-4">
            <div>
              <h4 className="text-white font-semibold mb-1">Poor electrical wiring and cabling</h4>
              <p>Power-hungry electrical equipment such as MRI, CT Scans, and X-Ray machines, Ventilators and other medical devices, used in hospitals need uninterrupted power supply. A durable cable network is thus absolutely essential to carry this power supply without overheating.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1">Faulty electrical installations in an oxygen-rich environment</h4>
              <p>Areas such as operation theaters and ICUs have a high concentration of oxygen. Any electrical short circuit in these areas, could lead to electrical shock to surgeons or patients. In order to achieve uninterrupted power, or for surge control, UPS systems are used which are supported by batteries.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1">Increased use of flammable alcohol-based sanitizers</h4>
              <p>With the addition of Ventilators, air-conditioners, high-capacity machines in the ICUs, testing facilities for COVID, the addition of more rooms, and increased use of flammable alcohol-based sanitizers or PPE kits, risks of fire are only going higher. Add to it the poorly designed power systems built with even poorer workmanship, it all works like oxygen to start an electrical fire and feed it further.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4 uppercase">Solution – Building a Proactive Approach to Fire Safety</h3>
          <div className="flex flex-col gap-4">
            <div>
              <h4 className="text-white font-semibold mb-1">Ensure compliance to building codes for safety and reliability</h4>
              <p>Hospitals that use several non-linear loads and sensitive electronics alongside heavy-duty air conditioners and heaters, other large or small medical testing instruments, and are therefore always at the risk of poor power quality. While the first responsibility to ensure compliance to building codes for safety and reliability rests with designers.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1">Electrical & Fire Safety Audit</h4>
              <p>Proper maintenance and monitoring of Power Quality on an ongoing basis is important. With rising number of electrical fires in hospitals, several state and regulatory agencies have ordered a fire audit of the facilities. While a proactive fire audit of the COVID hospitals is a welcome move, the fire audits are testing the ability of the facility to protect itself from the fire, if it were to occur, not prevent the fire.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1">Wire your electrical networks right</h4>
              <p>Poor quality cables could lead to a serious fire incident at a hospital. It is vital that attention be paid to the wiring in the entire health facility. The global norm is to use 'Low Smoke and Zero Halogen (LSOH) wiring. However, in India, Flame Retardant Low Smoke (FRLS) wires are used widely. Reports suggest that these wires may not necessarily help avoid fire incidents completely.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1">The ventilation system</h4>
              <p>The ventilation system in a hospital also has a role to play in this scenario. If the hospital is air-conditioned, an efficient mechanical ventilation system must be installed to avoid electrical fires from spreading.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1">Pay attention to earthing</h4>
              <p>A common practice in the Indian setup is to use separate earthing connections for all the electronic medical or non-medical equipment, but it is unjustified. All conductive metal in an equipotential area should be connected to a common equipotential earthing point with a special heavy-duty cable. This reduces the possibility of leakage currents that can cause micro electrocution when the surgeon or patient comes into contact with the equipment.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1">Ensuring good Power Quality to prevent electrical fire</h4>
              <p>
                There are several tools to proactively identify the vulnerabilities in power systems, including power quality issues, much before they lead to extreme events of electrical fire. Thermal Imaging is highly helpful in understanding the potential overheating in the electrical network. Periodic measurements and monitoring of harmonic distortion helps in early identification and prevention of heating in the electrical cables.
              </p>
              <p className="mt-2">Isolation Transformers for sensitive imaging devices or diagnostic equipment.</p>
              <p className="mt-2">Passive/Active harmonic Filters help to minimize the electrical fire risks emanating in infrastructure having Biomedical, IT/ITeS, Building automation with non-linear electronic loads, Capacitor banks, UPS Batteries etc.</p>
            </div>
          </div>
        </div>

        <p>For more information, contact us at marketing@jeftechno.com</p>
      </div>
    )
  },

  'blog11': {
    category: "BLOG",
    title: "PROTECTING SOLAR PLANTS USING LIGHTNING ARRESTORS: CAUSES, REQUIREMENTS, AND SOLUTIONS",
    date: "",
    imageUrl: "/BlogImg/blog-12.png",
    metaTags: {
      title: "Why Do Solar Panels Need Lightning Arrestors? | Lightning Protection for Solar Power Plants | JEF Techno",
      description: "Learn why lightning arrestors are essential for solar panels and solar power plants. Discover how lightning protection systems, surge protection devices, grounding systems, and risk assessments protect solar assets from lightning-related damage and downtime.",
      keywords: "Lightning Arrestor for Solar Panels, Solar Panel Lightning Protection, Lightning Protection for Solar Plants, Solar Farm Lightning Protection, Surge Protection Device for Solar Panels, Earthing System for Solar Plants, Lightning Risk Assessment Solar Plant, Solar Power Plant Safety, Lightning Protection System, Solar Inverter Protection, Grounding for Solar Panels, Solar PV Lightning Protection, IEC 62305 Solar Protection, Renewable Energy Safety, Solar Plant Risk Management",
      robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      canonical: "https://www.jeftechno.com/blog/need-of-lightning-arrestor-for-solar-panels",
    },
    content: (
      <div className="flex flex-col gap-8 text-white/80 font-light leading-relaxed">
        <p>
          Solar power from the sun represents a remarkable step towards green energy. But as advancement goes on in the installation of solar power, there arises a serious challenge: lightning protection for such assets. At JEF Techno Solutions, we offer specialized Lightning Protection Systems that protect the solar plants from devastating damage for smooth and efficient operation.
        </p>

        <div>
          <h3 className="text-white font-bold mb-2 uppercase">The Vulnerability of Solar Plants to Lightning Strikes</h3>
          <p>
            Solar panels that are typically installed on open spaces and elevated surfaces are inherently at higher risks of getting struck by lightning. The metal framework, electrical components, and large cabling provide a tempting route for high-voltage lightning currents. Without protection, a lightning strike alone results in:
          </p>
          <ul className="list-disc pl-5 flex flex-col gap-2 mt-2">
            <li>Permanent damage of photovoltaic (PV) modules</li>
            <li>Destruction of inverters and vital electrical components</li>
            <li>Prolonged operational downtime</li>
            <li>Costly repairs or full replacement</li>
            <li>Risk of Fire Hazards</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4 uppercase">Common Causes of Damage by Lightning to Solar Plants</h3>
          <div className="flex flex-col gap-4">
            <div>
              <h4 className="text-white font-semibold mb-1">Direct Striking:</h4>
              <p>Lightning striking the mounting structures or directly hitting the solar panels produces mechanical and electrical damage.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1">Induced Surges:</h4>
              <p>Without a direct hit, electromagnetic pulses from close strikes cause electrical wiring to experience induced surges.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1">Ground Potential Rise (GPR):</h4>
              <p>When lightning hits the ground, ground voltage can be increased by the lightning and cause unsafe potential differences within a plant.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1">Backflash:</h4>
              <p>If a close-by object (such as a tower or tree) gets hit by lightning, lightning may return along the ground or interconnected networks back towards the solar plant.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4 uppercase">Why Solar Plants Need Lightning Arrestors</h3>
          <p>Lightning arrestors, or surge protection devices (SPDs), are crucial pieces of equipment that reroute dangerous high-voltage surges away from the sensitive equipment. The main purposes of installing lightning arrestors at solar plants are:</p>
          <ul className="list-disc pl-5 flex flex-col gap-2 mt-4">
            <li><strong>Asset protection:</strong> Avoiding expensive damage to panels, inverters, monitoring systems and batteries.</li>
            <li><strong>Operational Continuity:</strong> Reducing downtime through the restoration of on-site operations as quickly as possible following a storm.</li>
            <li><strong>Fire Risk Mitigation:</strong> Minimizing the threat of electrical surge-caused fires.</li>
            <li><strong>Compliance and Insurance:</strong> Numerous regulations as well as insurance policies mandate certified lightning protection.</li>
            <li><strong>Solar Installation Longevity:</strong> Ensuring the lifespan and reliability of the installations.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4 uppercase">Key Requirements of a Successful Lightning Protection System</h3>
          <ul className="list-disc pl-5 flex flex-col gap-2">
            <li><strong>Air Termination System:</strong> Well-placed lightning rods for strike interception.</li>
            <li><strong>Down conductors:</strong> Effective conductors for the safe routing of lightning energy towards the ground.</li>
            <li><strong>Earth Termination System:</strong> An effective earthing system for the safe dissipation of lightning energy into the ground.</li>
            <li><strong>Surge Protective Devices (SPDs):</strong> At the inputs of inverters, combiner units, and control panels.</li>
            <li><strong>Integration:</strong> Integration with existing structures without the creation of potential hazards.</li>
            <li><strong>Routine Testing and Maintenance:</strong> Verifying the proper working of all the protection components over time.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4 uppercase">Lightning Protection Solutions of JEF for Solar Plants</h3>
          <p>Our expertise at JEF Techno Solutions lies within the designing and installing of customized Lightning Protection Systems for solar power plants. Our services include:</p>
          <ul className="list-disc pl-5 flex flex-col gap-2 mt-4">
            <li>Extensive site surveys and risk assessments</li>
            <li>Tailor-made designs as per global standards (IEC 62305, NFPA 780)</li>
            <li>High-quality air terminals, down conductors, and SPDs</li>
            <li>Expert grounding and installation systems</li>
            <li>Routine maintenance and testing services</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-2 uppercase">Conclusion</h3>
          <p>
            Investing in a worthy Lightning Protection System isn't merely a precaution—it's a good business practice that ensures the safeguarding of your solar power investment, upholding operational effectiveness, and long-term sustainability. With state-of-the-art solutions by JEF, solar plants can sustain the worst of the natural world and keep on powering a cleaner tomorrow.
          </p>
          <p className="mt-4"><strong>Protect your solar destiny with JEF Lightning Protection Systems.</strong></p>
          <p className="mt-2">Reach out to us today to find out more about how we protect your solar installations from lightning hazards.</p>
        </div>

        <p>For order and inquiry, please share your requirement to marketing@jeftechno.com</p>
      </div>
    )
  },

  'blog12': {
    category: "BLOG",
    title: "ARE YOU 100% CERTAIN THAT ALL THE PROTECTIVE DEVICES IN YOUR WAREHOUSE POWER DISTRIBUTION SYSTEM WILL TRIP ON TIME—EVERY TIME?",
    date: "",
    imageUrl: "/BlogImg/blog-13.png",
    metaTags: {
      title: "Warehouse Electrical Protection & Safety | Electrical Fire Prevention, Earthing & Lightning Protection | JEF Techno",
      description: "Learn how warehouse electrical protection and safety measures help prevent electrical fires, equipment failures, lightning damage, power quality issues, and operational downtime. Explore grounding systems, safety audits, and electrical risk management strategies.",
      keywords: "Warehouse Electrical Protection, Warehouse Electrical Safety, Electrical Fire Prevention Warehouse, Warehouse Lightning Protection, Earthing System Warehouse, Electrical Safety Audit, Warehouse Fire Safety, Power Quality Analysis Warehouse, Electrical Risk Assessment, Industrial Warehouse Safety, Electrical Hazard Prevention, Grounding Systems Warehouse, Surge Protection Devices, Electrical Infrastructure Safety, Warehouse Electrical Compliance",
      robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      canonical: "https://www.jeftechno.com/blog/warehouse-electrical-protection-safety",
    },
    content: (
      <div className="flex flex-col gap-8 text-white/80 font-light leading-relaxed">
        <p>
          According to India's National Crime Records Bureau, electrocution deaths reached 12,918 in 2022, with 1,221 deaths and 1,486 injuries specifically on account of electrical fire incidents caused by short circuits. That's roughly 35 lives lost daily to basic electrical faults.
        </p>
        <p>
          It is extremely important that all the protective devices such as circuit breakers and fuses in your power distribution system should trip on time in the event of an over load or electrical faults such as short circuits. In case the circuit breakers or fuses do not trip on time, the consequences can be severe leading to thermal & mechanical damages to the electrical equipment, fires, explosions and even electrical shocks to the operating personnel. Also it can lead to voltage instability, power outages and significant financial losses.
        </p>
        <p>
          It is recommended that tests are conducted on the protective devices at regular intervals to check whether they will trip on time in case of an overload or electrical fault. These tests reveal the status/condition of the entire circuit loop starting from the power source, the protective device, the load, connecting cables and the earthing system in totality.
        </p>
        <p>
          In summary, protective devices play a crucial role in maintaining the safety and reliability of the electrical systems and in turn the entire warehouse facility. Their failure to operate on time during fault conditions can have serious and far-reaching consequences.
        </p>
      </div>
    )
  },

  'blog13': {
    category: "BLOG",
    title: "HAVE YOU SELECTED THE RIGHT TYPE OF MINIATURE CIRCUIT BREAKER (MCB) IN YOUR WAREHOUSE OR STORES?",
    date: "",
    imageUrl: "/BlogImg/blog-14.png",
    metaTags: {
      title: "Selecting the Right MCB Type for Electrical Safety | MCB Selection Guide, Protection & Reliability | JEF Techno",
      description: "Learn how to select the right MCB type for electrical safety, equipment protection, operational reliability, and fire prevention. Understand MCB characteristics, load requirements, inrush currents, protection coordination, and electrical safety best practices.",
      keywords: "MCB Selection Guide, Miniature Circuit Breaker Types, Electrical Safety MCB, MCB for Electrical Protection, MCB Selection Based on Load, Electrical Fire Prevention, MCB Tripping Issues, Electrical Distribution Safety, Circuit Breaker Selection, MCB Type B C D Curve, Protection Coordination, Electrical Safety Audit, Warehouse Electrical Safety, Industrial Electrical Protection, Electrical Reliability",
      robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      canonical: "https://www.jeftechno.com/blog/selecting-the-right-mcb-type-for-electrical-safety",
    },
    content: (
      <div className="flex flex-col gap-8 text-white/80 font-light leading-relaxed">
        <p>
          Selecting the right type of MCB based on the application is crucial for electrical safety and optimal performance and reliability of the electrical distribution system. The choice for selection basically depends on the application, its load characteristics and more specifically to the expected inrush currents. By selecting the right type of MCB based on the application one can overcome the following safety, performance and reliability issues:
        </p>

        <ul className="list-disc pl-5 flex flex-col gap-2">
          <li>Insufficient Protection which can lead to equipment damage and electrical fire risks.</li>
          <li>Nuisance Tripping and Power Interruptions which can lead to disruptions of operations and down time.</li>
          <li>Improper load matching which will cause the MCB tripping during the equipment starts even if the system is operating correctly.</li>
          <li>Other disadvantages include poor performance & life span, compliance issues and increased costs.</li>
        </ul>

        <p>
          At JEF, we understand these complexities well. Our qualified and experienced team conducts comprehensive electrical safety audits, meticulously focusing on critical aspects like MCB selection. We delve deep into your specific operational needs to identify potential vulnerabilities before they escalate into costly problems.
        </p>
      </div>
    )
  },
};


const blogPosts = Object.keys(blogData).map(id => ({
  id,
  ...blogData[id],
  path: `/blog/${id}`
}));

const NewsCard = ({ category, title, date, imageUrl, path, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="flex flex-col w-full group cursor-pointer"
  >
    <Link href={path}>
      <div className="overflow-hidden aspect-[16/9]">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
      </div>
      <div className="mt-4 sm:mt-5 md:mt-6 flex flex-col gap-3">
        <span className="text-white text-[10px] md:text-xs tracking-[2px] uppercase">
          {category}
        </span>
        <h3 className="text-white text-sm md:text-[15px]  tracking-[2px] leading-[1.4] uppercase tracking-wide group-hover:text-[#C02429] transition-colors">
          {title}
        </h3>
        <span className="text-gray-400 text-xs md:text-sm font-light">
          April 2026
        </span>
      </div>
    </Link>
  </motion.div>
);

const MainBlogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;
  const totalPages = Math.ceil(blogPosts.length / blogsPerPage);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogPosts.slice(indexOfFirstBlog, indexOfLastBlog);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  return (
    <div className="bg-[#1D1F22] min-h-screen font-montserrat pt-[80px] md:pt-[90px]">
      {/* News & Media Header */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="w-full  py-4 md:py-6 bg-[#2D2E30]"
      >
        <div className="section-container px-4 sm:px-6 lg:px-0  lg:pt-5 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-white/60 text-xs md:text-sm tracking-[2px] uppercase font-medium">
            News & Media
          </span>
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10">
            {['OVERVIEW', 'ALL NEWS', 'RESOURCES', 'EVENTS', 'PRESS ENQUIRES'].map((item) => (
              <Link 
                key={item} 
                href="#" 
                className={`text-[10px] md:text-xs tracking-[1.5px] uppercase transition-colors ${
                  item === 'ALL NEWS' ? 'text-white' : 'text-white hover:text-white'
                }`}
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </motion.div>

      {/* Hero Banner */}
      <div className="w-full bg-[#1B1818] py-12 sm:py-16 md:py-16">
        <div className="section-container px-4 sm:px-6 lg:px-0">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="text-white text-4xl md:text-4xl tracking-[3px] uppercase"
          >
            Newsroom
          </motion.h1>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="w-full bg-[#2D2E30] py-4 border-t border-white/5">
        <div className="section-container px-4 sm:px-6 lg:px-0 flex flex-wrap items-center gap-2 text-[8px] sm:text-[10px] md:text-xs tracking-tight md:tracking-[1px] uppercase">
          <Link href="/" className="text-white/40 hover:text-[#C02429]">Home</Link>
          <span className="text-white/20">›</span>
          <Link href="/blog" className="text-[#C02429] hover:text-[#C02429]">Our Blogs</Link>
          
          
        </div>
      </div>

      {/* Main Content */}
      <main className="section-container px-4 sm:px-6 lg:px-0 py-12 sm:py-16 md:py-24">
        <div className=" sm:px-6 lg:px-0">
          <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[#C02429] text-2xl md:text-3xl font-bold tracking-[2px] uppercase mb-10 sm:mb-12"
        >
          All News
        </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-8 gap-y-12 md:gap-y-16">
          {currentBlogs.map((post, index) => (
            <NewsCard key={post.path} {...post} index={index} />
          ))}
        </div>

        {/* Pagination */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 sm:mt-16 md:mt-20 flex justify-center items-center gap-3 sm:gap-4"
        >
          <button 
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/20 flex items-center justify-center text-white transition-all ${
              currentPage === 1 ? 'opacity-20 cursor-not-allowed' : 'hover:border-white hover:text-white'
            }`}
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button 
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                  page === currentPage 
                  ? 'bg-transparent border border-[#C02429] text-[#C02429]' 
                  : 'text-white/40 hover:text-white'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
          <button 
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/20 flex items-center justify-center text-white transition-all ${
              currentPage === totalPages ? 'opacity-20 cursor-not-allowed' : 'hover:border-white hover:text-white'
            }`}
          >
            <ChevronRight size={20} />
          </button>
        </motion.div>
      </main>
    </div>
  );
};

export default MainBlogPage;
