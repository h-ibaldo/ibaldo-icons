import { SvelteComponent } from 'svelte';

export interface ArrowSyncCounterclockwiseOffProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowSyncCounterclockwiseOff extends SvelteComponent<ArrowSyncCounterclockwiseOffProps> {}
