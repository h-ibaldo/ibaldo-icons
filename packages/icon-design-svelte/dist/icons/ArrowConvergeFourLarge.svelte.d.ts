import { SvelteComponent } from 'svelte';

export interface ArrowConvergeFourLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowConvergeFourLarge extends SvelteComponent<ArrowConvergeFourLargeProps> {}
