import { SvelteComponent } from 'svelte';

export interface ArrowUpLeftCircleSegmentedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowUpLeftCircleSegmented extends SvelteComponent<ArrowUpLeftCircleSegmentedProps> {}
