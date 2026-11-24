import { SvelteComponent } from 'svelte';

export interface ArrowUpRightCircleSegmentedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowUpRightCircleSegmented extends SvelteComponent<ArrowUpRightCircleSegmentedProps> {}
