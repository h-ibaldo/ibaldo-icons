import { SvelteComponent } from 'svelte';

export interface WifiSignal6Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WifiSignal6 extends SvelteComponent<WifiSignal6Props> {}
