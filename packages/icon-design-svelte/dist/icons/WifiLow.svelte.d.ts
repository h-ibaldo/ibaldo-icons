import { SvelteComponent } from 'svelte';

export interface WifiLowProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WifiLow extends SvelteComponent<WifiLowProps> {}
