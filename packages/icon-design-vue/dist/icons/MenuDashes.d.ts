import type { DefineComponent } from 'vue';

export interface MenuDashesProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MenuDashes: DefineComponent<MenuDashesProps>;

export default MenuDashes;
export { MenuDashes };
