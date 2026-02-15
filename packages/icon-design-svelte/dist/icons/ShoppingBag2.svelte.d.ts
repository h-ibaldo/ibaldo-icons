import { SvelteComponent } from 'svelte';

export interface ShoppingBag2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ShoppingBag2 extends SvelteComponent<ShoppingBag2Props> {}
