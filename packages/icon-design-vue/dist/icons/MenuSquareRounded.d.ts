import type { DefineComponent } from 'vue';

export interface MenuSquareRoundedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MenuSquareRounded: DefineComponent<MenuSquareRoundedProps>;

export default MenuSquareRounded;
export { MenuSquareRounded };
