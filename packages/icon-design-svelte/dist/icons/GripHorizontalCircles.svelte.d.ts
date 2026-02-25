import { SvelteComponent } from 'svelte';

export interface GripHorizontalCirclesProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GripHorizontalCircles extends SvelteComponent<GripHorizontalCirclesProps> {}
