'use client';
import { useRef } from 'react';
import { useStore } from '@/stores';
import { ClassList } from '@/utils';
import { navigationItems } from '@/data';
import { NavigationItem } from './NavigationItem';
import { NavigationItem as NavItemType } from '@/types';

const SIDEBAR_ANIMATION_DURATION = 450;

export function Sidebar() {
  const sidebarIsOpen = useStore((state) => state.sidebarIsOpen);
  const sidebarRef = useRef<HTMLElement>(null);
  const sidebarClasslist = new ClassList(
    'fixed top-0 w-screen h-screen bg-nectar-midnight-green px-[--screen-padding] z-[99] flex items-center animate-[fade-in]'
  );
  if (!sidebarIsOpen) return null;
  return (
    <aside
      ref={sidebarRef}
      className={sidebarClasslist.toString()}
      style={{ animationDuration: `${SIDEBAR_ANIMATION_DURATION}ms` }}
    >
      <ul className="flex flex-col gap-[28px]">
        {navigationItems.map(SidebarNavigationItem)}
      </ul>
    </aside>
  );
}

function SidebarNavigationItem(link: NavItemType, index: number) {
  const style: React.CSSProperties = {
    animationDelay: `${SIDEBAR_ANIMATION_DURATION - 50}ms`,
    animationDuration: `${300 + index * 200}ms`,
    animationName: 'slide-up-from-under',
    animationFillMode: 'both',
  };
  return (
    <li key={index} className="w-max text-4xl overflow-hidden">
      <div style={style}>
        <NavigationItem {...link} key={index} />
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
      className={sidebarTogglerClasslist.toString()}
    />
  );
}
