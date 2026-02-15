import { SvelteComponent } from 'svelte';

export interface BrowserWindowFlashlight1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrowserWindowFlashlight1 extends SvelteComponent<BrowserWindowFlashlight1Props> {}
