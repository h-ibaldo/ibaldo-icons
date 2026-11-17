import { SvelteComponent } from 'svelte';

export interface CloudNetworkSecondProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudNetworkSecond extends SvelteComponent<CloudNetworkSecondProps> {}
