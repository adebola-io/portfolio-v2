'use client';
import { ClassList } from '@/utils/ClassList';
import type { NavigationItem } from '@/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useStore } from '@/stores';

export function NavItem(props: NavigationItem) {
  const pathname = usePathname();
  const toggleSidebar = useStore((state) => state.toggleSidebar);
  const navItem = new ClassList('text-white font-syncopate');
  if (props.type === 'action') {
    return (
      <button type="button" className={navItem.css} onClick={props.onClick}>
        {props.name}
      </button>
    );
  }
  const isActive = props.to === pathname;
  if (isActive) {
    navItem
      .add('font-bold')
      .add(
        "after:[content:''] after:block after:w-full after:h-[2px] after:bg-white"
      )
      .add(
        'after:[animation-fill-mode:both] after:[animation-delay:900ms] after:[animation:elongate_500ms]'
      );
  }
  return (
    <Link
      onClick={() => toggleSidebar(false)}
      className={navItem.css}
      href={props.to}
    >
      {props.name}
    </Link>
  );
}
