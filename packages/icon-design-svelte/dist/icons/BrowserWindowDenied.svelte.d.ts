import { SvelteComponent } from 'svelte';

export interface BrowserWindowDeniedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrowserWindowDenied extends SvelteComponent<BrowserWindowDeniedProps> {}
