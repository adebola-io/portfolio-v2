export type NavigationItem = ActionNavigationItem | AnchorNavigationItem;

export interface AnchorNavigationItem {
  name: string;
  type: "link";
  to: string;
}

export interface ActionNavigationItem {
  name: string;
  type: "action";
  icon?: React.ReactElement;
  onClick: React.MouseEventHandler;
}
