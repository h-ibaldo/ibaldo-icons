import { SvelteComponent } from 'svelte';

export interface CloudNetworkThirdProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudNetworkThird extends SvelteComponent<CloudNetworkThirdProps> {}
