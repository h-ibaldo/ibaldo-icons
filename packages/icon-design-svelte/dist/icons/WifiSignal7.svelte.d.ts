import { SvelteComponent } from 'svelte';

export interface WifiSignal7Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WifiSignal7 extends SvelteComponent<WifiSignal7Props> {}
