'use client';
import { useRef } from 'react';
import { useStore } from '@/stores';
import { ClassList } from '@/utils/ClassList';
import { navigationItems } from '@/data';
import { NavItem } from './NavigationItem';
import { NavigationItem as NavItemType } from '@/types';

const SIDEBAR_ANIMATION_DURATION = 450;

const styles = getStyles();
export function Sidebar() {
  const sidebarIsOpen = useStore((state) => state.sidebarIsOpen);
  const sidebarRef = useRef<HTMLElement>(null);
  if (!sidebarIsOpen) return null;
  return (
    <aside
      ref={sidebarRef}
      className={styles.sidebar.css}
      style={{ animationDuration: `${SIDEBAR_ANIMATION_DURATION}ms` }}
    >
      <ul className={styles.ul.css}>
        {navigationItems.map(SidebarNavigationItem)}
      </ul>
    </aside>
  );
}

const sidebarNavItem = new ClassList({
  position: 'overflow-hidden',
  size: 'w-max',
  text: 'text-4xl',
});
function SidebarNavigationItem(link: NavItemType, index: number) {
  const style: React.CSSProperties = {
    animationDelay: `${SIDEBAR_ANIMATION_DURATION - 50}ms`,
    animationDuration: `${300 + index * 200}ms`,
    animationName: 'slide-up-from-under',
    animationFillMode: 'both',
  };
  return (
    <li key={index} className={sidebarNavItem.css}>
      <div style={style}>
        <NavItem {...link} key={index} />
      </div>
    </li>
  );
}

export function SidebarToggler() {
  const store = useStore();
  const sidebarTogglerClasslist = new ClassList('sidebar-toggle');
  if (store.sidebarIsOpen) {
    sidebarTogglerClasslist.add('opened');
  }
  const sidebarTogglerStyles = {
    '--color': store.sidebarIsOpen ? 'white' : 'inherit',
  } as React.CSSProperties;

  return (
    <button
      id="sidebar-toggler"
      type="button"
      onClick={() => store.toggleSidebar()}
      style={sidebarTogglerStyles}
      className={sidebarTogglerClasslist.css}
    />
  );
}

function getStyles() {
  const sidebar = new ClassList({
    position: 'fixed top-0 z-[99]',
    display: 'flex items-center',
    size: 'w-screen h-screen',
    padding: 'px-[--screen-padding]',
    color: 'bg-nectar-midnight-green',
    animation: 'animate-[fade-in_500ms]',
  });
  const ul = new ClassList({
    display: 'flex flex-col gap-[28px]',
  });
  return {
    sidebar,
    ul,
  };
}
