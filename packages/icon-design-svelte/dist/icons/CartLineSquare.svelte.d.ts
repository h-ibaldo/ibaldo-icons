import { SvelteComponent } from 'svelte';

export interface CartLineSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CartLineSquare extends SvelteComponent<CartLineSquareProps> {}
