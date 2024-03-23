import { SidebarToggler } from './Sidebar';

export function Header() {
  const headerClasses =
    'fixed top-0 z-[99] flex items-center justify-end w-screen h-[--header-height] px-[--screen-padding] [--color:#002139]';

  return (
    <>
      <header id="app-header" className={headerClasses}>
        <SidebarToggler />
      </header>
    </>
  );
}
