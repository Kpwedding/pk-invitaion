import React from "react";
import { motion } from "framer-motion";

const Reception = () => {
  return (
    <div className="w-full h-fscreen grid-parent">
      {/* Bg video */}
      <video
        autoPlay={true}
        loop={true}
        muted={true}
        playsInline={true}
        poster="/img/reception/reception-bg.png"
        className=" w-[100vw] h-fscreen  grid-child z-10  object-cover	object-center"
      >
        <source src="/videos/reception.mp4" />
        <source src="/videos/reception.webm" />
      </video>

      {/* Text */}
      <div className=" w-full h-full px-10 flex flex-col justify-center items-center text-center  text-white gap-3 grid-child z-20 ">
        <motion.img
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0 }}
          viewport={{ once: true }}
          src="/icons/PK.png"
          alt=""
          className=" w-16 h-16 small-h:w-12 small-h:h-12"
        />

        <motion.span
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          viewport={{ once: true }}
          className="catavalo text-xl tracking-wider uppercase font-semibold pb-3"
        >
          <h1>WEDDING RECEPTION</h1>
        </motion.span>

        <motion.span
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 1 }}
          viewport={{ once: true }}
        >
          <span className="Cabrito-light text-sm font-normal tracking-wider  ">
            <p>With Great Pleasure</p>
          </span>
          <span className="Cabrito-light text-base font-semibold tracking-wider">
            <p>Mr. Jitendra & Mrs. Amita Patel</p>
          </span>

          <span className="Cabrito-light text-sm font-normal tracking-wider  ">
            <p>Together With</p>
          </span>

          <span className="Cabrito-light text-base font-semibold tracking-wider">
            <p>Mr. Mahendra & Mrs. Bharti Joshi</p>
          </span>

          <span className="Cabrito-light text-sm font-normal tracking-wider  ">
            <p>
              Cordially invite you to a night of dinner and <br /> dancing to
              celebrate the newlyweds
            </p>
          </span>
        </motion.span>

        <motion.span
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 1.5 }}
          viewport={{ once: true }}
          className="brittanySignature font-normal text-5xl leading-snug  small-h:text-4xl"
        >
          <h2 className="font-gradiant-sangeeth py-6">
            Keyur & Pinki <br /> Patel
          </h2>
        </motion.span>

        <motion.span
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 2 }}
          viewport={{ once: true }}
          className="Cabrito-regular font-bold tracking-wider text-sm "
        >
          <p>
            Saturday, July 1, 2023
            <br />
            7:00 PM
          </p>
        </motion.span>

        <motion.span
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 2.4 }}
          viewport={{ once: true }}
          className=" flex flex-col  pt-10"
        >
          <span className="uppercase catavalo tracking-widest font-bold text-lg">
            SKY BALLROOM
          </span>
          <span className="Cabrito-regular text-sm font-medium tracking-widest leading-3">
            Garza Blanca Hotel & Resort <br /> Cancun, Mexico
          </span>
        </motion.span>
      </div>

      {/* Bg-pattern */}

      <img
        src="/img/reception/arch-bg.png"
        className="w-full h-fscreen object-cover object-top grid-child z-30"
      />
    </div>
  );
};

export default Reception;
