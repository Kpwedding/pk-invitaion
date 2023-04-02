import React, { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useAnimationControls
} from "framer-motion";
import Lottie from "lottie-react";
import textAnimation from "/public/animations/text.json";
import PinkiKeyurAnimation from "/public/animations/PinkiKeyur.json";

const Welcome = ({ scrollYProgress }) => {
  const welcomeRef = useRef(null);
  const UpperTextAnimationLottieRef = useRef(null);
  const LowerTextAnimationLottieRef = useRef(null);

  const leftDoorCtrl = useAnimationControls();
  const rightDoorCtrl = useAnimationControls();

  const leftDecoCtrl = useAnimationControls();
  const rightDecoCtrl = useAnimationControls();

  const upperText = useAnimationControls();
  const middleText = useAnimationControls();
  const lowerText = useAnimationControls();

  const isInVeiw = useInView(welcomeRef, {
    once: true,
    amount: 0.4,
    margin: "0% 100% -50% 0%",
  });

  

  // --------------------------------------------------------------------------------

  useEffect(() => {
    scrollYProgress.on("change", (latest) => {
      console.log(latest * 100);
    });
  }, []);

  useEffect(() => {
    if (isInVeiw) {
      leftDoorCtrl.start({ x: "-300%" });
      rightDoorCtrl.start({ x: "300%" });
      rightDecoCtrl.start({ x: "0%", y: "0%", opacity: 1 });
      leftDecoCtrl.start({ x: "0%", y: "0%", opacity: 1 });
      upperText.start({ opacity: 1 });
      middleText.start({ y: 0, opacity: 1 });
      lowerText.start({ y: 0, opacity: 1 });
      setTimeout(() => {
        UpperTextAnimationLottieRef.current.setSpeed(0.5);
        UpperTextAnimationLottieRef.current.goToAndPlay(0, true);
      }, 1500);
      setTimeout(() => {
        LowerTextAnimationLottieRef.current.setSpeed(0.5);
        LowerTextAnimationLottieRef.current.goToAndPlay(0, true);
      }, 3500);
    } else if (!isInVeiw) {
      leftDoorCtrl.stop({ x: "-300%" });
      rightDoorCtrl.stop({ x: "300%" });
      rightDecoCtrl.stop({ x: "0%", y: "0%", opacity: 1 });
      leftDecoCtrl.stop({ x: "0%", y: "0%", opacity: 1 });
      upperText.stop({ opacity: 1 });
      middleText.stop({ y: 0, opacity: 1 });
      lowerText.stop({ y: 0, opacity: 1 });
    }
  }, [isInVeiw]);

  return (
    <div
  
      ref={welcomeRef}
      className='w-full h-h-fscreen grid-child sticky z-10 bg-[url("/img/common/marble-bg.png")] bg-center bg-no-repeat bg-cover flex flex-col justify-center items-center overflow-hidden grid-parent'
    >
      <div className="grid-child flex justify-center overflow-hidden z-0">

        <motion.img
          initial={{ x: 0 }}
          animate={leftDoorCtrl}
          transition={{ duration: 2 }}
          src="/img/Transitionspage/door-left.png"
          alt=""
          className="h-fscreen w-auto"
        />

        <motion.img
          initial={{ x: 0 }}
          animate={rightDoorCtrl}
          transition={{ duration: 2 }}
          src="/img/Transitionspage/door-right.png"
          alt=""
          className="h-fscreen w-auto"
        />
      </div>

      <div className="grid-child h-fscreen w-full flex justify-between -z-20 overflow-hidden">
        <motion.img
          initial={{ x: "-100%", y: "-10%", opacity: 0 }}
          animate={rightDecoCtrl}
          transition={{ duration: 1.5, delay: 1 }}
          src="/img/Transitionspage/bottom-right-deco.png"
        />
        <motion.img
          initial={{ x: "100%", y: "10%", opacity: 0 }}
          animate={rightDecoCtrl}
          transition={{ duration: 1.5, delay: 1 }}
          src="/img/Transitionspage/top-left-deco.png"
        />
      </div>

      <div className="grid-child h-fscreen w-full flex flex-col items-center justify-center -z-10   desktop:p-10">
        <motion.img
          initial={{ opacity: 0 }}
          animate={upperText}
          transition={{ duration: 0.7, delay: 1.5 }}
          src="/icons/ganesh.png"
          alt=""
          className=" w-16 h-16"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={upperText}
          transition={{ duration: 0.7, delay: 1.7 }}
          className="grid place-items-center"
        >
          <Lottie
            lottieRef={UpperTextAnimationLottieRef}
            animationData={textAnimation}
            loop={false}
            autoPlay={false}
            className="w-[65vw] sm:w-[45%] desktop:w-[55%] "
          />
        </motion.div>

        <motion.p
          initial={{ y: "10%", opacity: 0 }}
          animate={middleText}
          transition={{ duration: 0.7, delay: 3.5 }}
          className="text-center px-10 text-xl Cabrito-regular tracking-wider  text-[#3a2725d7]"
        >
          With divine blessings,
          <br /> The Joshi and Patel Families <br /> request the honor of your
          <br /> presence at the wedding of
        </motion.p>

        <motion.div
          initial={{ y: "10%", opacity: 0 }}
          animate={lowerText}
          transition={{ duration: 1, delay: 3.4 }}
          className="grid place-items-center"
        >
          <Lottie
            animationData={PinkiKeyurAnimation}
            lottieRef={LowerTextAnimationLottieRef}
            loop={false}
            autoPlay={false}
            className="w-[50vw] sm:w-[35%] desktop:w-[40%]  text-stone-200"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Welcome;
