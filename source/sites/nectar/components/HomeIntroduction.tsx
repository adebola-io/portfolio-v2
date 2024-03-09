import { ClassList } from '@/utils/ClassList';
import { Button } from './ui/Button';
import IntroductionOverlay from '@/assets/Introduction-Overlay.png';
import { ArrowLeft } from './icons/ArrowLeft';

export function HomeIntroduction() {
  const styles = getStyles();
  return (
    <section
      style={{ backgroundImage: `url(${IntroductionOverlay.src})` }}
      className={styles.section.css}
    >
      <div className={styles.content.css}>
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
        <Button className={styles.moreAboutMeBtn.css}>
          More About me
          <ArrowLeft />
        </Button>
      </div>
    </section>
  );
}

function getStyles() {
  return {
    section: new ClassList({
      position: 'sticky top-0',
      display: 'flex justify-center items-center',
      size: 'w-screen h-[--section-height]',
      padding: 'px-[--screen-padding]',
      color: 'bg-[#002139]',
      background: 'bg-cover bg-center',
      border: 'rounded-t-[25px]',
    }),
    content: new ClassList({
      display: 'flex items-center justify-center flex-col gap-[2.36vh]',
      size: 'w-[90%]',
      padding: 'py-[4.857vh] px-[2.8205vw]',
      color: 'bg-[#002139] text-white border-[#38A0FF]',
      text: 'text-center',
      border: 'border-[3px] border-dashed rounded-[13px]',
    }),
    moreAboutMeBtn: new ClassList({
      padding: 'py-3 px-8',
      color: 'bg-white text-[#002139]',
    }),
  };
}
