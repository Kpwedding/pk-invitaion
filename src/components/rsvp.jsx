import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useAnimationControls } from 'framer-motion';

const Rsvp = () => {
  const rsvpRef = useRef(null);
  const [deviceHeight, getDeviceHeight] = useState(200);

  const decoUpCtrl = useAnimationControls();
  const decoDownCtrl = useAnimationControls();
  const upperTextCtrl = useAnimationControls();
  const middleTextCtrl = useAnimationControls();
  const lowerTextCtrl = useAnimationControls();

  const isInView = useInView(rsvpRef, {
    once: true,
    amount: 0.4,
    margin: '0% 100% -50% 0%',
  });

  //   --------------------------------------------------------------------------

  useEffect(() => {
    if (isInView) {
      decoUpCtrl.start({ y: 0 });
      decoDownCtrl.start({ y: 0 });
      upperTextCtrl.start({ y: 0, opacity: 1 });
      middleTextCtrl.start({ y: 0, opacity: 1 });
      lowerTextCtrl.start({ y: 0, opacity: 1 });
    } else if (!isInView) {
      decoUpCtrl.stop({ y: 0 });
      decoDownCtrl.stop({ y: 0 });
      upperTextCtrl.stop({ y: 0, opacity: 1 });
      middleTextCtrl.stop({ y: 0, opacity: 1 });
      lowerTextCtrl.stop({ y: 0, opacity: 1 });
    }

    getDeviceHeight(innerHeight);
  }, [isInView]);

  console.log(deviceHeight);

  return (
    <div
      ref={rsvpRef}
      className='w-full h-fscreen bg-[url("/img/common/marble-bg.png")] bg-cover bg-center bg-no-repea grid-parent desktop:overflow-hidden'
    >
      {/* Text and Decos */}
      <div className="grid-child w-full h-full flex flex-col justify-center items-center text-center gap-y-5 z-10 desktop:-translate-y-20">
        <motion.img
          initial={{ y: deviceHeight * 0.7 }}
          animate={decoUpCtrl}
          transition={{ duration: 1 }}
          src="/img/rsvp/deco-up.png"
          className="w-full h-auto "
        />
        <motion.span
          initial={{ y: 10, opacity: 0 }}
          animate={upperTextCtrl}
          transition={{ duration: 0.7, delay: 1 }}
          className="brittanySignature font-semibold text-6xl leading-snug font-gradiant-sangeeth p-8 small-h:text-5xl"
        >
          <h2>RSVP</h2>
        </motion.span>

        <motion.span
          initial={{ y: 10, opacity: 0 }}
          animate={middleTextCtrl}
          transition={{ duration: 0.7, delay: 1.4 }}
          className="  text-[#3a2725d7] flex flex-col gap-y-2"
        >
          <h6 className="Cabrito-light font-semibold tracking-wider text-xl small-h:text-lg">
            Your response is <br /> kindly requested by
          </h6>
          <h5 className=" catavalo font-semibold tracking-wider text-3xl small-h:text-2xl">
            May 15, 2023
          </h5>
        </motion.span>
        <motion.img
          initial={{ y: -(deviceHeight * 0.7) }}
          animate={decoDownCtrl}
          transition={{ duration: 1 }}
          src="/img/rsvp/deco-down.png"
          className="w-full h-auto mb-24"
        />
      </div>

      {/* Link */}
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={lowerTextCtrl}
        transition={{ duration: 0.7, delay: 2 }}
        className="grid-child w-full h-full flex flex-col justify-end items-center gap-y-2  text-[#3a2725c4] pb-16 z-30"
      >
        <a
          href="https://pinkiandkeyur.minted.us/rsvp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="Cabrito-regular text-lg">Click to RSVP</p>
        </a>
        <p className="italic tracking-wider text-sm Cabrito-regular">
          or visit pinkiandkeyur.com
        </p>
      </motion.div>
    </div>
  );
};

export default Rsvp;
