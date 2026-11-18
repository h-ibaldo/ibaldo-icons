import { SvelteComponent } from 'svelte';

export interface SkipBackDoubleCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SkipBackDoubleCircle extends SvelteComponent<SkipBackDoubleCircleProps> {}
