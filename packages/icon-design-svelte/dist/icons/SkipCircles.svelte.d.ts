import { SvelteComponent } from 'svelte';

export interface SkipCirclesProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SkipCircles extends SvelteComponent<SkipCirclesProps> {}
