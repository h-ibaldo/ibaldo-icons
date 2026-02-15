import { SvelteComponent } from 'svelte';

export interface ChartArrowUpRectangleRedDotProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartArrowUpRectangleRedDot extends SvelteComponent<ChartArrowUpRectangleRedDotProps> {}
