import type { DefineComponent } from 'vue';

export interface SidebarMenuProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SidebarMenu: DefineComponent<SidebarMenuProps>;

export default SidebarMenu;
export { SidebarMenu };
