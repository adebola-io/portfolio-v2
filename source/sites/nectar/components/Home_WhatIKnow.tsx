import { Button } from './ui/Button';
import TechStack from '@/assets/Tech-Stack.png';
import { ArrowLeft } from './icons/ArrowLeft';
import { ClassList } from '@/utils/ClassList';

const section = new ClassList({
  position: 'sticky top-0',
  display: 'flex flex-col justify-center gap-[20px]',
  size: 'min-h-[--section-height] w-screen px-[--screen-padding]',
  color: 'bg-nectar-lavender-blue text-[#1968A1]',
  background: 'bg-center bg-cover',
  border: 'rounded-t-[25px]',
} as const);

const h2 = new ClassList({
  size: 'w-[90%]',
});

const button = new ClassList({
  position: 'p-[1.677vh_13.333vw]',
  display: 'w-fit gap-[7px]',
  color: 'bg-[#87B0FF] border-[#1968A1] text-[#1968A1] border-2',
});

export function HomeWhatIKnow() {
  return (
    <section
      style={{ backgroundImage: `url(${TechStack.src})` }}
      className={section.css}
    >
      <h2 className={h2.css}>What do I Know?</h2>
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
      <Button className={button.css}>
        View Selected Works
        <ArrowLeft />
      </Button>
    </section>
  );
}
