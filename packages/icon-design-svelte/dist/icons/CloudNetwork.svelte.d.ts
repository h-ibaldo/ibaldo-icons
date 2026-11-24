import { SvelteComponent } from 'svelte';

export interface CloudNetworkProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudNetwork extends SvelteComponent<CloudNetworkProps> {}
