import { SvelteComponent } from 'svelte';

export interface BrowserBanProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrowserBan extends SvelteComponent<BrowserBanProps> {}
