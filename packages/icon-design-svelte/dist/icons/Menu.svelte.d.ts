import { SvelteComponent } from 'svelte';

export interface MenuProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Menu extends SvelteComponent<MenuProps> {}
