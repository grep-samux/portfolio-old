'use client';

import { useSectionInView } from '@/shared/lib/hooks';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

export default function Contact() {
  const { ref } = useSectionInView('Contact');

  return (
    <motion.section
      className="text-center w-full md:max-w-3xl"
      ref={ref}
      id="contact"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 -mt-5">
        You can contact me directly at{' '}
        <a
          href="mailto:exam"
          className="underline"
        >
          samuele.villa@outlook.com
        </a>{' '}
        or through this form.
      </p>
      <form
        className="mt-10 flex flex-col"
        action={async (FormData) => {
          const { data, error } = await sendEmail(FormData);
          if (error) {
            toast.error(error);
            return;
          }

          toast.success('Email sent successfully');
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack"
          type="email"
          name="senderEmail"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4"
          placeholder="Your message"
          name="message"
          required
          cols={42}
          maxLength={5000}
        ></textarea>
        <SubmitBtn></SubmitBtn>
      </form>
    </motion.section>
  );
}
