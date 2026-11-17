import { SvelteComponent } from 'svelte';

export interface BrowserWindowLevelsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrowserWindowLevels extends SvelteComponent<BrowserWindowLevelsProps> {}
