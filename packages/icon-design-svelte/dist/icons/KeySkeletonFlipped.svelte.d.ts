import { SvelteComponent } from 'svelte';

export interface KeySkeletonFlippedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class KeySkeletonFlipped extends SvelteComponent<KeySkeletonFlippedProps> {}
