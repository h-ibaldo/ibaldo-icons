import { SvelteComponent } from 'svelte';

export interface CartSmallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CartSmall extends SvelteComponent<CartSmallProps> {}
