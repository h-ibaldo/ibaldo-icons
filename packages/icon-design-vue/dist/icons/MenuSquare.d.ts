import type { DefineComponent } from 'vue';

export interface MenuSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MenuSquare: DefineComponent<MenuSquareProps>;

export default MenuSquare;
export { MenuSquare };
