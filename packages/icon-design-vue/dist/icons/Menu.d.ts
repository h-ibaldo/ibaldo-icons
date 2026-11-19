import type { DefineComponent } from 'vue';

export interface MenuProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Menu: DefineComponent<MenuProps>;

export default Menu;
export { Menu };
