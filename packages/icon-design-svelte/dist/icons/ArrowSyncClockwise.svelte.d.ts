import { SvelteComponent } from 'svelte';

export interface ArrowSyncClockwiseProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowSyncClockwise extends SvelteComponent<ArrowSyncClockwiseProps> {}
