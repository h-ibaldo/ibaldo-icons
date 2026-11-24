import { SvelteComponent } from 'svelte';

export interface ArrowSyncClockwiseRotatedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowSyncClockwiseRotated extends SvelteComponent<ArrowSyncClockwiseRotatedProps> {}
