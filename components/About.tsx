import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import me from '../public/me.jpg';

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ x: -200, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="relative w-56 h-56 mb-20 md:mb-0 flex-shrink-0 md:w-64 md:h-64 xl:w-[400px] xl:h-[400px]"
      >
        <Image
          src={me}
          alt="Author image"
          className="rounded-full md:rounded-lg"
        />
      </motion.div>
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{' '}
          <span className="underline decoration-[#F7AB0A]/40">little</span>{' '}
          background
        </h4>
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          impedit eligendi modi? Minus, dolorem dignissimos ea libero
          reprehenderit neque laudantium? Hic harum suscipit est adipisci veniam
          ipsum maiores sit cumque, in cupiditate fuga repellendus provident
          atque autem cum illo at, perspiciatis quia sint voluptatem aliquam.
          Iste, repellendus! Laboriosam id quis illo, laudantium assumenda
          maxime aliquid tenetur eligendi ab unde quas dolor excepturi
          distinctio perferendis veniam tempore ex cupiditate velit ut ipsam
          accusantium perspiciatis incidunt. A quae ut, molestias distinctio non
          animi commodi perspiciatis, minus quidem dolore vel impedit accusamus
          laborum consectetur, itaque tempore asperiores alias sed sint? Iusto,
          fuga quae?
        </p>
      </div>
    </motion.div>
  );
}

export default About;
