import { SvelteComponent } from 'svelte';

export interface BrowserWindowMegaphoneAdvertisementProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrowserWindowMegaphoneAdvertisement extends SvelteComponent<BrowserWindowMegaphoneAdvertisementProps> {}
