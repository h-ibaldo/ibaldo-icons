import { SvelteComponent } from 'svelte';

export interface BrowserShoeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrowserShoe extends SvelteComponent<BrowserShoeProps> {}
