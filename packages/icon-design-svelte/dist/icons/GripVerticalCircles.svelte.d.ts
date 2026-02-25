import { SvelteComponent } from 'svelte';

export interface GripVerticalCirclesProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GripVerticalCircles extends SvelteComponent<GripVerticalCirclesProps> {}
