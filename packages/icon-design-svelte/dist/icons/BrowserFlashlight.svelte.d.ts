import { SvelteComponent } from 'svelte';

export interface BrowserFlashlightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrowserFlashlight extends SvelteComponent<BrowserFlashlightProps> {}
