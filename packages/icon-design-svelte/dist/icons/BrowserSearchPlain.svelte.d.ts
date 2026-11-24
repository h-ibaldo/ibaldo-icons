import { SvelteComponent } from 'svelte';

export interface BrowserSearchPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrowserSearchPlain extends SvelteComponent<BrowserSearchPlainProps> {}
