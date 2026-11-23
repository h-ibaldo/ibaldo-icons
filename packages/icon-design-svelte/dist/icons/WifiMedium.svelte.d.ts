import { SvelteComponent } from 'svelte';

export interface WifiMediumProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WifiMedium extends SvelteComponent<WifiMediumProps> {}
