import { SvelteComponent } from 'svelte';

export interface TriangleOffProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TriangleOff extends SvelteComponent<TriangleOffProps> {}
