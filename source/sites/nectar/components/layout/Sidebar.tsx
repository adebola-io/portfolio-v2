"use client";
import { useRef } from "react";
import { useStore } from "@/stores";
import { ClassList } from "@/utils";
import { navigationItems } from "@/data";
import { NavigationItem } from "./NavigationItem";

export function Sidebar() {
  const sidebarIsOpen = useStore((state) => state.sidebarIsOpen);
  const sidebarRef = useRef<HTMLElement>(null);
  const sidebarClasslist = new ClassList(
    "fixed top-0 w-screen h-full bg-nectar-midnight-green px-[--screen-padding] flex items-center animate-[fade-in_450ms]"
  );
  if (!sidebarIsOpen) return null;
  return (
    <aside ref={sidebarRef} className={sidebarClasslist.toString()}>
      <ul className="flex flex-col gap-[28px]">
        {navigationItems.map((link) => (
          <li className="w-max text-4xl">
            <NavigationItem {...link} />
          </li>
        ))}
      </ul>
    </aside>
  );
}

export function SidebarToggler() {
  const store = useStore();
  let sidebarTogglerClasslist = new ClassList("sidebar-toggle");
  if (store.sidebarIsOpen) {
    sidebarTogglerClasslist.add("opened");
  }
  const sidebarTogglerStyles = {
    "--color": store.sidebarIsOpen ? "white" : "#002139",
  } as React.CSSProperties;

  return (
    <div
      onClick={() => store.toggleSidebar()}
      style={sidebarTogglerStyles}
      className={sidebarTogglerClasslist.toString()}
    ></div>
  );
}
