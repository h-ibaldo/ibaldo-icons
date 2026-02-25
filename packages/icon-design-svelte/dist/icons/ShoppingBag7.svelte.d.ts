import { SvelteComponent } from 'svelte';

export interface ShoppingBag7Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ShoppingBag7 extends SvelteComponent<ShoppingBag7Props> {}
