import type { DefineComponent } from 'vue';

export interface MenuPentagonProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MenuPentagon: DefineComponent<MenuPentagonProps>;

export default MenuPentagon;
export { MenuPentagon };
