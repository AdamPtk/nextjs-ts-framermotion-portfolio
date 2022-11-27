import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import me from '../public/me.jpg';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      'Hi, my name is Adam',
      '<Guy-who-loves-Coffee />',
      '<ButLovesToCodeMore />',
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col items-center justify-center overflow-hidden">
      <BackgroundCircles />
      <div className="relative w-32 h-32 mb-2">
        <Image src={me} alt="Author image" className="rounded-full" />
      </div>
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 p-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="">{text}</span>
          <Cursor />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
