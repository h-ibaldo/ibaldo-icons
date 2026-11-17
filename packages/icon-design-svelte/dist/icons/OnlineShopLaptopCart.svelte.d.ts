import { SvelteComponent } from 'svelte';

export interface OnlineShopLaptopCartProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class OnlineShopLaptopCart extends SvelteComponent<OnlineShopLaptopCartProps> {}
