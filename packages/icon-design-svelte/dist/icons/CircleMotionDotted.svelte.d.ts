import { SvelteComponent } from 'svelte';

export interface CircleMotionDottedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CircleMotionDotted extends SvelteComponent<CircleMotionDottedProps> {}
