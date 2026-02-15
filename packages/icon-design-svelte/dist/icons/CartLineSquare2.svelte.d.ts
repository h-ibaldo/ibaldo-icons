import { SvelteComponent } from 'svelte';

export interface CartLineSquare2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CartLineSquare2 extends SvelteComponent<CartLineSquare2Props> {}
