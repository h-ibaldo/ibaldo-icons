import type { DefineComponent } from 'vue';

export interface MenuNarrowProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MenuNarrow: DefineComponent<MenuNarrowProps>;

export default MenuNarrow;
export { MenuNarrow };
