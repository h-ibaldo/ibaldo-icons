import { SvelteComponent } from 'svelte';

export interface CartPlusRailProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CartPlusRail extends SvelteComponent<CartPlusRailProps> {}
