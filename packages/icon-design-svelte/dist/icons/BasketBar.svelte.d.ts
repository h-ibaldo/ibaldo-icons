import { SvelteComponent } from 'svelte';

export interface BasketBarProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BasketBar extends SvelteComponent<BasketBarProps> {}
