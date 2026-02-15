import { SvelteComponent } from 'svelte';

export interface ShoppingBasket2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ShoppingBasket2 extends SvelteComponent<ShoppingBasket2Props> {}
