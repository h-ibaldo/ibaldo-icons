import type { DefineComponent } from 'vue';

export interface SidebarLeftBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SidebarLeftBare: DefineComponent<SidebarLeftBareProps>;

export default SidebarLeftBare;
export { SidebarLeftBare };
