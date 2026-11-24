import type { DefineComponent } from 'vue';

export interface MenuCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MenuCircle: DefineComponent<MenuCircleProps>;

export default MenuCircle;
export { MenuCircle };
