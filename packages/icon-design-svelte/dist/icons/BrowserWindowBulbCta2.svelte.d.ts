import { SvelteComponent } from 'svelte';

export interface BrowserWindowBulbCta2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrowserWindowBulbCta2 extends SvelteComponent<BrowserWindowBulbCta2Props> {}
