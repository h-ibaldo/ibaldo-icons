import { SvelteComponent } from 'svelte';

export interface WindowKeySkeletonProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowKeySkeleton extends SvelteComponent<WindowKeySkeletonProps> {}
