import { SvelteComponent } from 'svelte';

export interface WifiSignalHotspot2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WifiSignalHotspot2 extends SvelteComponent<WifiSignalHotspot2Props> {}
