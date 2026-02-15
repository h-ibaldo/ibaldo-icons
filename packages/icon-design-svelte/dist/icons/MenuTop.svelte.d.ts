import { SvelteComponent } from 'svelte';

export interface MenuTopProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MenuTop extends SvelteComponent<MenuTopProps> {}
