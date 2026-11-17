import { SvelteComponent } from 'svelte';

export interface ArrowDivergeFourLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowDivergeFourLarge extends SvelteComponent<ArrowDivergeFourLargeProps> {}
