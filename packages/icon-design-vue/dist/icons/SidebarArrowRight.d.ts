import type { DefineComponent } from 'vue';

export interface SidebarArrowRightProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SidebarArrowRight: DefineComponent<SidebarArrowRightProps>;

export default SidebarArrowRight;
export { SidebarArrowRight };
