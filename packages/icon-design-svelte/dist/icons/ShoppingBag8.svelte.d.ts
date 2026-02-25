import { SvelteComponent } from 'svelte';

export interface ShoppingBag8Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ShoppingBag8 extends SvelteComponent<ShoppingBag8Props> {}
