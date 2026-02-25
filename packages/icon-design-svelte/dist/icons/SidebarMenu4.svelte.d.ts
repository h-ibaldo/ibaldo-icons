import { SvelteComponent } from 'svelte';

export interface SidebarMenu4Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SidebarMenu4 extends SvelteComponent<SidebarMenu4Props> {}
