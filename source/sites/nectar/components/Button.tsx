import { ClassList } from "@/utils";

interface ButtonProps {
  className?: string;
  type?: "button" | "submit" | "reset";
  children?: React.ReactNode;
}
export function Button(props: ButtonProps) {
  const buttonClassList = new ClassList(
    "border-[1pt] flex justify-center items-center rounded-[9px]"
  );

  if (props.className) buttonClassList.extend(props.className);
  return (
    <button
      className={buttonClassList.toString()}
      type={props.type ?? "button"}
    >
      {props.children}
    </button>
  );
}
