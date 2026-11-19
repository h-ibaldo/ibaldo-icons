import type { DefineComponent } from 'vue';

export interface MenuDescendingProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MenuDescending: DefineComponent<MenuDescendingProps>;

export default MenuDescending;
export { MenuDescending };
