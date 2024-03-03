import { ClassList } from '@/utils';

interface ButtonProps {
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler;
}
export function Button(props: ButtonProps) {
  const buttonClassList = new ClassList(
    'border-[1pt] flex justify-center items-center rounded-[9px] max-[360px]:text-[0.8rem]'
  );

  if (props.className) buttonClassList.extend(props.className);
  return (
    <button
      onClick={props.onClick}
      className={buttonClassList.toString()}
      type={props.type ?? 'button'}
    >
      {props.children}
    </button>
  );
}
