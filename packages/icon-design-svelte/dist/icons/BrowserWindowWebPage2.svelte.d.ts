import { SvelteComponent } from 'svelte';

export interface BrowserWindowWebPage2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrowserWindowWebPage2 extends SvelteComponent<BrowserWindowWebPage2Props> {}
