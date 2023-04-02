import React from 'react';
import { motion } from 'framer-motion';

function Text() {
  return (
    <>
      <motion.img
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 1, delay: 0 }}
        viewport={{ once: true }}
        src="/icons/carousel.png"
        alt=""
        className=" w-16 h-16 small-h:w-12 small-h:h-12"
      />

      <motion.span
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 1, delay: 0.6 }}
        viewport={{ once: true }}
        className="catavalo text-xl tracking-wider uppercase font-semibold text-[#3a2725]"
      >
        <h1>COCKTAIL HOUR</h1>
      </motion.span>

      <motion.span
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 1, delay: 1.2 }}
        viewport={{ once: true }}
        className='Cabrito-light'
      >
        <span className="text-sm font-bold tracking-wider text-[#3a2725]">
          <p>
            The Patel Family <br /> & <br /> The Joshi Family
          </p>
        </span>

        <span className=" font-normal tracking-wider text-xs text-[#3a2725] grid place-items-center">
          <p className="w-[100%] mobile:w-[100%] sm:w-[100%]">
            Welcome you to begin <br /> the celebratory evening with <br />cocktails and hors
            d’oeurves
          </p>
        </span>
      </motion.span>

      <motion.span
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 1, delay: 1.8 }}
        viewport={{ once: true }}
        className="Cabrito-regular font-bold tracking-wider text-sm text-[#3a2725]"
      >
        <p>
          Saturday, July 1, 2023 <br />
          6:00 PM
        </p>
      </motion.span>

      <motion.span
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.7, delay: 2.2 }}
        viewport={{ once: true }}
        className=" flex flex-col   "
      >
        <span className="uppercase catavalo text-sm tracking-widest font-semibold text-[#3a2725]">
          TIERRA LUNA FORUM
        </span>
        <span className="Cabrito-regular text-xs font-medium tracking-widest leading-3 text-[#3a2725]">
          Garza Blanca Hotel & Resort <br /> Cancun, Mexico
        </span>
      </motion.span>
    </>
  );
}

const CocktailHour = () => {
  return (
    <div className="w-full h-fscreen grid-parent grid place-items-center">
      {/* Bg video */}
      <video
        autoPlay={true}
        loop={true}
        muted={true}
        playsInline={true}
        poster="/img/cocktailHour/cocktail-hour-bg.jpg"
        className=" w-[100vw] h-fscreen  grid-child z-10  object-cover	object-center"
      >
        <source src="/videos/cocktail hour.mp4" />
        <source src="/videos/cocktail hour.webm" />
      </video>

      {/* Bg-pattern */}
      <img
        src="/img/cocktailHour/arch-bg.png"
        className="w-full h-fscreen object-cover object-top grid-child z-20"
      />
      {/* carousel */}

      <div className="grid-child z-30 w-full h-full flex flex-col justify-end items-center">
        <img
          src="/img/cocktailHour/carousel.svg"
          alt=""
          className="h-auto w-[70%] sm:w-[60%] desktop:w-[65%]"
        />
      </div>

      {/* Text */}
      <div className=" w-[70%] h-full  sm:w-[65%]  desktop:w-[50%] pt-20 gap-5 flex flex-col justify-start items-center text-center   grid-child z-30 text-slate-700 bgred-100">
        <Text />
      </div>
    </div>
  );
};

export default CocktailHour;
