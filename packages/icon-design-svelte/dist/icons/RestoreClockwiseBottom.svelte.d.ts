import { SvelteComponent } from 'svelte';

export interface RestoreClockwiseBottomProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class RestoreClockwiseBottom extends SvelteComponent<RestoreClockwiseBottomProps> {}
