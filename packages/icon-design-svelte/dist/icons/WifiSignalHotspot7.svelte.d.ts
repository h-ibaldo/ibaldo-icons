import { SvelteComponent } from 'svelte';

export interface WifiSignalHotspot7Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WifiSignalHotspot7 extends SvelteComponent<WifiSignalHotspot7Props> {}
