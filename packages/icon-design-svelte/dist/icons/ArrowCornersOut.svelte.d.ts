import { SvelteComponent } from 'svelte';

export interface ArrowCornersOutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowCornersOut extends SvelteComponent<ArrowCornersOutProps> {}
