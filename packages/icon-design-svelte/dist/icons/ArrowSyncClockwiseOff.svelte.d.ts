import { SvelteComponent } from 'svelte';

export interface ArrowSyncClockwiseOffProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowSyncClockwiseOff extends SvelteComponent<ArrowSyncClockwiseOffProps> {}
