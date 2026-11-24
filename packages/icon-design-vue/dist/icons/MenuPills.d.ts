import type { DefineComponent } from 'vue';

export interface MenuPillsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MenuPills: DefineComponent<MenuPillsProps>;

export default MenuPills;
export { MenuPills };
