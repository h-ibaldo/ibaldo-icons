import { SvelteComponent } from 'svelte';

export interface OnlineShopBrowser2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class OnlineShopBrowser2 extends SvelteComponent<OnlineShopBrowser2Props> {}
