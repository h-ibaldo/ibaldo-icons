import { SvelteComponent } from 'svelte';

export interface ArrowDownCircleSegmentedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowDownCircleSegmented extends SvelteComponent<ArrowDownCircleSegmentedProps> {}
