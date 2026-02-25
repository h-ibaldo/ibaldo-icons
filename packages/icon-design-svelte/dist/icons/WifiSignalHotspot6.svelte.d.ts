import { SvelteComponent } from 'svelte';

export interface WifiSignalHotspot6Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WifiSignalHotspot6 extends SvelteComponent<WifiSignalHotspot6Props> {}
