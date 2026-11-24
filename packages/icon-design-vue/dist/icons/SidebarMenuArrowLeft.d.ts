import type { DefineComponent } from 'vue';

export interface SidebarMenuArrowLeftProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SidebarMenuArrowLeft: DefineComponent<SidebarMenuArrowLeftProps>;

export default SidebarMenuArrowLeft;
export { SidebarMenuArrowLeft };
