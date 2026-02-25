import { SvelteComponent } from 'svelte';

export interface ShoppingBag9Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ShoppingBag9 extends SvelteComponent<ShoppingBag9Props> {}
