import { SvelteComponent } from 'svelte';

export interface VpnLinesProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class VpnLines extends SvelteComponent<VpnLinesProps> {}
