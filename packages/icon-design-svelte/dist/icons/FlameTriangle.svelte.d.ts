import { SvelteComponent } from 'svelte';

export interface FlameTriangleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FlameTriangle extends SvelteComponent<FlameTriangleProps> {}
