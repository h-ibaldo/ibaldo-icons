import { SvelteComponent } from 'svelte';

export interface CloudReceiveProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudReceive extends SvelteComponent<CloudReceiveProps> {}
