import { SvelteComponent } from 'svelte';

export interface SquaresIntersectProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SquaresIntersect extends SvelteComponent<SquaresIntersectProps> {}
