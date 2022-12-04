import React from 'react';
import { motion } from 'framer-motion';
import js from '../public/js.png';
import Image from 'next/image';

type Props = {
  directionLeft?: boolean;
};

function Skill({ directionLeft }: Props) {
  return (
    <motion.div
      initial={{
        x: directionLeft ? -200 : 200,
        opacity: 0,
      }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="group relative flex w-24 xl:w-32 h-24 xl:h-32 rounded-full cursor-pointer border-gray-500"
    >
      <Image
        src={js}
        alt="Javascript"
        className="rounded-full filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-24 xl:w-32 h-24 xl:h-32 rounded-full">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </motion.div>
  );
}

export default Skill;
