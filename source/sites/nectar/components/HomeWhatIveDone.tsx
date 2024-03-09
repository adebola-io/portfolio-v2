import { Button } from './ui/Button';
import { ArrowLeft } from './icons/ArrowLeft';
import { ClassList } from '@/utils/ClassList';

export function HomeWhatIveDone() {
  const styles = getStyles();
  return (
    <section className={styles.section.css}>
      <div className={styles.content.css}>
        <h2>What Have i Done?</h2>
        <p>Here are a few of my selected works: </p>
        <Button className={styles.button.css}>
          See All
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
      display: 'flex flex-col justify-center',
      size: 'w-[100vw] min-h-[--section-height]',
      padding: 'px-[--screen-padding]',
      color: 'bg-nectar-persian-pink',
      border: 'rounded-t-[25px]',
    }),
    content: new ClassList({
      display: 'flex flex-col items-end gap-[20px]',
      color: 'text-[#A30757]',
      text: 'text-right',
    }),
    button: new ClassList({
      size: 'w-fit',
      padding: 'p-[1.677vh_13.333vw]',
      text: 'text-center',
      color: 'text-white',
    }),
  };
}
