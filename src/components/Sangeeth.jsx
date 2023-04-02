import React from 'react';
import { motion } from 'framer-motion';

const Sangeeth = ({ scrollYProgress }) => {
  return (
    <div className="w-[100vw] max-w-screen-desktop h-fscreen grid-child z-20 grid-parent ">
      <video
        autoPlay={true}
        loop={true}
        muted={true}
        playsInline={true}
        poster="/img/Transitionspage/sangeeth-bg.jpg"
        className=" w-[100vw] h-fscreen  grid-child z-30  object-cover	object-center"
      >
        <source src="/videos/sangeeth-bg.mp4" />
        <source src="/videos/sangeeth-bg.webm" />
      </video>

      <div className='grid-child bg-[url("/img/common/pattern-bg.png")] bg-top bg-no-repeat bg-cover z-40 grid place-items-center'>
        <div className=" w-full h-full px-14 sm:w-[65%]  desktop:w-[85%]  flex flex-col justify-center items-center text-center  text-white gap-3">
          <motion.img
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7, delay: 0 }}
            viewport={{ once: true }}
            src="/icons/party.png"
            alt=""
            className="w-16 h-16 small-h:w-12 small-h:h-12"
          />

          <motion.span
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="catavalo text-xl tracking-wider uppercase font-semibold "
          >
            <h1>
              WELCOME PARTY <br /> SANGEET & MEHNDI
            </h1>
          </motion.span>

          <motion.span
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 1.2 }}
            viewport={{ once: true }}
            className="Cabrito-light   tracking-wider desktop:w-[50%] text-slate-200"
          >
            <p className="text-sm font-bold">
              Zarna M. Joshi and Dipali J. Patel
            </p>
            <p className="text-xs font-normal px-5 mobile:px-10 sm:px-0">
              Welcome you for an evening of music, dance, mehndi and merriment
              to celebrate the forthcoming wedding of
            </p>
          </motion.span>

          <motion.span
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 1.6 }}
            viewport={{ once: true }}
            className="brittanySignature font-normal text-5xl leading-snug small-h:text-4xl "
          >
            <h2 className="font-gradiant-sangeeth py-6 px-5">
              Pinki Joshi <br /> & <br /> Keyur Patel
            </h2>
          </motion.span>

          <motion.span
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 2 }}
            viewport={{ once: true }}
            className="Cabrito-regular  tracking-wider font-bold text-sm text-slate-200"
          >
            <p>
              Thursday, June, 29 2023 <br /> 7:00 PM
            </p>
          </motion.span>

          <motion.span
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 2.5 }}
            viewport={{ once: true }}
            className="catavalo flex flex-col  text-slate-200 pt-3"
          >
            <span className="catavalo uppercase tracking-widest font-semibold">
              COCO'S BEACH DECK
            </span>
            <span className="Cabrito-regular text-xs font-medium tracking-widest ">
              Garza Blanca Hotel & Resort <br /> Cancun, Mexico
            </span>
          </motion.span>
        </div>
      </div>
    </div>
  );
};

export default Sangeeth;
