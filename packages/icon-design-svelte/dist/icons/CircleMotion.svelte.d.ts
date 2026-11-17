import { SvelteComponent } from 'svelte';

export interface CircleMotionProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CircleMotion extends SvelteComponent<CircleMotionProps> {}
