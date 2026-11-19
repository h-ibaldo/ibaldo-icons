import type { DefineComponent } from 'vue';

export interface WindowMenuProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowMenu: DefineComponent<WindowMenuProps>;

export default WindowMenu;
export { WindowMenu };
