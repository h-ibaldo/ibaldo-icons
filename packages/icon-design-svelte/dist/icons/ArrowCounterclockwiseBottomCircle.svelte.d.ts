import { SvelteComponent } from 'svelte';

export interface ArrowCounterclockwiseBottomCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowCounterclockwiseBottomCircle extends SvelteComponent<ArrowCounterclockwiseBottomCircleProps> {}
