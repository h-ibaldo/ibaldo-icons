import { SvelteComponent } from 'svelte';

export interface SidebarLeftBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SidebarLeftBare extends SvelteComponent<SidebarLeftBareProps> {}
