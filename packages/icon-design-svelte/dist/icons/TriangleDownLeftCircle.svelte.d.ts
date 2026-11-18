import { SvelteComponent } from 'svelte';

export interface TriangleDownLeftCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TriangleDownLeftCircle extends SvelteComponent<TriangleDownLeftCircleProps> {}
