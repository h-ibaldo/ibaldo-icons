import { SvelteComponent } from 'svelte';

export interface ArrowSyncClockwiseAngularProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowSyncClockwiseAngular extends SvelteComponent<ArrowSyncClockwiseAngularProps> {}
