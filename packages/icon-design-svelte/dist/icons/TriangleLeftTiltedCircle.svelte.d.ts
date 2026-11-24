import { SvelteComponent } from 'svelte';

export interface TriangleLeftTiltedCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TriangleLeftTiltedCircle extends SvelteComponent<TriangleLeftTiltedCircleProps> {}
