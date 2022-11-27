import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
      }}
      transition={{ duration: 2.5 }}
      className="relative flex items-center justify-center"
    >
      <div className="absolute border-2 border-[#333333] rounded-full h-[200px] w-[200px] mt-32 animate-ping" />
      <div className="absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-32" />
      <div className="absolute border border-[#333333] rounded-full h-[500px] w-[500px] mt-32" />
      <div className="absolute border border-[#F7AB0A] opacity-20 rounded-full h-[650px] w-[650px] mt-32 animate-pulse" />
      <div className="absolute border border-[#333333] rounded-full h-[800px] w-[800px] mt-32" />
    </motion.div>
  );
}