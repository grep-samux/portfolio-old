'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { BsArrowRight, BsGithub, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { useSectionInView } from '@/shared/lib/hooks';
import { useActiveSectionContext } from '@/shared/context/active-section-context';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import Button from '@/shared/ui/button';

const Avatar = ({ src, alt, emoji }: any) => {
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: 'spring',
          stiffness: 125,
          delay: 0.1,
          duration: 0.7,
        }}
      >
        <Image
          src={src}
          alt={alt}
          width="192"
          height="192"
          quality="100"
          priority={true}
          className="h-32 w-32 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
        ></Image>
      </motion.div>
      <motion.span
        className="text-4xl absolute bottom-0 right-0"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: 'spring',
          stiffness: 125,
          delay: 0.1,
          duration: 0.7,
        }}
      >
        {emoji}
      </motion.span>
    </div>
  );
};

const MySelf = () => {
  const [text, count] = useTypewriter({
    words: [
      'Hi, my name is Samuele',
      'Guy-who-loves-caffeine.tsx',
      '<ButLovesToCodeMore />',
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <>
      <h1 className="text-2xl font-bold mb-2">
        <span>{text}</span>
        <Cursor cursorColor="#F7AB0A" />
      </h1>
      <h2 className="text-xl mb-2">
        I'm a passionate Junior Developer and Computer Science student from
        Italy with a knack for turning complex problems into elegant software
        solutions.
      </h2>
      <h3 className="text-md">
        I thrive on building full-stack applications from the ground up. My
        toolkit includes several technolgies for creating fast, modern and
        distributed scalable systems.
      </h3>
    </>
  );
};

export default function Intro() {
  const { ref } = useSectionInView('Home', 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center scroll-mt-[100rem] sm:mb-0"
      id="home"
    >
      <div className="flex justify-center">
        <Avatar
          src="https://samuele-portfolio-images.s3.eu-central-1.amazonaws.com/img/IMG_2169.JPG"
          alt="Samuiele portrait"
          emoji={'🐢'}
        />
      </div>
      <motion.div
        className="mb-10 mt-4 px-4 leading-[1.5]"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <MySelf />
      </motion.div>

      <motion.div
        className="flex flex-col sm:flex-row gap-4 items-center justify-center text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Button
          href="#contact"
          variant="primary"
          onClick={() => {
            setActiveSection('Contact');
            setTimeOfLastClick(Date.now());
          }}
        >
          <span>Contact me!</span>
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Button>

        <Button
          href="https://samuele-portfolio-images.s3.eu-central-1.amazonaws.com/cv/cv-samuele-villa.pdf"
          download
          variant="secondary"
        >
          <span>Download my CV</span>
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </Button>

        <Button
          href="https://www.linkedin.com/in/samuele-villa-b5a67a267/"
          variant="secondary"
          size="icon"
          className="text-blue-500 hover:text-blue-700"
        >
          <BsLinkedin />
        </Button>

        <Button
          href="https://github.com/grep-samux"
          variant="secondary"
          size="icon"
          className="text-gray-900 hover:text-gray-950"
        >
          <BsGithub />
        </Button>
      </motion.div>
    </section>
  );
}
