import Link from 'next/link';
import { Button } from './ui/Button';
import { Briefcase } from './icons/Briefcase';
import { Download } from './icons/Download';

export function HomeHero() {
  return (
    <section className="sticky top-0 overflow-hidden flex flex-col justify-center gap-[1.6759vh] min-h-[--section-height] w-screen px-[--screen-padding] pt-[--header-height]">
      <div
        id="home-hero-background"
        className="absolute z-[-1] top-0 left-0 w-screen h-screen bg-center bg-cover opacity-[0.7]"
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
      <div className="flex flex-col gap-[1.11vh] w-max">
        <Button className="gap-[7px] p-[1.677vh_13.333vw] border-nectar-eagle-green text-white bg-[#037989]">
          <Link href="/works">View Works</Link>
          <Briefcase />
        </Button>
        <Button className="gap-[7px] p-[1.677vh_13.333vw] bg-white text-[#002139] border-[#002139]">
          Download Resume
          <Download />
        </Button>
      </div>
    </section>
  );
}
