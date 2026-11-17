import { SvelteComponent } from 'svelte';

export interface CircleConcentricLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CircleConcentricLarge extends SvelteComponent<CircleConcentricLargeProps> {}
