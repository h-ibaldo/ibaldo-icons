import type { DefineComponent } from 'vue';

export interface MenuShortBottomProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MenuShortBottom: DefineComponent<MenuShortBottomProps>;

export default MenuShortBottom;
export { MenuShortBottom };
