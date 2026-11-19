import type { DefineComponent } from 'vue';

export interface MenuListSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MenuListSquare: DefineComponent<MenuListSquareProps>;

export default MenuListSquare;
export { MenuListSquare };
