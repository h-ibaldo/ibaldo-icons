import { SvelteComponent } from 'svelte';

export interface ArrowCounterclockwiseFiveProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowCounterclockwiseFive extends SvelteComponent<ArrowCounterclockwiseFiveProps> {}
