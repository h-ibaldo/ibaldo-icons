import { SvelteComponent } from 'svelte';

export interface BrowserRocketProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrowserRocket extends SvelteComponent<BrowserRocketProps> {}
