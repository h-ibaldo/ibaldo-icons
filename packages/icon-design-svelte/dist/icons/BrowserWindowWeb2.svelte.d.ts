import { SvelteComponent } from 'svelte';

export interface BrowserWindowWeb2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrowserWindowWeb2 extends SvelteComponent<BrowserWindowWeb2Props> {}
