import { SvelteComponent } from 'svelte';

export interface CloudSmileProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudSmile extends SvelteComponent<CloudSmileProps> {}
