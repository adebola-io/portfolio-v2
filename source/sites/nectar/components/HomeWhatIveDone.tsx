import { Button } from './ui/Button';
import { ArrowLeft } from './icons/ArrowLeft';

export function HomeWhatIveDone() {
  return (
    <section className="sticky top-0 flex flex-col justify-center w-[100vw] min-h-[--section-height] px-[--screen-padding] bg-nectar-persian-pink rounded-t-[25px]">
      <div className="flex flex-col items-end gap-[20px] text-[#A30757] text-right">
        <h2>What Have i Done?</h2>
        <p>Here are a few of my selected works: </p>
        <Button className="w-fit gap-[7px] p-[1.677vh_13.333vw] text-center text-white">
          See All
          <ArrowLeft />
        </Button>
      </div>
    </section>
  );
}
