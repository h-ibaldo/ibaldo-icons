import { SvelteComponent } from 'svelte';

export interface ArrowClockwiseThirtyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowClockwiseThirty extends SvelteComponent<ArrowClockwiseThirtyProps> {}
