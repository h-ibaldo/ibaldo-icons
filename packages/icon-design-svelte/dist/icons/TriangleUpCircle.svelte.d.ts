import { SvelteComponent } from 'svelte';

export interface TriangleUpCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TriangleUpCircle extends SvelteComponent<TriangleUpCircleProps> {}
