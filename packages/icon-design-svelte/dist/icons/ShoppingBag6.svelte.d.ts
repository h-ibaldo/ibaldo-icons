import { SvelteComponent } from 'svelte';

export interface ShoppingBag6Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ShoppingBag6 extends SvelteComponent<ShoppingBag6Props> {}
