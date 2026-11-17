import { SvelteComponent } from 'svelte';

export interface FlameTriangleDropProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FlameTriangleDrop extends SvelteComponent<FlameTriangleDropProps> {}
