import { SvelteComponent } from 'svelte';

export interface CartMinusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CartMinus extends SvelteComponent<CartMinusProps> {}
