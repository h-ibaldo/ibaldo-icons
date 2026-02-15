import { SvelteComponent } from 'svelte';

export interface BrowserWindow1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrowserWindow1 extends SvelteComponent<BrowserWindow1Props> {}
