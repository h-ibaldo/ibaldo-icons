import type { DefineComponent } from 'vue';

export interface SidebarRightProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SidebarRight: DefineComponent<SidebarRightProps>;

export default SidebarRight;
export { SidebarRight };
