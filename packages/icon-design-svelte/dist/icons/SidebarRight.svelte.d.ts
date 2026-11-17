import { SvelteComponent } from 'svelte';

export interface SidebarRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SidebarRight extends SvelteComponent<SidebarRightProps> {}
