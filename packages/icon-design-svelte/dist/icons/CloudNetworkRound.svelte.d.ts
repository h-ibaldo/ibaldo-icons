import { SvelteComponent } from 'svelte';

export interface CloudNetworkRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudNetworkRound extends SvelteComponent<CloudNetworkRoundProps> {}
