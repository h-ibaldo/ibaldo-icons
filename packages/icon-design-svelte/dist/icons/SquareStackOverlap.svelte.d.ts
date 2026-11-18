import { SvelteComponent } from 'svelte';

export interface SquareStackOverlapProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SquareStackOverlap extends SvelteComponent<SquareStackOverlapProps> {}
