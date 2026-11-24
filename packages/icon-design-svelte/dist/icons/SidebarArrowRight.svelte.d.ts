import { SvelteComponent } from 'svelte';

export interface SidebarArrowRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SidebarArrowRight extends SvelteComponent<SidebarArrowRightProps> {}
