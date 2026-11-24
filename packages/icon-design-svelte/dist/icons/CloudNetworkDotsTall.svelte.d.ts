import { SvelteComponent } from 'svelte';

export interface CloudNetworkDotsTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudNetworkDotsTall extends SvelteComponent<CloudNetworkDotsTallProps> {}
