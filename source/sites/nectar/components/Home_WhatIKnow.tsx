'use client';
import { useHeaderColors } from '@/hooks/useHeaderColors';
import { Button } from './Button';
import TechStack from '@/assets/Tech-Stack.png';
import { useRef } from 'react';
import { ArrowLeft } from './icons/ArrowLeft';

export function HomeWhatIKnow() {
  const sectionRef = useRef<HTMLElement>(null);
  useHeaderColors({
    target: sectionRef,
    foregroundColor: '',
  });

  return (
    <section
      ref={sectionRef}
      style={{ backgroundImage: `url(${TechStack.src})` }}
      className="sticky top-0 flex flex-col justify-center min-h-[--section-height] px-[--screen-padding] gap-[20px] w-screen bg-nectar-lavender-blue rounded-t-[25px] text-[#1968A1] bg-center bg-cover"
    >
      <h2 className="w-[90%]">What do I Know?</h2>
      <p>
        My skillset covers a wide spectrum of technologies, from front-end
        frameworks like React, Svelte and Vue, full stack frameworks like
        Next.js and Nuxt.js, backend languages and runtimes like Node.js, Rust
        and Python, and CSS UI frameworks like Tailwind.
      </p>
      <p>
        Whether its web development, app creation, or scripting solutions,
        I&apos;ve got it covered.
      </p>
      <Button className="p-[1.677vh_13.333vw] w-fit bg-[#87B0FF] border-[#1968A1] border-2 gap-[7px]">
        View Selected Works
        <ArrowLeft />
      </Button>
    </section>
  );
}
