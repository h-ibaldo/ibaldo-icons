import type { DefineComponent } from 'vue';

export interface SidebarArrowLeftProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SidebarArrowLeft: DefineComponent<SidebarArrowLeftProps>;

export default SidebarArrowLeft;
export { SidebarArrowLeft };
