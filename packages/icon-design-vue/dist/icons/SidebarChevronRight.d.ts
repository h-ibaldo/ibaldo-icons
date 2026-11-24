import type { DefineComponent } from 'vue';

export interface SidebarChevronRightProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SidebarChevronRight: DefineComponent<SidebarChevronRightProps>;

export default SidebarChevronRight;
export { SidebarChevronRight };
