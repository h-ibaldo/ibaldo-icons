import type { DefineComponent } from 'vue';

export interface MenuGridDotsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MenuGridDots: DefineComponent<MenuGridDotsProps>;

export default MenuGridDots;
export { MenuGridDots };
