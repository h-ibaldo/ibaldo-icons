import { SvelteComponent } from 'svelte';

export interface ArrowUpCircleSegmentedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowUpCircleSegmented extends SvelteComponent<ArrowUpCircleSegmentedProps> {}
