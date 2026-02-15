import { SvelteComponent } from 'svelte';

export interface WifiSignalHotspot3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WifiSignalHotspot3 extends SvelteComponent<WifiSignalHotspot3Props> {}
