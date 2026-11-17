import { SvelteComponent } from 'svelte';

export interface ArrowsOutCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowsOutCircle extends SvelteComponent<ArrowsOutCircleProps> {}
