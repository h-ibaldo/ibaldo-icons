import { SvelteComponent } from 'svelte';

export interface SidebarArrowLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SidebarArrowLeft extends SvelteComponent<SidebarArrowLeftProps> {}
