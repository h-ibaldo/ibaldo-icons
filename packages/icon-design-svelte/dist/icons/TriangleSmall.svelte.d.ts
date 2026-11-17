import { SvelteComponent } from 'svelte';

export interface TriangleSmallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TriangleSmall extends SvelteComponent<TriangleSmallProps> {}
