import { SvelteComponent } from 'svelte';

export interface WifiSignalHotspot10Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WifiSignalHotspot10 extends SvelteComponent<WifiSignalHotspot10Props> {}
