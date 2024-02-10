import React from "react";

export type NavigationItem =
  | {
      name: string;
      type: "link";
      to: string;
    }
  | {
      name: string;
      type: "action";
      icon?: React.ReactElement;
      onClick: React.MouseEventHandler;
    };

export const navigationItems: NavigationItem[] = [
  {
    name: "Home",
    type: "link",
    to: "/",
  },
  {
    name: "About",
    type: "link",
    to: "/about",
  },
  {
    name: "Works",
    type: "link",
    to: "/works",
  },
  {
    name: "Contact",
    type: "link",
    to: "/contact",
  },
  {
    name: "Resume",
    type: "link",
    to: "/contact",
  },
];
