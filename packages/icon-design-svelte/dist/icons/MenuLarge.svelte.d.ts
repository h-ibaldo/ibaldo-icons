import { SvelteComponent } from 'svelte';

export interface MenuLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MenuLarge extends SvelteComponent<MenuLargeProps> {}
