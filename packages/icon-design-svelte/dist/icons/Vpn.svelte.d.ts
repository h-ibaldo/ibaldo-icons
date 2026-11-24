import { SvelteComponent } from 'svelte';

export interface VpnProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Vpn extends SvelteComponent<VpnProps> {}
