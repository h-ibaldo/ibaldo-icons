import type { DefineComponent } from 'vue';

export interface SidebarChevronLeftProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SidebarChevronLeft: DefineComponent<SidebarChevronLeftProps>;

export default SidebarChevronLeft;
export { SidebarChevronLeft };
