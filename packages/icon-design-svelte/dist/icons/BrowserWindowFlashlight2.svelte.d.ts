import { SvelteComponent } from 'svelte';

export interface BrowserWindowFlashlight2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrowserWindowFlashlight2 extends SvelteComponent<BrowserWindowFlashlight2Props> {}
