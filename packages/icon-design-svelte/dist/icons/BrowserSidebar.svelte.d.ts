import { SvelteComponent } from 'svelte';

export interface BrowserSidebarProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrowserSidebar extends SvelteComponent<BrowserSidebarProps> {}
