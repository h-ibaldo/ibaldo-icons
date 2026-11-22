import type { DefineComponent } from 'vue';

export interface SidebarRightBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SidebarRightBare: DefineComponent<SidebarRightBareProps>;

export default SidebarRightBare;
export { SidebarRightBare };
