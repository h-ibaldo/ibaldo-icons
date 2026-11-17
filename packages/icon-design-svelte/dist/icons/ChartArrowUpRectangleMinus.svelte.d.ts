import { SvelteComponent } from 'svelte';

export interface ChartArrowUpRectangleMinusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartArrowUpRectangleMinus extends SvelteComponent<ChartArrowUpRectangleMinusProps> {}
