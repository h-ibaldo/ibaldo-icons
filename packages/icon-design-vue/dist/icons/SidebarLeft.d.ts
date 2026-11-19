import type { DefineComponent } from 'vue';

export interface SidebarLeftProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SidebarLeft: DefineComponent<SidebarLeftProps>;

export default SidebarLeft;
export { SidebarLeft };
