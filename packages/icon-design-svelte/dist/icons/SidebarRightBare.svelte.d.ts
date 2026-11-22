import { SvelteComponent } from 'svelte';

export interface SidebarRightBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SidebarRightBare extends SvelteComponent<SidebarRightBareProps> {}
