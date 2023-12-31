import React, { useEffect } from "react";

import { motion } from "framer-motion";
import { Back, gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const textInit = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const Preloader = ({ preloader, setPreloader }) => {
  useEffect(() => {
    // window.scrollTo({ top: 0, behavior: "smooth" });
    const t1 = gsap.timeline();
    t1.to(
      "#preloader-round",
      {
        delay: 0.5,
        width: "60%",
        height: "70%",
      },
      1
    )
      .to(
        "#preloader-round",
        {
          width: "50%",
          height: "60%",
        },
        2
      )
      .to(
        "#preloader-title",
        {
          height: 480,
          ease: Back.easeInOut.config(1),
        },
        1.6
      )
      .to(
        "#preloader-round",
        {
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          width: "200%",
          height: "300%",
          onComplete: () => {
            setPreloader(false);
            document.getElementsByTagName("body")[0].style.overflow = "auto";
          },
        },
        3
      );
  }, []);

  return (
    <section
      style={{ overflow: "hidden" }}
      id="preload-top"
      className="full-screen fixed z-[50] h-[100vh] flex-center bg-gradient-to-tr from-[#bb9012] to-[#c9ac0b] overflow-hidden"
    >
      <motion.div
        id="preloader-title"
        variants={textInit}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.3, duration: 1 }}
        className="h-[300px] font-orbitron text-center"
      >
        <h2 className="text-[64px] tracking-[5px] font-semibold text-offBlack uppercase ">The Fighter Jet - SUKHOI</h2>
        <p className="text-[18px] tracking-[10px] uppercase">Sukhoi Su-57 Felon is a Russian-made</p>
      </motion.div>
      <div
        style={{ transform: "translateY(60%)" }}
        id="preloader-round"
        className="absolute bottom-0 overflow-hidden w-[20%] h-[0%] rounded-tl-[300%] rounded-tr-[300%] rounded-bl-[300%] rounded-br-[300%] bg-offBlack "
      ></div>
    </section>
  );
};

export default Preloader;
