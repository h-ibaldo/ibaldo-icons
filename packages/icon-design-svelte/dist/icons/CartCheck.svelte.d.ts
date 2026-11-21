import { SvelteComponent } from 'svelte';

export interface CartCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CartCheck extends SvelteComponent<CartCheckProps> {}
