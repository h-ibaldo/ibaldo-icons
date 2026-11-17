import { SvelteComponent } from 'svelte';

export interface ArrowCounterclockwiseOffProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowCounterclockwiseOff extends SvelteComponent<ArrowCounterclockwiseOffProps> {}
