import { SvelteComponent } from 'svelte';

export interface CircleOverlapProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CircleOverlap extends SvelteComponent<CircleOverlapProps> {}
