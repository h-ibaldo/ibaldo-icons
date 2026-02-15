import { SvelteComponent } from 'svelte';

export interface BrowserWindowArrowInProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrowserWindowArrowIn extends SvelteComponent<BrowserWindowArrowInProps> {}
