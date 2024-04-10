import { Button } from './ui/Button';
import IntroductionOverlay from '@/assets/Introduction-Overlay.png';
import { ArrowLeft } from './icons/ArrowLeft';

export function HomeIntroduction() {
  return (
    <section
      style={{ backgroundImage: `url(${IntroductionOverlay.src})` }}
      className="sticky top-0 flex justify-center items-center w-screen h-[--section-height] px-[--screen-padding] bg-[#002139] bg-cover bg-center rounded-t-[25px]"
    >
      <div className="flex items-center justify-center flex-col gap-[2.36vh] w-[90%] py-[4.857vh] px-[2.8205vw] bg-[#002139] text-white border-[#38A0FF] text-center border-[3px] border-dashed rounded-[13px]">
        <h2>Who am i?</h2>
        <p>
          I am a self-motivated <span data-color>developer</span> with a love
          for crafting efficient, elegant code. I thrive on tackling complex
          challenges and turning ideas into <span data-color>functional</span>{' '}
          software solutions.
        </p>
        <p>
          I am committed to continuous learning, staying up-to-date with the
          latest technologies, and collaborating with like-minded professionals
          to create <span data-color>innovative</span> and{' '}
          <span data-color>impactful</span> projects.
        </p>
        <p>
          My mission is to bridge the gap between{' '}
          <span data-color>creativity</span> and{' '}
          <span data-color>technology</span>, and I&apos;m excited to bring my
          expertise to every project I undertake.
        </p>
        <Button className="py-3 px-8 bg-white text-[#002139]">
          More About me
          <ArrowLeft />
        </Button>
      </div>
    </section>
  );
}
