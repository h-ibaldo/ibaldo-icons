import type { DefineComponent } from 'vue';

export interface MenuTightProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MenuTight: DefineComponent<MenuTightProps>;

export default MenuTight;
export { MenuTight };
