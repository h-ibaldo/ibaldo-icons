import { SvelteComponent } from 'svelte';

export interface WifiSignal9Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WifiSignal9 extends SvelteComponent<WifiSignal9Props> {}
