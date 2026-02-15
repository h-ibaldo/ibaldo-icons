import { SvelteComponent } from 'svelte';

export interface WifiSignalHotspot8Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WifiSignalHotspot8 extends SvelteComponent<WifiSignalHotspot8Props> {}
