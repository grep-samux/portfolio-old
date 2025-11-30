'use client';

import SectionHeading from './section-heading';
import { skillsData } from '@/shared/lib/data';
import { useSectionInView } from '@/shared/lib/hooks';
import { motion } from 'framer-motion';

const fadeInnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.05,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView('Skills');
  return (
    <section
      ref={ref}
      className="mb-28 max-w-[53rem] sroll-mt-28 text-center sm:mb-40"
      id="skills"
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            variants={fadeInnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            key={index}
            className="bg-white borderBlack rounded-xl px-5 py-3"
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
