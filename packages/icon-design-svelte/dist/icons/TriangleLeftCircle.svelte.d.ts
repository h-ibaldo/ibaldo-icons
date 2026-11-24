import { SvelteComponent } from 'svelte';

export interface TriangleLeftCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TriangleLeftCircle extends SvelteComponent<TriangleLeftCircleProps> {}
