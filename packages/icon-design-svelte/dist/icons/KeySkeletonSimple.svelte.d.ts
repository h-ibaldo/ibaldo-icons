import { SvelteComponent } from 'svelte';

export interface KeySkeletonSimpleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class KeySkeletonSimple extends SvelteComponent<KeySkeletonSimpleProps> {}
