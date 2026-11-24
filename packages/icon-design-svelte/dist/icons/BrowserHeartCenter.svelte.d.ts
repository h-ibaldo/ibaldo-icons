import { SvelteComponent } from 'svelte';

export interface BrowserHeartCenterProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrowserHeartCenter extends SvelteComponent<BrowserHeartCenterProps> {}
