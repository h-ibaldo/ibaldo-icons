import { SvelteComponent } from 'svelte';

export interface SidebarMenuProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SidebarMenu extends SvelteComponent<SidebarMenuProps> {}
