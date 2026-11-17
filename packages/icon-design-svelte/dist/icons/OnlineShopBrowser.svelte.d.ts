import { SvelteComponent } from 'svelte';

export interface OnlineShopBrowserProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class OnlineShopBrowser extends SvelteComponent<OnlineShopBrowserProps> {}
