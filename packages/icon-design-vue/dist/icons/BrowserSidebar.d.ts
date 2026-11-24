import type { DefineComponent } from 'vue';

export interface BrowserSidebarProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BrowserSidebar: DefineComponent<BrowserSidebarProps>;

export default BrowserSidebar;
export { BrowserSidebar };
