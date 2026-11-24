import { SvelteComponent } from 'svelte';

export interface CloudSadProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudSad extends SvelteComponent<CloudSadProps> {}
