import type { DefineComponent } from 'vue';

export interface MenuTwoLinesProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MenuTwoLines: DefineComponent<MenuTwoLinesProps>;

export default MenuTwoLines;
export { MenuTwoLines };
