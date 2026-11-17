import { SvelteComponent } from 'svelte';

export interface BrowserWindowLaunchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrowserWindowLaunch extends SvelteComponent<BrowserWindowLaunchProps> {}
