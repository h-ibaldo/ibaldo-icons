import { SvelteComponent } from 'svelte';

export interface ChartArrowUpRectangleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartArrowUpRectangle extends SvelteComponent<ChartArrowUpRectangleProps> {}
