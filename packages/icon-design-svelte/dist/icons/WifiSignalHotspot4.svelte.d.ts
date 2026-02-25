import { SvelteComponent } from 'svelte';

export interface WifiSignalHotspot4Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WifiSignalHotspot4 extends SvelteComponent<WifiSignalHotspot4Props> {}
