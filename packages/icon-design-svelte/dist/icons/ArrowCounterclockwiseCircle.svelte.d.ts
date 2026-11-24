import { SvelteComponent } from 'svelte';

export interface ArrowCounterclockwiseCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowCounterclockwiseCircle extends SvelteComponent<ArrowCounterclockwiseCircleProps> {}
