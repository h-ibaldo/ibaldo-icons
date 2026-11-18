import { SvelteComponent } from 'svelte';

export interface ArrowCounterclockwiseThirtyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowCounterclockwiseThirty extends SvelteComponent<ArrowCounterclockwiseThirtyProps> {}
