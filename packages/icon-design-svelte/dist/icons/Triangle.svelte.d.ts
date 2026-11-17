import { SvelteComponent } from 'svelte';

export interface TriangleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Triangle extends SvelteComponent<TriangleProps> {}
