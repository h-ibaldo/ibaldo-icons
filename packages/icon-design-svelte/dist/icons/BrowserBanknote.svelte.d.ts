import { SvelteComponent } from 'svelte';

export interface BrowserBanknoteProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrowserBanknote extends SvelteComponent<BrowserBanknoteProps> {}
