import { SvelteComponent } from 'svelte';

export interface CloudSquareTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudSquareTall extends SvelteComponent<CloudSquareTallProps> {}
