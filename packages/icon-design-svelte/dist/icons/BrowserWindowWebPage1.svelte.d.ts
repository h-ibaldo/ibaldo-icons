import { SvelteComponent } from 'svelte';

export interface BrowserWindowWebPage1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrowserWindowWebPage1 extends SvelteComponent<BrowserWindowWebPage1Props> {}
