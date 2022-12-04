import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import js from '../public/js.png';
import ts from '../public/ts.png';
import react from '../public/react.png';

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <Image
          src="data:image/png;base64,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"
          alt="Logo"
          width={100}
          height={100}
          className="rounded-full w-32 xl:w-[200px] h-32 xl:h-[200px]"
        />
      </motion.div>
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Frontend Developer</h4>
        <p className="font-bold test-2xl mt-1">Makolab</p>
        <div className="flex space-x-2 my-2">
          <Image src={js} alt="Javascript" className="w-10 h-10 rounded-md" />
          <Image src={ts} alt="Typescript" className="w-10 h-10 rounded-md" />
          <Image src={react} alt="React" className="w-10 h-10 rounded-md" />
        </div>
        <p className="uppercase py-5 text-gray-500">
          Started work ... - Ended ...
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>
            Summary pointsSummary pointsSummary pointsSummary pointsSummary
            pointsSummary pointsSummary points
          </li>
          <li>
            Summary pointsSummary pointsSummary pointsSummary pointsSummary
            pointsSummary pointsSummary points
          </li>
          <li>
            Summary pointsSummary pointsSummary pointsSummary pointsSummary
            pointsSummary pointsSummary points
          </li>
          <li>
            Summary pointsSummary pointsSummary pointsSummary pointsSummary
            pointsSummary pointsSummary points
          </li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
