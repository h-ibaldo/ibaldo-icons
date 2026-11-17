import { SvelteComponent } from 'svelte';

export interface KeySkeletonRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class KeySkeletonRight extends SvelteComponent<KeySkeletonRightProps> {}
