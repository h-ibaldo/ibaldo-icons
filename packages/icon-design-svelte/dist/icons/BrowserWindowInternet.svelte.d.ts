import { SvelteComponent } from 'svelte';

export interface BrowserWindowInternetProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrowserWindowInternet extends SvelteComponent<BrowserWindowInternetProps> {}
