import { SvelteComponent } from 'svelte';

export interface SidebarArrowLeftRowsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SidebarArrowLeftRows extends SvelteComponent<SidebarArrowLeftRowsProps> {}
