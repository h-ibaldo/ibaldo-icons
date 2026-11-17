import { SvelteComponent } from 'svelte';

export interface WifiSignal8Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WifiSignal8 extends SvelteComponent<WifiSignal8Props> {}
