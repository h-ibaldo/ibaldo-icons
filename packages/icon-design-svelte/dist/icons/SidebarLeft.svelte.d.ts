import { SvelteComponent } from 'svelte';

export interface SidebarLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SidebarLeft extends SvelteComponent<SidebarLeftProps> {}
