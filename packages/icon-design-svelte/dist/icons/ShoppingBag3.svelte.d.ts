import { SvelteComponent } from 'svelte';

export interface ShoppingBag3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ShoppingBag3 extends SvelteComponent<ShoppingBag3Props> {}
