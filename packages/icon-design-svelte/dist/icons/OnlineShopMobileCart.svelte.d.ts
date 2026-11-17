import { SvelteComponent } from 'svelte';

export interface OnlineShopMobileCartProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class OnlineShopMobileCart extends SvelteComponent<OnlineShopMobileCartProps> {}
