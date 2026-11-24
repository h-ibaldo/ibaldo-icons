import { SvelteComponent } from 'svelte';

export interface ArrowClockwiseProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowClockwise extends SvelteComponent<ArrowClockwiseProps> {}
