import { SvelteComponent } from 'svelte';

export interface BrowserHandbagProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrowserHandbag extends SvelteComponent<BrowserHandbagProps> {}
