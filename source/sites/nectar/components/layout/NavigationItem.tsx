"use client";
import { ClassList } from "@/utils";
import type { NavigationItem } from "@/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useStore } from "@/stores";

export function NavigationItem(props: NavigationItem) {
  const pathname = usePathname();
  const toggleSidebar = useStore((state) => state.toggleSidebar);
  const navItemClasslist = new ClassList("text-white font-syncopate");

  if (props.type == "link") {
    const isActive = props.to == pathname;
    if (isActive) {
      navItemClasslist
        .add("font-bold")
        .add(
          "after:[content:''] after:block after:w-full after:h-[2px] after:bg-white"
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
  return (
    <div className={navItemClasslist.toString()} onClick={props.onClick}>
      {props.type}
    </div>
  );
}
