'use client';
import Link from 'next/link';
import { Button } from './ui/Button';
import { Briefcase } from './icons/Briefcase';
import { Download } from './icons/Download';

export function HomeHero() {
  const downloadResume = () => {
    alert('downloading...');
  };
  return (
    <section className="sticky top-0 flex justify-center overflow-hidden flex-col w-screen min-h-[--section-height] px-[--screen-padding] pt-[--header-height] gap-[1.6759vh]">
      <div
        id="home-hero-background"
        className="absolute z-[-1] opacity-[0.7] top-0 left-0 w-screen h-screen"
      />
      <h1 className="font-syncopate font-bold text-[29pt]">
        BUILD A world, <br />
        bit by bit.
      </h1>
      <p className="w-[95%]">
        Good day, traveler! My name is Sefunmi, and I am a dedicated programmer
        with a solid background in software development. Over the years,
        I&apos;ve honed my skills in crafting efficient and elegant solutions to
        complex problems.
      </p>
      <div className="flex flex-col w-max gap-[1.11vh]">
        <Button className="p-[1.677vh_13.333vw] bg-[#037989] text-white border-nectar-eagle-green gap-[7px]">
          <Link href="/works">View Works</Link>
          <Briefcase />
        </Button>
        <Button
          onClick={downloadResume}
          className="p-[1.677vh_13.333vw] bg-white text-[#002139] border-[#002139] gap-[7px]"
        >
          Download Resume
          <Download />
        </Button>
      </div>
    </section>
  );
}

// interface HeroBoxProps {
//   style: React.CSSProperties;
// }
// export function HeroBox(props: HeroBoxProps) {
//   return (
//     <div
//       style={props.style}
//       className="absolute flex items-center justify-center h-[80vh] aspect-square bg-white overflow-hidden [background-image:--dreamwave] rounded-[45px]"
//     >
//       <div className="h-[98%] w-[98%] bg-white rounded-[40px]"></div>
//     </div>
//   );
// }
