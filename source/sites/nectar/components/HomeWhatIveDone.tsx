'use client';
import { Button } from "./ui/Button";
import { ArrowLeft } from "./icons/ArrowLeft";

export function HomeWhatIveDone() {
  return (
    <section className="sticky top-0 w-[100vw] flex flex-col justify-center min-h-[--section-height] px-[--screen-padding] bg-nectar-persian-pink rounded-t-[25px]">
      <div className="flex flex-col items-end text-right text-[#A30757] gap-[20px]">
      <h2>
        What Have i Done?
      </h2>
      <p>Here are a few of my selected works: </p>
      <Button className="p-[1.677vh_13.333vw] w-fit text-center bg-white gap-[7px]">
        See All
        <ArrowLeft/>
      </Button>
      </div>
    </section>
  );
}
