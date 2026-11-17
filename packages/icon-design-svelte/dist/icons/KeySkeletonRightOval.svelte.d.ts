import { SvelteComponent } from 'svelte';

export interface KeySkeletonRightOvalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class KeySkeletonRightOval extends SvelteComponent<KeySkeletonRightOvalProps> {}
