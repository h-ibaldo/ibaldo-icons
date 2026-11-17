import { SvelteComponent } from 'svelte';

export interface BrowserWindowBulbCta1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrowserWindowBulbCta1 extends SvelteComponent<BrowserWindowBulbCta1Props> {}
