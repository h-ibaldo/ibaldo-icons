import type { DefineComponent } from 'vue';

export interface MenuCompactProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MenuCompact: DefineComponent<MenuCompactProps>;

export default MenuCompact;
export { MenuCompact };
