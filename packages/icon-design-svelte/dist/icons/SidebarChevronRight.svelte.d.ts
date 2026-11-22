import { SvelteComponent } from 'svelte';

export interface SidebarChevronRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SidebarChevronRight extends SvelteComponent<SidebarChevronRightProps> {}
