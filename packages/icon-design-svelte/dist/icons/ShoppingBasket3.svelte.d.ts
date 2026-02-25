import { SvelteComponent } from 'svelte';

export interface ShoppingBasket3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ShoppingBasket3 extends SvelteComponent<ShoppingBasket3Props> {}
