import { SvelteComponent } from 'svelte';

export interface BrowserWindow2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrowserWindow2 extends SvelteComponent<BrowserWindow2Props> {}
