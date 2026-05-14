"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { motion } from "framer-motion";
import WhatWeDoSection from "./HomePageSections/WhatWeDo";
import WhyChooseJEFSection from "./HomePageSections/WhyChooseJEFSection";
import FounderMessageSection from "./HomePageSections/FounderMessageSection";
import BlogsSection from "./HomePageSections/BlogSection";
import OurIndustriesSection from "./HomePageSections/Industry";

gsap.registerPlugin(ScrollTrigger);

// Menu items for the navbar


function Home() {

  useEffect(() => {
    // Select all elements with the 'X-axis-anm' class and apply staggered animation
    gsap.fromTo(
      gsap.utils.toArray(".X-axis-card-anm"),
      { opacity: 0, x: 120 },
      {
        x: 0,
        opacity: 1,
        duration: 1.1,
        stagger: 0.3, // 0.3s delay between each card animation
        scrollTrigger: {
          trigger: ".card-slider",
          start: "top 80%", // Adjusted start position
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      },
    );
  }, []);

  useEffect(() => {
    gsap.utils.toArray(".Y-axis-text").forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 50 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: element,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        },
      );
    });

    gsap.utils.toArray(".Y-axis-text-founder").forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 50 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: element,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        },
      );
    });
  }, []);

  // For X-axis animation ----------------------------------------

  useEffect(() => {
    gsap.utils.toArray(".X-axis-Title").forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, x: 120 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: element,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        },
      );
    });
  }, []);

  

  // Responsive value for `itemsPerPage`
  const [itemsPerPage, setItemsPerPage] = useState(1); // default to mobile

  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;

      if (width >= 1280) {
        setItemsPerPage(3); // Desktop
      } else if (width >= 768) {
        setItemsPerPage(2); // Tablet
      } else {
        setItemsPerPage(1); // Mobile
      }
    };

    // Initial call
    updateItemsPerPage();

    // Optional: listen to resize changes
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

 
  // Carousal Image's Animation

  const [index, setIndex] = useState(0);
  const coverRef = useRef(null);
  const carouselRef = useRef(null);

  const handleNext = () => {
    if (index < 2) {
      gsap.fromTo(
        coverRef.current,
        {
          x: "100%",
          y: "-100%",
        },
        {
          x: "0%",
          yoyo: true,
          repeat: 1,
        },
      );
      gsap.to(carouselRef.current, {
        x: `-${(index + 1) * 33.33}%`,
      });
      setIndex(index + 1);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      gsap.fromTo(
        coverRef.current,
        {
          x: "-100%",
          y: "-100%",
        },
        {
          x: "0%",
          y: "-100%",
          yoyo: true,
          repeat: 1,
        },
      );
      gsap.to(carouselRef.current, {
        x: `-${(index - 1) * 33.33}%`,
      });
      setIndex(index - 1);
    }
  };

  {
    /*Gsap Annimation*/
  }

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add(
      {
        // For larger screens (1025px and above)
        largeScreen: "(min-width: 1025px)",
        // For medium screens (768px to 1024px)
        mediumScreen: "(min-width: 768px) and (max-width: 1024px)",
        // For small screens (below 768px)
        smallScreen: "(max-width: 767px)",
      },
      (context) => {
        let { largeScreen, mediumScreen, smallScreen } = context.conditions;

        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".container",
            toggleActions: "play none none reverse",
            start: "10 10%",
            end: "center 50%",
            pin: true,
          },
        });

        // Animations for larger screens (1025px and above)
        if (largeScreen) {
          tl.to(".title1", { x: "3vw", opacity: 0, scrub: true }, "display")
            .to(".description1", { y: "1rem", opacity: 0 }, "display")
            .fromTo(".title2", { x: "2vw", opacity: 0 }, { x: 0, opacity: 1 })
            .fromTo(
              ".description2",
              { y: "0.5rem", opacity: 0 },
              { y: 0, opacity: 1 },
            )
            .to(".image1", { x: "60rem", y: "-40rem" }, "display")
            .to(".image2", { x: "-63rem", y: "-40rem" }, "display")
            .to(".buttonRM0", { x: "300rem" }, "display")
            .fromTo(
              ".buttonRM1",
              { x: "20rem", opacity: 0 },
              { x: "0rem", opacity: 1 },
            );
        }

        // Animations for medium screens (768px to 1024px)
        if (mediumScreen) {
          tl.to(".title1", { x: "2vw", opacity: 0.5, scrub: true }, "display")
            .to(".description1", { y: "1rem", opacity: 0.5 }, "display")
            .fromTo(".title2", { x: "1vw", opacity: 0 }, { x: 0, opacity: 0.8 })
            .fromTo(
              ".description2",
              { y: "0.3rem", opacity: 0 },
              { y: 0, opacity: 0.8 },
            )
            .to(".image1", { x: "30rem", y: "-20rem" }, "display")
            .to(".image2", { x: "10rem", y: "-18rem" }, "display")
            .to(".buttonRM0", { x: "150rem" }, "display")
            .fromTo(
              ".buttonRM1",
              { x: "10rem", opacity: 0 },
              { x: "0rem", opacity: 1 },
            );
        }

        // Animations for small screens (below 768px)
        if (smallScreen) {
          tl.to(".SmImg1", { x: "-150%" }, "display")
            .to(".SmImg2", { x: "-113%" }, "display")
            .to(".textSM1", { y: "200%" }, "display")
            .to(".textSM2", { y: "-215%" }, "display");
        }
      },
    );
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const totalSlides = 3;

  const [marginLeft, setMarginLeft] = useState("1%");

  const calculateMarginLeft = useCallback(() => {
    if (window.innerWidth >= 768) {
      return currentIndex === 0 ? "4%" : "0%";
    } else {
      return currentIndex === 0 ? "1%" : "0%";
    }
  }, [currentIndex]);

  useEffect(() => {
    // Set initial margin based on screen size
    setMarginLeft(calculateMarginLeft());

    // Update margin when resizing
    const handleResize = () => {
      setMarginLeft(calculateMarginLeft());
    };
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, [calculateMarginLeft]);

  const [showVideo, setShowVideo] = useState(false);
  const [player, setPlayer] = useState(null);
  const [fadeClass, setFadeClass] = useState("");

  // Load the YouTube API script
  useEffect(() => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // This function is called by the YouTube API
    window.onYouTubeIframeAPIReady = () => {
      const ytPlayer = new window.YT.Player("yt-player", {
        events: {
          onStateChange: onPlayerStateChange,
        },
      });
      setPlayer(ytPlayer);
    };
  }, []);

  // Handle the end of the video
  const onPlayerStateChange = (event) => {
    if (event.data === window.YT.PlayerState.ENDED) {
      setShowVideo(false); // Close the video overlay
    }
  };

  // Function to handle button click and show the video
  const handlePlayVideo = () => {
    setShowVideo(true);
    if (player) {
      player.playVideo();
    }
    setTimeout(() => setFadeClass("opacity-100"), 10);
  };

  // Function to close the video manually
  const closeVideo = useCallback(() => {
    setShowVideo(false);
    if (player) {
      player.stopVideo();
    }
    setTimeout(() => setShowVideo(false), 300);
  }, [player, setShowVideo]);

  useEffect(() => {
    const isIOS =
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if (isIOS) {
      document.querySelectorAll("video").forEach((video) => {
        video.play();
      });
    }
  }, []);

  const [isScreenTall, setIsScreenTall] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsScreenTall(window.innerHeight > 800 && window.innerWidth > 1023);
    };

    checkScreen(); // run on mount
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const sectionRef = useRef();
  const textRef1 = useRef();
  const textRef2 = useRef();
  const divRef1 = useRef();
  const divRef2 = useRef();
  const imgRef1 = useRef();
  const imgRef2 = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const initialXForImgRef2 =
        window.innerWidth > 1550 ? 1100 : window.innerWidth > 1200 ? 800 : 600;

      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 25%",
            end: "bottom bottom",
            toggleActions: "play none none reverse",
            pin: true,
          },
        })
        .to(
          textRef1.current,
          {
            x: 200,
            opacity: 0,
            duration: 0.5,
          },
          0,
        )
        .fromTo(
          textRef2.current,
          { x: 200, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5 },
          0,
        )
        .to(
          divRef1.current,
          {
            y: 200,
            opacity: 0,
            duration: 0.5,
          },
          0,
        )
        .fromTo(
          divRef2.current,
          { y: 0, opacity: 0 },
          { y: -300, opacity: 1, duration: 0.5 },
          0,
        )
        .fromTo(
          imgRef1.current,
          { x: 0, y: 0 },
          { x: 800, y: -550, duration: 1, ease: "power2.inout" },
          0,
        )
        .fromTo(
          imgRef2.current,
          { x: initialXForImgRef2, y: 0 },
          { x: 0, y: -450, duration: 1, ease: "power2.inout" },
          0,
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (showVideo) {
      window.onYouTubeIframeAPIReady = () => {
        const player = new YT.Player("yt-player-container", {
          videoId: "9xiS0T3smxM",
          playerVars: {
            autoplay: 1,
            controls: 1,
          },
          events: {
            onStateChange: (event) => {
              if (event.data === YT.PlayerState.ENDED) {
                closeVideo();
              }
            },
          },
        });
      };

      if (!window.YT) {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      } else {
        window.onYouTubeIframeAPIReady();
      }
    }
  }, [showVideo, closeVideo]);

  //PROGRESS BAR FOR HOME BANNER VIDOES
  const videoRefs = useRef([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const currentVideo = videoRefs.current[index];
    const DURATION = currentVideo?.duration
      ? currentVideo.duration * 1000
      : 12000;
    let startTime = null;
    let rafId = null;

    setProgress(0);

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const pct = Math.min((elapsed / DURATION) * 100, 100);
      setProgress(pct);

      if (pct < 100) {
        rafId = requestAnimationFrame(animate);
      } else {
        setTimeout(() => {
          setIndex((prev) => (prev + 1) % totalSlides);
        }, 600);
      }
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [index]);

  return (
    <>
      {!showVideo}

      <div className="relative w-full h-screen overflow-hidden">
        <div
          ref={carouselRef}
          className="bg-no-repeat flex w-[300%] h-full transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translateX(-${(index * 100) / 3}%)` }}
        >
          <div className="relative w-full h-full ">
            <video
              ref={(el) => (videoRefs.current[0] = el)}
              autoPlay
              loop
              muted
              playsInline
              className="absolute size-full object-cover"
            >
              <source src="./HomePageImg/Banner-1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="inset-y-2/3 xl:mt-[2%] lg:inset-x-20 p-4 flex relative flex-col self-center w-full max-md:mt-10 max-md:max-w-full ">
              <h1 className="2xl:text-6xl lg:text-4xl  md:text-3xl text-3xl font-bold h-32 md:h-20 2xl:h-36 my-auto tracking-wider text-white max-md:max-w-full max-md:text-4xl">
                THINK ELECTRICAL, <br />
                THINK JEF
              </h1>
              <div className="flex gap-2 lg:gap-6 items-center self-start text-2xl uppercase text-neutral-900 tracking-[3px]">
                <div className="flex flex-col items-center">
                  

                  {/* Conditionally render the iframe video at 90% screen width */}
                  {showVideo && (
                    <div className="hidden fixed inset-0 lg:flex items-center justify-center bg-black bg-opacity-75 z-[9999]">
                      <div className="w-[90vw] h-[90%]">
                        {/* Close button */}
                        <div className="-mt-[1%] flex justify-end">
                          <button
                            className="text-white border-white border border-spacing-2"
                            onClick={closeVideo}
                          >
                            <img
                              src="./HomePageImg/NavbarImg/CLoseMenuLogo.png"
                              alt="closeButton"
                              className="w-[2vw]"
                            />
                          </button>
                        </div>

                        {/* YouTube Iframe */}
                        <div
                          className="w-full h-full object-contain rounded-md"
                          id="yt-player-container"
                        ></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full h-full">
            <video
              ref={(el) => (videoRefs.current[1] = el)}
              autoPlay
              loop
              muted
              playsInline
              className="absolute size-full object-cover"
            >
              <source src="./HomePageImg/Banner-2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="inset-y-[26rem] xl:mt-[2%] lg:inset-x-20 md:inset-y-2/3 0 p-4 flex relative flex-col self-center w-full  max-md:mt-10 max-md:max-w-full ">
              <h1 className="2xl:text-6xl lg:text-4xl text-3xl font-bold h-32 md:h-20 2xl:h-36 my-auto tracking-wider text-white max-md:max-w-full max-md:text-4xl uppercase">
                Expertise from Low Voltage
                <br />
                to Extra High Voltage
              </h1>
              <div className="flex gap-2 lg:gap-6 items-center self-start text-2xl uppercase text-neutral-900 tracking-[3px] max-md:mt-10">
                
              </div>
            </div>
          </div>
          <div className="relative w-full h-full">
            <video
              ref={(el) => (videoRefs.current[2] = el)}
              autoPlay
              loop
              muted
              playsInline
              className="absolute size-full object-cover"
            >
              <source src="./HomePageImg/Banner-3.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="inset-y-2/3 xl:mt-[2%] lg:inset-x-20 p-4 flex relative flex-col self-center w-full max-w-[70%] max-md:mt-10 max-md:max-w-full ">
              <h1 className="2xl:text-6xl lg:text-4xl  md:text-3xl text-3xl font-bold h-32 md:h-20 2xl:h-36 my-auto tracking-wider text-white max-md:max-w-full max-md:text-4xl">
                EXCELLENCE THROUGH DIGITIZATION
              </h1>
              <div className="flex gap-2 lg:gap-6 items-center self-start text-2xl uppercase text-neutral-900 tracking-[3px]">
               
              </div>
            </div>
          </div>
        </div>
        <div
          ref={coverRef}
          className="absolute w-full h-full bg-zinc-800"
        ></div>

       

        {/* Timeline Progress Bars */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[88%] flex gap-8 z-20">
          {[0, 1, 2].map((item) => (
            <div
              key={item}
              className="relative flex-1 h-[3px] bg-white/40 overflow-hidden"
            >
              <div
                className="absolute left-0 top-0 h-full bg-white"
                style={{
                  width:
                    index === item
                      ? `${progress}%`
                      : item < index
                        ? "100%"
                        : "0%",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/*  What we do Section */}

      <section>
        <WhatWeDoSection />
      </section>
  <section>
    <WhyChooseJEFSection/>
  </section>

    <section>
      <FounderMessageSection/>
    </section>

      {/*OUR INDUSTRIES SECTION */}
      <section>
        <OurIndustriesSection />
      </section>

      {/*  Blog's Section  */}

<section>
  <BlogsSection />
</section>
    </>
  );
}




{
  
}


export default Home;
