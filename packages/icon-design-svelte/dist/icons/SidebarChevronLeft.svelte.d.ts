import { SvelteComponent } from 'svelte';

export interface SidebarChevronLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SidebarChevronLeft extends SvelteComponent<SidebarChevronLeftProps> {}
