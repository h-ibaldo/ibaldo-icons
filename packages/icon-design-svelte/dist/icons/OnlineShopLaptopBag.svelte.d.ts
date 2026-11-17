import { SvelteComponent } from 'svelte';

export interface OnlineShopLaptopBagProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class OnlineShopLaptopBag extends SvelteComponent<OnlineShopLaptopBagProps> {}
