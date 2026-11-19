import type { DefineComponent } from 'vue';

export interface MenuShortMiddleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MenuShortMiddle: DefineComponent<MenuShortMiddleProps>;

export default MenuShortMiddle;
export { MenuShortMiddle };
