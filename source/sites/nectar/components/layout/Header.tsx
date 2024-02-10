"use client";
import { SidebarToggler } from "./Sidebar";

export function Header() {
  const headerClasses =
    "fixed top-0 flex items-center justify-end w-screen h-[--header-height] px-[--screen-padding]";

  return (
    <>
      <header className={headerClasses}>
        <SidebarToggler />
      </header>
    </>
  );
}
