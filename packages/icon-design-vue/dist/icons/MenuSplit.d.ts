import type { DefineComponent } from 'vue';

export interface MenuSplitProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MenuSplit: DefineComponent<MenuSplitProps>;

export default MenuSplit;
export { MenuSplit };
