import { SvelteComponent } from 'svelte';

export interface ArrowClockwiseXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowClockwiseX extends SvelteComponent<ArrowClockwiseXProps> {}
