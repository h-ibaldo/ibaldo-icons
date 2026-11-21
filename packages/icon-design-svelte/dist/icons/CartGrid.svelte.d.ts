import { SvelteComponent } from 'svelte';

export interface CartGridProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CartGrid extends SvelteComponent<CartGridProps> {}
