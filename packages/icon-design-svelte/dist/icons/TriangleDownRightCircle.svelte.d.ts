import { SvelteComponent } from 'svelte';

export interface TriangleDownRightCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TriangleDownRightCircle extends SvelteComponent<TriangleDownRightCircleProps> {}
