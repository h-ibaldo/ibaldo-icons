import { SvelteComponent } from 'svelte';

export interface RestoreCounterclockwiseBottomProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class RestoreCounterclockwiseBottom extends SvelteComponent<RestoreCounterclockwiseBottomProps> {}
