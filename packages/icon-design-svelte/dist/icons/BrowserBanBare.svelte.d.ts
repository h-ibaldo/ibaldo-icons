import { SvelteComponent } from 'svelte';

export interface BrowserBanBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrowserBanBare extends SvelteComponent<BrowserBanBareProps> {}
