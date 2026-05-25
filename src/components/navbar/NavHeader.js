"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { TranslationContext } from "../../context/TranslationContext";

const menuItems = [
  { label: "About", hasDropdown: true },
  { label: "Our Business", hasDropdown: true },
  { label: "Our Industries", hasDropdown: true },
  { label: "Our Blogs", hasDropdown: false, path: "/blog" },
];

const NavHeader = ({
  handleMenuHover,
  handleMouseLeave,
  toggleDropdown,
  isDropdownVisible,
  setIsDropdownVisible,
  toggleSlideMenu,
  isArabic,
  toggleTranslation,
}) => {
  const pathname = usePathname();

  const buttonVariants = {
    hidden: { opacity: 0, y: 50, transition: { duration: 0.4, ease: "easeOut" } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.6, ease: "easeIn" } },
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className="flex flex-col pt-6 w-full h-full max-md:max-w-full">
      <header className="flex relative lg:gap-20 justify-between items-center self-center w-[95%] 2xl:max-w-[92%] max-md:max-w-full">
        <Link href={"/"} className="z-20">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f72711985a65d5e9cccf583145ef02cf25367e53a9dbd9152d31ad79b46cc8c?placeholderIfAbsent=true&apiKey=60c6eb6ce37644fdb727618799199006"
            alt="JEF Company logo"
            className="object-contain w-[7rem] lg:w-[7rem] 2xl:w-[8rem]"
          />
        </Link>

        <div className="flex justify-between w-screen">
          <nav className="flex gap-5 xl:gap-10 items-center my-auto max-md:max-w-full">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="lg:flex cursor-pointer hidden gap-2 justify-center items-center self-stretch my-auto group"
              >
                {item.path ? (
                  <Link
                    href={item.path}
                    className={`nav-item cursor-pointer uppercase md:text-xs xl:text-sm font-medium tracking-[2px] text-white ${
                      pathname === item.path ? "active" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    onMouseEnter={() => handleMenuHover(item.label)}
                    onMouseLeave={handleMouseLeave}
                    className="nav-item cursor-pointer uppercase md:text-xs xl:text-sm font-medium text-white tracking-[2px]"
                  >
                    {item.label}
                  </button>
                )}
                {item.hasDropdown && (
                  <div
                    className="flex cursor-pointer flex-col justify-center items-center self-stretch px-2.5 py-3.5 my-auto w-8 min-h-[20px]"
                    onMouseEnter={() => handleMenuHover(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <img
                      loading="lazy"
                      src="/HomePageImg/NavbarImg/Dropdown.png"
                      alt="Dropdown"
                      className="object-contain w-5 hidden lg:block transition-transform duration-300 transform group-hover:rotate-180"
                    />
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex gap-8 items-center self-stretch my-auto max-md:max-w-full">
            <button
              onClick={toggleDropdown}
              className="lg:flex z-20 hidden group gap-2.5 items-center self-stretch my-auto translation"
            >
              <div
                translate="no"
                className="self-stretch uppercase my-auto text-xs xl:text-sm font-light tracking-[2px] text-white"
              >
                {isArabic ? "Arabic (عربي)" : "Safe Tool"}
              </div>
              <div className="flex flex-col justify-center items-center self-stretch px-2.5 py-3.5 my-auto w-8 min-h-[20px]">
                <img
                  loading="lazy"
                  src="../HomePageImg/NavbarImg/Dropdown.png"
                  alt="Dropdown"
                  className={`object-contain w-5 hidden lg:block ${
                    isDropdownVisible
                      ? "transition-transform duration-300 transform rotate-180 group-hover:rotate-180"
                      : "transition-transform duration-300 transform rotate-360"
                  }`}
                />
              </div>
            </button>
            <AnimatePresence>
              {isDropdownVisible && (
                <motion.div
                  animate="visible"
                  id="navigation-menu"
                  initial="hidden"
                  exit="exit"
                  variants={menuVariants}
                  className="fixed inset-0 bg-black bg-opacity-55 flex z-10 justify-center items-start"
                >
                  <div className=" text-white shadow-md mt-40 flex flex-col items-end text-right w-[90%] 2xl:max-w-[92%]">
                    <motion.div
                      variants={buttonVariants}
                      translate="no"
                      className="cursor-pointer flex items-center gap-2 mb-8 w-fit"
                      onClick={() => {
                        toggleTranslation("en");
                        setIsDropdownVisible(false);
                      }}
                    >
                      <div>Safe Tool</div>
                      <img
                        className={`w-4 h-4 ${isArabic ? "hidden" : "block"}`}
                        src="/red-check-mark-icon.png"
                      />
                    </motion.div>
                    <motion.div
                      variants={buttonVariants}
                      translate="no"
                      className="cursor-pointer w-fit flex items-center gap-2"
                      onClick={() => {
                        toggleTranslation("ar");
                        setIsDropdownVisible(false);
                      }}
                    >
                      <div>Arabic (عربي)</div>
                      <img
                        className={`w-4 h-4 ${isArabic ? "block" : "hidden"}`}
                        src="/red-check-mark-icon.png"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <Link href="/get-in-touch" className="z-20">
              <button className="gap-3 uppercase self-stretch py-3 px-4 md:py-2 lg:py-3 md:px-4 lg:px-7 my-auto text-xs md:text-sm text-red-700 bg-white hover:text-white hover:bg-red-700 rounded-[30px] tracking-[2px] whitespace-nowrap">
                Contact Us
              </button>
            </Link>
            <button
              className="lg:hidden mr-2 justify-items-center w-[2.3rem]"
              onClick={toggleSlideMenu}
            >
              <img
                src="/HomePageImg/NavbarImg/MenuLogo.png"
                alt="Mobile View Menu Button"
              />
            </button>
          </div>
        </div>
      </header>
      <div className="relative shrink-0 mt-7 h-0 border-b border-solid border-neutral-600 max-md:max-w-full" />
    </div>
  );
};

export default NavHeader;
