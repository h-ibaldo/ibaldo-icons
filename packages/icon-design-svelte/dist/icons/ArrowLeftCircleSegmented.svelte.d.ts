import { SvelteComponent } from 'svelte';

export interface ArrowLeftCircleSegmentedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowLeftCircleSegmented extends SvelteComponent<ArrowLeftCircleSegmentedProps> {}
