import { SvelteComponent } from 'svelte';

export interface ArrowClockwiseTenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowClockwiseTen extends SvelteComponent<ArrowClockwiseTenProps> {}
