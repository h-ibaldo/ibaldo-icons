import { SvelteComponent } from 'svelte';

export interface ArrowRightCircleSegmentedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowRightCircleSegmented extends SvelteComponent<ArrowRightCircleSegmentedProps> {}
