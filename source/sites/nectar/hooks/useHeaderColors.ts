import { Property } from 'csstype';
import { useEffect } from 'react';

interface HeaderColorsOptions {
  target: React.RefObject<HTMLElement>;
  foregroundColor?: Property.Color;
  backgroundColor?: Property.Color;
}

function intersectionCallBack(
  entries: IntersectionObserverEntry[],
  observer: IntersectionObserver
) {
  for (const entry of entries) {
    const target = entry.target as HTMLElement;
    const headerElement = document.querySelector('#app-header') as HTMLElement;
    const foreground = target.dataset.headerForeground;
    const background = target.dataset.headerBackground;
    const previousHeaderForeground = target.dataset.previousHeaderForeground;
    const previousHeaderBackground = target.dataset.previousHeaderBackground;
    const isIntersecting = entry.isIntersecting;

    headerElement.style.setProperty(
      '--color',
      foreground && isIntersecting
        ? foreground
        : previousHeaderForeground ?? null
    );
    headerElement.style.setProperty(
      'background-color',
      background && isIntersecting
        ? background
        : previousHeaderBackground ?? null
    );
  }
}

let headerObserver: IntersectionObserver;
function getObserver() {
  if (headerObserver === undefined) {
    headerObserver = new IntersectionObserver(intersectionCallBack, {
      threshold: 1,
    });
  }
  return headerObserver;
}

/**
 * Changes the colors of the website header,
 * based on when a section fully enters the viewport.
 */
export function useHeaderColors(options: HeaderColorsOptions) {
  useEffect(() => {
    const observer = getObserver();
    const target = options.target.current;
    if (!target) return;

    const headerElement = document.querySelector('#app-header') as HTMLElement;

    target.dataset.previousHeaderForeground =
      getComputedStyle(headerElement).getPropertyValue('--color');
    target.dataset.previousHeaderBackground =
      getComputedStyle(headerElement).getPropertyValue('background-color');

    target.dataset.headerForeground = options.foregroundColor;
    target.dataset.headerBackground = options.backgroundColor;

    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, [options]);
}
