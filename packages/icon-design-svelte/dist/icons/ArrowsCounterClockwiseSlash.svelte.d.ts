import { SvelteComponent } from 'svelte';

export interface ArrowsCounterClockwiseSlashProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowsCounterClockwiseSlash extends SvelteComponent<ArrowsCounterClockwiseSlashProps> {}
