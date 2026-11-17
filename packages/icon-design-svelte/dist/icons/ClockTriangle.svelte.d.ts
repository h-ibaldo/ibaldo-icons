import { SvelteComponent } from 'svelte';

export interface ClockTriangleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockTriangle extends SvelteComponent<ClockTriangleProps> {}
