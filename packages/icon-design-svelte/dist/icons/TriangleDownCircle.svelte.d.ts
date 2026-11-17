import { SvelteComponent } from 'svelte';

export interface TriangleDownCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TriangleDownCircle extends SvelteComponent<TriangleDownCircleProps> {}
