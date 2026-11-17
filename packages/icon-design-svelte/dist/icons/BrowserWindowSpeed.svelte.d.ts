import { SvelteComponent } from 'svelte';

export interface BrowserWindowSpeedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrowserWindowSpeed extends SvelteComponent<BrowserWindowSpeedProps> {}
