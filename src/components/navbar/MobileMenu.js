"use client";

import React, { useState, useContext } from "react";
import Link from "next/link";
import { TranslationContext } from "../../context/TranslationContext";

const MobileMenu = () => {
  const { isArabic, toggleTranslation } = useContext(TranslationContext);
  const [activeMenu, setActiveMenu] = useState("main");

  const faqData = {
    main: [
      { label: "Home", path: "/" },
      { label: "About", key: "about" },
      { label: "Our Business", key: "business" },
      { label: "Industries", key: "industries" },
      { label: "Blogs", path: "/blog" },
    ],
    about: [
      { label: "About Us", path: "/about-us" },
      { label: "JEF Leadership Team", path: "/leadership-team" },
      { label: "Our Clients", path: "/coming-soon" },
      { label: "Employee Login", path: "/coming-soon" },
    ],
    business: [
      { label: "Earthing Studies", path: "/earthing-studies" },
      { label: "Lightning Protection", path: "/lightning-protection-studies" },
      { label: "Power System Studies", path: "/power-system-studies" },
    ],
    industries: [
      { label: "Oil and Gas", path: "/industries/oilandgas" },
      { label: "Power Utilities", path: "/industries/powerutilities" },
      { label: "Manufacturing Plant", path: "/industries/manufacturingplant" },
    ],
  };

  return (
    <div className="h-full w-full bg-[#1a1a1a] text-white relative overflow-hidden">
      {/* MAIN MENU */}
      <div
        className={`absolute w-full h-full transition-transform duration-300  ${
          activeMenu === "main" ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {faqData.main.map((item, index) =>
          item.path ? (
            <Link key={index} href={item.path}>
              <div className="flex justify-between items-center px-6 py-5 border-b border-gray-700 cursor-pointer">
                <span className="uppercase text-white-500 text-lg">
                  {item.label}
                </span>
              </div>
            </Link>
          ) : (
            <div
              key={index}
              onClick={() => setActiveMenu(item.key)}
              className="flex justify-between items-center px-6 py-5 border-b border-gray-700 cursor-pointer "
            >
              <span className="uppercase text-white-500 text-lg">
                {item.label}
              </span>
              <img
                src="/AboutUs/DropDownArr.png"
                alt="→"
                className="w-3 h-3 object-contain -rotate-90"
              />
            </div>
          ),
        )}
      </div>

      {/* ABOUT MENU */}
      <div
        className={`absolute w-full h-full transition-transform duration-300 ${
          activeMenu === "about" ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          onClick={() => setActiveMenu("main")}
          className="flex items-center gap-3 px-6 py-5 border-b border-gray-700 cursor-pointer"
        >
          <img
            src="/AboutUs/DropDownArr.png"
            alt="back"
            className="w-3 h-3 object-contain rotate-90"
          />
          <span>ABOUT</span>
        </div>
        {faqData.about.map((item, index) => (
          <Link key={index} href={item.path}>
            <div className="flex justify-between items-center px-6 py-5 border-b border-gray-700 cursor-pointer">
              {item.label}
            </div>
          </Link>
        ))}
      </div>

      {/* BUSINESS MENU */}
      <div
        className={`absolute w-full h-full transition-transform duration-300 ${
          activeMenu === "business" ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          onClick={() => setActiveMenu("main")}
          className="flex items-center gap-3 px-6 py-5 border-b border-gray-700 cursor-pointer"
        >
          <img
            src="/AboutUs/DropDownArr.png"
            alt="back"
            className="w-3 h-3 object-contain rotate-90"
          />
          <span>OUR BUSINESS</span>
        </div>
        {faqData.business.map((item, index) => (
          <Link key={index} href={item.path}>
            <div className="flex justify-between items-center px-6 py-5 border-b border-gray-700 cursor-pointer">
              <span>{item.label}</span>
            </div>
          </Link>
        ))}
      </div>

      {/* INDUSTRIES MENU */}
      <div
        className={`absolute w-full h-full transition-transform duration-300 ${
          activeMenu === "industries" ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          onClick={() => setActiveMenu("main")}
          className="flex items-center gap-3 px-6 py-5 border-b border-gray-700 cursor-pointer"
        >
          <img
            src="/AboutUs/DropDownArr.png"
            alt="back"
            className="w-3 h-3 object-contain rotate-90"
          />
          <span>INDUSTRIES</span>
        </div>
        {faqData.industries.map((item, index) => (
          <Link key={index} href={item.path}>
            <div className="flex justify-between items-center px-6 py-5 border-b border-gray-700 cursor-pointer">
              <span>{item.label}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
