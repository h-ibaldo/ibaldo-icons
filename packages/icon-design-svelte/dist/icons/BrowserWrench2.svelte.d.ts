import { SvelteComponent } from 'svelte';

export interface BrowserWrench2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrowserWrench2 extends SvelteComponent<BrowserWrench2Props> {}
