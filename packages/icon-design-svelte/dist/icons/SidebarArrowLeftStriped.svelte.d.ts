import { SvelteComponent } from 'svelte';

export interface SidebarArrowLeftStripedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SidebarArrowLeftStriped extends SvelteComponent<SidebarArrowLeftStripedProps> {}
