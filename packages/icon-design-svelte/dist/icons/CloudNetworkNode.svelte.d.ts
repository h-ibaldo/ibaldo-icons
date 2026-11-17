import { SvelteComponent } from 'svelte';

export interface CloudNetworkNodeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudNetworkNode extends SvelteComponent<CloudNetworkNodeProps> {}
