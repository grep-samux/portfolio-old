'use client';

import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/shared/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.175,
      }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        After I finished the secondary school, I enrolled in a coding bootcamp
        and meanwhile I begun an university course in computer science in
        Milano. I have pursued my passion for coding and IT world since I was a
        child. My favorite part of programming are the problem-solving
        challenges because I enjoy the feeling of figuring out the final
        solution. My core stack is based mostly on back-end technologies as Java
        and Node but recently, I have been interested in full-stack development
        with Next.js framework as well. I am also familiar with Typescript,
        Relational DBMS and Docker. However, I can provide IT consultancy for
        small projects and tutoring in computer science and mathematics.
      </p>
      <p>
        When I am not coding, I enjoy playing video games, watching movies
        training at the gym, and traveling. I enjoy even documenting on
        different things as well. I am currently learning about History and
        Politics.
      </p>
    </motion.section>
  );
}
