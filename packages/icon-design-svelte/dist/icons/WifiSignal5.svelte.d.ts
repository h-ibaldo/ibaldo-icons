import { SvelteComponent } from 'svelte';

export interface WifiSignal5Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WifiSignal5 extends SvelteComponent<WifiSignal5Props> {}
