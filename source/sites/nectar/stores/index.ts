import { create } from "zustand";

interface AppState {
  sidebarIsOpen: boolean;
  toggleSidebar: (force?: boolean) => void;
}

export const useStore = create<AppState>((set) => {
  return {
    sidebarIsOpen: false,
    toggleSidebar: (force) =>
      set((state) => ({ sidebarIsOpen: force ?? !state.sidebarIsOpen })),
  };
});
