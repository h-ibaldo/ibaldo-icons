import { SvelteComponent } from 'svelte';

export interface SidebarMenu3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SidebarMenu3 extends SvelteComponent<SidebarMenu3Props> {}
