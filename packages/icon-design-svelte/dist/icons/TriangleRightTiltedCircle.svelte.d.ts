import { SvelteComponent } from 'svelte';

export interface TriangleRightTiltedCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TriangleRightTiltedCircle extends SvelteComponent<TriangleRightTiltedCircleProps> {}
