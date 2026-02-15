import { SvelteComponent } from 'svelte';

export interface SidebarMenu2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SidebarMenu2 extends SvelteComponent<SidebarMenu2Props> {}
