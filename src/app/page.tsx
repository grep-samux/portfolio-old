import About from '@/app/_components/about';
import Contact from '@/app/_components/contact';
import Intro from '@/app/_components/intro';
import SectionDivider from '@/app/_components/section-divider';
import Skills from '@/app/_components/skills';

export default function Home() {
  return (
    <main className="flex flex-col items-center px-5">
      <Intro></Intro>
      <SectionDivider></SectionDivider>
      <About></About>
      <Skills></Skills>
      <Contact></Contact>
    </main>
  );
}
