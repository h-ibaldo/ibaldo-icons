import { SvelteComponent } from 'svelte';

export interface ArrowDownRightCircleSegmentedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowDownRightCircleSegmented extends SvelteComponent<ArrowDownRightCircleSegmentedProps> {}
