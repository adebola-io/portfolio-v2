import { Button } from './ui/Button';
import TechStack from '@/assets/Tech-Stack.png';
import { ArrowLeft } from './icons/ArrowLeft';

export function HomeWhatIKnow() {
  return (
    <section
      style={{ backgroundImage: `url(${TechStack.src})` }}
      className="sticky top-0 flex flex-col justify-center gap-[20px] min-h-[--section-height] w-screen px-[--screen-padding] bg-nectar-lavender-blue text-[#1968A1] bg-center bg-cover rounded-t-[25px]"
    >
      <h2 className="w-[90%]">What do I Know?</h2>
      <p>
        My skill set covers a wide spectrum of technologies, from front-end
        frameworks like React, Svelte and Vue, full stack frameworks like
        Next.js and Nuxt.js, backend languages and runtimes like Node.js, Rust
        and Python, and CSS UI frameworks like Tailwind.
      </p>
      <p>
        Whether its web development, app creation, or scripting solutions,
        I&apos;ve got it covered.
      </p>
      <Button className="p-[1.677vh_13.333vw] w-fit gap-[7px] bg-[#87B0FF] border-[#1968A1] text-[#1968A1] border-2">
        View Selected Works
        <ArrowLeft />
      </Button>
    </section>
  );
}
