import { SvelteComponent } from 'svelte';

export interface CloudXCornerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudXCorner extends SvelteComponent<CloudXCornerProps> {}
