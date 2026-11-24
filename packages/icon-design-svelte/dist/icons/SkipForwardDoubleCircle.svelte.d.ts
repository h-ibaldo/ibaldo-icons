import { SvelteComponent } from 'svelte';

export interface SkipForwardDoubleCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SkipForwardDoubleCircle extends SvelteComponent<SkipForwardDoubleCircleProps> {}
