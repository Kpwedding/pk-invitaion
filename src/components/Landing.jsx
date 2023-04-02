import React, { useEffect, useRef } from 'react';
import {
  motion,
  useTransform,
  useInView,
  useAnimationControls,
} from 'framer-motion';

const Landing = ({ scrollYProgress }) => {
  const scrollText = useAnimationControls();
  const landingRef = useRef(null);

  const logoY = useTransform(scrollYProgress, [0, 0.12], [-80, 150], {
    clamp: true,
  });
  const palmLeafLeft = useTransform(scrollYProgress, [0, 0.1], [0, 90], {
    clamp: true,
  });
  const palmLeafRight = useTransform(scrollYProgress, [0, 0.1], [0, -90], {
    clamp: true,
  });
  const scrollTextOpacity = useTransform(scrollYProgress, [0, 0.07], [1, 0], {
    clamp: true,
  });

  const isInVeiw = useInView(landingRef, {
    amount: 0.4,
    margin: '0% 100% -50% 0%',
  });

  useEffect(() => {
    if (isInVeiw) {
      scrollText.start({ y: [-105, -90, -105] });
    } else if (!isInVeiw) {
      scrollText.stop({ y: [-105, -90, -105] });
    }
  }, [isInVeiw]);

  return (
    <div
      ref={landingRef}
      className='w-full h-fscreen bg-[url("/img/common/marble-bg.png")] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center overfow-x-hidden'
    >
      <motion.img
        src="/img/landing/pk-logo.png"
        alt="P&K"
        className="w-[60%] h-auto desktop:max-w-xs"
        style={{ y: logoY }}
      />
      <div className="w-full max-w-screen-desktop h-auto flex justify-between absolute overflow-hidden py-20">
        <motion.img
          src="/img/landing/palm-leaf-l.png"
          className="w-[45vw] h-auto  -translate-y-10 origin-top-left"
          style={{ rotateZ: palmLeafLeft, translateY: -50 }}
        />
        <motion.img
          src="/img/landing/palm-leaf-r.png"
          className="w-[45vw] h-auto  origin-top-right"
          style={{ rotateZ: palmLeafRight }}
        />
      </div>
      <motion.h6
        className="absolute bottom-0 -translate-y-28 font-semibold"
        animate={{ y: [-105, -90, -105] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ opacity: scrollTextOpacity }}
      >
        Scroll Down
      </motion.h6>
    </div>
  );
};

export default Landing;
