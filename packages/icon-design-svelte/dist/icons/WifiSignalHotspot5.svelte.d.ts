import { SvelteComponent } from 'svelte';

export interface WifiSignalHotspot5Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WifiSignalHotspot5 extends SvelteComponent<WifiSignalHotspot5Props> {}
