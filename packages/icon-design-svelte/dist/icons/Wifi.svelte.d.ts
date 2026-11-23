import { SvelteComponent } from 'svelte';

export interface WifiProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Wifi extends SvelteComponent<WifiProps> {}
