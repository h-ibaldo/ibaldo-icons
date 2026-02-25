import { SvelteComponent } from 'svelte';

export interface ShoppingBag4Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ShoppingBag4 extends SvelteComponent<ShoppingBag4Props> {}
