import { SvelteComponent } from 'svelte';

export interface CartPlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CartPlus extends SvelteComponent<CartPlusProps> {}
