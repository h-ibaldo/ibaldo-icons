import { SvelteComponent } from 'svelte';

export interface MenuGridDotsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MenuGridDots extends SvelteComponent<MenuGridDotsProps> {}
