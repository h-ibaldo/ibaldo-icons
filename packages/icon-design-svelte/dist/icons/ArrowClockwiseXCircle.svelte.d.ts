import { SvelteComponent } from 'svelte';

export interface ArrowClockwiseXCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowClockwiseXCircle extends SvelteComponent<ArrowClockwiseXCircleProps> {}
