import { SvelteComponent } from 'svelte';

export interface CloudCheckCornerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudCheckCorner extends SvelteComponent<CloudCheckCornerProps> {}
