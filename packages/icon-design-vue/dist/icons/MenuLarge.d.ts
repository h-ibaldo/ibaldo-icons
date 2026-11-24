import type { DefineComponent } from 'vue';

export interface MenuLargeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MenuLarge: DefineComponent<MenuLargeProps>;

export default MenuLarge;
export { MenuLarge };
