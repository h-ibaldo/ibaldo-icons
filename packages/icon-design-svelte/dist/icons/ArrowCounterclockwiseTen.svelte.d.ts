import { SvelteComponent } from 'svelte';

export interface ArrowCounterclockwiseTenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowCounterclockwiseTen extends SvelteComponent<ArrowCounterclockwiseTenProps> {}
