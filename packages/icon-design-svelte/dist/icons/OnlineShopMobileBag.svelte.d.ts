import { SvelteComponent } from 'svelte';

export interface OnlineShopMobileBagProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class OnlineShopMobileBag extends SvelteComponent<OnlineShopMobileBagProps> {}
