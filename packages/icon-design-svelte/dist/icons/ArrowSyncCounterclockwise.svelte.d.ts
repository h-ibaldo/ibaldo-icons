import { SvelteComponent } from 'svelte';

export interface ArrowSyncCounterclockwiseProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowSyncCounterclockwise extends SvelteComponent<ArrowSyncCounterclockwiseProps> {}
