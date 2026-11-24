import { SvelteComponent } from 'svelte';

export interface CloudNetworkNodeRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudNetworkNodeRound extends SvelteComponent<CloudNetworkNodeRoundProps> {}
