import { SvelteComponent } from 'svelte';

export interface SidebarMenu1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SidebarMenu1 extends SvelteComponent<SidebarMenu1Props> {}
