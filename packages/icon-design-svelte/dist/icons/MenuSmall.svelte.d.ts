import { SvelteComponent } from 'svelte';

export interface MenuSmallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MenuSmall extends SvelteComponent<MenuSmallProps> {}
