import type { DefineComponent } from 'vue';

export interface MenuSmallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MenuSmall: DefineComponent<MenuSmallProps>;

export default MenuSmall;
export { MenuSmall };
