import { SvelteComponent } from 'svelte';

export interface ShoppingBag1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ShoppingBag1 extends SvelteComponent<ShoppingBag1Props> {}
