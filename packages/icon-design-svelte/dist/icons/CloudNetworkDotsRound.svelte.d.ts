import { SvelteComponent } from 'svelte';

export interface CloudNetworkDotsRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudNetworkDotsRound extends SvelteComponent<CloudNetworkDotsRoundProps> {}
