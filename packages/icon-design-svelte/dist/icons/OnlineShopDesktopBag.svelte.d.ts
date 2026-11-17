import { SvelteComponent } from 'svelte';

export interface OnlineShopDesktopBagProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class OnlineShopDesktopBag extends SvelteComponent<OnlineShopDesktopBagProps> {}
