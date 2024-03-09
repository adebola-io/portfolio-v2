import Link from 'next/link';
import { Button } from './ui/Button';
import { Briefcase } from './icons/Briefcase';
import { Download } from './icons/Download';
import { ClassList } from '@/utils/ClassList';

export function HomeHero() {
  const styles = getStyles();
  return (
    <section className={styles.section.css}>
      <div id="home-hero-background" className={styles.background.css} />
      <h1 className={styles.heading.css}>
        BUILD A world, <br />
        bit by bit.
      </h1>
      <p className={styles.paragraph.css}>
        Good day, traveler! My name is Sefunmi, and I am a dedicated programmer
        with a solid background in software development. Over the years,
        I&apos;ve honed my skills in crafting efficient and elegant solutions to
        complex problems.
      </p>
      <div className={styles.buttonRow.css}>
        <Button className={styles.viewWorksBtn.css}>
          <Link href="/works">View Works</Link>
          <Briefcase />
        </Button>
        <Button className={styles.resumeDownloadBtn.css}>
          Download Resume
          <Download />
        </Button>
      </div>
    </section>
  );
}

function getStyles() {
  return {
    section: new ClassList({
      position: 'sticky top-0 overflow-hidden',
      display: 'flex flex-col justify-center gap-[1.6759vh]',
      size: 'min-h-[--section-height] w-screen',
      padding: 'px-[--screen-padding] pt-[--header-height]',
    }),

    background: new ClassList({
      position: 'absolute z-[-1] top-0 left-0',
      size: 'w-screen h-screen',
      background: 'bg-center bg-cover',
      misc: 'opacity-[0.7]',
    }),

    heading: new ClassList({
      text: 'font-syncopate font-bold text-[29pt]',
    }),

    paragraph: new ClassList({
      size: 'w-[95%]',
    }),

    buttonRow: new ClassList({
      display: 'flex flex-col gap-[1.11vh]',
      size: 'w-max',
    }),

    viewWorksBtn: new ClassList({
      display: 'gap-[7px]',
      padding: 'p-[1.677vh_13.333vw]',
      color: 'border-nectar-eagle-green text-white bg-[#037989]',
    }),

    resumeDownloadBtn: new ClassList({
      display: 'gap-[7px]',
      padding: 'p-[1.677vh_13.333vw]',
      color: 'bg-white text-[#002139] border-[#002139]',
    }),
  };
}
