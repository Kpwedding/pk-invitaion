import React, { useRef } from 'react';
import { motion, useTransform, useInView } from 'framer-motion';

function FlowerPetals() {
  let petals = [];

  for (let i = 0; i < 80; i++) {
    petals.push(
      <motion.img
        key={i}
        src="https://image.ibb.co/kyUHab/rose.png"
        className="w-[15px] h-[10px] inline-block m-0 p-0"
        animate={{
          y: ['-2vh', '100vh'],
          x: ['10vw', '-10vw', '1vw', '-9vw'],
          rotateX: ['300deg', '-30deg', '40deg', '-20deg'],
          rotateY: '60deg',
        }}
        transition={{
          duration: R(15, 25),
          delay: R(0, 15),
          repeat: Infinity,
          staggerChildren: 0.5,
          type: 'tween',
        }}
      />
    );
  }

  function R(min, max) {
    return min + Math.random() * (max - min);
  }

  return (
    <div className="w-full h-fscreen flex justify-between  opacity-90 overflow-hidden ">
      {petals}
    </div>
  );
}





function Text() {
  return (
    <div className=" w-full h-full px-10 flex flex-col justify-center items-center text-center  text-white gap-3 grid-child z-20 desktop:px-32">
      <img src="/icons/ganesh.png" alt="" className=" w-12 h-12" />
      <span className="catavalo text-lg tracking-wider uppercase font-semibold text-[#643f38]">
        <h1>WEDDING CEREMONY</h1>
      </span>

      <span>
        <span className="Cabrito-light text-sm font-semibold tracking-wider text-[#66423a]">
          <p>Mr. Mahendra & Mrs. Bharti Joshi</p>
        </span>

        <span className="Cabrito-light text-xs font-normal tracking-wider text-[#66423a] ">
          <p className='px-8'>
            Cordially request your presence to grace the auspicious Wedding
            Ceremony of their daughter
          </p>
        </span>
      </span>

      <span className="brittanySignature font-normal text-4xl leading-snug desktop:text-5xl small-h:text-3xl">
        <h2 className="text-[#ed0989] py-2 desktop:py-5 px-5">
          Pinki Joshi <br /> & <br /> Keyur Patel
        </h2>
      </span>

      <span className="Cabrito-regular font-semibold text-sm  tracking-wider text-[#ed0989] mb-10  small-h:mb-3">
        <p>Son of Mr. Jitendra & Mrs. Amita Patel</p>
      </span>

      <span className="Cabrito-regular font-bold tracking-wider text-sm text-[#66423a]">
        <p>Saturday, July 1, 2023</p>
      </span>

      <span className=" tracking-wider  ">
        <p className="Cabrito-regular font-normal text-base text-[#66423a]">Baraat 9:30 AM</p>
        <p className="catavalo font-bold text-sm text-[#643f38]">ELITE TERRACE</p>
      </span>

      <span className=" tracking-wider  ">
        <p className="Cabrito-regular text-base font-normal text-[#66423a]">Wedding Ceremony 10:30 AM</p>
        <p className="catavalo font-bold text-sm text-[#643f38]">COCO’S BEACH</p>
      </span>

      <span className="Cabrito-regular tracking-wider  text-[#66423a] text-xs">
        <p>Lunch to Follow</p>
      </span>

      <span className="Cabrito-regular tracking-wider  text-[#66423a] text-sm">
        <p>Garza Blanca Hotel & Resort <br /> Cancun, Mexico</p>
      </span>
    </div>
  );
}







const Ceremony = ({ scrollYProgress }) => {
  const ceremonyRef = useRef(null);

  const isInView = useInView(ceremonyRef, {
    once: true,
    amount: 0.3,
    margin: '0% 100% -50% 0%',
  });

  const imgScale = useTransform(scrollYProgress, [0.45, 0.57], [1, 1.8], {
    clamp: true,
  });
  const coupleOpacity = useTransform(scrollYProgress, [0.525, 0.57], [1, 0], {
    clamp: true,
  });

  const textOpacity = useTransform(scrollYProgress, [0.575, 0.62], [0, 1], {
    clamp: true,
  });

  const coupleY = useTransform(scrollYProgress, [0.45, 0.52], [0, -50], {
    clamp: true,
  });

  return (
    <div className="w-full h-[300vh] bg-stone-700">
      <div
        ref={ceremonyRef}
        className='w-full h-fscreen sticky top-0 overflow-hidden grid-parent bg-[url("/img/ceremony/Couple-bg.jpg")] bg-center bg-no-repeat bg-cover'
      >
        {/* Door */}
        <motion.img
          src="/img/ceremony/Couple-Door.png"
          style={{ scale: imgScale }}
          className="grid-child w-full h-fscreen object-cover object-center"
        />
        {/* Flower petals */}
        <div className="w-full h-fscreen grid-child z-10 overflow-hidden">
          {isInView && <FlowerPetals />}
        </div>

        {/* text */}
        <motion.div
          className="w-full h-fscreen grid-child z-20 overflow-hidden"
          style={{ opacity: textOpacity }}
        >
          <Text />
        </motion.div>

        {/* Couple */}
        <motion.img
          src="/img/ceremony/couple.png"
          style={{ y: coupleY, opacity: coupleOpacity }}
          className="grid-child w-[50vw] desktop:w-[45%] justify-self-center self-end"
        />
      </div>
    </div>
  );
};

export default Ceremony;
