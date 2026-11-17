import { SvelteComponent } from 'svelte';

export interface BrowserShieldProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrowserShield extends SvelteComponent<BrowserShieldProps> {}
