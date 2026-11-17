import { SvelteComponent } from 'svelte';

export interface BrowserLightbulbProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrowserLightbulb extends SvelteComponent<BrowserLightbulbProps> {}
