import { SvelteComponent } from 'svelte';

export interface CloudNetworkDotsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudNetworkDots extends SvelteComponent<CloudNetworkDotsProps> {}
