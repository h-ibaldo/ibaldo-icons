import type { DefineComponent } from 'vue';

export interface MenuGridSquaresProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MenuGridSquares: DefineComponent<MenuGridSquaresProps>;

export default MenuGridSquares;
export { MenuGridSquares };
