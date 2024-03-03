'use client';
import { useRef } from 'react';
import { Button } from './ui/Button';
import IntroductionOverlay from '@/assets/Introduction-Overlay.png';
import { useHeaderColors } from '@/hooks/useHeaderColors';

export function HomeIntroduction() {
  const sectionRef = useRef<HTMLElement>(null);
  useHeaderColors({
    target: sectionRef,
    foregroundColor: 'white',
  });

  return (
    <section
      ref={sectionRef}
      style={{ backgroundImage: `url(${IntroductionOverlay.src})` }}
      className="sticky top-0 flex justify-center items-center w-screen h-[--section-height] px-[--screen-padding] bg-[#002139] text-white rounded-t-[25px] bg-cover bg-center"
    >
      <div className="flex items-center justify-center flex-col border-[3px] border-dashed border-[#38A0FF] py-[4.857vh] px-[2.8205vw] gap-[2.36vh] bg-[#002139] rounded-[13px]">
        <h2 className="text-center">Who am i?</h2>
        <p className="text-center">
          I am a self-motivated{' '}
          <span className="text-[#67D5ED]">developer</span> with a love for
          crafting efficient, elegant code. I thrive on tackling complex
          challenges and turning ideas into{' '}
          <span className="text-[#67D5ED]">functional</span> software solutions.
        </p>
        <p className="text-center">
          I am committed to continuous learning, staying up-to-date with the
          latest technologies, and collaborating with like-minded professionals
          to create <span className="text-[#67D5ED]">innovative</span> and{' '}
          <span className="text-[#67D5ED]">impactful</span> projects.
        </p>
        <p className="text-center">
          My mission is to bridge the gap between{' '}
          <span className="text-[#67D5ED]">creativity</span> and{' '}
          <span className="text-[#67D5ED]">technology</span>, and I&apos;m
          excited to bring my expertise to every project I undertake.
        </p>
        <Button className="bg-white text-[#002139] px-8 py-3 gap-2">
          More About me
          <svg
            role="img"
            aria-labelledby="title"
            className="w-[20px] h-[20px]"
            width="11"
            height="9"
            viewBox="0 0 11 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>More About me</title>
            <path
              d="M10.3318 4.03389C10.439 4.15356 10.5 4.32265 10.5 4.5C10.5 4.67735 10.439 4.84644 10.3318 4.9661L7.31455 8.33454C7.10372 8.56991 6.77655 8.55202 6.58379 8.29459C6.39103 8.03715 6.40566 7.63766 6.61648 7.4023L8.65048 5.13158H1.01724C0.731579 5.13158 0.5 4.8488 0.5 4.5C0.5 4.1512 0.731579 3.86842 1.01724 3.86842L8.65048 3.86842L6.61648 1.59769C6.40566 1.36232 6.39103 0.962823 6.58379 0.705392C6.77655 0.447961 7.10372 0.430108 7.31455 0.665476L10.3318 4.03389Z"
              fill="#002139"
            />
          </svg>
        </Button>
      </div>
    </section>
  );
}
