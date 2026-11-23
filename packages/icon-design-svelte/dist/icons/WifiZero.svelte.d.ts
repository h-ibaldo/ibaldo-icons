import { SvelteComponent } from 'svelte';

export interface WifiZeroProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WifiZero extends SvelteComponent<WifiZeroProps> {}
