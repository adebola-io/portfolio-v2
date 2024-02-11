"use client";
import { ClassList } from "@/utils";
import type { NavigationItem } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useStore } from "@/stores";

export function NavigationItem(props: NavigationItem) {
  const pathname = usePathname();
  const toggleSidebar = useStore((state) => state.toggleSidebar);
  const navItemClasslist = new ClassList("text-white font-syncopate");
  if (props.type == "action") {
    return (
      <div className={navItemClasslist.toString()} onClick={props.onClick}>
        {props.name}
      </div>
    );
  }
  const isActive = props.to == pathname;
  if (isActive) {
    navItemClasslist
      .add("font-bold")
      .add(
        "after:[content:''] after:block after:w-full after:h-[2px] after:bg-white"
      )
      .add(
        "after:[animation-fill-mode:both] after:[animation-delay:900ms] after:[animation:elongate_500ms]"
      );
  }
  return (
    <Link
      onClick={() => toggleSidebar(false)}
      className={navItemClasslist.toString()}
      href={props.to}
    >
      {props.name}
    </Link>
  );
}
