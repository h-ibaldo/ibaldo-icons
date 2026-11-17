import { SvelteComponent } from 'svelte';

export interface CartSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CartSquare extends SvelteComponent<CartSquareProps> {}
