import type { DefineComponent } from 'vue';

export interface MenuBarCursorProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MenuBarCursor: DefineComponent<MenuBarCursorProps>;

export default MenuBarCursor;
export { MenuBarCursor };
