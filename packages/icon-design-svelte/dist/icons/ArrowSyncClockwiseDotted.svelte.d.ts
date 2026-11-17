import { SvelteComponent } from 'svelte';

export interface ArrowSyncClockwiseDottedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowSyncClockwiseDotted extends SvelteComponent<ArrowSyncClockwiseDottedProps> {}
