import { SvelteComponent } from 'svelte';

export interface CloudNetworkNodeTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudNetworkNodeTall extends SvelteComponent<CloudNetworkNodeTallProps> {}
