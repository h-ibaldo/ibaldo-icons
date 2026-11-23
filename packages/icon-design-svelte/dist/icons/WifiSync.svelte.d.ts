import { SvelteComponent } from 'svelte';

export interface WifiSyncProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WifiSync extends SvelteComponent<WifiSyncProps> {}
