import { SvelteComponent } from 'svelte';

export interface KeySkeletonProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class KeySkeleton extends SvelteComponent<KeySkeletonProps> {}
