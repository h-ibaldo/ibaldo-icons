import { SvelteComponent } from 'svelte';

export interface CartArrowDownProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CartArrowDown extends SvelteComponent<CartArrowDownProps> {}
