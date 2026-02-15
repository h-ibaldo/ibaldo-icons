import { SvelteComponent } from 'svelte';

export interface WifiSignalHotspot1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WifiSignalHotspot1 extends SvelteComponent<WifiSignalHotspot1Props> {}
